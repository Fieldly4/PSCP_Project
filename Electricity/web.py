from flask import Flask,render_template
web = Flask(__name__)


@web.route('/')
def index():
    return render_template("electric.html")

if __name__ == "__main__":
    web.run(debug=True)