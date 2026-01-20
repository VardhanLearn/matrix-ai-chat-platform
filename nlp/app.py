from flask import Flask, request, jsonify

app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify({"status": "ok", "service": "nlp"})

app.run(host="0.0.0.0", port=7000)

