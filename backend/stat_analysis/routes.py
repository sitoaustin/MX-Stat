import os
from io import BytesIO
import csv
from werkzeug.utils import secure_filename
from stat_analysis.models import User, Post, Upload
from stat_analysis import app, db, CORS, cross_origin
from flask import Flask, flash, request, redirect, url_for, session, send_file
import logging
import json




logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

# Current file holder
file_path = ''


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
    file_path = (os.path.join(folder_path,secure_filename(file.filename)))
    file.save(file_path) # Then save the file
    # Reading the file and parsing the files.
    fileContent = []
    with open("{}/{}".format(folder_path,file.filename), 'r') as file_to_read:
        reader = csv.reader(file_to_read)
        for row in reader:
            fileContent.append(row)
    return fileContent


@app.route('/postdata', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        upload = Upload(filename=file.filename, data=file.read(), user_id=1)
        db.session.add(upload)
        db.session.commit()
        return 'success'
    upload = Upload.query.filter_by(user_id=1).all()
    fileContents = []
    for upload_data in upload:
        lines = upload_data.data.decode('utf-8').split('\r\n')  # Decode bytes to a string and split into lines
        csv_data = [line.split(',') for line in lines if line]  # Split each line by comma into a list of items
        fileContents.append(csv_data)
    return fileContents



@app.route('/register', methods=['POST', 'GET'])
def register():
    # data = json.loads(request.get_json(force=True))
    data = request.get_json(force=True)
    print(data)
    user = User(username=data['username'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return data


