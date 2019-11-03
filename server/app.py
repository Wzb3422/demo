from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def getDay():
    info = {
        'date': '2019-11-03',
        'day': 'Sunday',
        'recommend': ['Slipper', 'T-shirt', 'Hoodie']
    }
    return jsonify(info)

if __name__ == '__main__':
    app.run()
