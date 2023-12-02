from flask import Blueprint, jsonify


api = Blueprint("api", __name__, url_prefix="/api")


@api.route('/home')
def home():
    return jsonify({'header': 'Hello world'})