# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0011_auto_20160613_1729'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='totalEntries',
            field=models.IntegerField(default=100, blank=True),
        ),
    ]
