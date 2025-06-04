#
import os,sqlite3,zlib
#from PyQt5.QtCore import pyqtSignal,QThread
import modbbcode
import re

fileblock="none"

CAT=[(1,'Обсуждения, встречи, общение'), (2,'Кино, Видео и ТВ'),(3,'Приватные форумы'), (4,'Новости'),
     (8,'Музыка'), (9,'Программы и Дизайн'), (10,'Обучающее видео'), (11,'Разное'),
     (18,'Сериалы'), (19,'Игры'), (20,'Документалистика и юмор'), (22,'Рок-музыка'),
     (23,'Электронная музыка'), (24,'Авто и мото'), (25,'Книги и журналы'),
     (26,'Apple'), (28,'Спорт'), (29,'Мобильные устройства'),
     (31,'Джазовая и Блюзовая музыка'), (33,'Аудиокниги'), (34,'Обучение иностранным языкам'),
     (35,'Популярная музыка'), (36,'ОБХОД БЛОКИРОВОК'),(37,'Hi-Res форматы, оцифровки'),
     (38,'Товары, услуги, игры и развлечения'),(39,'Музыкальное видео')]

html_head="""<!DOCTYPE HTML>
<html land="ru"><head>
<meta charset="utf-8">
<meta http-equiv="content-type" content="text/html">
<meta name="author" content="y3401">
<meta name="description" content="Локальная поисковая система InfoTor">
<title></title>
<link rel="stylesheet" type="text/css" href="../files/1css.css" />
<link rel="stylesheet" type="text/css" href="../files/2css.css" />
</head><body>
<script>
window.BB = {
	cur_domain: location.hostname.replace(/.*?(([a-z0-9-]+\.){1,2}[a-z0-9-]+)$/, '$1'),
    form_token: '7d362d0e44ae5e9ca61c3b8f72ebaa12',
	opt_js: {"only_new":0,"h_flag":0,"h_av":0,"h_rnk_i":0,"h_post_i":0,"h_smile":0,"h_sig":0,"sp_op":0,"tr_tm":0,"h_cat":"","h_tsp":0,"h_ta":66},
	IS_GUEST: !!'',
	IMG_URL: 'https://static.rutracker.cc/templates/v1/images',
	SMILES_URL: 'https://static.rutracker.cc/smiles',
	};
</script>
<script //src="../files/1js.js"></script>
<script //src="../files/2js.js"></script>
<div class="layer6">
"""

html_head_rutor="""<!DOCTYPE HTML>
<html land="ru"><head>
<meta charset="utf-8">
<meta http-equiv="content-type" content="text/html">
<title></title>
<link rel="stylesheet" type="text/css" href="../files/css_rutor.css" />
<script //src="../files/jquery.min.js"></script>
<script //src="../files/functions.js"></script>
</head><body>
<div class="layer6"  style="height: 122px;border-bottom: 6px solid red;">
<div id="logo"><img src="../files/logo_rutor.jpg" alt="rutor.logo" style="box-shadow:none;"></div></div>
"""

html_head_kinozal="""<!DOCTYPE html>
<html lang="ru"><head>
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Кинозал.ТВ</title>
<link rel="stylesheet" href="../files/1css.css" type="text/css">
<link rel="stylesheet" href="../files/2css.css" type="text/css">
<link rel="stylesheet" href="../files/0_kinozal.tv.css" type="text/css">
</head>
<body>
<div class="layer6" style="background: #f1d29c; height:45px;"> 
"""

html_head_nnm="""<!DOCTYPE html>
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="theme-color" content="#ffffff">
<title>nnmclub.to</title>
<link rel="stylesheet" href="../files/1css.css" type="text/css">
<link rel="stylesheet" href="../files/2css.css" type="text/css">
<link rel="stylesheet" href="../files/nnmclub.css" type="text/css">
</head><body>
<script>
window.BB = {
	cur_domain: location.hostname.replace(/.*?(([a-z0-9-]+\.){1,2}[a-z0-9-]+)$/, '$1'),
    form_token: '7d362d0e44ae5e9ca61c3b8f72ebaa12',
	opt_js: {"only_new":0,"h_flag":0,"h_av":0,"h_rnk_i":0,"h_post_i":0,"h_smile":0,"h_sig":0,"sp_op":0,"tr_tm":0,"h_cat":"","h_tsp":0,"h_ta":66},
	IS_GUEST: !!'',
	IMG_URL: 'https://static.rutracker.cc/templates/v1/images',
	SMILES_URL: 'https://static.rutracker.cc/smiles'
	};
BB.initSpoilers;
</script>
<script src="../files/1js.js"></script>
<script src="../files/2js.js"></script>

<table class="header" width="100%" cellspacing="1" cellpadding="0" border="0">
<tbody><tr><td height="75px"><a href="https://nnmclub.to/">
<img src="../files/logo-spring-2021-4.png" alt="Классический форум-трекер" title="Классический форум-трекер" border="0"></a>
</td></tr></tbody></table>
<table width="100%" cellspacing="2" cellpadding="2" border="0">
<tbody><tr><td valign="bottom" align="left">
"""

