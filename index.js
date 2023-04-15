import express from "express";
import StudentData from "./data/student_data.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// Get method
app.get("/", (request, response) => {
  response.send("This is the response from get method");
});

// Post method
app.post("/create", (request, response) => {
  response.send("This is the create/ post method.")
})

app.get("/student/:id", (request, response) => {
  const stdId = Number(request.params.id);
  const stdData = StudentData.filter((std) => std.id === stdId);
  response.json(stdData);
});

app.listen(PORT, () => {
  console.log(`Node js server is running in port : ${PORT}`); 
})

app.get("/next", (request, response, next) => {
  console.log("The response will sent by the next functions.");
  // setTimeout(next, 1000);
  next();
}, (request, response) => {
  response.send("This is the response from next.")
})

app.use(express.static("image"))