import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to business rule engine app" });
});

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