html_head_book="""<!DOCTYPE html>
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="theme-color" content="#ffffff">
<title>BookTracker.org</title>
<link rel="stylesheet" href="../files/1css.css" type="text/css">
<link rel="stylesheet" href="../files/2css.css" type="text/css">
<link rel="stylesheet" href="../files/book.css" type="text/css">
</head>
<body>
<script>
window.BB = {
	cur_domain: location.hostname.replace(/.*?(([a-z0-9-]+\.){1,2}[a-z0-9-]+)$/, '$1'),
    form_token: '7d362d0e44ae5e9ca61c3b8f72ebaa12',
	opt_js: {"only_new":0,"h_flag":0,"h_av":0,"h_rnk_i":0,"h_post_i":0,"h_smile":0,"h_sig":0,"sp_op":0,"tr_tm":0,"h_cat":"","h_tsp":0,"h_ta":66},
	IS_GUEST: !!'',
	IMG_URL: 'https://static.rutracker.cc/templates/v1/images',
	SMILES_URL: 'https://static.rutracker.cc/smiles'
	};
BB.initSpoilers;
</script>
<script src="../files/1js.js"></script>
<script src="../files/2js.js"></script>

<div id="body_container"><div id="page_container">
<div id="page_header">
<div id="logo">
<table width="100%">
  <tbody><tr>
    <td>	<img src="../files/logo-bt.png" border="0" alt="Главная" vspace="1"></td>
    <td>    </td>
  </tr></tbody></table></div>
<div class="topmenu">
   <table width="100%" cellpadding="0" cellspacing="0" height="20px">
   <tbody><tr><td class="tCenter pad_2"></td></tr>
   </tbody></table></div></div>
<div id="page_content">
<table cellspacing="0" cellpadding="0" border="0" style="width: 100%;"><tbody><tr>
  <td id="main_content"><div id="main_content_wrap"></div>
"""

# Переопределение функции преобразования к нижнему регистру
def sqlite_lower(value_):
    return value_.lower()
  
# Переопределение функции преобразования к верхнему геристру
def sqlite_upper(value_):
     return value_.upper()

# Переопределение правила сравнения строк
def ignore_case_collation(value1_, value2_):
    if value1_.lower() == value2_.lower():
        return 0
    elif value1_.lower() < value2_.lower():
        return -1
    else:
        return 1 
    
def calc(bsize=0):
    it=0
    razmer=['б','Кб','Мб','Гб','Тб']
    while bsize>1024:
        bsize/=1024
        it+=1
    if it>0:
        p=str(bsize).split(".")
        return ('{} '+razmer[it]).format(round(bsize,2))
    else:
        return ('{} '+razmer[0]).format(int(bsize))

def sepp(bsize=0):
    s = str(bsize)
    return s[-12:-9] + ' ' + s[-9:-6] + ' ' + s[-6:-3] + ' ' +s[-3:]

def create_db(): # Создание доп. БД для хранения описаний раздач
    global DB
    if not os.path.exists("DB"):
        os.mkdir("DB")

    DB=sqlite3.connect('DB/main.db3')
    cur=DB.cursor()
    cur.executescript("""
    CREATE TABLE IF NOT EXISTS "category"
    ("code_category" smallint NOT NULL PRIMARY KEY,
    "name_category" varchar(50) NOT NULL,
    "load_category" bool NOT NULL);

    CREATE TABLE IF NOT EXISTS "forum"
    ("code_forum" smallint NOT NULL PRIMARY KEY,
    "name_forum" varchar(80) NOT NULL,
    "category_id" smallint NOT NULL REFERENCES "category" ("code_category"));

    CREATE INDEX IF NOT EXISTS "forum_category_id_48a15a32" ON "forum" ("category_id");

    CREATE TABLE IF NOT EXISTS "torrent"
    ("file_id" integer NOT NULL PRIMARY KEY,
    "title_up" varchar(255) NOT NULL,
    "full_info" blob NOT NULL,
    "cat_id" smallint NOT NULL REFERENCES "category" ("code_category"),
    "forum_id" smallint NOT NULL REFERENCES "forum" ("code_forum"),
    "author" varchar(20) NOT NULL);

    CREATE INDEX IF NOT EXISTS "torrent_forum_id_b67937c0" ON "torrent" ("forum_id");
    CREATE INDEX IF NOT EXISTS "torrent_category_id_b67607c1" ON "torrent" ("cat_id");
    """)
    cur.executescript("""DELETE FROM category;""")
    cur.executemany('INSERT INTO category(code_category,name_category,load_category) VALUES (?, ?, 1);', CAT)
    dbc()
    cur.close()

