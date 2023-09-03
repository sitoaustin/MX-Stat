import os
import csv
# from flask import  request
from werkzeug.utils import secure_filename
from stat_analysis.models import User, Post
from stat_analysis import app, db, CORS, cross_origin
from flask import Flask, flash, request, redirect, url_for, session




import logging




logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')


@app.route("/")
@app.route("/members")
def hello_world():
    return {"name": 'Naka'}

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

@app.route('/upload', methods=['POST', 'GET'])
def fileUpload():
    folder_path = os.path.join(os.path.abspath(os.path.dirname(__file__)),app.config['UPLOAD_FOLDER'])
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    file = request.files['file'] 
    logger.info("welcome to upload`")
    file.save(os.path.join(folder_path,secure_filename(file.filename))) # Then save the file
    # Reading the file and parsing the files.
    fileContent = []
    with open("{}/{}".format(folder_path,file.filename), 'r') as file_to_read:
        reader = csv.reader(file_to_read)
        for row in reader:
            fileContent.append(row)
    return fileContent

@app.route('/register', methods=['POST', 'GET'])
def register():
    data = request.get_json(force=True)
    user = User(username=data['name'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return data