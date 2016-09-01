# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0012_auto_20160614_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventrule',
            name='entryChargeable',
            field=models.BooleanField(default=False),
        ),
    ]
