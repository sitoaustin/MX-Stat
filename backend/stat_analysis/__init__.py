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







# UPLOAD_FOLDER = '/path/to/the/uploads'
# UPLOAD_FOLDER = '/files'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST', 'GET'])
def fileUpload():
    # target=os.path.join(UPLOAD_FOLDER,'test_docs')
    # target = UPLOAD_FOLDER
    # if not os.path.isdir(target):
    #     os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    # filename = secure_filename(file.filename)
    # destination="/".join([target, filename])
    # file.save(destination)
    file.save(os.path.join(os.path.abspath(os.path.dirname(__file__)),app.config['UPLOAD_FOLDER'],secure_filename(file.filename))) # Then save the file

    # session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response


#  if form.validate_on_submit():
#         file = form.file.data # First grab the file
#         return "File has been uploaded."

# @app.route("/csvconfiguration", methods=["POST", "GET"])
# def csvconfiguration():
#     name = request.form.get("name")
#     return render_template("index.html", myname=name)


# @app.route('/query_example', methods=["GET", "POST"])
# def query_example():
#     language = request.args.get('language')
#     return '<h1> The Language is : {} </h1>'.format(language)
 

# if __name__ == "__main__":
    # app.run(debug=True,host="0.0.0.0",use_reloader=False)

# flask_cors.CORS(app, expose_headers='Authorization')