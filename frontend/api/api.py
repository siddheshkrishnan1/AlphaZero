from flask import Flask
app = Flask(__name__)


@app.route('/test')
def get_page_name():
    return {'name': "Storage Calculator"};