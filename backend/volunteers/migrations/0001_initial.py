# Generated by Django 3.1.1 on 2020-09-29 11:35

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('photo', models.ImageField(upload_to='photos/%d/%m/%y/')),
                ('age', models.IntegerField(max_length=3)),
                ('degree', models.CharField(blank=True, max_length=50)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100)),
                ('experience_volunteering', models.TextField(blank=True)),
                ('verified', models.BooleanField(default=False)),
                ('date_register', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