def dbc():
    try:
        DB.commit()
    except:
        pass

def check_forum(kod_podr,name_podr,cat_id):
    c=DB.cursor()
    c.execute('SELECT * FROM forum WHERE code_forum=?', (kod_podr,))
    row=c.fetchall()
    if len(row) == 0:
        c.execute('INSERT INTO forum(code_forum,name_forum,category_id) VALUES (?,?,?)', (kod_podr,name_podr,cat_id))
    else:
        pass

def ins_tor(tid,cat_id,id_forum,title,full_info,author):
    try:
        DB.execute('INSERT INTO torrent(file_id,cat_id,forum_id,title_up,full_info,author) SELECT ?,?,?,?,?,?;', (tid,cat_id,id_forum,title,full_info,author))
    except:
        dbc()

def clean_db():
    DB=sqlite3.connect('DB/main.db3')
    cur=DB.cursor()
    cur.executescript("""DELETE FROM torrent;
        DELETE FROM forum;""")
    dbc()
    cur.close()
    DB.close()
    vacuum()

def vacuum():
    DB=sqlite3.connect('DB/main.db3')
    try:
        DB.execute('vacuum')
    except:
        pass
    DB.close()

def sel_content(id_tor,pth):
    DB1=sqlite3.connect(pth) #'DB/content.db3'
    cur=DB1.cursor()
    cur.execute('SELECT cont FROM contents WHERE tid=?;', (id_tor,))
    r=cur.fetchone()
    if r:
        S=zlib.decompress(r[0])
        result = modbbcode.bbcode2html(S.decode('utf-8'))
        lst=re.findall(r'href=\".*?\"',result)
        for item in lst:
            if item.find('.php')>-1:
                result=result.replace(item,'href="javascript:void(0);"')
            if item.find('tracker')>-1:
                result=result.replace(item,'href="javascript:void(0);"')
        lst=re.findall(r'href="\d+"',result)
        for item in lst:
            result=result.replace(item,'href="##"')
        
    else:
        result = False
    cur.close()
    DB1.close()
    return result

def sel_content_nnm(id_tor,pth):
    DB1=sqlite3.connect(pth) #'DB/nnmcontent.db3'
    cur=DB1.cursor()
    cur.execute('SELECT cont FROM contents WHERE tid=?;', (id_tor,))
    r=cur.fetchone()
    if r:
        S=zlib.decompress(r[0])
        result = S.decode('utf-8')
        result = result.replace('<span style="text-align: center; display: block;">','<span style="text-align: center; display: none;">',1)
        result = result.replace(r'<hr>','')
        result = result.replace('</div></div> <div class="hide spoiler-wrap">\t<div class="hide spoiler-body" title="Остаться в живых / LOST (сезон 3) (2006-2007)">','<div class="hide spoiler-wrap">\t<div class="hide spoiler-body" title="Остаться в живых / LOST (сезон 3) (2006-2007)">')
        result = result.replace('class="hide spoiler-wrap"','class="sp-wrap clearfix"')
        
        #lst1=re.findall(r'<a href="/\?q.*?</a>|<a href="https://nnm-club.name/?q.*?</a>|<a href="https://nnm-club.to/?q.*?</a>|<a href="http://nnm-club.name/?q.*?</a>|<a href="http://nnm-club.to/?q.*?</a>',result)
        lst1=re.findall(r'<a href.*?</a>',result)

        for item in lst1:
            if item.find('Все ')>0:
                result=result.replace(item,'')
            if item.find('image.php')==0:
                result=result.replace(item,'')
            if item.find('viewtopic')>0:
                result=result.replace(item,'')
        #lst1=re.findall(r'<a href="https://nnm-club.name/?q.*?</a>',result)
        #for item in lst1:
        #    result=result.replace(item,'')

       
        lst = re.findall('<div class="hide spoiler-body" title="(.*?)">',result)
        for item in lst:
            result= result.replace('''<div class="hide spoiler-body" title="'''+ item + r'''">''','''\n<div class="sp-head folded"><span>'''+ item + '''</span></div> <div class="sp-body clearfix inited" style="display: none;">\n''')

        result=result.replace('<div class="clear"/>',r'')
        result=result.replace('imlink"/>','imlink"/></a>')
        #result=result.replace(r'<\/a><br>',r'<br>')
        result=result.replace('http://www.kinopoisk','https://www.kinopoisk')
    else:
        result = False
    cur.close()
    DB1.close()
    return result

