const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let toDolist = [];

function check(req, res, next) {
  const todoId = parseInt(req.params.id);
  if (isNaN(todoId) || todoId < 0 || todoId >= toDolist.length) {
    return res.status(404).json({
      msg: "Todo not found",
    });
  } else {
    next();
  }
}

app.get("/todos", (req, res) => {
  res.json({
    toDoList: toDolist
  });
});

app.get("/todos/:id", check, (req, res) => {
  res.json(toDolist[parseInt(req.params.id)]);
});

app.post("/todos", (req, res) => {
  const object = {
    id: toDolist.length, // Autogenerated id
    title: req.body.title,
    description: req.body.description,
    completed: false, // Assuming completed should be false by default
  };

  toDolist.push(object);
  res.status(201).json({ id: object.id });
});

app.put("/todos/:id", check, (req, res) => {
  const todoId = parseInt(req.params.id);
  toDolist[todoId].title = req.body.title;
  toDolist[todoId].completed = req.body.completed;

  res.json({ msg: "Todo updated successfully" });
});

app.delete("/todos/:id", check, (req, res) => {
  toDolist.splice(parseInt(req.params.id), 1);
  res.json({ msg: "Todo deleted successfully" });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({
    msg: "Route not found",
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
module.exports = app;
