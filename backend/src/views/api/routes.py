from flask import Blueprint, jsonify, request


api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/home", methods=['POST', "GET"])
def api_home():
    form = request.json
    data = form.get('data')
    print(data)
    return jsonify({"result": "world"})
