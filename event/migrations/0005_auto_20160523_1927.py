# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0004_auto_20160523_1808'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventimage',
            name='event',
            field=models.ForeignKey(related_name='event_images', to='event.Event'),
        ),
    ]
