# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0006_homepage_enabled'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='name',
        ),
    ]
