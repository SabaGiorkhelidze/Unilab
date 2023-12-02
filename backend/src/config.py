from os import path
from datetime import timedelta


class Config(object):
    BASE_DIRECTORY = path.abspath(path.dirname(__file__))
    SECRET_KEY = 'b758cc27bb155b752aeac59960810d18'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    SESSION_TYPE = "filesystem"
    PERMANENT_SESSION_LIFETIME = timedelta(days=1)
