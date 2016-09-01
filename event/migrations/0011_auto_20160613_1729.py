# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appUser', '0001_initial'),
        ('event', '0010_auto_20160529_1729'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventTicket',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('totalTickets', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='totalEntries',
            field=models.IntegerField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='eventamenity',
            name='type',
            field=models.CharField(default=b'NONE', max_length=20, choices=[(b'RAILWAYSTATION', b'Railway Station'), (b'METROSTATION', b'Metro Station'), (b'HOTEL', b'Hotel'), (b'NONE', b'None')]),
        ),
        migrations.AddField(
            model_name='eventticket',
            name='event',
            field=models.ForeignKey(to='event.Event'),
        ),
        migrations.AddField(
            model_name='eventticket',
            name='user',
            field=models.ForeignKey(to='appUser.AppUser'),
        ),
    ]
