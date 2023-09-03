from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin



app = Flask(__name__)
app.config['SECRET_KEY'] = 'ee6927c7fc78a6e79ac0d3fd1d4054f9'
app.config['UPLOAD_FOLDER'] = 'static/files'
CORS(app, origins=['http://localhost:3000'])

# To SET our data base location (sqlite:/// - path where we want out database to be)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///mxstat.db'
# to create a database instance
db = SQLAlchemy(app)


from stat_analysis import routes

