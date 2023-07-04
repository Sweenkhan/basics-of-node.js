import express from "express";
// import bodyParser from "body-parser";
// import url from "url"

const app = express();
// ap p.use(bodyParser.json());

let users = [
  { id: 1, name: "Dev Anand" },
  { id: 2, name: "Raj Kapoor" },
  { id: 3, name: "Rajesh Khanna" },
];

// GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(users);
});
console.log("sachin")

// PUT /users/:id
app.put("/users/:id", (req, res) => {  
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    users.forEach((user, index) => {
      if (user.id === id) {
        users[index] = updatedUser;
      }
    });
    res.json(updatedUser);  
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: `User with id ${id} deleted` });
});

app.all("/secret", (req, res) => {
  res.status(200).json("secret");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});