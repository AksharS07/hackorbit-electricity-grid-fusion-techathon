from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app) 

@app.route('/api/forecast', methods=['GET'])
def get_forecast():
    # Instantly open the baked results and send them to the frontend
    try:
        with open('api_data.json', 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "AI data not found. Run model.py first!"}), 404

@app.route('/', methods=['GET'])
def home():
    return "API is running! The data is located at /api/forecast"

if __name__ == '__main__':
    print("🚀 API is running! Tell the frontend team to fetch from http://127.0.0.1:5000/api/forecast")
    app.run(port=5000, debug=True)
