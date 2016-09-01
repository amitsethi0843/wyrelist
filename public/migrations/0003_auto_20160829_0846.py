# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0002_homepage_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='name',
            field=models.CharField(default=b'no name given', unique=True, max_length=30),
        ),
    ]
