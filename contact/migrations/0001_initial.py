# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('location', models.CharField(default=b'Not given', max_length=50)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('city', models.CharField(default=b'Not given', max_length=10)),
                ('state', models.CharField(default=b'Not given', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='ContactNumber',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('number', models.BigIntegerField()),
                ('type', models.CharField(default=b'MOBILE', max_length=10, choices=[(b'MOBILE', b'Mobile'), (b'PHONE', b'Phone')])),
            ],
        ),
    ]
