from flask import Flask

from .config import Config
from .commands import init_db
from .views import api_bp
from .models import db


BLUEPRINTS = [api_bp]
COMMANDS = [init_db]


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    register_blueprints(app)
    register_commands(app)
    register_extensions(app)

    return app


def register_blueprints(app):
    for blueprint in BLUEPRINTS:
        app.register_blueprint(blueprint)


def register_commands(app):
    for command in COMMANDS:
        app.cli.add_command(command)


def register_extensions(app):

    # Flask-SQLAlchemy
    db.init_app(app)
