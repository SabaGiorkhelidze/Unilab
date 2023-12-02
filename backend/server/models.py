from server import db, app
from datetime import datetime


class Info(db.Model, ):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    user_input = db.Column(db.String, nullable=False)
    Corrected_info = db.Column(db.String, nullable=False)
    Header = db.Column(db.String, nullable=False)


    def __repr__(self):
        return f'User("{self.username}", "{self.email}", "{self.image_file}")'


