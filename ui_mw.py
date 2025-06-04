# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'mwPKTpBA.ui'
##
## Created by: Qt User Interface Compiler version 5.15.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PyQt5.QtCore import QSize,QSettings,pyqtSignal,QCoreApplication,QRect,QMetaObject,Qt
from PyQt5.QtGui import QIcon,QFont
from PyQt5.QtWidgets import QTreeWidget,QAction,QWidget,QFrame,QSizePolicy,QComboBox,QVBoxLayout,QHBoxLayout,QSpacerItem,QLineEdit,QPushButton,QSplitter,QToolButton,QTreeWidgetItem,QMenuBar,QStatusBar,QMenu, QToolBar
from PyQt5 import QtWebEngineWidgets
import rc

class myTreeWidget(QTreeWidget):
    resized = pyqtSignal()
    def resizeEvent(self, event) -> None:
        self.resized.emit()
        return super(myTreeWidget, self).resizeEvent(event)


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(1056, 600)
        self.settings = QSettings("Y3401","Torrent-off")


        icon = QIcon()
        icon.addFile(u":/files/img/favicon.png", QSize(), QIcon.Normal, QIcon.Off)
        MainWindow.setWindowIcon(icon)
        self.actionUpdate = QAction(MainWindow)
        self.actionUpdate.setObjectName(u"actionUpdate")
        icon1 = QIcon()
        icon1.addFile(u":/files/img/receive.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionUpdate.setIcon(icon1)
        self.actionSearch = QAction(MainWindow)
        self.actionSearch.setObjectName(u"actionSearch")
        icon15 = QIcon()
        icon15.addFile(u":/files/img/search.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionSearch.setIcon(icon15)

        self.actionQuit = QAction(MainWindow)
        self.actionQuit.setObjectName(u"actionQuit")
        icon2 = QIcon()
        icon2.addFile(u":/files/img/quit.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionQuit.setIcon(icon2)
        self.actionQuit.setMenuRole(QAction.QuitRole)

        self.actionFAQ = QAction(MainWindow)
        self.actionFAQ.setObjectName(u"actionFAQ")
        icon3 = QIcon()
        icon3.addFile(u":/files/img/transaction0.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionFAQ.setIcon(icon3)
        self.actionAbout = QAction(MainWindow)
        self.actionAbout.setObjectName(u"actionAbout")
        icon4 = QIcon()
        icon4.addFile(u":/files/img/info.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionAbout.setIcon(icon4)
        
        self.action = QAction(MainWindow)
        self.action.setObjectName(u"action")
        self.action.setCheckable(True)
        self.action.setChecked(True)
        
        self.baza1 = QAction(MainWindow)
        self.baza1.setObjectName(u"baza1")
        self.baza1.setCheckable(True)
        self.baza1.setEnabled(False)
        self.baza1.setChecked(False)
        self.baza1.setVisible(False)

        self.baza2 = QAction(MainWindow)
        self.baza2.setObjectName(u"baza2")
        self.baza2.setCheckable(True)
        self.baza2.setEnabled(False)
        self.baza2.setChecked(False)
        self.baza2.setVisible(False)

        self.baza3 = QAction(MainWindow)
        self.baza3.setObjectName(u"baza3")
        self.baza3.setCheckable(True)
        self.baza3.setEnabled(False)
        self.baza3.setChecked(False)
        self.baza3.setVisible(False)

        self.baza4 = QAction(MainWindow)
        self.baza4.setObjectName(u"baza4")
        self.baza4.setCheckable(True)
        self.baza4.setEnabled(False)
        self.baza4.setChecked(False)
        self.baza4.setVisible(False)

        self.baza5 = QAction(MainWindow)
        self.baza5.setObjectName(u"baza5")
        self.baza5.setCheckable(True)
        self.baza5.setEnabled(False)
        self.baza5.setChecked(False)
        self.baza5.setVisible(False)

        self.baza6 = QAction(MainWindow)
        self.baza6.setObjectName(u"baza6")
        self.baza6.setCheckable(True)
        self.baza6.setEnabled(False)
        self.baza6.setChecked(False)
        self.baza6.setVisible(False)
        
        self.baza7 = QAction(MainWindow)
        self.baza7.setObjectName(u"baza7")
        self.baza7.setCheckable(True)
        self.baza7.setEnabled(False)
        self.baza7.setChecked(False)
        self.baza7.setVisible(False)

        self.actionList = QAction(MainWindow)
        self.actionList.setObjectName(u"actionList")
        icon14 = QIcon()
        icon14.addFile(u":/files/img/editpaste.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionList.setIcon(icon14)
        self.actionList.setEnabled(False)

        self.actionSettings = QAction(MainWindow)
        self.actionSettings.setObjectName(u"actionSetings")
        icon17 = QIcon()
        icon17.addFile(u":/files/img/configure.png", QSize(), QIcon.Normal, QIcon.Off)
        self.actionSettings.setIcon(icon17)

        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.verticalLayout = QVBoxLayout(self.centralwidget)
        self.verticalLayout.setObjectName(u"verticalLayout")
        self.verticalLayout.setContentsMargins(-1, 0, -1, 3)
        self.frame = QFrame(self.centralwidget)
        self.frame.setObjectName(u"frame")
        sizePolicy = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.frame.sizePolicy().hasHeightForWidth())
        self.frame.setSizePolicy(sizePolicy)
        self.frame.setMinimumSize(QSize(0, 70))
        self.frame.setFrameShape(QFrame.NoFrame)
        self.frame.setFrameShadow(QFrame.Raised)
        self.frame.setLineWidth(0)
        self.horizontalLayout = QHBoxLayout(self.frame)
        self.horizontalLayout.setSpacing(0)
        self.horizontalLayout.setObjectName(u"horizontalLayout")
        self.horizontalLayout.setContentsMargins(0, 0, 0, 0)
        self.horizontalLayout_2 = QHBoxLayout()
        self.horizontalLayout_2.setObjectName(u"horizontalLayout_2")
        self.horizontalSpacer = QSpacerItem(40, 20, QSizePolicy.Expanding, QSizePolicy.Minimum)

        self.horizontalLayout_2.addItem(self.horizontalSpacer)

        self.frame1 = QFrame(self.frame)
        self.frame1.setObjectName(u"frame1")
        sizePolicy1 = QSizePolicy(QSizePolicy.Fixed, QSizePolicy.MinimumExpanding)
        sizePolicy1.setHorizontalStretch(0)
        sizePolicy1.setVerticalStretch(0)
        sizePolicy1.setHeightForWidth(self.frame1.sizePolicy().hasHeightForWidth())
        self.frame1.setSizePolicy(sizePolicy1)
        self.frame1.setMinimumSize(QSize(720, 0))
        self.frame1.setMaximumSize(QSize(720, 16777215))
        font = QFont()
        font.setPointSize(9)
        self.frame1.setFont(font)
        self.frame1.setFrameShape(QFrame.WinPanel)
        self.frame1.setFrameShadow(QFrame.Raised)
        self.frame1.setLineWidth(1)

        self.keyWords = QLineEdit(self.frame1)
        self.keyWords.setObjectName(u"keyWords")
        self.keyWords.setGeometry(QRect(10, 10, 581, 22))
        sizePolicy2 = QSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
        sizePolicy2.setHorizontalStretch(0)
        sizePolicy2.setVerticalStretch(0)
        sizePolicy2.setHeightForWidth(self.keyWords.sizePolicy().hasHeightForWidth())
        self.keyWords.setSizePolicy(sizePolicy2)
        self.keyWords.setMinimumSize(QSize(450, 0))
        font1 = QFont()
        font1.setPointSize(10)
        self.keyWords.setFont(font1)
        self.keyWords.setStyleSheet(u"background-color: rgb(255, 255, 255);")
        self.keyWords.setMaxLength(120)

        self.bClean = QPushButton(self.frame1)
        self.bClean.setObjectName(u"bClean")
        self.bClean.setGeometry(QRect(590, 6, 16, 16))
        sizePolicy2.setHeightForWidth(self.bClean.sizePolicy().hasHeightForWidth())
        self.bClean.setSizePolicy(sizePolicy2)
        self.bClean.setMinimumSize(QSize(16, 16))
        self.bClean.setMaximumSize(QSize(16, 16))
        icon5 = QIcon()
        icon5.addFile(u":/files/img/remove.png", QSize(), QIcon.Normal, QIcon.Off)
        self.bClean.setIcon(icon5)
        self.bClean.setIconSize(QSize(16, 16))
        self.bClean.setFlat(True)

        self.selRazdel = QComboBox(self.frame1)
        self.selRazdel.setObjectName(u"selRazdel")
        self.selRazdel.setGeometry(QRect(10, 40, 221, 22))
        sizePolicy2.setHeightForWidth(self.selRazdel.sizePolicy().hasHeightForWidth())
        self.selRazdel.setSizePolicy(sizePolicy2)
        self.selRazdel.setMinimumSize(QSize(200, 0))
        self.selRazdel.setMaximumSize(QSize(400, 16777215))
        font2 = QFont()
        font2.setPointSize(8)
        self.selRazdel.setFont(font2)
        self.selRazdel.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(0, 0, 127);")
        self.selRazdel.setSizeAdjustPolicy(QComboBox.AdjustToContentsOnFirstShow)
        self.selRazdel.setMinimumContentsLength(1)
        self.selRazdel.setDuplicatesEnabled(True)
        self.selRazdel.setMaxVisibleItems(28)

        self.bSearch = QPushButton(self.frame1)
        self.bSearch.setObjectName(u"bSearch")
        self.bSearch.setGeometry(QRect(610, 9, 101, 31))
        sizePolicy2.setHeightForWidth(self.bSearch.sizePolicy().hasHeightForWidth())
        self.bSearch.setSizePolicy(sizePolicy2)
        icon15 = QIcon()
        icon15.addFile(u":/files/img/search.png", QSize(), QIcon.Normal, QIcon.Off)
        self.bSearch.setIcon(icon15)

        self.selForum = QComboBox(self.frame1)
        self.selForum.setObjectName(u"selForum")
        self.selForum.setGeometry(QRect(240, 40, 351, 22))
        self.selForum.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(0, 0, 127);")
        self.selForum.setMaxVisibleItems(30)
        
        self.bList = QPushButton(self.frame1)
        self.bList.setObjectName(u"bList")
        self.bList.setEnabled(False)
        self.bList.setGeometry(QRect(610, 43, 101, 20))
        #self.bList.setIcon(icon14)
        self.horizontalLayout_2.addWidget(self.frame1)

        self.horizontalSpacer_2 = QSpacerItem(40, 20, QSizePolicy.Expanding, QSizePolicy.Minimum)

        self.horizontalLayout_2.addItem(self.horizontalSpacer_2)


        self.horizontalLayout.addLayout(self.horizontalLayout_2)


        self.verticalLayout.addWidget(self.frame)

        self.horizontalLayout_3 = QHBoxLayout()
        self.horizontalLayout_3.setObjectName(u"horizontalLayout_3")


        self.splitter1 = QSplitter(Qt.Horizontal)
        self.horizontalLayout_3.addWidget(self.splitter1)

        self.treeWidget = myTreeWidget(self.centralwidget)
        self.treeWidget.setStyleSheet('''QToolTip { 
                           background-color: #fffaea; 
                           color: darkblue; 
                           border: #6a7abb solid 2px;
                           border-radius: 5px;
                           font-size: 11pt;
                           padding: 15px;
                           }''') 
        
        __qtreewidgetitem = QTreeWidgetItem()
        __qtreewidgetitem.setText(7, u"Размер");
        __qtreewidgetitem.setText(6, u"Создано");
        __qtreewidgetitem.setText(5, u"tid");
        __qtreewidgetitem.setText(4, u"Автор");
        __qtreewidgetitem.setText(3, u"mgn");
        __qtreewidgetitem.setText(2, u"info");
        __qtreewidgetitem.setText(1, u"hash");
        __qtreewidgetitem.setText(0, u"Наименование");
        __qtreewidgetitem.setTextAlignment(0,4);
        __qtreewidgetitem.setTextAlignment(2,4);
        __qtreewidgetitem.setTextAlignment(3,4);
        __qtreewidgetitem.setTextAlignment(4,4);
        __qtreewidgetitem.setTextAlignment(6,4);
        __qtreewidgetitem.setTextAlignment(7,4);
        self.treeWidget.setHeaderItem(__qtreewidgetitem)
        self.treeWidget.setObjectName(u"treeWidget")
        self.treeWidget.setUniformRowHeights(True)
        self.treeWidget.setWordWrap(True)
        self.treeWidget.setMinimumSize(QSize(300,0))
        self.treeWidget.setMaximumSize(QSize(1000,16777215))
        sizePolicy3 = QSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        sizePolicy3.setVerticalStretch(0)
        sizePolicy3.setHeightForWidth(self.treeWidget.sizePolicy().hasHeightForWidth())
        self.treeWidget.setSizePolicy(sizePolicy3)
        
        self.treeWidget.setSizePolicy(sizePolicy3)
        
        if self.settings.contains("Col0"):                              # title
            self.treeWidget.setColumnWidth(0,self.settings.value("Col0"))
        else:
            self.treeWidget.setColumnWidth(0,550)

        self.treeWidget.setColumnHidden(1,True)                          # magnet

        if self.settings.contains("Col2"):                              # info
            self.treeWidget.setColumnWidth(2,self.settings.value("Col2"))
        else:
            self.treeWidget.setColumnWidth(2,45)

        if self.settings.contains("Col3"):                              # magnet icon
            self.treeWidget.setColumnWidth(3,self.settings.value("Col3"))
        else:
            self.treeWidget.setColumnWidth(3,45)

        if self.settings.contains("Col4"):                               # author
            self.treeWidget.setColumnWidth(4,self.settings.value("Col4"))
        else:
            self.treeWidget.setColumnWidth(4,110)
        
        self.treeWidget.setColumnHidden(5,True)                          # tid

        if self.settings.contains("Col6"):                               # date_reg
            self.treeWidget.setColumnWidth(6,self.settings.value("Col6"))
        else:
            self.treeWidget.setColumnWidth(6,130)

        if self.settings.contains("Col7"):                               # size
            self.treeWidget.setColumnWidth(7,self.settings.value("Col7"))
        else:
            self.treeWidget.setColumnWidth(7,80)

        #out=self.treeWidget.findItems(tid, Qt.MatchContains|Qt.MatchRecursive,5)[0]
        #out.setSelected(True)
        
        self.treeWidget.setTextElideMode(Qt.TextElideMode.ElideNone)
        self.treeWidget.setWordWrap(True)
        self.treeWidget.setColumnCount(8)
        self.splitter1.addWidget(self.treeWidget)
        

        self.webBrowser = QtWebEngineWidgets.QWebEngineView(self.centralwidget) # QWebEngineView
        self.webBrowser.setObjectName(u"webBrowser")
        sizePolicy4 = QSizePolicy(QSizePolicy.Expanding, QSizePolicy.Expanding)
        sizePolicy4.setVerticalStretch(0)
        sizePolicy4.setHeightForWidth(self.treeWidget.sizePolicy().hasHeightForWidth())
        self.webBrowser.setSizePolicy(sizePolicy4)
        self.splitter1.addWidget(self.webBrowser)


        if self.settings.contains("Size1"):                              # treeWidget
            self.treeWidget.setGeometry(self.settings.value("Size1"))
        
        if self.settings.contains("Size2"):                              # weBrowser
            self.webBrowser.setGeometry(self.settings.value("Size2"))
        else:
            sizePolicy4.setHorizontalStretch(6)
        ########################################
        self.verticalLayout.addLayout(self.horizontalLayout_3)

        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 1056, 21))
        self.menuAction = QMenu(self.menubar)
        self.menuAction.setObjectName(u"menuAction")
        self.menu = QMenu(self.menuAction)
        self.menu.setObjectName(u"menu")
        icon6 = QIcon()
        icon6.addFile(u":/files/img/open.png", QSize(), QIcon.Normal, QIcon.Off)
        self.menu.setIcon(icon6)
        self.menuHelp = QMenu(self.menubar)
        self.menuHelp.setObjectName(u"menuHelp")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        self.statusbar.setSizeGripEnabled(True)
        MainWindow.setStatusBar(self.statusbar)

        self.toolBar = QToolBar(MainWindow)
        self.toolBar.setObjectName(u"toolBar")
        self.toolBar.setMaximumSize(QSize(340, 32))
        MainWindow.addToolBar(Qt.NoToolBarArea, self.toolBar)
        #self.toolBar.setAllowedAreas(Qt.NoToolBarArea)
        self.toolBar.setFloatable(False)
        self.toolBar.setMovable(False)
        self.toolBar.setAutoFillBackground(True)
        #self.toolBar.setIconSize(QSize(30, 30))
        #self.toolBar.setGeometry(QRect(1650,100,250,32))

        self.toolBack = QToolButton(self.toolBar)
        self.toolBack.setObjectName(u"toolBack")
        self.toolBar.addWidget(self.toolBack)
        icon7 = QIcon()
        icon7.addFile(u":/files/img/left.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolBack.setIcon(icon7)
        self.toolBack.setAutoRaise(True)
        self.toolBack.setToolTip(u"Назад")
        #self.toolBack.setEnabled(False)

        self.toolForward = QToolButton(self.toolBar)
        self.toolForward.setObjectName(u"toolForward")
        self.toolBar.addWidget(self.toolForward)
        icon16 = QIcon()
        icon16.addFile(u":/files/img/right.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolForward.setIcon(icon16)
        self.toolForward.setAutoRaise(True)
        self.toolForward.setToolTip(u"Вперед")
        
        self.toolUp = QToolButton(self.toolBar)
        self.toolUp.setObjectName(u"toolUp")
        self.toolBar.addWidget(self.toolUp)
        icon9 = QIcon()
        icon9.addFile(u":/files/img/up.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolUp.setIcon(icon9)
        self.toolUp.setAutoRaise(True)
        self.toolUp.setToolTip(u"Наверх страницы")

        self.toolBookmark = QToolButton(self.toolBar)
        self.toolBookmark.setObjectName(u"toolBookmark")
        self.toolBar.addWidget(self.toolBookmark)
        icon15 = QIcon()
        icon15.addFile(u":/files/img/bookmark_g.png", QSize(), QIcon.Normal, QIcon.Off)
        icon15.addFile(u":/files/img/bookmark.png", QSize(), QIcon.Normal, QIcon.On)
        self.toolBookmark.setIcon(icon15)
        self.toolBookmark.setCheckable(True)
        self.toolBookmark.setChecked(False)
        self.toolBookmark.setAutoRaise(True)
        self.toolBookmark.setToolTip(u"Закладка")
        self.toolBookmark.setEnabled(False)
        #self.toolBookmark.changeEvent()
        

        self.toolMinus = QToolButton(self.toolBar)
        self.toolMinus.setObjectName(u"toolMinus")
        self.toolBar.addWidget(self.toolMinus)
        icon12 = QIcon()
        icon12.addFile(u":/files/img/zoomminus.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolMinus.setIcon(icon12)
        self.toolMinus.setAutoRaise(True)
        self.toolMinus.setToolTip(u"- Уменьшить")

        self.toolPlus = QToolButton(self.toolBar)
        self.toolPlus.setObjectName(u"toolPlus")
        self.toolBar.addWidget(self.toolPlus)
        icon11 = QIcon()
        icon11.addFile(u":/files/img/zoomplus.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolPlus.setIcon(icon11)
        self.toolPlus.setAutoRaise(True)
        self.toolPlus.setToolTip(u"+ Увеличить")

        self.toolSave = QToolButton(self.toolBar)
        self.toolSave.setObjectName(u"toolSave")
        self.toolBar.addWidget(self.toolSave)
        icon8 = QIcon()
        icon8.addFile(u":/files/img/disk.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolSave.setIcon(icon8)
        self.toolSave.setAutoRaise(True)
        self.toolSave.setToolTip(u"Сохранить")
        self.toolSave.setEnabled(False)
        
        self.toolPrint = QToolButton(self.toolBar)
        self.toolPrint.setObjectName(u"toolPrint")
        self.toolBar.addWidget(self.toolPrint)
        icon10 = QIcon()
        icon10.addFile(u":/files/img/printer.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolPrint.setIcon(icon10)
        self.toolPrint.setAutoRaise(True)
        self.toolPrint.setToolTip(u"Распечатать")

        self.toolHash = QToolButton(self.toolBar)
        self.toolHash.setObjectName(u"toolHash")
        self.toolBar.addWidget(self.toolHash)
        icon13 = QIcon()
        icon13.addFile(u":/files/files/magnet_1.svg", QSize(), QIcon.Normal, QIcon.Off)
        self.toolHash.setIcon(icon13)
        self.toolHash.setAutoRaise(True)
        self.toolHash.setToolTip(u"Скачать торрент по magnet-ссылке")
        self.toolHash.setEnabled(False)

        self.toolWeb = QToolButton(self.toolBar)
        self.toolWeb.setObjectName(u"toolWeb")
        self.toolBar.addWidget(self.toolWeb)
        icon14 = QIcon()
        icon14.addFile(u":/files/img/internet_browser_icon_124066.png", QSize(), QIcon.Normal, QIcon.Off)
        self.toolWeb.setIcon(icon14)
        self.toolWeb.setAutoRaise(True)
        self.toolWeb.setToolTip(u"Просмотр во внешнем браузере")
        self.toolWeb.setEnabled(False)

        QWidget.setTabOrder(self.keyWords, self.selRazdel)
        QWidget.setTabOrder(self.selRazdel, self.selForum)
        QWidget.setTabOrder(self.selForum, self.bSearch)
        QWidget.setTabOrder(self.bSearch, self.bClean)
        QWidget.setTabOrder(self.bClean, self.treeWidget)
        

        self.menubar.addAction(self.menuAction.menuAction())
        self.menubar.addAction(self.menuHelp.menuAction())
        self.menuAction.addAction(self.actionUpdate)
        self.menuAction.addAction(self.actionSearch)
        self.menuAction.addAction(self.menu.menuAction())
        self.menuAction.addAction(self.actionList)
        #file_menu = menubar.addMenu('&File')
        #self.menuAction('&Find...', self.webBrowser.search_toolbar.show, shortcut=Qt.QKeySequence.Find)
        self.menuAction.addAction(self.actionSettings)
        self.menuAction.addSeparator()
        self.menuAction.addAction(self.actionQuit)
        self.menu.addAction(self.baza1)
        self.menu.addAction(self.baza2)
        self.menu.addAction(self.baza3)
        self.menu.addAction(self.baza4)
        self.menu.addAction(self.baza5)
        self.menu.addAction(self.baza6)
        self.menu.addAction(self.baza7)
        self.menuHelp.addAction(self.actionFAQ)
        self.menuHelp.addAction(self.actionAbout)

        self.retranslateUi(MainWindow)
        self.bClean.clicked.connect(self.keyWords.clear)
        self.actionQuit.triggered.connect(MainWindow.close)
        
        

        self.selRazdel.setCurrentIndex(-1)


        QMetaObject.connectSlotsByName(MainWindow)

        if self.settings.contains("Size1"): 
            self.treeWidget.setGeometry(self.settings.value("Size1"))
        else:
            sizePolicy3.setHorizontalStretch(1)

        
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"Поисковая система Infotor-2, v.2.2", None))
        self.actionUpdate.setText(QCoreApplication.translate("MainWindow", u"Загрузить обновление", None))
        self.actionUpdate.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+O", None))
        self.actionSearch.setText(QCoreApplication.translate("MainWindow", u"Поиск на web-странице", None))
        self.actionSearch.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+F", None))
        self.actionList.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+L", None))
        self.actionQuit.setText(QCoreApplication.translate("MainWindow", u"Выход", None))
        self.actionQuit.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+Q", None))
        self.actionFAQ.setText(QCoreApplication.translate("MainWindow", u"FAQ", None))
        self.actionFAQ.setShortcut(QCoreApplication.translate("MainWindow", u"F1", None))
        self.actionAbout.setText(QCoreApplication.translate("MainWindow", u"О программе..", None))
        self.baza1.setText(QCoreApplication.translate("MainWindow", u"Infotor", None))
        self.baza2.setText(QCoreApplication.translate("MainWindow", u"БД с комментариями", None))
        self.baza3.setText(QCoreApplication.translate("MainWindow", u"NNMClub", None))
        self.baza4.setText(QCoreApplication.translate("MainWindow", u"BookTracker", None))
        self.baza5.setText(QCoreApplication.translate("MainWindow", u"RUTOR", None))
        self.baza6.setText(QCoreApplication.translate("MainWindow", u"Kinozal.tv", None))
        self.baza7.setText(QCoreApplication.translate("MainWindow", u"rarbg", None))
        self.menu.setTitle(QCoreApplication.translate("MainWindow", u"Выбор базы", None))
        self.actionSettings.setText(QCoreApplication.translate("MainWindow", u"Настройки", None))
        self.keyWords.setPlaceholderText(QCoreApplication.translate("MainWindow", "Ключевые слова для поиска", None))
        self.keyWords.setToolTip(QCoreApplication.translate("MainWindow", "Поиск по ID раздачи - #1234#\nПоиск по персоне - *Имя или Фамилия*\nПоиск по автору раздачи - :nickname:\nФразы - в двойных кавычках", None))
        self.actionList.setText(QCoreApplication.translate("MainWindow", u"Список закладок", None))

        self.bClean.setToolTip(QCoreApplication.translate("MainWindow", u"Очистить поле ввода", None))
        self.bClean.setText("")
        self.bClean.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+Del", None))
        self.selRazdel.setToolTip(QCoreApplication.translate("MainWindow", "Категория", None))
        self.selRazdel.setCurrentText("")
        self.selForum.setToolTip(QCoreApplication.translate("MainWindow", "Форум", None))
        self.bSearch.setText(QCoreApplication.translate("MainWindow", "Поиск", None))
        self.bSearch.setShortcut(QCoreApplication.translate("MainWindow", u"Enter", None))
        self.selForum.setPlaceholderText(QCoreApplication.translate("MainWindow", u"Форумы", None))
        self.menuAction.setTitle(QCoreApplication.translate("MainWindow", u"Действия", None))
        self.menuHelp.setTitle(QCoreApplication.translate("MainWindow", u"?", None))
        self.toolBar.setWindowTitle(QCoreApplication.translate("MainWindow", u"toolBar", None))
        self.toolBack.setText(QCoreApplication.translate("MainWindow", u"", None))
        self.bList.setText(QCoreApplication.translate("MainWindow", u"Закладки", None))

    # retranslateUi
