from datetime import datetime
from stat_analysis import db

# To create our models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    uploads = db.relationship('Upload', backref='author', lazy=True)

    # __repre__ method is a magic method of how our object 
    # is printed when we print it out
    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

class Upload(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(50))
    data = db.Column(db.LargeBinary)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Upload('{self.filename}', '{self.data}', '{self.user_id}', '{self.date_posted}')"

