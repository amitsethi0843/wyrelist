# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.contrib.auth.models
from django.conf import settings
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0006_require_contenttypes_0002'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoorMan',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('lastUpdated', models.DateTimeField(auto_now=True)),
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
            name='OnDoorCustomer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=20)),
                ('contactNumber', models.CharField(max_length=20)),
                ('doorMan', models.ForeignKey(to='resturant.DoorMan')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('restaurantName', models.CharField(max_length=20)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('lastUpdated', models.DateTimeField(auto_now=True)),
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
            name='Table',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('numberOfChairs', models.IntegerField()),
                ('status', models.CharField(default=b'ACTIVE', max_length=20, choices=[(b'ACTIVE', b'Active'), (b'INACTIVE', b'Inactive')])),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('lastUpdated', models.DateTimeField(auto_now=True)),
                ('restaurant', models.ForeignKey(to='resturant.Restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='TableSession',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('status', models.CharField(default=b'VACANT', max_length=20, choices=[(b'VACANT', b'Vacant'), (b'OCCUPIED', b'Occupied')])),
                ('timeCreated', models.TimeField(auto_now_add=True)),
                ('timeUpdated', models.TimeField(auto_now=True)),
                ('table', models.ForeignKey(to='resturant.Table')),
            ],
        ),
        migrations.AddField(
            model_name='doorman',
            name='restaurant',
            field=models.ForeignKey(to='resturant.Restaurant'),
        ),
    ]
