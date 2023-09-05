import os
from io import BytesIO
import csv
from werkzeug.utils import secure_filename
from stat_analysis.models import User, Post, Upload
from stat_analysis import app, db, CORS, cross_origin
from flask import Flask, flash, request, redirect, url_for, session, send_file, jsonify
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
def postdata():
    if request.method == 'POST':
        file = request.files['file']
        userEmail = request.form['email']
        record = User.query.filter_by(email=userEmail).first()
        upload = Upload(filename=file.filename, data=file.read(), user_id=record.id)
        db.session.add(upload)
        db.session.commit()
        return 'success'
    userEmail = request.form['email']
    upload = Upload.query.filter_by(user_id=1).all()
    fileContents = []
    for upload_data in upload:
        # Decode bytes to a string and split into lines
        lines = upload_data.data.decode('utf-8').split('\r\n')  
        # Split each line by comma into a list of items
        csv_data = [line.split(',') for line in lines if line]  
        fileContents.append(csv_data)
    return fileContents

@app.route('/getdata', methods=['GET', 'POST'])
def getdata():
    userEmail = request.form['email']
    record = User.query.filter_by(email=userEmail).first()
    upload = Upload.query.filter_by(user_id=record.id).all()
    fileContents = []
    for upload_data in upload:
        fileDetails = []
        date_posted, filename, file_id = upload_data.date_posted, upload_data.filename, upload_data.id
        lines = upload_data.data.decode('utf-8').split('\r\n')  # Decode bytes to a string and split into lines
        csv_data = [line.split(',') for line in lines if line] 
        filenameNdate = {
            "id": file_id,
            "file_name": filename,
            "date_posted":date_posted,
            "data" : csv_data,
        }
        fileContents.append(filenameNdate) # Split each line by comma into a list of items
        # fileContents.append(csv_data)
    return jsonify(fileContents)



@app.route('/register', methods=['POST', 'GET'])
def register():
    data = request.get_json(force=True)
    record = User.query.filter_by(email=data['email']).all()
    if len(record) == 0:
        user = User(username=data['username'], email=data['email'])   
        db.session.add(user)
        db.session.commit()
    return data


