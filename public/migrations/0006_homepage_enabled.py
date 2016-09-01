# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0005_auto_20160829_0958'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='enabled',
            field=models.BooleanField(default=False),
        ),
    ]
