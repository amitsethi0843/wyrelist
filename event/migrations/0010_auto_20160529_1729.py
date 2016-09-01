# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0009_eventamenity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eventamenity',
            name='distance',
        ),
        migrations.AddField(
            model_name='eventamenity',
            name='priority',
            field=models.IntegerField(default=0),
        ),
    ]
