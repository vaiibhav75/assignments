/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.toDoList = [];
    }

    add (toDo) {
        this.toDoList.push(toDo);
    }

    remove (i) {
        if (i >= 0 && i < this.toDoList.length) {
            this.toDoList.splice(i,1);
        }
    }

    update (i, val) {
        if (i >= 0 && i < this.toDoList.length) {
            this.toDoList[i] = val;
        }
    }

    getAll () {
        return this.toDoList;
    }

    get (i) {
        if (i >= 0 && i < this.toDoList.length) {
            return this.toDoList[i];
        }
        return null;

    }

    clear () {
        this.toDoList.splice(0,this.toDoList.length);
    }

}

module.exports = Todo;
