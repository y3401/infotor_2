# -*- coding: utf-8 -*-
from PyQt5.QtCore import Qt,QUrl,QRect,QSize,QThread,pyqtSignal,pyqtSlot,QCoreApplication,QMetaObject
from PyQt5.QtGui import QCursor,QIcon,QFont,QColor,QGuiApplication,QResizeEvent,QKeySequence
from PyQt5.QtWidgets import QMainWindow,QFrame,QLabel,QAction,QMenu,QFileDialog,QMessageBox,QTreeWidgetItem,QDialog,QApplication,QWidget,QHBoxLayout,QPushButton,QLineEdit,QShortcut,QToolBar,QSpacerItem,QSizePolicy,QTreeWidget
from PyQt5.QtPrintSupport import QPrinter,QPrintDialog
from PyQt5 import QtWebEngineWidgets,QtNetwork
from PyQt5.QtWebEngineWidgets import QWebEnginePage, QWebEngineProfile, QWebEngineView

import os,re
import sys
import ui_mw as mw
import ui_dialog as dlg
import ui_settings as sets
import pickle
import sql3
import searchRDB as srdb
import rc

pickle.DEFAULT_PROTOCOL
sel_file = ''
myList=[]
myDict={}
param = {}
pth10=pth11=pth20=pth21=pth30=pth40=pth50=pth60=""
hideDel=0 #False
vers="v2.4"

try:
    from ctypes import windll  
    myappid = 'y3401.infotor-2.main.'+vers
    windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)
except ImportError:
    pass


status_tor={'P' : "обсуждение (не раздача)",
'G' : "проверено",
'Q' : "не проверено",
'R' : "проверяется",
'H' : "недооформлено",
'B' : "не оформлено",
'D' : "повтор",
'C' : "закрыто",
'I' : "закрыто правообладателем",
'T' : "временная",
'E' : "поглощено",
'M' : "премодерация",
'O' : "сомнительно",
'Gg' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - проверено",
'Qq' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - не проверено",
'Rr' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - проверяется",
'Hh' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - недооформлено",
'Bb' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - не оформлено",
'Dd' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - повтор",
'Cc' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - закрыто",
'Ii' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - закрыто правообладателем",
'Tt' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - временная",
'Ee' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - поглощено",
'Mm' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - премодерация",
'Oo' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - сомнительно",
'Xx' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - ещё не был зарегистрирован",
'Yy' : "торрент не зарегистрирован на трекере (разрегистрирован), последний статус - не регистрировался из-за дубля"}

create_tmp = """ drop table if exists "tmp";

            CREATE TABLE "tmp"
            ("tid" integer NOT NULL PRIMARY KEY,
            "cat_id" smallint NOT NULL,
            "title_cat" varchar(50),
            "forum_id" smallint NOT NULL,
            "title_forum" varchar(100),
            "full_info" blob,
            "author" varchar(20),
            "hash_info" varchar(40),
            "title" varchar(255) COLLATE NOCASE,
            "size_b" integer,
            "date_reg" varchar(20));"""

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

class VLine(QFrame):
    # a simple VLine, like the one you get from designer
    def __init__(self):
        super(VLine, self).__init__()
        self.setFrameShape(self.VLine|self.Sunken)

