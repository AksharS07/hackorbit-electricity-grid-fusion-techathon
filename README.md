# ⚡ WattWise AI: Predictive Grid Dashboard

An AI-driven predictive digital twin for electrical grids. This decoupled machine learning microservice uses a Random Forest Regressor to forecast energy demand 48 hours in advance, allowing grid operators to proactively balance load, minimize Peaker Plant usage, and prevent blackouts.

## 🚀 System Architecture
* **Backend Intelligence:** Scikit-Learn (Random Forest, 50 Estimators)
* **Feature Engineering:** Cyclical time encoding (Sin/Cos), synthetic thermal distributions, and boolean holiday flagging.
* **API Microservice:** Python Flask REST API (CORS enabled)
* **Frontend UI:** Vanilla JS, CSS Splash Animations, and Chart.js for real-time visualization.

---

## 🛠️ How to Run Locally

Follow these steps to get the full predictive pipeline running on your local machine.

### Step 1: Prerequisites
Ensure you have **Python 3.13+** installed. Install the required data science and server libraries using pip:

pip install pandas scikit-learn flask flask-cors holidays numpy