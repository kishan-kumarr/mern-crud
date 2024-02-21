require("dotenv").config();
require("./config/db_conn");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const UserRoute = require("./routes/UserRoute");
const cors = require("cors");

//* cors middleware
app.use(cors());

//* middleware
app.use(express.json());

//* routes
app.use("/api", UserRoute);

//* handling 404
app.get("*", (req, res) => {
  res.status(404).send({ status: 404, msg: "This route does not exist" });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
