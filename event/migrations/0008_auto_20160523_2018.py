# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0007_auto_20160523_2010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventrule',
            name='feesPerEntry',
            field=models.FloatField(default=0, null=True),
        ),
    ]
