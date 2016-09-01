# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0007_remove_homepage_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='name',
            field=models.CharField(default='what', unique=True, max_length=30),
            preserve_default=False,
        ),
    ]
