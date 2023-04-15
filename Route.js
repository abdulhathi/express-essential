import express from "express";

const app = express();
const PORT = 3000;

app
.route("/class")
.get((request,response) => {
  response.send("Response from the retrive function.")
})
.post((request,response) => {
  response.send("Response from the create function.")
})
.put((request,response) => {
  response.send("Response from the update function.")
})

app.listen(PORT, () => {
  console.log("Node JS is start listening");
})