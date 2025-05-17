from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

model, feature_order = joblib.load('aqi_prediction_model.pkl')

@app.route('/', methods=['GET', 'POST'])
def index():
    predicted_aqi = None
    error_msg = None

    if request.method == 'POST':
        try:
            input_values = [
                float(request.form['pm25']),
                float(request.form['pm10']),
                float(request.form['no2']),
                float(request.form['so2']),
                float(request.form['co']),
                float(request.form['o3'])
            ]
            input_data = pd.DataFrame([input_values], columns=feature_order)
            predicted_aqi = model.predict(input_data)[0]
        except ValueError:
            error_msg = "Please enter valid numbers in all fields."

    return render_template('index.html', predicted_aqi=predicted_aqi, error_msg=error_msg)

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/guide')
def guide():
    return render_template('guide.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)