class MyWindow(QMainWindow,mw.Ui_MainWindow):
    def __init__(self, parent=None): 
        QMainWindow.__init__(self, parent) 
        self.setupUi(self) 
        self.setWindowTitle(u"Поисковая система Infotor-2 ({0})".format(vers))
        self.actionQuit.triggered.connect(self.closeEvent)
        self.actionUpdate.triggered.connect(open_file)
        
        self.actionSettings.triggered.connect(show_settings)
        self.bClean.clicked.connect(self.reset_)
        self.selRazdel.setCurrentIndex(0)
        self.selRazdel.activated.connect(self.selRazdel_change)
        self.bSearch.clicked.connect(self.poisk)
        self.treeWidget.itemClicked.connect(self.onItemClicked)
        self.keyWords.returnPressed.connect(self.onclick)
        self.treeWidget.resized.connect(self.save_param)
        self.treeWidget.header().sectionResized.connect(self.save_param)
        self.actionAbout.triggered.connect(self.about)
        self.actionFAQ.triggered.connect(self.faq)
        self.toolBack.clicked.connect(self.web_back)    #########
        self.toolForward.clicked.connect(self.web_forward)
        self.toolUp.clicked.connect(self.web_up)
        self.toolMinus.clicked.connect(self.web_minus)
        self.toolPlus.clicked.connect(self.web_plus)
        self.toolSave.clicked.connect(self.save_file)
        self.toolPrint.clicked.connect(self.print_page)
        self.toolHash.clicked.connect(self.magnet)
        self.toolWeb.clicked.connect(self.web_out_show)
        self.webBrowser.urlChanged.connect(self.changed_url)
        self.toolBookmark.toggle()
        self.toolBookmark.clicked.connect(self.set_bookmark)
        self.bList.clicked.connect(self.spisok)
        self.actionList.triggered.connect(self.spisok)
        self.webBrowser.page().linkHovered.connect(self.link_hovered)
        self.baza1.triggered.connect(self.selDB1)
        self.baza2.triggered.connect(self.selDB2)
        self.baza3.triggered.connect(self.selDB3)
        self.baza4.triggered.connect(self.selDB4)
        self.baza5.triggered.connect(self.selDB5)
        self.baza6.triggered.connect(self.selDB6)
        self.baza7.triggered.connect(self.selDB7)
        #self.treeWidget.header().sectionMoved.connect(self.HeaderDataChanged)
        
        self._search_panel = SearchPanel()
        self.search_toolbar = QToolBar()
        self.search_toolbar.setObjectName(u"search_toolbar")
        self.search_toolbar.addWidget(self._search_panel)
        self.addToolBar(Qt.BottomToolBarArea, self.search_toolbar) # NoToolBarArea
        self.search_toolbar.hide()
        self._search_panel.searched.connect(self.on_searched)
        self._search_panel.closed.connect(self.search_toolbar.hide)
        self.actionSearch.triggered.connect(self.search_toolbar.show)
        
        self.lbl_zf = QLabel("Масштаб 100 %")
        self.lbl_zf.setStyleSheet('border: 0; color:  gray;')
        self.lbl_zf.setFixedWidth(100)
        self.lbl_zf.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))
        self.lbl_zf.setToolTip(u"Масштаб")

        self.lbl_bd = QLabel(" ")
        self.lbl_bd.setStyleSheet('border: 0; color:  darkmagenta; font-weight: bold;')
        self.lbl_bd.setFixedWidth(120)
        self.lbl_bd.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))
        self.lbl_bd.setToolTip(u"Выбранная база данных")

        self.lbl0 = QLabel(" ")
        self.lbl0.setStyleSheet('border: 0; color:  darkblue;')
        self.lbl0.setFixedWidth(200)
        self.lbl0.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))
        self.lbl0.setToolTip(u"Всего записей")

        self.lbl_d = QLabel(" ")
        self.lbl_d.setStyleSheet('border: 0; color:  darkgreen;')
        self.lbl_d.setFixedWidth(70)
        self.lbl_d.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))
        self.lbl_d.setToolTip(u"На дату")

        self.lbl1 = QLabel(" ")
        self.lbl1.setStyleSheet('border: 0; color:  darkblue;')
        self.lbl1.setFixedWidth(70)
        self.lbl1.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))
        self.lbl1.setToolTip(u"ID раздачи")

        self.lbl2 = QLabel("©Y3401 - 2025")
        self.lbl2.setStyleSheet('border: 0; color:  red;')
        self.lbl2.setFixedWidth(100)
        self.lbl2.setAlignment(Qt.AlignmentFlag(Qt.AlignHCenter))

        self.statusbar.reformat()
        self.statusbar.setStyleSheet('border: 0; background-color: #FFF8DC;')
        self.statusbar.setStyleSheet("QStatusBar::item {border: none;}")
        self.statusbar.addPermanentWidget(VLine())    
        self.statusbar.addPermanentWidget(self.lbl_zf)
        self.statusbar.addPermanentWidget(VLine())     
        self.statusbar.addPermanentWidget(self.lbl_bd)
        self.statusbar.addPermanentWidget(VLine())     
        self.statusbar.addPermanentWidget(self.lbl0)
        self.statusbar.addPermanentWidget(VLine())     
        self.statusbar.addPermanentWidget(self.lbl_d)
        self.statusbar.addPermanentWidget(VLine())     
        self.statusbar.addPermanentWidget(self.lbl1)
        self.statusbar.addPermanentWidget(VLine())    
        self.statusbar.addPermanentWidget(self.lbl2)
        self.pathDB=""
        
        self.lbl_bd.setContextMenuPolicy(Qt.CustomContextMenu)
        self.lbl_bd.customContextMenuRequested.connect(self.showMenu)
        
        app.aboutToQuit.connect(self.closeEvent)
        #self.web_show(start_file(selectDB))
        self.lbl1.setText("-")
        g=self.webBrowser.statusTip()
        self._createContextMenu()
        self.printer = QPrinter(QPrinter.HighResolution)
        
        #QtNetwork.QNetworkCookie.hasSameIdentifier #.SameSite.Lax
        self.webBrowser.settings().setAttribute(QtWebEngineWidgets.QWebEngineSettings.PluginsEnabled,True)
        self.webBrowser.settings().setAttribute(QtWebEngineWidgets.QWebEngineSettings.JavascriptEnabled,True)
        self.webBrowser.settings().setAttribute(QtWebEngineWidgets.QWebEngineSettings.AllowRunningInsecureContent,True)
        self.webBrowser.settings().setAttribute(QtWebEngineWidgets.QWebEngineSettings.LocalContentCanAccessFileUrls,True)
        self.webBrowser.settings().setAttribute(QtWebEngineWidgets.QWebEngineSettings.LocalContentCanAccessRemoteUrls,True)

           
        if not self.settings.value("geometry") == None: 
            self.restoreGeometry(self.settings.value("geometry")) 
        if not self.settings.value("windowState") == None: 
            self.restoreState(self.settings.value("windowState"))
        self.show()

                
        if self.settings.contains("ZoomFactor"):                              # zoomFactor
            zf=round(float(self.settings.value("ZoomFactor")),1)
            self.webBrowser.setZoomFactor(zf)
        else:
            zf=1.0
            self.webBrowser.setZoomFactor(zf)
        self.set_zf(zf)

        if self.settings.contains("Size1"):                                   # treeWidget
            self.treeWidget.setGeometry(self.settings.value("Size1"))

        if self.settings.contains("DB"):                                   # treeWidget
            selectDB=self.settings.value("DB")
        else:
            selectDB=0

        
        self.treeWidget.header().moveSection(7,1)

    @pyqtSlot(str, QtWebEngineWidgets.QWebEnginePage.FindFlag)
    def on_searched(self, text, flag):
        def callback(found):
            if text and not found:
                self.statusBar().showMessage('Не найдено')
        self.webBrowser.page().findText(text, flag, callback)

        
    def _createContextMenu(self):
        self.lbl1.setContextMenuPolicy(Qt.CustomContextMenu)
        self.lbl1.customContextMenuRequested.connect(self.copyBuff)
        self.popMenu = QMenu(self)
        self.popMenu.addAction(QAction(u'Копировать', self))
        self.popMenu.addSeparator()

        self.webBrowser.setContextMenuPolicy(Qt.ActionsContextMenu)
        self.actionBack = QAction(u'Назад', self.webBrowser)
        #self.actionSave = QAction('Сохранить', self.webBrowser)
        #self.actionPDF = QAction('Печать PDF', self.webBrowser)
        self.webBrowser.addAction(self.actionBack)
        self.actionBack.triggered.connect(self.web_back)

        
    def showMenu(self, point):
        #return super().contextMenuEvent(event)
        actionDB1=actionDB2=actionDB3=actionDB4=actionDB5=actionDB6=actionDB7=''
        font10s = QFont()
        font10s.setPointSize(10)
        font10s.setUnderline(True)
        
        self.cmenu = QMenu()
        
        if db1==True:
            if mod1==2:
                actionDB1 = self.cmenu.addAction(u'Infotor-2')
            elif mod1==1:
                actionDB1 = self.cmenu.addAction(u'Infotor')
            if selectDB==1:
                actionDB1.setCheckable(True)
                actionDB1.setChecked(True)
        if db2==True:
            actionDB2 = self.cmenu.addAction(u'БД с комментариями')
            if selectDB==2:
                actionDB2.setCheckable(True)
                actionDB2.setChecked(True)
        if db3==True:
            actionDB3 = self.cmenu.addAction(u'NNMClub')
            if selectDB==3:
                actionDB3.setCheckable(True)
                actionDB3.setChecked(True)
        if db4==True:
            actionDB4 = self.cmenu.addAction(u'BookTracker')
            if selectDB==4:
                actionDB4.setCheckable(True)
                actionDB4.setChecked(True)
        if db5==True:
            actionDB5 = self.cmenu.addAction(u'RUTOR')
            if selectDB==5:
                actionDB5.setCheckable(True)
                actionDB5.setChecked(True)
        if db6==True:
            actionDB6 = self.cmenu.addAction(u'Kinozal.tv')
            if selectDB==6:
                actionDB6.setCheckable(True)
                actionDB6.setChecked(True)
        if db7==True:
            actionDB7 = self.cmenu.addAction(u'Rarbg')
            if selectDB==7:
                actionDB7.setCheckable(True)
                actionDB7.setChecked(True)

        action = self.cmenu.exec_(self.lbl_bd.mapToGlobal(point))

        if action == actionDB1:
            self.selDB1()
        if action == actionDB2:
            self.selDB2()
        if action == actionDB3:
            self.selDB3()
        if action == actionDB4:
            self.selDB4()
        if action == actionDB5:
            self.selDB5()
        if action == actionDB6:
            self.selDB6()
        if action == actionDB7:
            self.selDB7()

    def rearrange_column_layout(self,treeWidget):
        print("restore_column_layout() called.")
        print(self.treeWidget.header().visualIndex(4))

    def set_bookmark(self):
        if self.toolBookmark.isChecked():
            self.plusToList()
        else:
            self.minusFromList()


    def web_back(self):
        if self.webBrowser.history().canGoBack():
            self.webBrowser.history().back()
            self.toolHash.setToolTip('')
            self.toolHash.setEnabled(False)

    def web_forward(self):
        if self.webBrowser.history().canGoForward():
            self.webBrowser.history().forward()
            self.toolHash.setToolTip('')
            self.toolHash.setEnabled(False)
                   

    def web_up(self):
        self.webBrowser.page().runJavaScript("window.scrollTo(0,0)")

    def set_zf(self,zf):
        self.webBrowser.setZoomFactor(zf)
        self.lbl_zf.setText("Масштаб {0}%".format(round(100*zf),1))
        self.settings.setValue("ZoomFactor", zf)

    def web_minus(self):
        zf = self.webBrowser.zoomFactor()
        if zf <= .5:
            zf=.5
        else:
            zf-=.1
        self.set_zf(zf)
    
    def web_plus(self):
        zf = self.webBrowser.zoomFactor()
        if zf >= 1.5:
            zf=1.5
        else:
            zf+=.1
        self.set_zf(zf)

    def web_show(self,link):
        cdir=os.getcwd() + link
        cdir=cdir.replace('\\','/')
        p=self.webBrowser.page()
        p.setUrl(QUrl(cdir))


    def web_out_show(self):
        #cdir=os.getcwd() + link
        #cdir=cdir.replace('\\','/')
        cdir=self.webBrowser.url().toString()
        os.startfile(cdir)


    def changed_url(self, q):
        #self.toolHash.setEnabled(False)
        self.toolSave.setEnabled(False)
        self.toolWeb.setEnabled(False)
        if q.scheme() == 'file':
            nameFile=q.toString()
            dd,ff=os.path.split(nameFile)
            if ff=="about.html":
                self.lbl1.setText(u"About")
            elif ff=="help.html":
                self.lbl1.setText(u"Help")
            elif ff=="start.html":
                self.lbl1.setText(u"-")
                self.toolBookmark.setChecked(False)
            else: 
                if self.treeWidget.topLevelItemCount()>0:
                    dd,ff=os.path.split(self.webBrowser.url().toString())
                    tid=ff[:-5]
                    #print(tid) 
                    magnet=self.treeWidget.selectedItems()[0].text(1)
                    magnet1=self.toolHash.toolTip()[-40:]
                    if ff=="{0}.html".format(tid):
                        self.lbl1.setText(u""+tid)
                        self.toolBookmark.setEnabled(True)
                        if myList.count(tid)==1:
                            self.toolBookmark.setChecked(True)
                        else:
                            self.toolBookmark.setChecked(False)
                        
                        self.toolSave.setEnabled(True)
                        self.toolWeb.setEnabled(True)
                        try:
                            out=self.treeWidget.findItems(tid, Qt.MatchContains|Qt.MatchRecursive,5)[0]
                            magnet=out.text(1)
                            self.treeWidget.clearSelection()
                            out.setSelected(True)
                        except:
                            magnet=''
                            
                        
                        if magnet!='':    
                            self.toolHash.setEnabled(True)
                            self.toolHash.setToolTip('magnet:?xt=urn:btih:{0}'.format(magnet))

        else:
            self.lbl1.setText(u"-")

    def plusToList(self):
        global myList, myDict
        tid=self.lbl1.text()
        if tid.isalnum():
            myList.append(tid)
            myList=list(set(myList))
            myDict[str(selectDB)]=myList
            save_param()
            self.bList.setEnabled(True)
            self.actionList.setEnabled(True)
            self.bList.setToolTip(u"В списке записей: {0}".format(len(myList)))
            self.bList.setText(u"Закладки: {0}".format(len(myList)))
            self.toolBookmark.setChecked(True)

    def minusFromList(self):
        global myList,myDict
        tid=self.lbl1.text()
        if tid.isalnum():
            try:
                myList.remove(tid)
                myDict[str(selectDB)]=myList
                save_param()
                self.toolBookmark.setChecked(False)
            except:
                pass
        if len(myList)==0:
            self.bList.setEnabled(False)
            self.actionList.setEnabled(False)
        self.bList.setText(u"Закладки: {0}".format(len(myList)))
        self.bList.setToolTip(u"В списке записей: {0}".format(len(myList)))

        rd=self.selRazdel.currentIndex()
        frm=self.selForum.currentData()
        if self.keyWords.text()=='' and rd==0 and frm==0:
            self.spisok()

    def resizeEvent(self, a0: QResizeEvent):
        c1,c2,c3,c4=self.geometry().getCoords()
        self.toolBar.setGeometry(QRect((c3-c1-340),90,320,32))
        return super().resizeEvent(a0)
    
    def print_page(self):
        dlg = QPrintDialog(self.printer)
        if dlg.exec_():
            title = self.lbl1.text()
            self.printer.setDocName(title)
            self.printer.setPageMargins(20,10,10,10,QPrinter.Unit())
            #self.printer.setResolution(600)
            self.webBrowser.page().print(self.printer, self.print_completed)

    def print_completed(self, success):
        QMessageBox.information(self.centralwidget,"Печать",'Готово!\nСтраница распечатана.')

    def save_file(self):
        title = self.lbl1.text()  
        #if self.treeWidget.topLevelItemCount()>0:
            #s=self.treeWidget.selectedItems()[0].text(0)
            #title += " " + s[s.find(' '):].strip()  
        filename, _ = QFileDialog.getSaveFileName(self, "Сохранить страницу ..","OUT_HTML/{0}".format(title),
                                              "Hypertext Markup Language (*.html);;"
                                              "Все файлы (*.*)")

        if filename:
            def write_html_to_file(html):
                #file1=open("files/infotor.css","r", encoding="cp1251")
                #css = file1.read()
                #file1.close()
                #html=html.replace("</head><body>","<style>{0}</style></head><body>".format(css))
                with open(filename, 'w',encoding="utf-8") as f:
                    f.write(html)

            self.webBrowser.page().toHtml(write_html_to_file)
            QMessageBox.information(self.centralwidget,"Сохранение",'Готово!\nСтраница сохранена.')

    def magnet(self):
        if self.treeWidget.topLevelItemCount()>0:
            hash=self.treeWidget.selectedItems()[0].text(1)
            try:
                os.startfile('magnet:?xt=urn:btih:{0}'.format(hash))
            except:
                QMessageBox.critical(self.centralwidget, "Внешний торрент-клиент","Не установлен или не назначен торрент-клиент по-умолчанию для обработки magnet-ссылок")
    
    def first_start(self):
        global selectDB,myList,mod1
        #myList=[]
        DBtmp=sql3.sqlite3.connect(os.getcwd() + "/DB/tmp.db3")
        cur=DBtmp.cursor()
        cur.executescript(create_tmp)
        cur.execute("DELETE FROM tmp;")
        DBtmp.commit()
        cur.close()
        DBtmp.close()
        record_count=0
        if selectDB==1:
            if mod1==2:
                self.lbl_bd.setText("Infotor-2")
                self.baza1.setText("Infotor-2")
            elif mod1==1:
                self.lbl_bd.setText("Infotor")
                self.baza1.setText("Infotor")
            self.pathDB=pth10 #"DB/torrents2.db3"
        elif selectDB==2:
            self.lbl_bd.setText("БД с комментариями")
            self.pathDB=pth20 # "DB/main.db3"
        elif selectDB==3:
            self.lbl_bd.setText("NNMClub")
            self.pathDB=pth30
        elif selectDB==4:
            self.lbl_bd.setText("BookTracker")
            self.pathDB=pth40
        elif selectDB==5:
            self.lbl_bd.setText("RUTOR")
            self.pathDB=pth50
        elif selectDB==6:
            self.lbl_bd.setText("Kinozal.tv")
            self.pathDB=pth60
        elif selectDB==7:
            self.lbl_bd.setText("Rarbg")
            self.pathDB=pth70
        else:
            self.lbl_bd.setText("Нет базы :(")
        
        self.web_show(start_file(selectDB))

        if os.path.exists(self.pathDB):
            DB=sql3.sqlite3.connect(self.pathDB)
            cur=DB.cursor()
            if selectDB==7:
                cur.execute('SELECT count(id) FROM items')
            else:
                cur.execute('SELECT count(file_id) FROM torrent')
            record_count= cur.fetchone()
            if record_count[0] != 0:
                #self.statusbar.showMessage("Всего записей в базе - " + str(record_count[0]))
                self.lbl0.setText("Всего записей в базе - " + str(record_count[0]))

                # select dt from items order by id desc limit 1  - для RARBG
                try:
                    if selectDB==7:
                        cur.execute('select dt from items order by dt desc limit 1')
                        vers= cur.fetchone()
                        self.lbl_d.setText("{0}.{1}.{2}".format(vers[0][8:10],vers[0][5:7],vers[0][:4]))
                    else:
                        cur.execute('SELECT vers FROM vers')
                        vers= cur.fetchone()
                        if vers[0] != 0:
                            self.lbl_d.setText("{0}.{1}.{2}".format(vers[0][-2:],vers[0][4:6],vers[0][:4]))         #vers[-2:],vers[4:6],vers[:4]
                except:
                    self.lbl_d.setText("")

                if selectDB==1 or selectDB==2:
                    cur.execute('SELECT * FROM category')
                elif selectDB==3 or selectDB==4 or selectDB==6:
                    cur.execute('SELECT * FROM forum WHERE up_code=0 ORDER BY code_title')
                elif selectDB==5:
                    cur.execute('''SELECT code_id,rutitle from forum order by rutitle''')
                elif selectDB==7:
                    cur.execute('''SELECT rowid, cat FROM items GROUP BY cat''')
                    # SELECT COUNT(*) no, P2.cat FROM items P1 JOIN items P2 ON P1.id = P2.id group by P2.cat;
                    # SELECT rowid, cat FROM items GROUP BY cat
                rows=cur.fetchall()
                if len(rows) != 0:
                    self.selRazdel.clear()
                    self.selRazdel.addItem("-",0)
                    for i,r in enumerate(rows):
                        self.selRazdel.addItem(str(r[1]),(i,r[0]))
                    self.selRazdel.setCurrentIndex(0)
                cur.close()
                self.selForum.addItem("-",0)
                self.selForum.setCurrentIndex(0)

    def closeEvent(self,event):
        self.settings.setValue("geometry", self.saveGeometry()) 
        self.settings.setValue("windowState", self.saveState())
        self.save_param()
        fileList = os.listdir("tmp")
        for item in fileList:                   # очистка tmp
            os.remove("tmp/" + item)
        #print("bye!")
        os.remove(os.getcwd() + "/DB/tmp.db3")
        sys.exit(0)

    def save_param(self):
        parDB=0
        
        self.settings.setValue("Size1",self.treeWidget.geometry())
        self.settings.setValue("Size2",self.webBrowser.geometry())
        self.settings.setValue("Col0",self.treeWidget.columnWidth(0))
        self.settings.setValue("Col2",self.treeWidget.columnWidth(2))
        self.settings.setValue("Col3",self.treeWidget.columnWidth(3))
        self.settings.setValue("Col4",self.treeWidget.columnWidth(4))
        self.settings.setValue("Col6",self.treeWidget.columnWidth(6))
        self.settings.setValue("Col7",self.treeWidget.columnWidth(7))
        if self.baza1.isChecked():
            parDB=1
        if self.baza2.isChecked():
            parDB=2
        if self.baza3.isChecked():
            parDB=3
        if self.baza4.isChecked():
            parDB=4
        if self.baza5.isChecked():
            parDB=5
        if self.baza6.isChecked():
            parDB=6
        if self.baza7.isChecked():
            parDB=7
        
        if parDB!=0:    
            self.settings.setValue("DB",parDB)

    def onclick(self):
        self.keyWords.setCursor(QCursor(Qt.WaitCursor))
        self.poisk()
        self.keyWords.setCursor(QCursor(Qt.ArrowCursor))
    
    def copyBuff(self,point):
        self.popMenu.exec_(self.lbl1.mapToGlobal(point))
        clipboard = QGuiApplication.clipboard()
        clipboard.setText(self.lbl1.text())

    def link_hovered(self,url):
        if url:
            self.webBrowser.setToolTip(url)
        else:
            self.webBrowser.setToolTip("")



    def reset_(self):
        self.keyWords.clear()
        self.selRazdel.setCurrentIndex(0)
        self.selForum.setCurrentIndex(0)
        self.selForum.clear()
        self.selForum.addItem("-",0)
        self.selForum.setCurrentIndex(0)
        self.treeWidget.clear()
        self.treeWidget.setCurrentItem(self.treeWidget.topLevelItem(0))
        self.statusbar.showMessage("")
        self.toolBookmark.setEnabled(False)
        self.toolHash.setEnabled(False)
        self.toolHash.setToolTip("")
        self.web_show(start_file(selectDB))
    
    def about(self):
        self.web_show("/files/about.html")
    
    def faq(self):
        self.web_show("/files/help.html")

    def selRazdel_change(self,text):
        self.selForum.clear()
        self.selForum.addItem("-",0)
        if self.selRazdel.currentText()!="-":

            dd,tt=self.selRazdel.currentData()
            DB=sql3.sqlite3.connect(self.pathDB)
            cur1=DB.cursor()
            if selectDB==1 or selectDB==2:
                cur1.execute('SELECT code_forum,name_forum,category_id FROM forum WHERE category_id={0} order by name_forum'.format(tt))
            if selectDB==3 or selectDB==4 or selectDB==6:
                cur1.execute('''SELECT numcode,((select code_title from forum f2 where numcode = f1.up_code) || " - " || f1.code_title) as res,up_code 
                FROM forum f1 WHERE up_code={0} 
                union select numcode,((select code_title from forum f2 where numcode = f3.up_code) || " - " || f3.code_title) as res,up_code 
                FROM forum f3 WHERE up_code in (SELECT numcode FROM forum WHERE up_code={1})order by res'''.format(tt,tt))
            

            rows=cur1.fetchall()
            if len(rows) != 0:
                for i,r in enumerate(rows):
                    #print (r[0],r[1],r[2])
                    opt=correct(str(r[1]))
                    self.selForum.addItem(opt,(i,r[0]))
            cur1.close()
        self.selForum.setCurrentIndex(0)

