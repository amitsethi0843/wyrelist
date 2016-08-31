from django.db import models
import portfolioFile.services as fileService

# Create your models here.

class HomePage(models.Model):
    name=models.CharField(null=False,max_length=30,unique=True,blank=False)
    landingImage=models.ImageField(null=True,upload_to=fileService.get_main_home_upload_path)
    landingImageText=models.CharField(max_length=200,null=True)
    enabled=models.BooleanField(default=False)

    @classmethod
    def saveFromForm(cls,homePageForm):
        homePage=cls()
        homePage.name=homePageForm.cleaned_data['name']
        homePage.landingImageText=homePageForm.cleaned_data['landingImageText']
        homePage.save()
        # saving image separately as home page id is required for directory structure
        homePage.landingImage = homePageForm.cleaned_data['landingImage']
        homePage.save()
        return homePage

    @classmethod
    def enable(cls,id):
        homePage=cls.objects.get(id=id)
        enabledHomePages=cls.objects.filter(enabled=True)
        for homePageInstance in enabledHomePages:
            homePageInstance.enabled=False
            homePageInstance.save()
        homePage.enabled=True
        homePage.save()

    @classmethod
    def disable(cls,id):
        homePage=cls.objects.get(id=id)
        homePage.enabled=False
        homePage.save()

class SiteInfo(models.Model):
    homePage=models.OneToOneField(HomePage,on_delete=models.CASCADE)
    image=models.ImageField(null=False,upload_to=fileService.get_siteInfo_image_upload_path)
    text=models.CharField(null=False,max_length=100)

    @classmethod
    def create(cls,siteInfoForm,homePage):
        siteInfo=cls(homePage=homePage,
                     image=siteInfoForm.cleaned_data['image'],
                        text=siteInfoForm.cleaned_data['text']).save()
        return siteInfo