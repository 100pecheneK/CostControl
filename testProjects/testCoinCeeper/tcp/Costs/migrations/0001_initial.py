# Generated by Django 3.0.3 on 2020-02-28 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('money', models.FloatField(verbose_name='money')),
                ('cost_type', models.IntegerField(choices=[(1, 'Разное'), (2, 'Транспорт'), (3, 'Развлечения'), (4, 'Продукты')], default=1, verbose_name='costType')),
                ('date', models.DateField(auto_now=True, verbose_name='costDate')),
            ],
        ),
    ]
