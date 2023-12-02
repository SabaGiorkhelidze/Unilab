from flask import Flask

from .config import Config
from .extensions import db
from .views import api


BLUEPRINTS = [api]


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    register_extensions(app)
    register_blueprints(app)

    return app


def register_extensions(app):

    # Flask-SQLAlchemy
    db.init_app(app)


def register_blueprints(app):
    for blueprint in BLUEPRINTS:
        app.register_blueprint(blueprint)