###################################################
    def poisk(self):                    # Поиск
        global selectDB
        rr=0
        ff=0
        words=''
        sfq_r=''
        sfq_f=''
        sfq_w=''
        sfq_a=''
        words_=''
        par1 = False
        qqq=""

        self.treeWidget.clear()
        self.toolHash.setEnabled(False)

        try:
            
            if selectDB==7:
                rr=self.selRazdel.currentText()
            else:
                dd,rr=self.selRazdel.currentData()
        except:
            pass

        try:
            dd,ff=self.selForum.currentData()
        except:
            pass
        

        if rr!=0 and rr!='-':
            if selectDB==1:
                if mod1==2:
                    sfq_r = " and cat_id={0}".format(rr)
                if mod1==1:
                    sfq_r = " and category_id={0}".format(rr)
            if selectDB==2:
                sfq_r = " and cat_id={0}".format(rr)
            elif selectDB==3 or selectDB==4:
                sfq_r = " and code_id in (select numcode from forum where category={0})".format(rr) # " and code_id in (select f0.numcode from forum f0 inner join forum f1 on f0.up_code=f1.numcode where f1.up_code={0})".format(rr)
            elif selectDB==5:
                sfq_r = " and category={0}".format(rr)
            elif selectDB==6:
                sfq_r = " and code_id in (select numcode from forum where up_code={0})".format(rr)
            elif selectDB==7:
                sfq_r = " and cat='{0}'".format(rr)
            par1=True
        if ff!=0:
            if ff!=None:
                if selectDB==1 or selectDB==2:
                    sfq_f = " and forum_id={0}".format(ff)
                elif selectDB==3 or selectDB==4 or selectDB==6:
                    sfq_f = " and code_id={0}".format(ff)
                par1=True

        words = self.keyWords.text()
        if len(words)>0:
            par1=True
            if selectDB==6:
                sfq_a,words_ = actsplitter0(words)
                sfq_w = splitter0(words_)
            elif selectDB==7:
                sfq_w = splitter_r(words)
            else:
                words= words.upper()
                sfq_a,words_ = actsplitter(words)
                sfq_w = splitter(words_)
            #if rr not in (2,18):
            #    sfq_a=sfq_w
        
        if hideDel==1:
            if mod1==1:
                sfq_del = " and UPPER(title) not like ('[УДАЛЕНО]%')"
            if mod1==2:
                sfq_del = " and UPPER(title_up) not like ('[УДАЛЕНО]%')"
        else:
            sfq_del = ""

        if selectDB!=0:
            if par1 == True:
                self.centralwidget.setCursor(QCursor(Qt.WaitCursor))
                DB=sql3.sqlite3.connect(self.pathDB)
                DB.create_collation("NOCASE", ignore_case_collation)
                DB.create_function("LOWER", 1, sqlite_lower)
                DB.create_function("UPPER", 1, sqlite_upper)
                cur=DB.cursor()
                cur.execute("DROP TABLE IF EXISTS tmp;")
                #sfq="SELECT file_id,full_info,author,name_category FROM (torrent  AS t INNER JOIN category AS c ON t.cat_id=c.code_category) WHERE 1" + sfq_r + sfq_f + sfq_w
                #sfq = sfq + " ORDER BY cat_id asc, forum_id asc, file_id desc"
                #cur.executescript(create_tmp)
                cur.execute("""attach "{0}" as "tmp";""".format(os.getcwd() + "/DB/tmp.db3",))
                DB.commit()
                cur.execute("delete from tmp;")
                if selectDB==1:
                    exists_act=False
                    path_actors=pth10.rpartition('/')[0] + '/actors.db3'
                    exists_act=os.path.exists(path_actors)
                    cur.execute("delete from tmp;")
                    DB.commit()
                    if exists_act:
                        cur.execute("""attach "{0}" as "actors";""".format(path_actors,))
                        
                        if words_=='':
                            if mod1==2:
                                qqq="""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info, "" 
                                FROM torrent WHERE 1""" + sfq_r + sfq_f + sfq_del + ";"
                            elif mod1==1:
                                qqq="""INSERT INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg)
                                SELECT file_id, category_id, name_category, forum_id, name_forum, hash_info,title,size_b,date_reg 
                                FROM (torrent t INNER JOIN forum f on t.forum_id=code_forum)
                                INNER JOIN category c on f.category_id=c.code_category 
                                WHERE 1""" + sfq_r + sfq_f + sfq_del + ";"
                            cur.execute(qqq)
                        else:
                            if mod1==2:
                                qqq="""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info, "" 
                                FROM torrent t left join actors.actors a ON t.file_id=a.tid WHERE 1""" + sfq_r + sfq_f + sfq_del + sfq_w + ";"
                            elif mod1==1:
                                qqq="""INSERT INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg)
                                SELECT file_id, category_id, name_category, forum_id, name_forum, hash_info,title,size_b,date_reg 
                                FROM ((torrent t INNER JOIN forum f on t.forum_id=code_forum)
                                INNER JOIN category c on f.category_id=c.code_category)
                                left join actors.actors a ON t.file_id=a.tid
                                WHERE 1""" + sfq_r + sfq_f + sfq_del + sfq_w + ";"
                            """INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, forum_id, hash_info,title,size_b,date_reg FROM torrent t left join actors.actors a ON t.file_id=a.tid"""
                            cur.execute(qqq)
                        if sfq_a!='':
                            if mod1==2:
                                qqq="""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info, "" 
                                FROM torrent t left join actors.actors a ON t.file_id=a.tid WHERE 1 """ + sfq_a + sfq_r + sfq_f + sfq_del + ";"
                            elif mod1==1:
                                qqq="""INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, forum_id, hash_info,title,size_b,date_reg FROM torrent t left join actors.actors a ON t.file_id=a.tid WHERE 1""" + sfq_a + sfq_r + sfq_f + sfq_del + ";"
                            try:
                                cur.execute(qqq) 
                            except:
                                pass
                    else:
                        if mod1==2:
                            cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info, "" 
                            FROM (torrent t INNER JOIN forum f on t.forum_id=code_forum)
                            INNER JOIN category c on f.category_id=c.code_category 
                            WHERE 1""" + sfq_r + sfq_f + sfq_w + sfq_del + " ;") 
                        elif mod1==1:
                            cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, forum_id, hash_info,title,size_b,date_reg FROM (torrent t INNER JOIN forum f on t.forum_id=code_forum) INNER JOIN category c on f.category_id=c.code_category 
                            WHERE 1""" + sfq_r + sfq_f + sfq_w + sfq_del + " ;")
                elif selectDB==2:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info,author FROM torrent 
                    WHERE 1""" + sfq_r + sfq_f + sfq_w + " group by cat_id,forum_id,file_id ORDER BY cat_id asc, forum_id asc, file_id desc;")
                elif selectDB==3:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, code_id, code_id, full_info, '' FROM torrent 
                    WHERE 1""" + sfq_r + sfq_f + sfq_w) #+ " group by code_id,code_id,file_id ORDER BY code_id asc, code_id asc, file_id desc;")
                elif selectDB==4:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, code_id, code_id, full_info, '' FROM torrent 
                    WHERE 1""" + sfq_r + sfq_f + sfq_w) #+ " group by cat_id,forum_id,file_id ORDER BY cat_id asc, forum_id asc, file_id desc;")
                elif selectDB==5:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,title_forum,full_info,author) SELECT file_id, category, 0, tema,full_info, '' FROM torrent 
                    WHERE 1""" + sfq_r + sfq_w)
                elif selectDB==6:
                    if rr==38:
                        cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, code_id, hash_info,title,size_b,date_reg  
                        FROM torrent WHERE 1""" + sfq_w + sfq_r + sfq_f)
                    else:
                        qqq="""INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, code_id, hash_info,title,size_b,date_reg  
                        FROM torrent t inner join persons p ON t.file_id=p.tid WHERE 1""" + sfq_w + sfq_r + sfq_f
                        pass
                        cur.execute(qqq)
                elif selectDB==7:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg) SELECT id, 0,cat, 0,'', hash, title,size,dt FROM items WHERE 1""" + sfq_r + sfq_w + " order by dt limit 100000")

                DB.commit()
                if selectDB==1:
                    if mod1==2:
                        sfq1 = """REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                        SELECT tid,cat_id,name_category,forum_id,name_forum,full_info,author 
                        FROM (tmp INNER JOIN category ON cat_id=code_category)
                        inner join forum on forum_id=code_forum;"""
                        cur.execute(sfq1)
                    elif mod1==1:
                        sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg) 
                        SELECT tid,cat_id,name_category,forum_id,name_forum,hash_info,title,size_b,date_reg 
                        FROM (tmp INNER JOIN category ON forum_id=code_category)
                        inner join forum on forum_id=code_forum;"""
                        #cur.execute(sfq1)
                if selectDB==2:
                    sfq1 = """REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,cat_id,name_category,forum_id,name_forum,full_info,author 
                    FROM (tmp INNER JOIN category ON cat_id=code_category)
                    inner join forum on forum_id=code_forum;"""
                    cur.execute(sfq1)
                elif selectDB==3 or selectDB==4:
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,category,code_title,forum_id,code_title,full_info,author 
                    FROM (tmp INNER JOIN forum ON cat_id=numcode);"""
                    cur.execute(sfq1)
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,cat_id,code_title,forum_id,title_forum,full_info,author 
                    FROM (tmp INNER JOIN forum ON cat_id=numcode);"""
                    cur.execute(sfq1) 
                elif selectDB==5:
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info) 
                    SELECT tid,cat_id,rutitle,forum_id,title_forum,full_info 
                    FROM (tmp INNER JOIN forum ON code_id=cat_id);"""
                    cur.execute(sfq1)
                    #sfq2 = """SELECT tid,full_info,author,title_cat,title_forum FROM tmp ORDER BY cat_id asc, tid desc;"""
                elif selectDB==6:
                    sfq1="""REPLACE INTO tmp
                    (tid,cat_id, title_cat, forum_id, title_forum,hash_info,title,size_b,date_reg) 
                    SELECT tid,f.up_code,title_cat,forum_id, code_title, hash_info,title,size_b,date_reg 
                    FROM (tmp t INNER JOIN forum f ON t.forum_id=f.numcode);"""
                    cur.execute(sfq1)

                    sfq1="""REPLACE INTO tmp
                    (tid,cat_id, title_cat, forum_id, title_forum,hash_info,title,size_b,date_reg) 
                    SELECT tid,cat_id,code_title,forum_id,title_forum, hash_info,title,size_b,date_reg 
                    FROM (tmp t INNER JOIN forum f ON t.cat_id=f.numcode);"""
                    cur.execute(sfq1)
                DB.commit()

                #if selectDB==6:
                #    sfq2 = """SELECT tid,hash_info,title,size_b,date_reg,title_cat,title_forum FROM tmp ORDER BY cat_id asc, forum_id asc, tid desc;"""
                #else:
                sfq2 = """SELECT tid,full_info,author,title_cat,title_forum,hash_info,title,size_b,date_reg FROM tmp ORDER BY title_cat asc, title_forum asc, date_reg desc, tid desc;"""
                cur.execute(sfq2)
                rows=cur.fetchall()
                #if exists_act:
                #    cur.execute("""detach "actors";""")
                cur.close()
                DB.close()

                if len(rows) != 0:
                    self.show_tree(rows)
                else:
                    QMessageBox.information(self.centralwidget,"Поиск",'К сожалению, ничего не найдено :(')    # \U0001F62A
            
                self.statusbar.showMessage("Найдено {0} записей".format(len(rows),))
                self.treeWidget.expandAll()
                self.treeWidget.setCurrentItem(self.treeWidget.topLevelItem(0))
                self.centralwidget.setCursor(QCursor(Qt.ArrowCursor))
            else:
                QMessageBox.critical(self.centralwidget, "Поиск","Введите какое-нибудь ограничение поиска")
        else:
            QMessageBox.critical(self.centralwidget, "Поиск","Еще не подключены базы")