def sel_content_book(id_tor,pth): #########################################################################################################################
    DB1=sqlite3.connect(pth) #'DB/bookcontent.db3'
    cur=DB1.cursor()
    cur.execute('SELECT cont FROM contents WHERE tid=?;', (id_tor,))
    r=cur.fetchone()
    if r:
        S=zlib.decompress(r[0])
        result = S.decode('utf-8')
        result = result.replace('<span style="text-align: center; display: block;">','<span style="text-align: center; display: none;">',1)
        result = result.replace(r'<hr>','')
        lst1=re.findall(r'<a href.*?</a>',result)

        for item in lst1:
            if item.find('Все ')>0:
                result=result.replace(item,'')
            if item.find('image.php')==0:
                result=result.replace(item,'')
            if item.find('viewtopic')>0:
                result=result.replace(item,'')

        lst = re.findall('<div class="sp-body" title="(.*?)">',result)
        for item in lst:
            result= result.replace('''<div class="sp-body" title="'''+ item + r'''">''','''\n<div class="sp-head folded clickable"><span>'''+ item + '''</span></div> <div class="sp-body clearfix inited" style="display: none;">\n''')

        result=result.replace('<div class="clear"/>',r'')
        result=result.replace('imlink"/>','imlink"/></a>')
        result=result.replace('[img=right]','<div style="float:right; margin-bottom:20px;">')
        result=result.replace('[/img]','</div>')
        #result=result.replace(r'<\/a><br>',r'<br>')

    else:
        result = False
    cur.close()
    DB1.close()
    return result

def sel_content_kinozal(id_tor,pth):
    DB1=sqlite3.connect(pth) #'DB/kinozalcontent.db3'
    pict=""
    ss=""
    cur=DB1.cursor()
    cur.execute('SELECT cont,pic,screenshots FROM contents WHERE tid=?;', (id_tor,))
    r=cur.fetchone()
    if r:
        S=zlib.decompress(r[0])
        pict="https://" + r[1]
        if r[2]!='':
            ss=zlib.decompress(r[2]).decode('utf-8')

        result = S.decode('utf-8')
        result=result.replace('<p>','''<div class="bx1 justify"><img src="{0}" alt="" style="float: left;margin: 5px 15px 5px 0;box-shadow: 0px 0px 10px gray;">'''.format(pict,),1)
        result=result.replace('<p>','''<div class="bx1 justify">''')
        result=result.replace('</p>','</div>')
        result=result.replace('alt=""','alt=" "')
        result=result.replace('class="lnks_tobrs"','')
        #result=re.sub(r'<img src="\/pic.*?>',r'<img src="..\/files.*?>',result) 
        #result=re.sub(r'<img src="\/divic.*?>',r'<img src="..\/files.*?>',result) 
        result=result.replace('src="/pic/cat','src="../files')
        result=result.replace('src="/divic/cat','src="../files')
        result=result.replace('Скриншоты</h2><div class="bx1 justify','Скриншоты</h2><div class="bx1 center')

        lst=re.findall(r'(<div class=\"bx1 center\">)(.*?)(<\/div>)',result,re.M+re.S)
        if lst:
            result=result.replace(lst[0][1],ss)

    else:
        result = False
    cur.close()
    DB1.close()
    return result,ss

def exist_table(pth):
    DB=sqlite3.connect(pth)
    cur=DB.cursor()
    cur.execute("SELECT count(*) FROM sqlite_master WHERE name='files';")
    r=cur.fetchone()
    cur.close()
    DB.close()
    if r[0]==1:
        return "block"
    else:
        return "none"

def exist_files(pth):

    if os.path.exists(pth.replace('content','files'))==True:
        return "block"
    else:
        return "none"


