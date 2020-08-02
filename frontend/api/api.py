from flask import Flask, jsonify
from flask_cors import CORS
import math, random

app = Flask(__name__)
CORS(app)
@app.route('/')
def homepage():
    return "This is the homepage"

@app.route('/test', methods=['POST'])
def get_page_name():
    storage_unit = ['5x5','10x10','10x20']
    return jsonify(storage_unit[math.trunc(random.randint(0,2))]);