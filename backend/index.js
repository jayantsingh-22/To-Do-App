const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tasksRoutes = require("./routes/tasksRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
