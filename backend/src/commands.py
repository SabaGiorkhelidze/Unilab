import click

from .extensions import db


@click.command("init-db")
def init_db():
    click.echo("Creating database...")
    db.drop_all()
    db.create_all()
    click.echo("Database created")
