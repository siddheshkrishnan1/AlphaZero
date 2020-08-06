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

            return jsonify({'prediction': str(prediction)})

        except:

            return jsonify({'trace': traceback.format_exc()})
    else:
        return ('No model here to use')
    #return {'name': "Storage Calculator"};
