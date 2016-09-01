# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_auto_20160522_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='line2',
            field=models.CharField(max_length=200, null=True, blank=True),
        ),
    ]
