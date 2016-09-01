# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0003_auto_20160522_1527'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='city',
            field=models.CharField(default=b'Not given', max_length=20),
        ),
        migrations.AlterField(
            model_name='address',
            name='state',
            field=models.CharField(default=b'Not given', max_length=20),
        ),
    ]
