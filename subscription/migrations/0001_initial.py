# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.EmailField(max_length=40)),
                ('message', models.CharField(max_length=100, null=True)),
                ('name', models.CharField(max_length=20, null=True)),
                ('userType', models.CharField(default=b'USER', max_length=10, choices=[(b'RESTAURANT', b'Restaurant'), (b'USER', b'User')])),
            ],
        ),
    ]
