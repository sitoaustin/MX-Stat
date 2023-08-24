from stat_analysis import app, os, CORS

if __name__ == "__main__":
    app.run(debug=True)
    app.secret_key = os.urandom(24)

# CORS(app, expose_headers='Authorization')


