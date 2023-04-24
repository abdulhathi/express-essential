import experss from 'express';

const app = experss();
const PORT = 3000

app.listen(PORT, () => {
  console.log("Node js is running");
})

// Use the Json format request
// app.use(experss.json());

// Use the url encoded format request
app.use(experss.urlencoded({extended: true}));

app.post("/item", (request, response) => {
  console.log(request.body);
  response.send(request.body);
})