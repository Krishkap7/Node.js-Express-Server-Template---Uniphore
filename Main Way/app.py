# Python Flask Server Code (app.py)
from flask import Flask, render_template
import requests


app = Flask(__name__, template_folder='.')

# Route to fetch random number from NodeJS server and display it in HTML page
@app.route('/')
def get_random_number():
    # Make a GET request to the NodeJS server
    nodejs_server_url = 'http://localhost:3000/random'
    response = requests.get(nodejs_server_url)
    random_number = response.json().get('randomNumber')

    return render_template('index.html', random_number=random_number)

if __name__ == '__main__':
    app.run(debug=True)
