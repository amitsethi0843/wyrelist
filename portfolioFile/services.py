from django.core.files import File
import os
import logging
from tabmgnt.settings import MEDIA_ROOT
import boto
from django.conf import settings
from boto.s3.connection import S3Connection, Bucket, Key


logging.basicConfig()
log = logging.getLogger(__name__)


def get_base_url():
    if not settings.ENVIRONMENT_PRODUCTION:
        return ""
    else:
        return "media/"

def convert_toS3_url(url):
    return "http://"+str(settings.AWS_STORAGE_BUCKET_NAME)+".s3.amazonaws.com/"+url if settings.ENVIRONMENT_PRODUCTION else url

def get_event_upload_path(instance, filename):
    return get_base_url() + "event/" + str(instance.event.uuid) + "/" + str(instance.id) + '-' + filename


def get_userImage_upload_path(instance, filename):
    return get_base_url() + "user/" + str(instance.user.uuid) + "/" + "images/" + filename

def get_main_home_upload_directory(instance):
    return get_base_url() + "homePage/" + str(instance.id)

def get_main_home_upload_path(instance, filename):
    uploadDirectory=get_main_home_upload_directory(instance)
    return uploadDirectory+ "/main/" + str(filename)

def get_siteInfo_image_upload_path(instance, filename):
    return get_base_url() + "homePage/" + str(instance.homePage.id) + "/siteInfo/" + filename

def remove_s3_file(filePath):
    if settings.ENVIRONMENT_PRODUCTION:
        conn = S3Connection(settings.AWS_ACCESS_KEY_ID, settings.AWS_SECRET_ACCESS_KEY)
        bucket = Bucket(conn,settings.AWS_STORAGE_BUCKET_NAME)
        for key in bucket.list(prefix=filePath):
            key.delete()
        # print("-------------------"+filePath)
        # bucket.delete_key(filePath)

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