###########################################################        
    def spisok(self):                    # Список
        par1 = True
        sfq_id=''

        self.reset_()
        self.toolHash.setEnabled(False)
        
        for item in myList:
            sfq_id+=item + ','
        sfq_id=sfq_id[:-1]

        if selectDB!=0:
            if par1 == True:
                self.centralwidget.setCursor(QCursor(Qt.WaitCursor))
                DB=sql3.sqlite3.connect(self.pathDB)
                cur=DB.cursor()
                cur.executescript(create_tmp)
            
                sql3.dbc()
                if selectDB==1:
                    if mod1==1:
                        cur.execute("""INSERT INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg)
                                SELECT file_id, category_id, name_category, forum_id, name_forum, hash_info,title,size_b,date_reg 
                                FROM (torrent t INNER JOIN forum f on t.forum_id=code_forum)
                                INNER JOIN category c on f.category_id=c.code_category 
                                WHERE file_id in ({0});""".format(sfq_id))
                    elif mod1==2:
                        cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info, "" FROM torrent 
                        WHERE file_id in ({0});""".format(sfq_id))
                elif selectDB==2:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, cat_id, forum_id, full_info,author FROM torrent 
                    WHERE file_id in ({0});""".format(sfq_id))
                elif selectDB==3 or selectDB==4:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,full_info,author) SELECT file_id, code_id, code_id, full_info, '' FROM torrent 
                    WHERE file_id in ({0});""".format(sfq_id))
                elif selectDB==5:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,title_forum,full_info,author) SELECT file_id, category, 0, tema,full_info, '' FROM torrent 
                    WHERE file_id in ({0});""".format(sfq_id))
                elif selectDB==6:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,forum_id,hash_info,title,size_b,date_reg) SELECT file_id, 0, code_id, hash_info,title,size_b,date_reg  
                    FROM torrent WHERE file_id in ({0});""".format(sfq_id))
                elif selectDB==7:
                    cur.execute("""INSERT INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg) SELECT id, 0,cat, 0,'', hash, title,size,dt FROM items WHERE id in ({0});""".format(sfq_id))

                if selectDB==1:
                    if mod1==2:
                        sfq1 = """REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                        SELECT tid,cat_id,name_category,forum_id,name_forum,full_info,author 
                        FROM (tmp INNER JOIN category ON cat_id=code_category)
                        inner join forum on forum_id=code_forum;"""
                        cur.execute(sfq1)
                    elif mod1==1:
                        sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,hash_info,title,size_b,date_reg) 
                        SELECT tid,cat_id,name_category,forum_id,name_forum,hash_info,title,size_b,date_reg 
                        FROM (tmp INNER JOIN category ON forum_id=code_category)
                        inner join forum on forum_id=code_forum;"""
                        #cur.execute(sfq1)
                if selectDB==2:
                    sfq1 = """REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,cat_id,name_category,forum_id,name_forum,full_info,author 
                    FROM (tmp INNER JOIN category ON cat_id=code_category)
                    inner join forum on forum_id=code_forum;"""
                    cur.execute(sfq1)
                elif selectDB==3 or selectDB==4:
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,category,code_title,forum_id,code_title,full_info,author 
                    FROM (tmp INNER JOIN forum ON cat_id=numcode);"""
                    cur.execute(sfq1)
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info,author) 
                    SELECT tid,cat_id,code_title,forum_id,title_forum,full_info,author 
                    FROM (tmp INNER JOIN forum ON cat_id=numcode);"""
                    cur.execute(sfq1)
                elif selectDB==5:
                    sfq1="""REPLACE INTO tmp(tid,cat_id,title_cat,forum_id,title_forum,full_info) 
                    SELECT tid,cat_id,rutitle,forum_id,title_forum,full_info 
                    FROM (tmp INNER JOIN forum ON code_id=cat_id);"""
                    cur.execute(sfq1)
                elif selectDB==6:
                    sfq1="""REPLACE INTO tmp
                    (tid,cat_id, title_cat, forum_id, title_forum,hash_info,title,size_b,date_reg) 
                    SELECT tid,f.up_code,title_cat,forum_id, code_title, hash_info,title,size_b,date_reg 
                    FROM (tmp t INNER JOIN forum f ON t.forum_id=f.numcode);"""
                    cur.execute(sfq1)

                    sfq1="""REPLACE INTO tmp
                    (tid,cat_id, title_cat, forum_id, title_forum,hash_info,title,size_b,date_reg) 
                    SELECT tid,cat_id,code_title,forum_id,title_forum, hash_info,title,size_b,date_reg 
                    FROM (tmp t INNER JOIN forum f ON t.cat_id=f.numcode);"""
                    cur.execute(sfq1)
                DB.commit()
                #if selectDB==6:
                #    sfq2 = """SELECT tid,hash_info,title,size_b,date_reg,title_cat,title_forum FROM tmp ORDER BY cat_id asc, forum_id asc, tid desc;"""
                #else:
                sfq2 = """SELECT tid,full_info,author,title_cat,title_forum,hash_info,title,size_b,date_reg FROM tmp ORDER BY title_cat asc, title_forum asc, tid desc;"""
                cur.execute(sfq2)
                rows=cur.fetchall()
                cur.close()
            
                if len(rows) != 0:
                    self.show_tree(rows)
                else:
                    QMessageBox.information(self.centralwidget,"Список",'Список пуст :(')    # \U0001F62A
            
                self.statusbar.showMessage("Найдено {0} записей".format(len(rows),))
                self.treeWidget.expandAll()
                self.treeWidget.setCurrentItem(self.treeWidget.topLevelItem(0))
                self.centralwidget.setCursor(QCursor(Qt.ArrowCursor))
            else:
                QMessageBox.critical(self.centralwidget, "Поиск","Введите какое-нибудь ограничение поиска")
        else:
            QMessageBox.critical(self.centralwidget, "Поиск","Отсутствуют базы!")
