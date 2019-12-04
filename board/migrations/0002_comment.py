# Generated by Django 2.2.1 on 2019-08-01 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_date', models.DateTimeField(auto_now_add=True)),
                ('comment_user', models.TextField(max_length=20)),
                ('comment_thumbnail_url', models.TextField(default='', max_length=300)),
                ('comment_textfield', models.TextField()),
                ('board', models.ForeignKey(null=True, on_delete=True, related_name='comments', to='board.Board')),
            ],
        ),
    ]