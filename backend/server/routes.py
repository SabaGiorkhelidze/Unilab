from flask import request, jsonify, session
from server import app, db
from server.models import Info
import requests
import json


@app.route('/api/home')
def home():
    
    return jsonify({'header': 'Hello world'})