import os
from stat_analysis import app, CORS

if __name__ == "__main__":
    app.run(debug=True)
    app.secret_key = os.urandom(24)