##########################################################        
    def show_tree(self,rows):               # показ дерева
        global selectDB
        cat=fm=''
        k=1
        n=0
        SS=[]
        icon_magnet = QIcon()
        icon_magnet.addFile(u":/files/files/magnet_1.svg", QSize(), QIcon.Normal, QIcon.Off)
        icon_info = QIcon()
        icon_info.addFile(u":/files/files/info_1.svg", QSize(), QIcon.Normal, QIcon.Off)
        fontzag = QFont()
        fontzag.setPointSize(12)
        fontzag.setBold(True)
        font10 = QFont()
        font10.setPointSize(10)
        font10b = QFont()
        font10b.setPointSize(10)
        font10b.setBold(True)
        for r in rows:
            if len(r) != 0:
                title=''
                tid=r[0]
                if selectDB!=6:
                    category = r[3]
                    if r[1]:
                        S=sql3.zlib.decompress(r[1]).decode(encoding='utf-8')
                        SS=S.split('‰')

                if selectDB==1:
                    if mod1==2:
                        title = correct(SS[1])
                        forum_title = r[4]
                        magnet = SS[2]
                        tor_size = SS[3]
                        time_reg = SS[4]
                        author = r[2]
                    elif mod1==1:       # 0tid,1full_info,2author,3title_cat,4title_forum,5hash_info,6title,7size_b,8date_reg
                        title = correct(r[6])
                        forum_title = r[4]
                        magnet = r[5]
                        tor_size = r[7]
                        time_reg = r[8]
                        author = ''
                        category = r[3]

                elif selectDB==2:
                    author = correct(SS[12])
                    title = correct(SS[2])
                    forum_title = correct(SS[6])
                    tor_status = SS[7]
                    magnet = SS[11]
                    tor_size = SS[13]
                    tor_srok = SS[14]
                    downloaded = SS[15]
                    seeds = SS[16]
                    leaches = SS[17]
                    full_source = SS[18]
                    time_reg = SS[19]
                    if magnet=='m': magnet=''
                    if tor_size=='s': tor_size=''
                    if downloaded=='d': downloaded=''
                    if seeds=='e': seeds=''
                    if leaches=='l':leaches=''
                    if full_source=='f': full_source=''
                    if time_reg=='r': time_reg=''
                    if tor_srok=='t': tor_srok=''

                elif selectDB==3 or selectDB==4:
                    # id_file,id_podr,hash_info,title,size_b,date_reg
                    title = correct(SS[3])
                    forum_title = r[4]
                    magnet = SS[2]
                    tor_size = SS[4]
                    time_reg = SS[5]
                    author = r[2]

                elif selectDB==5:
                    title = correct(SS[2])
                    forum_title = r[3]
                    f_title = r[4]
                    magnet = SS[1]
                    tor_size = SS[3]
                    time_reg = SS[4]
                    author = ''    

                elif selectDB==6:   # 0tid,1full_info,2author,3title_cat,4title_forum,5hash_info,6title,7size_b,8date_reg
                    title = r[6]
                    forum_title = r[4]
                    #f_title = r[5]
                    magnet = r[5]
                    tor_size = r[7]
                    time_reg = r[8]
                    category = r[3]
                    author = ''
                    if category=="Сериал":
                        if forum_title=="Русский":
                            forum_title="Русский "
                        if forum_title=="Буржуйский":
                            forum_title="Буржуйский "
                
                elif selectDB==7:
                    tor_size=0
                    title=r[6]
                    forum_title = r[3]
                    magnet = r[5]
                    if r[7] is not None:
                        tor_size = r[7]                       
                    time_reg = r[8]
                    category = r[3]
                    author = ''


                if category!=cat:
                    l1 = QTreeWidgetItem([category,])
                    l1.setFont(0,fontzag)
                    l1.setForeground(0,QColor('white'))
                    l1.setBackground(0,QColor('#afb7d0'))
                    l1.setBackground(2,QColor('#afb7d0'))
                    l1.setBackground(3,QColor('#afb7d0'))
                    l1.setBackground(4,QColor('#afb7d0'))
                    l1.setBackground(5,QColor('#afb7d0'))
                    l1.setBackground(6,QColor('#afb7d0'))
                    l1.setBackground(7,QColor('#afb7d0'))
                    cat=category

                if forum_title!=fm:
                    l2 = QTreeWidgetItem([forum_title,])
                    l1.addChild(l2)
                    l2.setFont(0,font10)
                    l2.setBackground(0,QColor('#afb7d0'))
                    l2.setBackground(2,QColor('#afb7d0'))
                    l2.setBackground(3,QColor('#afb7d0'))
                    l2.setBackground(4,QColor('#afb7d0'))
                    l2.setBackground(5,QColor('#afb7d0'))
                    l2.setBackground(6,QColor('#afb7d0'))
                    l2.setBackground(7,QColor('#afb7d0'))
                    fm=forum_title

                if selectDB==1 or selectDB==3 or selectDB==4 or selectDB==5 or selectDB==6 or selectDB==7:
                    l3 = QTreeWidgetItem([str(n+1)+"  "+title,magnet,"","",author,str(tid),time_reg,calc(int(tor_size))])
                    l3.setToolTip(7,sepp(tor_size))
                elif selectDB==2:
                    l3 = QTreeWidgetItem([str(n+1)+"  "+title,magnet,"","",author,str(tid),time_reg,tor_size])
                if tor_size != '':
                    l3.setIcon(3,icon_magnet)
                    l3.setToolTip(3,'magnet:?xt=urn:btih:{0}'.format(magnet))
                l3.setIcon(2,icon_info)
                l3.setFont(0,font10)
                l3.setFont(3,font10)
                l3.setFont(6,font10)
                l3.setFont(7,font10)
                l3.setTextAlignment(7,4)
                if selectDB==1 or selectDB==3 or selectDB==4 or selectDB==6 or selectDB==7:
                    l3.setToolTip(2, '{0}<hr><i>{1}</i><hr>Размер раздачи: <b>{2}</b><br>Зарегистрировано: <b>{3}</b><br>'.format('<b>'+title+'</b>', forum_title,calc(int(tor_size)),time_reg))
                elif selectDB==2:
                    l3.setToolTip(2, '{0}<hr><i>{1}</i><hr>Размер раздачи: <b>{2}</b><br>Статус: <b>{3}</b><br>Зарегистрировано: <b>{4}</b><br>Срок раздачи: <b>{5}</b><br>Скачано: <b>{6}</b><br>Сидов: <b>{7}</b><br>Личей: <b>{8}</b><br>Полный источник: <b>{9}</b>'.format('<b>'+title+'</b>', forum_title,tor_size,status_tor.get(tor_status),time_reg,tor_srok,downloaded,seeds,leaches,full_source))
                elif selectDB==5:
                    l3.setToolTip(2, '{0}<hr><i>{1}</i><hr>Размер раздачи: <b>{2}</b><br>Зарегистрировано: <b>{3}</b><br>'.format('<b>'+title+'</b>', f_title,calc(int(tor_size)),time_reg))
                l2.addChild(l3)
                n +=1
                self.treeWidget.addTopLevelItem(l1)
                k += 1

