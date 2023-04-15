import express from "express";

const app = express();
const PORT = 3000

app.listen(3000, () => {
  console.log("Node js redirect is start listening.")
})

app.get("/redirect", (request, response) => {
  response.redirect("https://www.linkedin.com");
})