from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Get the background color from the environment variable
    bg_color = os.getenv('BG_COLOR', 'white')  # Default to 'white' if not set
    return render_template('index.html', bg_color=bg_color)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