def sel_files(id_tor,pth):
    global fileblock
    fl=[]
    if exist_table(pth)=="block":
        DB1=sqlite3.connect(pth) #'DB/content.db3'
        cur=DB1.cursor()
        cur.execute('SELECT files FROM files WHERE tid=%s;' % id_tor)
        rr=cur.fetchone()
        if rr:
            list_files=zlib.decompress(rr[0])
            fl = list_files.decode('utf-8')
            try:
                fl= eval(fl)
            except:
                fl=[("","Ошибка загрузки",0,1)]
        cur.close()
        DB1.close()
        fileblock="block"
    elif exist_files(pth)=="block":
        DB1=sqlite3.connect(pth.replace('content','files'))
        cur=DB1.cursor()
        cur.execute('SELECT files FROM files WHERE tid=%s;' % id_tor)
        rr=cur.fetchone()
        if rr:
            list_files=zlib.decompress(rr[0])
            fl = list_files.decode('utf-8')
            try:
                fl= eval(fl)
            except:
                fl=[("","Ошибка загрузки",0,1)]
        cur.close()
        DB1.close()
        fileblock="block"
    else:
        fileblock="none"
    
    return fl

def form_html(tid,pth,pth_,mod1):
    
    DB=sqlite3.connect(pth) # 'DB/content.db3'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()
    #if mod1==2:
    #    cur.execute('''SELECT name_category, name_forum, full_info
    #    FROM (torrent AS t inner join forum AS p on t.forum_id=p.code_forum) inner join category AS r on p.category_id=r.code_category
    #    WHERE file_id={0};'''.format(tid,))
    #elif mod1==1:
    cur.execute("""attach "{0}" as "tmp";""".format(os.getcwd() + "/DB/tmp.db3",))
    cur.execute('''SELECT tid,full_info,author,title_cat,title_forum,hash_info,title,size_b,date_reg FROM tmp WHERE tid={0};'''.format(tid,))
    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        if mod1==2:
            category = r[3] #3 0
            title=''
            S=zlib.decompress(r[1]).decode(encoding='utf-8') #1
            SS=S.split('‰')
            title = SS[1] #0 1
            forum_title = r[4] #4 1
            magnet = SS[2]  #5 2
            tor_size = SS[3] #7 3
            time_reg = SS[4]    #8 4
        elif mod1==1:
            category = r[3]
            title=r[6]
            forum_title = r[4]
            magnet = r[5]
            tor_size = r[7]
            time_reg = r[8]

    result=sel_content(tid,pth_)
    fl = sel_files(tid,pth_)

    result=result.replace(r"t-ru.org",r"rutracker.cc")

    if result:
        fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        fout.write(html_head)
        fout.write('<table class="subtable"><tr><td><p class="info">{0}<br />&rArr; {1}</p></td>'.format(category,forum_title))
        fout.write('<td style="width: 18%; vertical-align:middle"><p class="info" title="{0} байт">Размер: <b>{1}</b></p></td>'.format(sepp(tor_size),calc(int(tor_size))))
        fout.write('<td style="width: 10%; vertical-align:middle" align="right"><div class="folder" style="display:{};"><div class="files"><h2 style="margin-bottom:3px">Список файлов:</h2>'.format(fileblock))
        fout.write('''<table class="subtable">''')
        if len(fl)>0:
            offset=0.5
            nfile=str(fl[0][1]).replace('.','.&shy;')
            if int(fl[0][2])==0:
                fout.write('''<tr><td colspan=2 style="background-color:#bad5cc; padding-left: {0}em"><img class="td-folder" src="../files/opened-folder.png"><h4 style="display:inline">{1}</h4></td></tr>'''.format(offset,nfile))
                cat="f"
            else:
                fout.write('''<tr><td style="padding-left: {}em"><img class="td-file" src="../files/file.png"><span style="display:flex;">{}</span></td><td align="right" style="padding-right: 1em;width: 7em;" title="{} байт">{}</td></tr>'''.format(offset+0.5,nfile,sepp(fl[0][2]),calc(int(fl[0][2]))))
                cat="d"
                offset +=0.5
            for item in fl[1:]:
                nfile=str(item[1]).replace('.','.&shy;')
                if int(item[2])==0:
                    if cat!="d": offset +=1
                    if cat=="f": offset -=1
                    fout.write('''<tr><td colspan=2 style="background-color:#d1e6df; padding-left: {}em"><img class="td-folder" src="../files/opened-folder.png"><h4 style="display:inline">{}</h4></td></tr>'''.format(offset+0.5,nfile))
                    cat="d"
                else:
                    fout.write('''<tr><td style="padding-left: {}em"><img class="td-file" src="../files/file.png"><span style="display:flex;">{}</span></td><td align="right" style="padding-right: 1em; width: 7em;" title="{} байт">{}</td></tr>'''.format(offset+1,nfile,sepp(item[2]),calc(int(item[2]))))
                    cat="f"
        fout.write('</table><br></div></div>')
        fout.write('<td style="width: 15%; vertical-align:middle" align="right"><p class="info"><b>{0}</b> {1}</p></td>'.format(time_reg[:10],time_reg[11:]))
        fout.write('<td style="width: 7%;"><a href="magnet:?xt=urn:btih:{0}"><img src="../files/download40.png" align="right" alt="Скачать" title="Скачать по magnet-ссылке"></a></td></tr></table></div>'.format(magnet,))
        #fout.write('<div class="layer3" style="height: 91vh"><div class="layer5"><h2>{0}</h2></div>'.format(title,))
        fout.write('<div class="post_body" id="" data-ext_link_data="{}">')
        fout.write('<h1 class="maintitle"><a id="topic-title">{0}</a></h1><hr>'.format(title,))
        fout.write(result)
        fout.write('''<br /><br /></div></div></div>
        </body></html>''')

  
        fout.close()
        return True
    else:
        return False

