const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON body

const PORT = process.env.PORT || 3200;

const academyRoute = require("./creditcheck.js");
app.use("/api/academy", academyRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
