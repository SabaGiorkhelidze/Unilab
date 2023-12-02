from backend import db, app
from datetime import datetime
from flask_login import UserMixin


class Info(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    last_update = db.Column(db.DateTime, nullable=False)
    post = db.relationship('Post', backref='author', lazy=True)

    def __repr__(self):
        return f'User("{self.username}", "{self.email}", "{self.image_file}")'