def form_html_nnm(tid,pth,pth_):
    
    DB=sqlite3.connect(pth) # 'DB/nnmcontent.db3'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()

    cur.execute('''SELECT r.code_title as razd, p.code_title as podr, full_info
    FROM (torrent AS t inner join forum AS p on t.code_id=p.numcode) inner join forum AS r on p.category=r.numcode WHERE file_id={0};'''.format(tid,))

    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        category = r[0]
        title=''
        S=zlib.decompress(r[2]).decode(encoding='utf-8')
        SS=S.split('‰')
        title = SS[3]
        forum_title = r[1]
        magnet = SS[2]
        tor_size = SS[4]
        time_reg = SS[5]
        category=category.replace('Трекер: ','')


    result=sel_content_nnm(tid,pth_)
    result=result.replace("nnmclub.ch","nnmclub.to")
    #result=re.sub(r'https://nnmclub\.to/forum/image\.php\?link=','',result)
    '<img class="postImg postImgAligned img-right" src="https://nnmclub.to/forum/image.php?link=https://a.radikal.ru/a19/1901/e5/608c7fd39483.jpg">'
    if result:
        fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        fout.write(html_head_nnm)
        fout.write('<a href="magnet:?xt=urn:btih:{0}">'.format(magnet,))
        fout.write('''<img src="../files/magnet48.png" alt="Скачать" title="Скачать по magnet-ссылке" align="right"></a>
<h1 style="display:inline">{0}</h1></td></tr></tbody></table>'''.format(title,))
        fout.write('''<table width="100%" cellspacing="2" cellpadding="2" border="0"><tbody><tr>
	<td><span class="nav">&nbsp;&nbsp;&nbsp;Торрент-трекер NNM-Club -&gt; {0} -&gt; {1}</span></td>'''.format(category,forum_title))
        fout.write('''<td width="50%" style="text-align:right"><span title="{0} байт">Размер: <b>{1}</b></span>'''.format(sepp(tor_size),calc(int(tor_size))))
        fout.write('''<span style="margin-left: 10px;margin-right: 10px;">Зарегистрирован: <b>{0}</b> {1}</span></td></tr></tbody></table>
<div style="background-color:#8AB0D6; width:100%;height:20px; margin-bottom:5px;"> </div>'''.format(time_reg[:10],time_reg[11:]))
        fout.write('<div class="post_body" id="" data-ext_link_data="{}">')
        fout.write(result)
        fout.write('</div></div><br><br></body></html>')
        fout.close()
        return True
    else:
        return False

