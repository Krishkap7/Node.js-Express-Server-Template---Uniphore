# Python Flask Server Code (app.py)
import os
from flask import Flask, render_template
import random

app = Flask(__name__, template_folder='.')

# Get the port number from the environment variable or use the default (5000)
port = int(os.environ.get("FLASK_PORT", 5000))

# Route to generate a random number and render it in the HTML template
@app.route('/')
def generate_random_number():
    random_number = random.randint(1, 100)  # Generate a random number between 1 and 100
    return render_template('index.html', random_number=random_number, flask_port=port)

if __name__ == '__main__':
    app.run(port=port, debug=True)
