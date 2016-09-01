# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
        ('appUser', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('description', models.CharField(max_length=1000)),
                ('dateCreated', models.DateTimeField(auto_now_add=True)),
                ('lastUpdated', models.DateTimeField(auto_now=True)),
                ('contact_number', models.ManyToManyField(to='contact.ContactNumber')),
                ('createdBy', models.ForeignKey(to='appUser.AppUser')),
            ],
        ),
        migrations.CreateModel(
            name='EventRule',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('entryType', models.CharField(default=b'SINGLE', max_length=20, choices=[(b'COUPLE', b'Couple'), (b'FAMILY', b'Family'), (b'SINGLE', b'Single')])),
                ('entryChargeable', models.BooleanField()),
                ('feesPerEntry', models.FloatField(default=0, null=True, blank=True)),
                ('dateOfEvent', models.DateField()),
                ('startingTime', models.TimeField()),
                ('endingTime', models.TimeField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='eventRule',
            field=models.OneToOneField(to='event.EventRule'),
        ),
        migrations.AddField(
            model_name='event',
            name='location',
            field=models.ForeignKey(to='contact.Address'),
        ),
    ]