############################################################
    #@pyqtSlot(name="onItemClicked")
    def onItemClicked(self, it, col):
        name_file = it.text(0)
        hash = it.text(1)
        tid = it.text(5)
        aut = it.text(4)
        rez = False
        baza = True
        if col==3:
            if hash:
                try:
                    os.startfile('magnet:?xt=urn:btih:{0}'.format(hash))
                except:
                    QMessageBox.critical(self.centralwidget, "Внешний торрент-клиент","Не установлен или не назначен торрент-клиент по-умолчанию для обработки magnet-ссылок")
        elif col==4:
            if aut:
                self.keyWords.insert(" :{0}:".format(aut))
        elif col==0:
            if tid and self.webBrowser.page().loadFinished:
                if selectDB==2:
                    if os.path.exists(pth21):
                        rez = srdb.devizion(pth21, tid)
                    else:
                        baza = False
                elif selectDB==1:
                    if os.path.exists(pth11):
                        rez=sql3.form_html(tid,pth10,pth11,mod1)
                    else:
                        baza = False
                elif selectDB==3:
                    if os.path.exists(os.getcwd() + "/DB/nnmcontent.db3"):
                        rez=sql3.form_html_nnm(tid,pth30,os.getcwd() + "/DB/nnmcontent.db3")
                    else:
                        baza = False
                elif selectDB==4:
                    if os.path.exists(os.getcwd() + "/DB/bookcontent.db3"):
                        rez=sql3.form_html_book(tid,pth40,os.getcwd() + "/DB/bookcontent.db3")
                    else:
                        baza = False
                elif selectDB==5:
                    if os.path.exists(os.getcwd() + "/DB/rutorcontent.db3"):
                        rez=sql3.form_html_rutor(tid,pth50,os.getcwd() + "/DB/rutorcontent.db3")
                    else:
                        baza = False
                elif selectDB==6:
                    if os.path.exists(os.getcwd() + "/DB/kinozalcontent.db3"):
                        rez=sql3.form_html_kino(tid,pth60,os.getcwd() + "/DB/kinozalcontent.db3")
                    else:
                        baza = False
                elif selectDB==7:
                    rez=sql3.form_html_rarbg(tid,pth70)
            else:
                rez=False

            if rez != False:
                self.web_show("/tmp/{0}.html".format(tid,))
                p=self.webBrowser.page()
                
                p.runJavaScript("window.scrollTo(0,0)")
            else:
                self.web_show(start_file(selectDB))
                self.lbl1.setText("-")

            self.toolBookmark.setEnabled(True)
            if myList.count(tid)==1:
                self.toolBookmark.setChecked(True)
            else:
                self.toolBookmark.setChecked(False)
            if hash:
                self.toolHash.setEnabled(True)
                self.toolHash.setToolTip('magnet:?xt=urn:btih:{0}'.format(hash))
            else:
                self.toolHash.setToolTip(u"Скачать торрент по magnet-ссылке")
                self.toolHash.setEnabled(False)
            self.lbl1.setText(u""+tid)
            if baza==False:
                QMessageBox.critical(self.centralwidget,u"Источник", u"Отсутсвует файл базы данных с контентом",QMessageBox.Cancel)

###############################################################################################################
    #@pyqtSlot(name="onHeaderDataChanged")
    #def HeaderDataChanged(self, orientation, logicalFirst, logicalLast):
    #    print("restore_column_layout() called.")
    #    print(logicalFirst, logicalLast)
    #    for i in range(self.treeWidget.columnCount()):
    #        print(i,' - ',self.treeWidget.header().logicalIndex(i))                
###############################################################################################################
            
    def onPDF(self):
        self.webBrowser.page().printToPdf('myfile.pdf')

    def sbros_select(self):
        self.baza1.setChecked(False)
        self.baza2.setChecked(False)
        self.baza3.setChecked(False)
        self.baza4.setChecked(False)
        self.baza5.setChecked(False)
        self.baza6.setChecked(False)
        self.baza7.setChecked(False)

    def selDB1(self):
        global selectDB
        self.sbros_select()
        self.baza1.setChecked(True)
        if mod1==2:
            self.lbl_bd.setText("Infotor-2")
        elif mod1==1:
            self.lbl_bd.setText("Infotor")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=1
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()
        
    def selDB2(self):
        global selectDB
        self.sbros_select()
        self.baza2.setChecked(True)
        self.lbl_bd.setText("БД с комментариями")
        self.treeWidget.setColumnHidden(4,False)
        
        selectDB=2
        self.save_param()
        self.reset_()
        self.first_start()
        if self.settings.contains("Col4"):                               # author
            self.treeWidget.setColumnWidth(4,self.settings.value("Col4"))
        else:
            self.treeWidget.setColumnWidth(4,110)
        load_param()

    def selDB3(self):
        global selectDB
        self.sbros_select()
        self.baza3.setChecked(True)
        self.lbl_bd.setText("NNMClub")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=3
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()

    def selDB4(self):
        global selectDB
        self.sbros_select()
        self.baza4.setChecked(True)
        self.lbl_bd.setText("BookTracker")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=4
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()

    def selDB5(self):
        global selectDB
        self.sbros_select()
        self.baza5.setChecked(True)
        self.lbl_bd.setText("RUTOR")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=5
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()
    
    def selDB6(self):
        global selectDB
        self.sbros_select()
        self.baza6.setChecked(True)
        self.lbl_bd.setText("Kinozal.tv")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=6
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()

    def selDB7(self):
        global selectDB
        self.sbros_select()
        self.baza7.setChecked(True)
        self.lbl_bd.setText("Rarbg")
        self.treeWidget.setColumnHidden(4,True)
        selectDB=7
        self.save_param()
        self.reset_()
        self.first_start()
        load_param()

    def check_db(self):                 # проверка наличия баз

        global pth10,pth11,pth20,pth21,pth30,pth40,pth50,pth60,pth70,hideDel,mod1
        global db1,db2,db3,db4,db5,db6,db7
        db1=db2=db3=db4=db5=db6=db7=False

        if self.settings.contains("mod1"):
            mod1=self.settings.value("mod1")
        else:
            mod1=1

        if self.settings.contains("pth10"):
            pth10=self.settings.value("pth10")
            if os.path.exists(pth10):
                db1=True
            else:
                pth10=''
                db1=False
            
        if pth10=='':
            if os.path.exists(os.getcwd() + "/DB/torrents.db3"):
                db1=True
                pth10=os.getcwd() + "/DB/torrents.db3"
                mod1=1
            else:
                if os.path.exists(os.getcwd() + "/DB/torrents2.db3"):
                    db1=True
                    pth10=os.getcwd() + "/DB/torrents2.db3"
                    mod1=2
                else:
                    pth10=''
                    mod1=0
        # Добавить проверку на наличие файла
        if self.settings.contains("pth11"):
            pth11=self.settings.value("pth11")
            if os.path.exists(pth11):
                pass
            else:
                pth11=""
        #if self.settings.contains("pth12"):
        #    pth12=self.settings.value("pth12")
        if self.settings.contains("pth20"):
            pth20=self.settings.value("pth20")
        if self.settings.contains("pth21"):
            pth21=self.settings.value("pth21")
            if os.path.exists(pth21):
                pass
            else:
                pth21=""
        if self.settings.contains("pth30"):
            pth30=self.settings.value("pth30")
        if self.settings.contains("pth40"):
            pth40=self.settings.value("pth40")
        if self.settings.contains("pth50"):
            pth50=self.settings.value("pth50")
        if self.settings.contains("pth60"):
            pth60=self.settings.value("pth60")
        if self.settings.contains("pth70"):
            pth70=self.settings.value("pth70")
        if self.settings.contains("hideDel"):
            hideDel=int(self.settings.value("hideDel"))
        
        
        if os.path.exists(pth20):
            db2=True
        else:
            pth20=''
        if os.path.exists(os.getcwd() + "/DB/nnmclub2.db3"):
            db3=True
            pth30=os.getcwd() + "/DB/nnmclub2.db3"
        else:
            pth30=''
        if os.path.exists(os.getcwd() + "/DB/books2.db3"):
            db4=True
            pth40=os.getcwd() + "/DB/books2.db3"
        else:
            pth40=''
        if os.path.exists(os.getcwd() + "/DB/rutor2.db3"):
            db5=True
            pth50=os.getcwd() + "/DB/rutor2.db3"
        else:
            pth50=''
        if os.path.exists(os.getcwd() + "/DB/kinozal.db3"):
            db6=True
            pth60=os.getcwd() + "/DB/kinozal.db3"
        else:
            pth60=''
        if os.path.exists(os.getcwd() + "/DB/rarbg_db.sqlite"):
            db7=True
            pth70=os.getcwd() + "/DB/rarbg_db.sqlite"
        else:
            pth70=''

        #self.settings.setValue("pth10",pth10)
        self.settings.setValue("pth30",pth30)
        self.settings.setValue("pth40",pth40)
        self.settings.setValue("pth50",pth50)
        self.settings.setValue("pth60",pth60)
        self.settings.setValue("pth70",pth70)
        self.settings.setValue("mod1",mod1)

        self.sbros_select()
        parDB=0
        if self.settings.contains("DB"):
            parDB=self.settings.value("DB")

        if db1==True:
            self.baza1.setVisible(True)
            self.baza1.setEnabled(True)
        else:
            self.baza1.setVisible(False)
            self.baza1.setEnabled(False)

        if db2==True:
            self.baza2.setVisible(True)
            self.baza2.setEnabled(True)
        else:
            self.baza2.setVisible(False)
            self.baza2.setEnabled(False)

        if db3==True:
            self.baza3.setVisible(True)
            self.baza3.setEnabled(True)
        else:
            self.baza3.setVisible(False)
            self.baza3.setEnabled(False)        

        if db4==True:
            self.baza4.setVisible(True)
            self.baza4.setEnabled(True)
        else:
            self.baza4.setVisible(False)
            self.baza4.setEnabled(False)

        if db5==True:
            self.baza5.setVisible(True)
            self.baza5.setEnabled(True)
        else:
            self.baza5.setVisible(False)
            self.baza5.setEnabled(False)
        
        if db6==True:
            self.baza6.setVisible(True)
            self.baza6.setEnabled(True)
        else:
            self.baza6.setVisible(False)
            self.baza6.setEnabled(False)

        if db7==True:
            self.baza7.setVisible(True)
            self.baza7.setEnabled(True)
        else:
            self.baza7.setVisible(False)
            self.baza7.setEnabled(False)
            
        self.treeWidget.setColumnHidden(4,True)
        if parDB==1:
            if db1==True:
                self.baza1.setChecked(True)
            else:
                parDB=0
        elif parDB==2:
            if db2==True:
                self.baza2.setChecked(True)
                self.treeWidget.setColumnHidden(4,False)
            else:
                parDB=0
        elif parDB==3:
            if db3==True:
                self.baza3.setChecked(True)
            else:
                parDB=0
        elif parDB==4:
            if db4==True:
                self.baza4.setChecked(True)
            else:
                parDB=0
        elif parDB==5:
            if db5==True:
                self.baza5.setChecked(True)
            else:
                parDB=0
        elif parDB==6:
            if db6==True:
                self.baza6.setChecked(True)
            else:
                parDB=0
        elif parDB==7:
            if db7==True:
                self.baza7.setChecked(True)
            else:
                parDB=0
            
        if parDB==0:
            if db1==True:
                parDB=1
            elif db3==True:
                parDB=3
            elif db4==True:
                parDB=4
            elif db5==True:
                parDB=5
            elif db6==True:
                parDB=6
            elif db7==True:
                parDB=7
            else:
            
                self.lbl_bd.setText("Нет базы")
                #otv=QMessageBox.question(self.centralwidget, "Проблема...","Отсутствуют базы данных!\n\nСкачайте и поместите в каталог DB базы данных формата INFOTOR-2,\nлибо поместите в каталог IN файлы 'Короткая база раздач.txt'\nи 'Полная база раздач.rdb и выполните процедуру загрузки' \nЗагрузить?")
                otv=QMessageBox.information(self.centralwidget, "Проблема...","Отсутствует или не выбрана база данных!\n\nСкачайте БД и настройте пути к ней")
                if otv==QMessageBox.StandardButton.Yes:
                    #open_file()
                    pass
                
                else:
                
                    self.faq()
                    #self.lbl1.setText("Help")
                    show_settings()
                    #QMessageBox.information(self.centralwidget,'До новых встреч!','Загрузите базы и перезапустите программу')
                    #sys.exit(0)

        return parDB,mod1
        