def form_html_book(tid,pth,pth_):
    
    DB=sqlite3.connect(pth) # 'DB/bookcontent.db3'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()

    cur.execute('''SELECT r.code_title as razd, p.code_title as podr, full_info
    FROM (torrent AS t inner join forum AS p on t.code_id=p.numcode) inner join forum AS r on p.category=r.numcode WHERE file_id={0};'''.format(tid,))

    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        category = r[0]
        title=''
        S=zlib.decompress(r[2]).decode(encoding='utf-8')
        SS=S.split('‰')
        title = SS[3]
        forum_title = r[1]
        magnet = SS[2]
        tor_size = SS[4]
        time_reg = SS[5]
        category=category.replace('Трекер: ','')


    result=sel_content_book(tid,pth_)

    if result:
        fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        fout.write(html_head_book)
        fout.write('<a href="magnet:?xt=urn:btih:{0}">'.format(magnet,))
        fout.write('''<img src="../files/magnet48.png" alt="Скачать" title="Скачать по magnet-ссылке" align="right"></a>
<h1 class="maintitle" style="display:inline"><a href="#">{0}</a></h1></td></tr></tbody></table>'''.format(title,))
        fout.write('''<table width="100%" cellspacing="2" cellpadding="2" border="0"><tbody><tr>
	<td class="nav w60" style="padding-left: 8px;"><span>BookTracker.org <em>»</em> {0} <em>»</em> {1}</span></td>'''.format(category,forum_title))
        fout.write('''<td style="text-align:right"><span title="{0} байт">Размер: <b>{1}</b></span>'''.format(sepp(tor_size),calc(int(tor_size))))
        fout.write('''<span style="margin-left: 10px;margin-right: 10px;">Зарегистрирован: <b>{0}</b> {1}</span></td></tr>
                   </tbody></table>'''.format(time_reg[:10],time_reg[11:]))
        fout.write('''<table class="w100 border bw_TRL" cellpadding="0" cellspacing="0">
<tbody><tr>	<td class="cat pad_2">
	<table cellspacing="0" cellpadding="0" class="borderless w100">
	<tbody><tr>		
		<td class="small bold nowrap tRight" width="100%">&nbsp;</td>
		<td class="nowrap" style="padding: 0px 4px 2px 4px;"></td>
	</tr></tbody></table>
	</td></tr></tbody></table>
<table class="topic" id="topic_main" cellpadding="0" cellspacing="0"><tbody><tr>
	<th class="thHead td2">Сообщение</th>
</tr>
</tbody><tbody class="row1"><tr>
		<td class="message td2" rowspan="2"><div class="post_wrap"><div class="post_body">''')
        fout.write(result)
        fout.write('</div></div></td></tr></tbody></table></div></div></div></body></html>')
        fout.close()
        return True
    else:
        return False
    

def form_html_rutor(tid,pth,pth_):
    
    DB=sqlite3.connect(pth) # 'DB/rutorcontent.db3'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()
    cur.execute('''SELECT r.rutitle as razd, r.title as podr, full_info
    FROM (torrent AS t inner join forum AS p on t.category=p.code_id) 
    inner join forum AS r on t.category=r.code_id
    WHERE file_id={0};'''.format(tid,))
    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        category = r[0]
        title=''
        S=zlib.decompress(r[2]).decode(encoding='utf-8')
        SS=S.split('‰')
        title = SS[2]
        forum_title = ' ' #r[2]
        magnet = SS[1]
        tor_size = SS[3]
        time_reg = SS[4]

    result=sel_content_nnm(tid,pth_)

    if result:
        fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        fout.write(html_head_rutor)
        fout.write('<table class="subtable"><tr><td><p class="info"><b>{0}</b></p></td>'.format(category,))
        fout.write('<td style="width: 30%; vertical-align:middle"><p class="info" title="{0} байт">Размер: <b>{1}</b></p></td>'.format(sepp(tor_size),calc(int(tor_size))))
        fout.write('<td style="width: 30%; vertical-align:middle" align="right"><p class="info"><b>{0}</b> {1}</p></td>'.format(time_reg[:10],time_reg[11:]))
        fout.write('<td style="width: 30px;"><a href="magnet:?xt=urn:btih:{0}"><img src="../files/down.png" align="right" alt="Скачать" title="Скачать по magnet-ссылке"></a></td></tr></table>'.format(magnet,))
        fout.write('<div id="content">')
        fout.write('<h1>{0}</h1><hr></div>'.format(title,))
        
        fout.write(result)
        fout.write('''<br /><br /></div></div>
        </body></html>''')
        fout.close()
        return True
    else:
        return False

