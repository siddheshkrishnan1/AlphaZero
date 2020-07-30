from flask import Flask, request, jsonify
import joblib
import traceback
import pandas as pd
import sys
import numpy as np

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if lr:
        try:
            json_ = request.json
            print(json_)
            query = pd.get_dummies(pd.DataFrame(json_))
            query = query.reindex(columns=model_columns, fill_value=0)

            prediction = list(lr.predict(query))

            return jsonify({'prediction': str(prediction)})

        except:

            return jsonify({'trace': traceback.format_exc()})
    else:
        return ('No model here to use')

if __name__ == '__main__':


    lr = joblib.load("model.pkl") 
    print ('Model loaded')
    model_columns = joblib.load("model_columns.pkl") 
    print ('Model columns loaded')

    app.run(port=8000, debug=True)