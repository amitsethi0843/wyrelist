# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import portfolioFile.services


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_eventrule_duration'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventImages',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(null=True, upload_to=portfolioFile.services.get_event_upload_path)),
                ('type', models.CharField(default=b'NORMAL', max_length=15, choices=[(b'DISPLAY', b'Display'), (b'NORMAL', b'Normal')])),
                ('event', models.OneToOneField(related_name='event_images', to='event.Event')),
            ],
        ),
    ]
