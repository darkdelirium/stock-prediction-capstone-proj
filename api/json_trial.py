import numpy
import h5py
from keras.models import load_model

#load model
model = load_model('model_ge_prediction.h5')
filename = 'model_ge_prediction.h5'

#summarize model
model.summary()

with h5py.File(filename, 'r') as f:

    #list all keys
    for key in f.keys():
        print("Keys: ", key)
    
    #get the groups
    group_key = list(f.keys())[0]
    group = list(f[group_key])
    print("Groups: ", group)

