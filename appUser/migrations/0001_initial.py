# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import portfolioFile.services
import django.contrib.auth.models
from django.conf import settings
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0006_require_contenttypes_0002'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('gender', models.CharField(default=b'NOTDISCLOSED', max_length=20, choices=[(b'FEMALE', b'Female'), (b'MALE', b'Male'), (b'NOTDISCLOSED', b"Can't disclose")])),
                ('dateOfBirth', models.DateField(null=True)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('lastUpdated', models.DateTimeField(auto_now=True)),
                ('retypePassword', models.CharField(max_length=20, null=True)),
            ],
            options={
                'abstract': False,
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
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