def form_html_kino(tid,pth,pth_):
    ss=""
    DB=sqlite3.connect(pth) # 'DB/kinozal.db3'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()
    cur.execute('''SELECT r.code_title as razd,p.code_title as podr,hash_info,title,size_b,date_reg,status
    FROM (torrent AS t inner join forum AS p on t.code_id=p.numcode) 
    inner join forum AS r on p.up_code=r.numcode WHERE file_id={0};'''.format(tid,))
    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        category = r[0]
        title = r[3]
        forum_title = r[1]
        magnet = r[2]
        tor_size = r[4]
        time_reg = r[5]

    result,ss=sel_content_kinozal(tid,pth_)

    if result:
        fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        fout.write(html_head_kinozal)
        fout.write('<table class="subtable"><tr><td><p class="info" style="margin-left: 20px;">{0} - {1}</p></td>'.format(category,forum_title))
        fout.write('<td style="width: 22%; vertical-align:middle"><p class="info" title="{0} байт">Размер: <b>{1}</b></p></td>'.format(sepp(tor_size),calc(int(tor_size))))
        fout.write('<td style="width: 25%; vertical-align:middle" align="right"><p class="info"><b>{0}</b> {1}</p></td>'.format(time_reg[:10],time_reg[11:]))
        fout.write('<td style="width: 200px;"><a href="magnet:?xt=urn:btih:{0}"><img src="../files/dwn_torrent.gif" align="right" alt="Скачать" title="Скачать по magnet-ссылке" style="margin-top: 9px;"></a></td></tr></table></div>'.format(magnet,))
        
        fout.write('''<div id="header">
	    <table style="width:100%;padding:0;margin:0;border:0;">
		<tbody><tr><td style="width:43%;">
		<div class="logo_new"><a href="https://kinozal.tv/" title="Кинозал.ТВ">
		<img src="../files/logo3.gif" alt="Кинозал.ТВ"></a>
		</div></td><td style="width:57%;" align="center"></td></tr></tbody></table>
        <span class="zan_l"></span>
        <span class="zan_r"></span>
        </div>''')
        #fout.write('''<img src="{0}" alt="" style="float: left;margin: 33px 15px 20px 15px;box-shadow: 0px 0px 10px gray;">'''.format(pict,))
        fout.write(result)
        #fout.write(ss)
        fout.write('''<br /><br /></div></div></div>
        </body></html>''')
        fout.close()
        return True
    else:
        return False
    
def form_html_rarbg(tid,pth):
    ss=""
    DB=sqlite3.connect(pth) # 'DB/rarbg_db.sqlite'
    DB.create_collation("NOCASE", ignore_case_collation)
    DB.create_function("LOWER", 1, sqlite_lower)
    DB.create_function("UPPER", 1, sqlite_upper)
    cur=DB.cursor()
    cur.execute('''SELECT cat,hash,title,size,dt FROM items WHERE id={0};'''.format(tid,))
    r=cur.fetchone()
    cur.close()
    DB.close()
    if r:
        #category = r[0]
        title = r[2]
        forum_title = r[0]
        magnet = r[1]
        tor_size = r[3]
        time_reg = r[4]

    fout = open("tmp/{0}.html".format(tid,),"w",encoding='utf-8')            
        #fout.write(html_head_rarbg)
    fout.write('''<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
        <html xmlns="http://www.w3.org/1999/xhtml"><head><title>RARBG</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" media="all" href="../files/rarbg.css"></head>
        <body>
        <table width="90%" align="center"><tbody><tr><td width="10%"><a href="https://www2.rarbggo.to/" title="torrents Rarbg">
        <img src="../files/logorarbg.png" alt="torrents rarbg" style="margin: 15px 0 0 0;" border="0"></a>
        </td><td width="50%" align="center"></td><td width="40%" align="right"></td></tr></tbody></table>
        <table width="90%" border="0" align="center"><tbody><tr><td colspan="2">
        </td></tr><tr><td height="40px"></td></tr></tbody></table>''')
    fout.write('''<table style="margin: -8px auto 0;" width="90%" border="0" align="center">
        <tbody><tr><td width="100" valign="top" align="left"><br></td><td valign="top"><div class="content-rounded">
        <table class="tlista-rounded" style="height:480px;" width="100%" cellspacing="0" cellpadding="0" align="center"><tbody>''')
    fout.write('''<tr><td class="block" colspan="1" valign="top" align="center"><b><h1 class="black" style="overflow-wrap: anywhere;">{0}</h1></b></td></tr><tr><td width="100%" valign="top" align="justify"><div><table class="tlista" width="100%" cellspacing="1" cellpadding="0" border="0">'''.format(title))
    fout.write('''<tbody><tr><td class="header22" width="120" align="right">Torrent:</td><td class="tlista">
        <a href="magnet:?xt=urn:btih:{0}">{1} <img src="../files/magnet1.gif" border="0"></a></td></tr>'''.format(magnet,title))
    fout.write('''<tr><td class="header22" align="right">Category:</td><td class="tlista">{0}</td></tr>'''.format(forum_title))
    fout.write('''<tr><td class="header22" align="right">Size:</td><td class="tlista" title="{0} байт">{1}</td></tr>'''.format(sepp(tor_size),calc(int(tor_size))))
    fout.write('''<tr><td class="header22" valign="top" align="right">Added:</td><td class="tlista">{0}</td></tr> 
                   </tbody></table><br></div><br><br></td></tr></tbody></table></div></td></tr></tbody></table></body></html>'''.format(time_reg))
    fout.close()
    return True

    
if __name__ == '__main__':
    pass
    #create_db()
    #clean_db()
    #read_file("I:/rdb/in/Короткая база раздач.txt")