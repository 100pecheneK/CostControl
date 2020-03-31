# Generated by Django 3.0.4 on 2020-03-19 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('costs', '0002_cost_icon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cost',
            name='category',
            field=models.IntegerField(choices=[(1, 'Разное'), (2, 'Продукты'), (3, 'Транспорт'), (4, 'Развлечения')], default=1),
        ),
        migrations.AlterField(
            model_name='cost',
            name='icon',
            field=models.IntegerField(choices=[(1, 'fas fa-puzzle-piece'), (2, 'fas fa-utensils'), (3, 'fas fa-bus'), (4, 'fas fa-gamepad')], default=1),
        ),
    ]