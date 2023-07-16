const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const errorHandler = require("./middlewares/errors");
const socket = require("./socket");
const routes = require("./routes");
const auth = require("./middlewares/auth");
require("dotenv").config();

// Serve static files from the public directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use("/api", auth.authorize);
app.use(routes);
app.use(errorHandler);

app.get("/", function (req, res) {
  res.send("Backend is running successfully....");
});

// Define a route for your HTML content
app.get("/my-html-content", (req, res) => {
  console.log("api called");
  res.sendFile(__dirname + "/public/my-html-content.html");
});

const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(`server listening on http://127.0.0.1:${PORT}`)
);

// socket connection
socket(io);
