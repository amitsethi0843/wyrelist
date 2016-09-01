# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0004_auto_20160829_0958'),
    ]

    operations = [
        migrations.AlterField(
            model_name='siteinfo',
            name='text',
            field=models.CharField(max_length=100),
        ),
    ]
