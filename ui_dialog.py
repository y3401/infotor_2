# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'dialogPibjLB.ui'
##
## Created by: Qt User Interface Compiler version 5.15.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *


class Ui_Dialog(object):
    def setupUi(self, Dialog):
        if not Dialog.objectName():
            Dialog.setObjectName(u"Dialog")
        Dialog.setWindowModality(Qt.WindowModal)
        Dialog.resize(391, 140)
        icon = QIcon()
        icon.addFile(u"files/favicon.png", QSize(), QIcon.Normal, QIcon.Off)
        Dialog.setWindowIcon(icon)
        Dialog.setModal(True)
        self.groupBox = QGroupBox(Dialog)
        self.groupBox.setObjectName(u"groupBox")
        self.groupBox.setGeometry(QRect(30, 10, 331, 91))
        self.verticalLayout = QVBoxLayout(self.groupBox)
        self.verticalLayout.setObjectName(u"verticalLayout")
        self.verticalLayout.setContentsMargins(10, -1, 10, -1)
        self.label = QLabel(self.groupBox)
        self.label.setObjectName(u"label")
        font = QFont()
        font.setPointSize(12)
        self.label.setFont(font)
        self.label.setFrameShape(QFrame.NoFrame)
        self.label.setFrameShadow(QFrame.Plain)
        self.label.setTextFormat(Qt.PlainText)
        self.label.setAlignment(Qt.AlignCenter)

        self.verticalLayout.addWidget(self.label, 0, Qt.AlignTop)

        self.progressBar = QProgressBar(self.groupBox)
        self.progressBar.setObjectName(u"progressBar")
        self.progressBar.setFont(font)
        self.progressBar.setValue(0)
        self.progressBar.setAlignment(Qt.AlignHCenter|Qt.AlignTop)
        self.progressBar.setTextDirection(QProgressBar.TopToBottom)

        self.verticalLayout.addWidget(self.progressBar, 0, Qt.AlignTop)

        self.label_2 = QLabel(self.groupBox)
        self.label_2.setObjectName(u"label_2")
        self.label_2.setMinimumSize(QSize(0, 73))
        self.label_2.setFont(font)
        self.label_2.setAlignment(Qt.AlignHCenter|Qt.AlignTop)
        self.label_2.setMargin(3)

        self.verticalLayout.addWidget(self.label_2)

        self.widget = QWidget(Dialog)
        self.widget.setObjectName(u"widget")
        self.widget.setGeometry(QRect(30, 110, 331, 26))
        self.horizontalLayout = QHBoxLayout(self.widget)
        self.horizontalLayout.setObjectName(u"horizontalLayout")
        self.horizontalLayout.setContentsMargins(0, 0, 0, 0)
        self.horizontalSpacer = QSpacerItem(40, 20, QSizePolicy.Expanding, QSizePolicy.Minimum)

        self.horizontalLayout.addItem(self.horizontalSpacer)

        self.bOk = QPushButton(self.widget)
        self.bOk.setObjectName(u"bOk")
        self.bOk.setEnabled(False)
#if QT_CONFIG(statustip)
        self.bOk.setStatusTip(u"")
#endif // QT_CONFIG(statustip)
        icon1 = QIcon()
        icon1.addFile(u"img/synced.png", QSize(), QIcon.Normal, QIcon.Off)
        self.bOk.setIcon(icon1)

        self.horizontalLayout.addWidget(self.bOk)

        self.bCancel = QPushButton(self.widget)
        self.bCancel.setObjectName(u"bCancel")
#if QT_CONFIG(statustip)
        self.bCancel.setStatusTip(u"")
#endif // QT_CONFIG(statustip)
        icon2 = QIcon()
        icon2.addFile(u"img/quit.png", QSize(), QIcon.Normal, QIcon.Off)
        self.bCancel.setIcon(icon2)

        self.horizontalLayout.addWidget(self.bCancel)


        self.retranslateUi(Dialog)
        self.bOk.clicked.connect(Dialog.accept)
        self.bCancel.clicked.connect(Dialog.reject)

        QMetaObject.connectSlotsByName(Dialog)
    # setupUi

    def retranslateUi(self, Dialog):
        Dialog.setWindowTitle(QCoreApplication.translate("Dialog", u"Прогресс загрузки", None))
        self.label.setText(QCoreApplication.translate("Dialog", u"Загрузка данных", None))
        self.label_2.setText(QCoreApplication.translate("Dialog", u"Записано:  0", None))
        self.bCancel.setText(QCoreApplication.translate("Dialog", u"Отмена", None))
        self.bOk.setText(QCoreApplication.translate("Dialog", u"ОK", None))
    # retranslateUi

