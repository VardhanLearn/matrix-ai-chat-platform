const router = require("express").Router();
const axios = require("axios");

const NLP_SERVICE_URL = process.env.NLP_SERVICE_URL || "http://localhost:8000";

router.post("/search", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "query is required" });

  const resp = await axios.post(`${NLP_SERVICE_URL}/search`, { query });
  res.json(resp.data);
});

router.post("/embed", async (req, res) => {
  const { text, id } = req.body;
  if (!text || !id) return res.status(400).json({ error: "text and id required" });

  const resp = await axios.post(`${NLP_SERVICE_URL}/embed`, { text, id });
  res.json(resp.data);
});

module.exports = router;

