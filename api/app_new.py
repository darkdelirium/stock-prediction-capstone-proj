# Dependencies
from flask import Flask, request, jsonify
from sklearn.externals import joblib
import traceback
import pandas as pd
import numpy as np
from keras.models import load_model
from numpy import concatenate

from pandas import core
from numpy import issubdtype
from numpy import datetime64
from pandas import to_datetime
import re

import tensorflow as tf
from tqdm._tqdm_notebook import tqdm_notebook
from sklearn.externals import joblib

# Your API definition
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
	if model:
		try:
			json_ = request.json


			x_temp, y_temp = build_timeseries(np.array(json_['feature']), 3)
			x_val, x_test_t = np.split(trim_dataset(x_temp, BATCH_SIZE),2)

			# make a prediction
			with graph.as_default():
				y_pred = model.predict(trim_dataset(x_test_t, BATCH_SIZE), batch_size=BATCH_SIZE)

			#print('printing y_pred ..')
			#print(y_pred)

			y_pred = y_pred.flatten()
			#print('printing y_pred')
			#print(y_pred)

			# convert the predicted value to range of real data
			y_pred_org = (y_pred * min_max_scaler.data_range_[3]) + min_max_scaler.data_min_[3]

			#print('printing y_pred_org')
			#print(y_pred_org)

			y_pred_org_converted_to_list = y_pred_org.tolist()

 
			#prepare output format
			json_out = {'prediction': y_pred_org_converted_to_list}

			return jsonify(json_out)

		except:
			return jsonify({'trace': traceback.format_exc()})

	else:
		print ('Train the model first')
		return ('No model here to use')


if __name__ == '__main__':
	try:
		port = int(sys.argv[1]) # This is for a command-line input
	except:
		port = 12345 # If you don't provide any port the port will be set to 12345

	# load model
	model = load_model('model_ge_prediction.h5')
	print ('Model loaded!')
	# add this after model load
	global graph
	graph = tf.get_default_graph() 
	# summarize model
	model.summary()

	# load scaler
	scaler_filename = 'scaler_ge_predictions.save'
	min_max_scaler = joblib.load(scaler_filename)
	print ('Scaler loaded!')

	# trim_dataset function
	def trim_dataset(mat, batch_size):
	    """
	    trims dataset to a size that's divisible by BATCH_SIZE
	    """
	    no_of_rows_drop = mat.shape[0]%batch_size
	    if(no_of_rows_drop > 0):
	        return mat[:-no_of_rows_drop]
	    else:
	        return mat

	def build_timeseries(mat, y_col_index):
	    # y_col_index is the index of column that would act as output column
	    # total number of time-series samples would be len(mat) - TIME_STEPS
	    dim_0 = mat.shape[0] - TIME_STEPS
	    dim_1 = mat.shape[1]
	    x = np.zeros((dim_0, TIME_STEPS, dim_1))
	    y = np.zeros((dim_0,))
	    
	    for i in tqdm_notebook(range(dim_0)):
	        x[i] = mat[i:TIME_STEPS+i]
	        y[i] = mat[TIME_STEPS+i, y_col_index]
	    print("length of time-series i/o",x.shape,y.shape)
	    return x, y

	TIME_STEPS = 60
	BATCH_SIZE = 20
	
	app.run(port=port, debug=True)


# end of code ..