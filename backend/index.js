const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
