from . import db


class Info(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    user_author_input = db.Column(db.String, nullable=False)
    user_quote_input = db.Column(db.String, nullable=False)
    corrected_info = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'{self.user_author_input} {self.user_quote_input} {self.corrected_info}'
