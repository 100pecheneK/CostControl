# Generated by Django 3.0.4 on 2020-03-19 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('costs', '0006_auto_20200319_0840'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cost',
            name='category',
            field=models.CharField(choices=[('Different', 'Разное'), ('Food', 'Продукты'), ('Cars', 'Транспорт'), ('Fun', 'Развлечения')], default='Different', max_length=30),
        ),
        migrations.AlterField(
            model_name='cost',
            name='icon',
            field=models.CharField(choices=[('Different', 'fas fa-puzzle-piece'), ('Food', 'fas fa-utensils'), ('Cars', 'fas fa-bus'), ('Fun', 'fas fa-gamepad')], default='Different', max_length=30),
        ),
    ]
