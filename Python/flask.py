from flask import Flask

ishi=Flask(__name__)
@ishi.route("/Ishita")
def hello():
      s="<body bgcolor='green' text= 'yellow' <h1> I am Ishita </h1>"
      return s
if __name__=='__main__':
      ishi.run(debug=False)
