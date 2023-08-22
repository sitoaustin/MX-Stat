from flask import Flask, redirect, request, render_template
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ee6927c7fc78a6e79ac0d3fd1d4054f9'
app.config['UPLOAD_FOLDER'] = 'static/files'

CORS(app, origins=['http://localhost:3000'])
logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

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
    response = {"moon": "moon"}
    return response
