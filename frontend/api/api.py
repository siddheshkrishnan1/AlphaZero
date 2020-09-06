from flask import Flask, jsonify, request
from flask_cors import CORS
import math, random
import traceback
import joblib
import pandas as pd
import numpy as np
import sys
import sqlite3, json

app = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(app)


@app.route('/')
def index():
   return app.send_static_file('index.html')


@app.route('/test', methods=['POST'])
def get_page_name():
    #storage_unit = ['5x5','10x10','10x20']
    #return jsonify(storage_unit[math.trunc(random.randint(0,2))]);
    lr = joblib.load("model.pkl") 
    print ('Model loaded')
    model_columns = joblib.load("model_columns.pkl") 
    print ('Model columns loaded')
    if lr:
        try:
            json_ = request.json
            print(json_)
            query = pd.get_dummies(pd.DataFrame(json_))
            query = query.reindex(columns=model_columns, fill_value=0)

            prediction = list(lr.predict(query))

            with sqlite3.connect("furniture1.db") as con:
                cur = con.cursor()
                cur.execute("INSERT INTO Response(rooms,size,packed,accessible) VALUES ( ?, ?, ?, ?);", tuple(json_))
                con.commit()
                msg = "furniture data inserted to table"
                print(msg)

            return jsonify({'prediction': str(prediction), 'data': msg})

        except:

            return jsonify({'trace': traceback.format_exc()})
    else:
        return ('No model here to use')

   
   
if __name__ == "__main__":
       app.run(debug = True)
   
   
   
   
   
   
