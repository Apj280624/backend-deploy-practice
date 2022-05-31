const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  // console.log(req);
  console.log(process.env.SECRET);
  res.send(
    "Heroku servers are able to to recieve your request, Your secret is: " +
      process.env.SECRET
  );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
