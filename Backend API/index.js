const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "backend-api" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));

