# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import portfolioFile.services


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('landingImage', models.ImageField(null=True, upload_to=portfolioFile.services.get_main_home_upload_path)),
                ('landingImageText', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SiteInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=portfolioFile.services.get_siteInfo_image_upload_path)),
                ('text', models.CharField(default=b'No Text Given', max_length=100)),
                ('homePage', models.OneToOneField(to='public.HomePage')),
            ],
        ),
    ]
