#
import os,io,re
import py7zr

def load_file(file,num):
    size_buff = 100000000 
    buff = b''
    buff1 = b''

    with open(file,"rb") as fn:
        buff= fn.read(size_buff)
           
        while len(buff)>0:
            
            line= fn.read(200)
            if not line:
                if buff.find(bytes(num,encoding="866")) >- 1:
                    z7z(buff,num)
                break
            
            if line.find(b'\x01\x00\x20\x00\x00\x00\x00\x00')>-1:
                bf = line.find(b'\x01\x00\x20\x00\x00\x00\x00\x00')
                bf = bf + 8
                buff1 += line[0:bf]
                poz=fn.tell() - 200 + bf
                buff = buff + buff1
                
                if buff.find(bytes(num,encoding="866")) >- 1:
                    
                    z7z(buff,num)
                    break
                else:
                    buff = b''
                    buff1 = b''
                    fn.seek(poz)
                    buff= fn.read(size_buff)
            else:
                buff1 += line
    fn.close()

def z7z(bufer,bnum,num):                 # записьь найденого в файл
    
    pstart = bufer.find(bnum) + len(bnum.decode(encoding="866")) 
    pend = bufer.find(b'\x01\x00\x20\x00\x00\x00\x00\x00', pstart) + 8
    rez = ''                
    s7 = bufer[pstart:pend]

    file = io.BytesIO(s7)
    try:
        with py7zr.SevenZipFile(file, 'r') as zip:
            for fname,bio in zip.read().items():
                rez = bio.read()
                rez = rez.decode('cp1251')
                rez = rez.replace('\r\n',chr(10))
                rez = rez.replace('flag"><img src="files/','flag"><img src="https://static.rutracker.cc/flags/')
                for fraza in re.findall(r"\<span style=color:brown\>(.*?)\</span\>",rez):
                    rez=rez.replace(fraza,'')
                lst=re.findall(r'href=\".*?\"',rez)
                for item in lst:
                    if item.find('.php')>-1:
                        rez=rez.replace(item,'')      # href="javascript:void(0);"
                lst=re.findall(r'href="\d+"',rez)
                for item in lst:
                    rez=rez.replace(item,'')    # href="##"
                lst = re.findall(r'files/(.*?.gif)\"',rez,re.M+re.I)
                for item in lst:
                    if item.find('icon')>-1:
                        rez=rez.replace("files/" + item,"http://static.rutracker.cc/smiles/{0}".format(item))
                    else:
                        rez=rez.replace("files/" + item,"https://static.rutracker.cc/ranks/{0}".format(item))
                lst = re.findall(r'files/(s_.*?.png)\"',rez,re.M+re.I)
                for item in lst:
                    rez=rez.replace("files/" + item,"http://static.rutracker.cc/ranks/{0}".format(item))
                lst = re.findall("t-ru.org",rez)
                for item in lst:
                    rez=rez.replace("t-ru.org","rutracker.cc")
    except:
        return False
    file1=open("files/header.html","r", encoding="utf-8")
    head = file1.read()
    file2=open("files/footer.html","r", encoding="cp1251")
    footer = file2.read()
    file1.close()
    file2.close()
    fout = open("tmp/{0}.html".format(num,),"w",encoding="utf-8")            
    fout.write(head)
    fout.write(rez)
    fout.write(footer)
    fout.close()
    return True


def devizion(file, num):            # деление файла на фрагменты и проверка на вхождение номера

    buff = b''
    buff1 = b''
    bnum = b'\xda' + bytes(num,encoding="866") + b'\xda'
    sz = os.path.getsize(file)
    if os.path.exists("tmp/tmp.html"):
        os.remove("tmp/tmp.html")

    with open(file,"rb") as fn:
        for i in range(50):
            pozi=i*sz//50
            fn.seek(pozi)
        
            buff= fn.read(1000000)
            if i==0:
                pstart=0 
            else:
                pstart = buff.find(b'\x01\x00\x20\x00\x00\x00\x00\x00') + 8
            pend = buff.find(b'\xda',pstart+1)
            rnum = buff[pstart:pend]
            rnum = rnum[1:].decode(encoding="866")
            if int(rnum) > int(num):
                if i != 0:
                    pozi = (i-1)*sz//50
                    break
                else:
                    pozi = 0
        #print(i,pozi)
        fn.seek(pozi)
        buff = fn.read(sz//45)
        while len(buff)>0:
            
            line= fn.read(200)
            if not line:
                
                if buff.find(bnum) >- 1:
                    bff=z7z(buff,bnum,num)
                    fn.close()
                    return True
                
            
            if line.find(b'\x01\x00\x20\x00\x00\x00\x00\x00')>-1:
                bf = line.find(b'\x01\x00\x20\x00\x00\x00\x00\x00')
                bf = bf + 8
                buff1 += line[0:bf]
                buff = buff + buff1
                
                if buff.find(bnum) >- 1:
                    
                    bff=z7z(buff,bnum,num)
                    fn.close()
                    return True

                else:
                    fn.close()
                    return False

            else:
                buff1 += line
        
        
        
if __name__ == '__main__':
    #devizion("I:/rdb/in/Полная база раздач.rdb", '6192138') # 6215054
    pass