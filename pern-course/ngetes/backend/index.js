import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Wellcome");
});

app.get("/id", (req, res) => {
  res.send({ nama: "jokowi", umur: 30, alamat: "pekalongan" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
