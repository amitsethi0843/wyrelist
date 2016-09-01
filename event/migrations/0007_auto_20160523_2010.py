# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0006_auto_20160523_1932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventrule',
            name='feesPerEntry',
            field=models.CharField(default=0, max_length=20, null=True),
        ),
    ]
