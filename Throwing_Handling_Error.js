import express from "express"

const app = express();
const PORT = 3000;

app.listen(3000, () => {
  console.log("Node JS is running.");
});

app.route("/error").get((req, res) => {
  throw new Error();
})

app.use((err,req,res,next) => {
  console.log(err);
  res.status(500).send("Something has broken.");
})