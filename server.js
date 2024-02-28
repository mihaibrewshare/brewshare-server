const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const beerRoutes = require("./routes/beerRoutes");
const maltRoutes = require("./routes/maltRoutes");
const hopRoutes = require("./routes/hopRoutes");
const yeastRoutes = require("./routes/yeastRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/beers", beerRoutes);
app.use("/api/malts", maltRoutes);
app.use("/api/hops", hopRoutes);
app.use("/api/yeasts", yeastRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
