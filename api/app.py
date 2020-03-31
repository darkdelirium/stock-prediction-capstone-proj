from flask import Flask, request, jsonify
from keras.models import load_model
import traceback
import pandas as pd
import numpy as np

app = Flask(__name__)

@app.route('/predicted_stock_values', methods = ['POST'])

def prediction_model():

    if model:
        try:
            json_req = request.json
            query = pd.get_dummies(pd.DataFrame(json_req))
            query = query.reindex(columns = model_columns, fill_value = 0)
            prediction = list(model.predict(query))
            return jsonify({'y_pred_values': str(prediction)})

        except:
            return jsonify({'trace_values': traceback.format_exc()})
    
    else:
        print ('Model is not trained, please complete that step')
        return ('Model not found')

if __name__ == '__main__':

    try:
        port = int(sys.argv[1]) 
    except:
        port = 12345 

    model = load_model('model_ge_prediction.h5') 
    model_columns = load_model('model_ge_prediction.h5') 
    print ('Model and model columns loaded successfully')
    model.summary()

    app.run(port = port, debug = False)
