from flask import Flask, render_template 
app = Flask(__name__)
  
@app.route('/')
def home():
    return render_template('contact.html')

app.run(debug=True)


# code to be added from html css file in github