import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// npm install body-parser
// npm install cors

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

const rooms = {
  "id-1": {
    field: [],
  },
  "id-2": {
    field: [],
  },
};

let roomId = 1;
app.get("/join", (req, res) => {
  const room = createRoom(roomId);
  roomId++;
  res.json(room);
});

// /move/100500/b/a1/a2

// app.get("/move/:roomId/:playerId/:from/:to", (req, res) => {
//     req.params.roomId // "100500"
//     req.params.playerId // b
// });

app.post("/move", (req, res) => {
  req.body.roomId;
  // do something with room
  console.log(req.body);
  res.json(rooms[req.body.roomId]);
});

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/hello-world", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
