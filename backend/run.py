from server import app
from server import db
from server.models import Info

if __name__ == '__main__':
    with app.app_context():
        db.create_all()    
        app.run(debug=True)