#####################################################################

class SearchPanel(QWidget):
    searched = pyqtSignal(str, QtWebEngineWidgets.QWebEnginePage.FindFlag)
    closed = pyqtSignal()

    def __init__(self, parent=None):
        super(SearchPanel, self).__init__(parent)
        lay =QHBoxLayout(self)
        done_button = QPushButton('Закрыть')
        self.case_button = QPushButton('Точное соответствие', checkable=True)
        prev_button = QPushButton('< Предыдущее')
        next_button = QPushButton('Следующее >')
        self.search_le = QLineEdit()
        self.setFocusProxy(self.search_le)
        done_button.clicked.connect(self.closed)
        next_button.clicked.connect(self.update_searching)
        prev_button.clicked.connect(self.on_preview_find)
        self.case_button.clicked.connect(self.update_searching)
        self.horizontalSpacer = QSpacerItem(40, 20, QSizePolicy.Expanding, QSizePolicy.Minimum)

        lay.addItem(self.horizontalSpacer)
        for btn in (self.case_button, self.search_le, prev_button, next_button, done_button, done_button):
            lay.addWidget(btn)
            if isinstance(btn, QPushButton): btn.clicked.connect(self.setFocus)
        self.search_le.textChanged.connect(self.update_searching)
        self.search_le.returnPressed.connect(self.update_searching)
        self.closed.connect(self.search_le.clear)

        QShortcut(QKeySequence.FindNext, self, activated=next_button.animateClick)
        QShortcut(QKeySequence.FindPrevious, self, activated=prev_button.animateClick)
        QShortcut(QKeySequence(Qt.Key_Escape), self.search_le, activated=self.closed)

    @pyqtSlot()
    def on_preview_find(self):
        self.update_searching(QtWebEngineWidgets.QWebEnginePage.FindBackward)

    @pyqtSlot()
    def update_searching(self, direction=QtWebEngineWidgets.QWebEnginePage.FindFlag()):
        flag = direction
        if self.case_button.isChecked():
            flag |= QtWebEngineWidgets.QWebEnginePage.FindCaseSensitively
        self.searched.emit(self.search_le.text(), flag)

    def showEvent(self, event):
        super(SearchPanel, self).showEvent(event)
        self.setFocus(True)



def show_settings():
    wSets=Settings(mw)
    wSets.show()

class Settings(QDialog, sets.Ui_Settings):       # окно настроек
    def __init__(self, parent=None): 
        QDialog.__init__(self, parent) 
        self.setupUi(self)
        self.conv1.setVisible(False)
        self.conv2.setVisible(False)
        
        self.path10.setText(pth10)
        self.path11.setText(pth11)
        self.path20.setText(pth20)
        self.path21.setText(pth21)
        
        self.cbHideDel.setChecked(hideDel)
        self.proverka()
        self.bSave.clicked.connect(self.saveSets)
        self.sel10.clicked.connect(self.selPth10)
        self.sel11.clicked.connect(self.selPth11)
        self.sel20.clicked.connect(self.selPth20)
        self.sel21.clicked.connect(self.selPth21)
        self.conv2.clicked.connect(self.convPth20)

    def saveSets(self):
        global pth10,pth11,pth20,pth21,hideDel,mod1
        if self.conv2.isVisible():
            QMessageBox.information(mw.centralwidget,"Сохранение параметров","База данных не преобразована к нужному формату.\nОна не будет использована и пути к ней не сохранятся.")


        if self.conv1.isVisible()==True:
            self.path10.clear()
            pth10=''
        else:
            pth10=self.path10.text()
            if pth10.rpartition("/")[2]=="torrents.db3":
                mod1=1
            elif pth10.rpartition("/")[2]=="torrents2.db3":
                mod1=2
            mw.settings.setValue("mod1",mod1)
        
        mw.settings.setValue("pth10",pth10)
        pth11=self.path11.text()
        mw.settings.setValue("pth11",pth11)

        if self.conv2.isVisible()==True:
            self.path20.clear()
            pth20=''
        else:
            pth20=self.path20.text()
            
        mw.settings.setValue("pth20",pth20)
        pth21=self.path21.text()
        mw.settings.setValue("pth21",pth21)
        

        mw.check_db()
        if self.cbHideDel.isChecked():
            hideDel=1
            mw.settings.setValue("hideDel",1)
        else:
            hideDel=0
            mw.settings.setValue("hideDel",0)
        self.close()
        mw.reset_()
        mw.first_start()

    def proverka(self):
        if pth20.endswith(".txt")==True:
            self.conv2.setVisible(True)
            self.path20.setStyleSheet(u"background-color: rgb(255, 189, 190);")
            self.path20.setToolTip("Необходимо конвертировать во внутрений формат\nНажмите кнопку справа")
        else:
            self.conv2.setVisible(False)
            self.path20.setStyleSheet(u"background-color: rgb(255, 255, 255);")


    def selPth10(self):
        global pth10,mod1
        filename,ttt= QFileDialog.getOpenFileName(mw, "Выберите файл базы данных TORRENTS", "", "torrents*.db3")
        if filename!='':
            pth10=filename
            if filename.rpartition("/")[2]=="torrents.db3":
                mod1=1
            if filename.rpartition("/")[2]=="torrents2.db3":
                mod1=2
            self.path10.clear()
            self.path10.setText(filename)
            self.path10.setFocus()
            #self.proverka()
            
    def selPth11(self):
        global pth11
        filename,ttt= QFileDialog.getOpenFileName(mw, "Выберите файл базы данных CONTENT", "", "content.db3")
        if filename!='':
            self.path11.clear()
            self.path11.setText(filename)
            self.path11.setFocus()
            pth11=filename
    
    def selPth20(self):
        global pth20
        filename,ttt= QFileDialog.getOpenFileName(mw, "Выберите файл короткой базы раздач", "", "Текстовый *.txt ;; main.db3")
        if filename!='':
            pth20=filename
            self.path20.clear()
            self.path20.setText(filename)
            self.path20.setFocus()
            self.proverka()
            
    def selPth21(self):
        global pth21
        filename,ttt= QFileDialog.getOpenFileName(mw, "Выберите файл полной базы раздач", "", "Полная *.RDB")
        if filename!='':
            self.path21.clear()
            self.path21.setText(filename)
            self.path21.setFocus()
            pth21=filename


    def convPth20(self):
        global sel_file,pth20
        sel_file=self.path20.text()
        if sel_file != '':
            mw.centralwidget.setCursor(QCursor(Qt.WaitCursor))
            vvod=Dialog(mw)
            vvod.show()
            vvod.na4alo()
            if vvod.finished:
                pth20=os.getcwd() + "/DB/main.db3"
                self.path20.setText(pth20)
                self.proverka()
                #mw.selDB2()
                mw.first_start()



####################################################################################

def start_file(selDB=1):
    if selDB==1 or selDB==2:
        rez="/files/start.html"
    elif selDB==3:
        rez="/files/start_nnm.html"
    elif selDB==4:
        rez="/files/start_book.html"
    elif selDB==5:
        rez="/files/start_rutor.html"
    elif selDB==6:
        rez="/files/start_kinozal.html"
    elif selDB==7:
        rez="/files/start_rarbg.html"
    else:
        rez="/files/start.html"
    return rez                
            
