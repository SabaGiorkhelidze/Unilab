from flask import Blueprint, jsonify


api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.route("/home")
def api_home():
    return jsonify({"hello": "world"})
