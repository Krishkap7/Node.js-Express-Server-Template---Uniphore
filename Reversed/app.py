from flask import Flask, render_template, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)
# Route to generate a random number and return it as JSON
@app.route('/random-number')
def generate_random_number():
    num = random.randint(1, 100)  # Generate a random number between 1 and 100
    return jsonify({'random_number': num})

# Route to render the index.html template
@app.route('/')
def render_index():
    return render_template('index.html')

if __name__ == '__main__':
    #originally port 5000
    app.run(port=5000, debug=True)
