from django.core.files import File
from portfolioFile.models import *
import os
import time
import logging
from tabmgnt.settings import MEDIA_ROOT,STATIC_ROOT
logging.basicConfig()
log=logging.getLogger(__name__)

def get_fixedDepositFile_upload_path(instance, filename):
    return os.path.join(
      instance.fixedDeposit.channel.name+"/"+"fixedDeposit/"+time.strftime("%d-%m-%y")+'/'+str(instance.id)+'-'+filename )

def get_userImage_upload_path(instance, filename):
    return os.path.join(
      str(instance.user.uuid)+"/"+"images/"+filename )


def createTestFile(content,name):
    print(MEDIA_ROOT+'/test/'+name)
    try:
        with open(MEDIA_ROOT+'/test/'+name, "wb") as f:
            f.write("<html><head></head><body>"+content+"</body></html>")
            f.close()
    except Exception as e:
        log.error("==================="+str(e))

def createFixedDepositHtmlFile(content,name,fixedDepositScrape):
    name=name.replace(' ','')
    try:
        with open(MEDIA_ROOT+'/'+name, "wb") as f:
            f.write("<html><head></head><body>"+content+"</body></html>")
        django_file = File(open(MEDIA_ROOT+'/'+name, "rb"))
        fixedDepositScrape.fixedDepositFile.save(name,django_file,save=True)
        fixedDepositScrape.save()
        os.remove(MEDIA_ROOT+'/'+name)

    except Exception as e:
        log.error("==================="+str(e))


# =========================================================== User



