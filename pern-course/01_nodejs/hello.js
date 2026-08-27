import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("this is api");
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Wellcome");
});

server.listen(3000, () =>
  console.log("Server Running on port http://localhost:3000"),
);
