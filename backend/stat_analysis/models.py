from datetime import datetime
from stat_analysis import db, app

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



class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120),  nullable=False)
    content = db.Column(db.Text,  nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def __repr__(self):
        return f"Post('{self.title}', '{self.content}', '{self.user_id}')"
    



# ...

# class Student(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     firstname = db.Column(db.String(100), nullable=False)
#     lastname = db.Column(db.String(100), nullable=False)
#     email = db.Column(db.String(80), unique=True, nullable=False)
#     age = db.Column(db.Integer)
#     created_at = db.Column(db.DateTime(timezone=True),
#                            server_default=func.now())
#     bio = db.Column(db.Text)

#     def __repr__(self):
#         return f'<Student {self.firstname}>'