const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/live", async (req, res) => {
  try {
    const response = await fetch("https://api.cricbuzz.com/cbplus/cricket/live/json/live_international.json");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch scores" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
