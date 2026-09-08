import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res("heylonn");
});

app.listen(port, () => `Listening on port: ${port}`);
