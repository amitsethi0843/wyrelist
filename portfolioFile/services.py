from django.core.files import File
from portfolioFile.models import *
import os
from tabmgnt.settings import ENVIRONMENT_PRODUCTION
import logging
from tabmgnt.settings import MEDIA_ROOT, STATIC_ROOT
from django.core.files.storage import FileSystemStorage

logging.basicConfig()
log = logging.getLogger(__name__)


def get_base_url():
    if not ENVIRONMENT_PRODUCTION:
        return ""
    else:
        return "media/"


def get_event_upload_path(instance, filename):
    return get_base_url() + "event/" + str(instance.event.uuid) + "/" + str(instance.id) + '-' + filename


def get_userImage_upload_path(instance, filename):
    return get_base_url() + "user/" + str(instance.user.uuid) + "/" + "images/" + filename


def get_main_home_upload_path(instance, filename):
    return get_base_url() + "homePage/" + str(instance.id) + "/main/" + str(filename)


def get_siteInfo_image_upload_path(instance, filename):
    return get_base_url() + "homePage/" + str(instance.homePage.id) + "/siteInfo/" + filename


def createTestFile(content, name):
    print(MEDIA_ROOT + '/test/' + name)
    try:
        with open(MEDIA_ROOT + '/test/' + name, "wb") as f:
            f.write("<html><head></head><body>" + content + "</body></html>")
            f.close()
    except Exception as e:
        log.error("===================" + str(e))


def createFixedDepositHtmlFile(content, name, fixedDepositScrape):
    name = name.replace(' ', '')
    try:
        with open(MEDIA_ROOT + '/' + name, "wb") as f:
            f.write("<html><head></head><body>" + content + "</body></html>")
        django_file = File(open(MEDIA_ROOT + '/' + name, "rb"))
        fixedDepositScrape.fixedDepositFile.save(name, django_file, save=True)
        fixedDepositScrape.save()
        os.remove(MEDIA_ROOT + '/' + name)

    except Exception as e:
        log.error("===================" + str(e))

# =========================================================== User
