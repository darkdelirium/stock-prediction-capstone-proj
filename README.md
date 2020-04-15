Steps to set up the backend environment are mentioned below.

cd to the /api directory

Setup a virtual environment: virtualenv venv

Activate the environment: source venv/bin/activate

Install the latest version of pip: python3.7 -m pip install --upgrade pip

Upgrade the setup tools used to install all the models: pip install setuptools --upgrade

Install the packages required for the project: pip install -r requirements.txt

Run the python file: python3.7 app_new.py (backend side should listen to port 5000)

To deactivate the virtual environment: deactivate



Requirements: Python 3.6 or 3.7 (tensorflow package used is not compatible with the latest python releases). All the python libraries used in this project are mentioned in the requirements.txt file. The requirements.txt file should be available in the same directory in which the virtual environment is being set up.


Steps to set up the frontend environment are mentioned below.

Install all dependencies: yarn install

Start application: yarn start

Go to browser url: http://localhost:8002 


Requirements: Yarn and Node.js and some additional JavaScript libraries - React.js, Redux,
Antd, Amcharts  
