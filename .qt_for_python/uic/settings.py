# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'i:\rdb\infotor_2\settings.ui'
#
# Created by: PyQt5 UI code generator 5.15.7
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_Settings(object):
    def setupUi(self, Settings):
        Settings.setObjectName("Settings")
        Settings.resize(460, 485)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Preferred, QtWidgets.QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(Settings.sizePolicy().hasHeightForWidth())
        Settings.setSizePolicy(sizePolicy)
        Settings.setMinimumSize(QtCore.QSize(460, 485))
        Settings.setMaximumSize(QtCore.QSize(460, 485))
        Settings.setBaseSize(QtCore.QSize(460, 485))
        icon = QtGui.QIcon()
        icon.addPixmap(QtGui.QPixmap("i:\\rdb\\infotor_2\\files/configure.png"), QtGui.QIcon.Normal, QtGui.QIcon.Off)
        Settings.setWindowIcon(icon)
        Settings.setAutoFillBackground(False)
        Settings.setStyleSheet("font: 10pt \"MS Shell Dlg 2\";")
        Settings.setModal(True)
        self.Base1 = QtWidgets.QGroupBox(Settings)
        self.Base1.setGeometry(QtCore.QRect(10, 9, 441, 111))
        self.Base1.setObjectName("Base1")
        self.path10 = QtWidgets.QLineEdit(self.Base1)
        self.path10.setGeometry(QtCore.QRect(80, 30, 311, 21))
        self.path10.setStyleSheet("background-color: rgb(255, 189, 190);")
        self.path10.setObjectName("path10")
        self.path11 = QtWidgets.QLineEdit(self.Base1)
        self.path11.setGeometry(QtCore.QRect(80, 60, 311, 21))
        self.path11.setObjectName("path11")
        self.label = QtWidgets.QLabel(self.Base1)
        self.label.setGeometry(QtCore.QRect(10, 30, 61, 21))
        self.label.setObjectName("label")
        self.label_2 = QtWidgets.QLabel(self.Base1)
        self.label_2.setGeometry(QtCore.QRect(10, 60, 47, 16))
        self.label_2.setObjectName("label_2")
        self.sel10 = QtWidgets.QToolButton(self.Base1)
        self.sel10.setGeometry(QtCore.QRect(390, 30, 21, 21))
        self.sel10.setText("")
        icon1 = QtGui.QIcon()
        icon1.addPixmap(QtGui.QPixmap("i:\\rdb\\infotor_2\\files/open.png"), QtGui.QIcon.Normal, QtGui.QIcon.Off)
        self.sel10.setIcon(icon1)
        self.sel10.setObjectName("sel10")
        self.sel11 = QtWidgets.QToolButton(self.Base1)
        self.sel11.setGeometry(QtCore.QRect(390, 60, 21, 21))
        self.sel11.setText("")
        self.sel11.setIcon(icon1)
        self.sel11.setObjectName("sel11")
        self.conv1 = QtWidgets.QToolButton(self.Base1)
        self.conv1.setGeometry(QtCore.QRect(410, 30, 21, 21))
        self.conv1.setText("")
        self.conv1.setIcon(icon)
        self.conv1.setObjectName("conv1")
        self.cbHideDel = QtWidgets.QCheckBox(self.Base1)
        self.cbHideDel.setGeometry(QtCore.QRect(80, 90, 151, 17))
        self.cbHideDel.setObjectName("cbHideDel")
        self.Base2 = QtWidgets.QGroupBox(Settings)
        self.Base2.setGeometry(QtCore.QRect(10, 130, 441, 91))
        self.Base2.setObjectName("Base2")
        self.path20 = QtWidgets.QLineEdit(self.Base2)
        self.path20.setGeometry(QtCore.QRect(80, 30, 311, 21))
        self.path20.setObjectName("path20")
        self.path21 = QtWidgets.QLineEdit(self.Base2)
        self.path21.setGeometry(QtCore.QRect(80, 60, 311, 21))
        self.path21.setObjectName("path21")
        self.label_3 = QtWidgets.QLabel(self.Base2)
        self.label_3.setGeometry(QtCore.QRect(10, 30, 61, 21))
        self.label_3.setObjectName("label_3")
        self.label_4 = QtWidgets.QLabel(self.Base2)
        self.label_4.setGeometry(QtCore.QRect(10, 60, 51, 16))
        self.label_4.setObjectName("label_4")
        self.sel20 = QtWidgets.QToolButton(self.Base2)
        self.sel20.setGeometry(QtCore.QRect(390, 30, 21, 21))
        self.sel20.setText("")
        self.sel20.setIcon(icon1)
        self.sel20.setObjectName("sel20")
        self.sel21 = QtWidgets.QToolButton(self.Base2)
        self.sel21.setGeometry(QtCore.QRect(390, 60, 21, 21))
        self.sel21.setText("")
        self.sel21.setIcon(icon1)
        self.sel21.setObjectName("sel21")
        self.conv2 = QtWidgets.QToolButton(self.Base2)
        self.conv2.setGeometry(QtCore.QRect(410, 30, 21, 21))
        self.conv2.setText("")
        self.conv2.setIcon(icon)
        self.conv2.setObjectName("conv2")
        self.Base3 = QtWidgets.QGroupBox(Settings)
        self.Base3.setGeometry(QtCore.QRect(10, 230, 441, 61))
        self.Base3.setObjectName("Base3")
        self.path30 = QtWidgets.QLineEdit(self.Base3)
        self.path30.setGeometry(QtCore.QRect(80, 30, 311, 21))
        self.path30.setObjectName("path30")
        self.label_7 = QtWidgets.QLabel(self.Base3)
        self.label_7.setGeometry(QtCore.QRect(10, 30, 61, 21))
        self.label_7.setObjectName("label_7")
        self.sel30 = QtWidgets.QToolButton(self.Base3)
        self.sel30.setGeometry(QtCore.QRect(390, 30, 21, 21))
        self.sel30.setText("")
        self.sel30.setIcon(icon1)
        self.sel30.setObjectName("sel30")
        self.conv3 = QtWidgets.QToolButton(self.Base3)
        self.conv3.setGeometry(QtCore.QRect(410, 30, 21, 21))
        self.conv3.setText("")
        self.conv3.setIcon(icon)
        self.conv3.setObjectName("conv3")
        self.Base4 = QtWidgets.QGroupBox(Settings)
        self.Base4.setGeometry(QtCore.QRect(10, 300, 441, 61))
        self.Base4.setObjectName("Base4")
        self.path40 = QtWidgets.QLineEdit(self.Base4)
        self.path40.setGeometry(QtCore.QRect(80, 30, 311, 21))
        self.path40.setObjectName("path40")
        self.label_8 = QtWidgets.QLabel(self.Base4)
        self.label_8.setGeometry(QtCore.QRect(10, 30, 61, 21))
        self.label_8.setObjectName("label_8")
        self.sel40 = QtWidgets.QToolButton(self.Base4)
        self.sel40.setGeometry(QtCore.QRect(390, 30, 21, 21))
        self.sel40.setText("")
        self.sel40.setIcon(icon1)
        self.sel40.setObjectName("sel40")
        self.conv4 = QtWidgets.QToolButton(self.Base4)
        self.conv4.setGeometry(QtCore.QRect(410, 30, 21, 21))
        self.conv4.setText("")
        self.conv4.setIcon(icon)
        self.conv4.setObjectName("conv4")
        self.Base5 = QtWidgets.QGroupBox(Settings)
        self.Base5.setGeometry(QtCore.QRect(10, 370, 441, 61))
        self.Base5.setObjectName("Base5")
        self.path50 = QtWidgets.QLineEdit(self.Base5)
        self.path50.setGeometry(QtCore.QRect(80, 30, 311, 21))
        self.path50.setObjectName("path50")
        self.label_9 = QtWidgets.QLabel(self.Base5)
        self.label_9.setGeometry(QtCore.QRect(10, 30, 61, 21))
        self.label_9.setObjectName("label_9")
        self.sel50 = QtWidgets.QToolButton(self.Base5)
        self.sel50.setGeometry(QtCore.QRect(390, 30, 21, 21))
        self.sel50.setText("")
        self.sel50.setIcon(icon1)
        self.sel50.setObjectName("sel50")
        self.conv5 = QtWidgets.QToolButton(self.Base5)
        self.conv5.setGeometry(QtCore.QRect(410, 30, 21, 21))
        self.conv5.setText("")
        self.conv5.setIcon(icon)
        self.conv5.setObjectName("conv5")
        self.bSave = QtWidgets.QPushButton(Settings)
        self.bSave.setGeometry(QtCore.QRect(290, 450, 80, 23))
        self.bSave.setObjectName("bSave")
        self.bCancel = QtWidgets.QPushButton(Settings)
        self.bCancel.setGeometry(QtCore.QRect(370, 450, 80, 23))
        self.bCancel.setObjectName("bCancel")

        self.retranslateUi(Settings)
        self.bCancel.clicked.connect(Settings.reject) # type: ignore
        QtCore.QMetaObject.connectSlotsByName(Settings)

    def retranslateUi(self, Settings):
        _translate = QtCore.QCoreApplication.translate
        Settings.setWindowTitle(_translate("Settings", "Настройки программы"))
        self.Base1.setTitle(_translate("Settings", "1. Infotor"))
        self.label.setText(_translate("Settings", "Основная"))
        self.label_2.setText(_translate("Settings", "Контент"))
        self.sel10.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.sel11.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.conv1.setToolTip(_translate("Settings", "Преобразовать в нужный формат"))
        self.cbHideDel.setText(_translate("Settings", "Скрывать удаленные"))
        self.Base2.setTitle(_translate("Settings", "2. \"База раздач с комментариями\""))
        self.label_3.setText(_translate("Settings", "Основная"))
        self.label_4.setText(_translate("Settings", "Контент"))
        self.sel20.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.sel21.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.conv2.setToolTip(_translate("Settings", "Преобразовать в нужный формат"))
        self.Base3.setTitle(_translate("Settings", "3. NNMClub"))
        self.label_7.setText(_translate("Settings", "Основная"))
        self.sel30.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.conv3.setToolTip(_translate("Settings", "Преобразовать в нужный формат"))
        self.Base4.setTitle(_translate("Settings", "4. BookTracker.org"))
        self.label_8.setText(_translate("Settings", "Основная"))
        self.sel40.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.conv4.setToolTip(_translate("Settings", "Преобразовать в нужный формат"))
        self.Base5.setTitle(_translate("Settings", "5. Rutor"))
        self.label_9.setText(_translate("Settings", "Основная"))
        self.sel50.setToolTip(_translate("Settings", "Выберите файл БД"))
        self.conv5.setToolTip(_translate("Settings", "Преобразовать в нужный формат"))
        self.bSave.setText(_translate("Settings", "Сохранить"))
        self.bCancel.setText(_translate("Settings", "Отмена"))
