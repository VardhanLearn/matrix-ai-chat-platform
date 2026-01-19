from flask import Flask, request, jsonify
import numpy as np
import faiss
from sentence_transformers import SentenceTransformer

app = Flask(__name__)

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
dim = 384
index = faiss.IndexFlatL2(dim)

meta = []  # store ids

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/embed", methods=["POST"])
def embed():
    data = request.json
    text = data.get("text")
    doc_id = data.get("id")

    vec = model.encode([text]).astype("float32")
    index.add(vec)
    meta.append(doc_id)

    return jsonify({"message": "embedded", "count": len(meta)})

@app.route("/search", methods=["POST"])
def search():
    data = request.json
    query = data.get("query")

    if index.ntotal == 0:
        return jsonify({"results": []})

    qvec = model.encode([query]).astype("float32")
    D, I = index.search(qvec, 5)

    results = []
    for pos, dist in zip(I[0], D[0]):
        if pos == -1:
            continue
        results.append({"id": meta[pos], "score": float(dist)})

    return jsonify({"results": results})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

