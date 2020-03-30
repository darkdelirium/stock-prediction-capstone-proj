import json
import io
import sys
import re
import tables
import numpy
from flask import Flask
from keras.models import load_model
from collections import defaultdict

model = load_model('model_ge_prediction.h5')
file_h5 = tables.open_file(sys.argv[1])

class convert:

    def _init_(self, input_file):
        self.file_name = re.sub(r'\.h5$', '', sys.argv[1])
        self.file = input_file
        self.all_groups = []
        self.group_parent = defaultdict(list)
        self.group_contents = {}


        for group in input_file.walk_groups():
            name = group._v_name
            parent = group._v_parent
            parent = parent._v_name
            self.all_groups.append(name)
            self.group_parent[parent].append(name)
            self.group_contents[name] = {}
            self.all_groups.append(name)

            for array in file_h5.list_nodes(group, classname = "Array"):
                array_name = array._v_name
                array_contents = array.read()
                array_info = {array_name : array_contents}
                self.group_contents[name].update(array_info)

    def json_output(self):
        print('group_contents: ', self.group_contents)
        main = self.group_contents
        json_file_name = self.file_name + '.json'
        with io.open(json_file_name, 'w', encoding = 'utf-8') as f:
            f.write(str(json.dumps(main, cls = json_encoder, ensure_ascii = False)))
        f.close()
        return

class json_encoder(self):
	def default(self, obj):
		if isinstance(obj, numpy.ndarray):
			return obj.tolist()
		return json_encoder(self, obj)

json_data = convert(file_h5)
contents = json_data.json_output()

app = Flask(_name_)

@app.route('/predicted_stock_values', methods = ['POST'])
def main():
    if request.method == 'POST':
        return contents

if _name_ == '_main_':
    app.run()
