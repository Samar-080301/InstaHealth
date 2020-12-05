from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    #a = input('Enter name')
    return render_template(r'form.html')
@app.route('/done')
def h():
    print('done!')
if __name__ == "__main__":
     app.run(debug=True)