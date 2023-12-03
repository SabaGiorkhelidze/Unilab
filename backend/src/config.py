from os import path


class Config(object):
    BASE_DIRECTORY = path.abspath(path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{BASE_DIRECTORY}/database.sqlite"
    SECRET_KEY = "SECRET"
