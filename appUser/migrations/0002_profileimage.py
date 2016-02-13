# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import portfolioFile.services


class Migration(migrations.Migration):

    dependencies = [
        ('appUser', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.CharField(default=b'GENERAL', max_length=20, choices=[(b'PROFILE', b'Profile'), (b'GENERAL', b'General')])),
                ('image', models.ImageField(null=True, upload_to=portfolioFile.services.get_userImage_upload_path)),
                ('user', models.ForeignKey(to='appUser.AppUser')),
            ],
        ),
    ]