def open_file():                # открытие прогрессбара загрузки файла
    global sel_file    
    sel_file,ttt= QFileDialog.getOpenFileName(mw, "Выберите файл для загрузки", "in", "*.txt")
    if sel_file != '':
        mw.centralwidget.setCursor(QCursor(Qt.WaitCursor))
        vvod=Dialog(mw)
        vvod.show()
        vvod.na4alo()
        
        #if vvod.thread==None:
        #    mw.first_start()
            #QMessageBox.information(self.centralwidget,"Загрузка обновления",'Готово!\nФайл "{0}" загружен.'.format(sel_file))

class Dialog(QDialog, dlg.Ui_Dialog):       # окно прогресса
    global sel_file
    
    def __init__(self, parent=None): 
        QDialog.__init__(self, parent) 
        self.setupUi(self)
        self.thread = None
            
    def na4alo(self):
        if self.thread is None:
            self.thread = MyProcessClass()
            self.thread.stepChanged.connect(self.onStepChanged)
            self.thread.finished.connect(self.onFinished)
            self.thread.start()
        else:
            self.thread.terminate()
            self.thread = None

    def onStepChanged(self, data):
        self.label_2.setText("Записано {0}".format(str(data)))
        self.progressBar.setValue(int(data*100/kol))
        if data == kol:
            self.progressBar.setValue(100)
            self.onFinished()

    def onFinished(self):   
        self.thread = None
        self.bOk.setEnabled(True)
        self.bCancel.setEnabled(False)
        self.bOk.setFocus()
        mw.centralwidget.setCursor(QCursor(Qt.ArrowCursor))
        self.bOk.clicked.connect(self.close)
        
        mw.selDB2()
        #mw.first_start()
        #if self.thread == None:
        #    self.bOk.clicked.connect(mw.first_start)

# класс данных
class MyProcessData:
    def __init__(self):
        self.num = 0

class MyProcessClass(QThread):      # сигналы для обновления виджетов диалога
    global sel_file,kol
    kol=0
    stepChanged = pyqtSignal(int)
    
    def __init__(self):
        super().__init__()
        myProcessData = MyProcessData() 
        self.data = myProcessData.num #,myProcessData.val

    def run(self):
        global DB,selectDB
        global kol
        kol=0
        sline = ''
        k = 0
        sql3.create_db()
        sql3.clean_db()

        DB=sql3.sqlite3.connect('DB/main.db3')
        with open(sel_file,"r",encoding="1251") as file:
            try:
                while True:
                    line=next(file)
                    kol += 1
            except:
                pass
            
        with open(sel_file,"r",encoding="1251") as lines:
            try:
                while True:
                    line=next(lines)
                
            #for line in lines:
                    tid = '0'
                    title = ''
                    forum = '0'
                    full_info = ''
                    category = '0'
                    forum_name = ''
                    author = ''
                    sline = line.split('‰')
                    tid = sline[1]
                    title = sline[2].upper() 
                    author = sline[12].upper()
                    forum = sline[4]
                    category = sline[3]
                    forum_name = sline[6]
                    full_info = sql3.zlib.compress(line.encode())

                    sql3.check_forum(forum,forum_name,category)
                    sql3.ins_tor(tid,category,forum,title,full_info,author)
                    k +=1
                    if k%1000 == 0:
                        self.data = k
                        self.stepChanged.emit(self.data)
                        sql3.dbc()
            
            except StopIteration:
                pass
            self.data = k
            self.stepChanged.emit(self.data)
            sql3.dbc()

  
def correct(txt):
    spis=re.findall(r'&#\d+;',txt)
    if len(spis)>0:
        for it in spis:
            txt=txt.replace(it,chr(int(it[2:-1])))
    txt=txt.replace('&quot;',chr(34))
    txt=txt.replace('&amp;',chr(38))
    txt=txt.replace('&lt;',chr(60))
    txt=txt.replace('&gt;',chr(62))
    txt=txt.replace('&LT;',chr(60))
    txt=txt.replace('&GT;',chr(62))
    return txt

def splitter(text=''):
    exists_act=False
    if selectDB==1:
        exists_act=os.path.exists(pth10.rpartition('/')[0] + '/actors.db3')
    ssq=''
    # ввести проверку по ДБ - для рутор не нужен поиск по персоне =================================================================================================
    if exists_act:
        for actor in re.findall(r"(\*)(.*?)(\*)",text):
            text=text.replace(actor[0] + actor[1] + actor[2],'')
            if len(actor)>0: ssq+=' AND people LIKE ("%{0}%")'.format(actor[1])
    if mod1==1 and selectDB==1:
        ntitle="title"
    else:
        ntitle="title_up"
    for fraza in re.findall(r"[\"](.*?)[\"]",text):
        text=text.replace(fraza,'')
        if len(fraza)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,fraza.upper())
    
    for author in re.findall(r"[\:](.*?)[\:]",text):
        text=text.replace(author,'')
        if len(author)>0: ssq+=' AND author LIKE ("%{0}%")'.format(author)
    for tid in re.findall(r"[#](.*?)[#]",text):
        if tid.isnumeric:
            text=text.replace(tid,'')
            if len(tid)>0: ssq+=' AND file_id={0}'.format(tid)    
    for word in re.split(r'\s',text):
        word=re.sub(r'[\"\:\*\+\<\>#–]','',word) #word=re.sub(r'[\"\'\:\*\+\<\>#?–]','',word)
        if len(word)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,word.upper())
    return ssq

def splitter0(text=''):
    ssq=''
    for actor in re.findall(r"(\*)(.*?)(\*)",text):
        text=text.replace(actor[0] + actor[1] + actor[2],'')
        if len(actor)>0: ssq+=' AND UPPER(person) LIKE ("%{0}%")'.format(actor[1].upper())
    if mod1==1:
        ntitle="title"
    elif mod1==2:
        ntitle="title_up"
    for fraza in re.findall(r"[\"](.*?)[\"]",text):
        text=text.replace(fraza,'')
        if len(fraza)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,fraza.upper())
    
    for author in re.findall(r"[\:](.*?)[\:]",text):
        text=text.replace(author,'')
        if len(author)>0: ssq+=' AND UPPER(person) LIKE ("%{0}%")'.format(author.upper())
    for tid in re.findall(r"[#](.*?)[#]",text):
        text=text.replace(tid,'')
        if len(tid)>0: ssq+=' AND file_id={0}'.format(tid)    
    for word in re.split(r'\s',text):
        word=re.sub(r'[\"\:\*\+\<\>#–]','',word) 
        if len(word)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,word.upper())
    return ssq

def splitter_r(text=''):
    ssq=''
    ntitle="title"
    for fraza in re.findall(r"[\"](.*?)[\"]",text):
        text=text.replace(fraza,'')
        if len(fraza)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,fraza.upper())
    for tid in re.findall(r"[#](.*?)[#]",text):
        text=text.replace(tid,'')
        if len(tid)>0: ssq+=' AND id={0}'.format(tid)
    for word in re.split(r'\s',text):
        word=re.sub(r'[\"\:\*\+\<\>#–]','',word) #word=re.sub(r'[\"\'\:\*\+\<\>#?–]','',word)
        if len(word)>0: ssq+=' AND UPPER({0}) LIKE ("%{1}%")'.format(ntitle,word.upper())
    return ssq

def actsplitter(text=''):
    exists_act=False
    exists_act=os.path.exists(pth10.rpartition('/')[0] + '/actors.db3')
    ssq=''
    if exists_act:
        for actor in re.findall(r"(\*)(.*?)(\*)",text):
            #text=text.replace(actor[0] + actor[1] + actor[2],'')
            if len(actor)>0: ssq+=' AND people LIKE ("%{0}%")'.format(actor[1])
    #text=text.replace("**","")
    return ssq,text   

def actsplitter0(text=''):
    ssq=''
    for actor in re.findall(r"(\*)(.*?)(\*)",text):
        #text=text.replace(actor[0] + actor[1] + actor[2],'')
        if len(actor)>0: ssq+=' AND UPPER(person) LIKE ("%{0}%")'.format(actor[1].upper())
    #text=text.replace("**","")
    return ssq,text      

def sepp(bsize=0):
    s = str(bsize)
    return s[-12:-9] + ' ' + s[-9:-6] + ' ' + s[-6:-3] + ' ' +s[-3:]


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

def save_param():
    global myList,myDict
    param['myDict'] = myDict
    output = open('param.pkl', 'wb')
    pickle.dump(param, output)
    output.close()

def load_param():
    global myList,myDict,selectDB
    if not os.path.exists("tmp"):
        os.mkdir("tmp")
    if not os.path.exists("in"):
        os.mkdir("in")
    if not os.path.exists("out_html"):
        os.mkdir("out_html")
    if not os.path.exists("DB"):
        os.mkdir("DB")
    try:
        infile = open('param.pkl', 'rb')
        param = pickle.load(infile)
        infile.close()
    except:
        output = open('param.pkl', 'wb')
        output.close()
    try:
        #myList=param.get('myList',[])
        myDict=param.get('myDict',{})
        myList= myDict.get(str(selectDB),[])
    except:
        pass
        
    if len(myList)>0:
        mw.actionList.setEnabled(True)
        mw.bList.setEnabled(True)
        mw.bList.setText(u"Закладки: {0}".format(len(myList)))
        mw.bList.setToolTip(u"В списке записей: {0}".format(len(myList)))
    else:
        mw.bList.setText(u"Закладки")
        mw.bList.setToolTip(u"В списке записей: 0")
        mw.bList.setEnabled(False)
        mw.actionList.setEnabled(False)


if __name__ == '__main__':
    import sys
    global page
    os.environ["QTWEBENGINE_CHROMIUM_FLAGS"] = "--same-site-by-default-cookies --disable-logging --cookies-without-same-site-must-be-secure" #--remote-debugging-port=4000 --enable-blink-features=ShadowDOMV0,CustomElementsV0" # --disable-logging   cookies-without-same-site-must-be-secure     same-site-by-default-cookies
    os.chdir(os.getcwd())
    app = QApplication(sys.argv)
    app.setStyleSheet("QHeaderView::section { background-color: #fafafa }")
    app.setWindowIcon(QIcon('logo.ico'))
    mw = MyWindow()
    selectDB,mod1 = mw.check_db()
    mw.first_start()
    load_param()
    sys.exit(app.exec_())
