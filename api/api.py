#API file

from flask import Flask, request

app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers['X-UA-Compatible'] = 'IE = Edge,chrome = 1'
    response.headers['Cache-Control'] = 'public, max-age = 0'
    return response

#Get input from user
stock = input ("Please enter the stock name : ")
start_date = input ("Please enter the start date in the format YYYY, MM, DD : ")
end_date = input ("Please enter the end date in the format: YYYY, MM, DD : ")

@app.route('/historical_stock_price', methods = ['GET'])

#how to read from the data model?
def historical_stock_price (stock):
    if request.method == 'GET':
        print("Getting historical stock prices for the stock ", stock)
        stock_data = stocks(stock, start_date, end_date) #define the stocks function to read from backend
        return stock_data