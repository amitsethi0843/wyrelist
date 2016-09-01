# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0003_auto_20160522_1527'),
        ('event', '0008_auto_20160523_2018'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventAmenity',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.CharField(default=b'NONE', max_length=20, choices=[(b'RAILWAYSTATION', b'Railway Station'), (b'METROSTATION', b'Metro Station'), (b'AIRPORT', b'Airport'), (b'HOTEL', b'Hotel'), (b'NONE', b'None')])),
                ('distance', models.FloatField(default=0.0)),
                ('event', models.ForeignKey(to='event.Event')),
                ('location', models.ForeignKey(to='contact.Address')),
            ],
        ),
    ]
