const express = require("express");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const productsRoute = require("./routes/products");
const reviewsRoute = require("./routes/reviews");

const { notFound, badRequest, generalError } = require("./errorhandlers");
const { join } = require("path");

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(join(__dirname, "../public")));

server.use("/products", productsRoute);
server.use("/reviews", reviewsRoute);


server.use(notFound);
server.use(badRequest);
server.use(generalError);

console.log(listEndpoints(server));

server.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`);
});