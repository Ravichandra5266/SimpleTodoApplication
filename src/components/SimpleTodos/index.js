import { Component } from "react";
import "./index.css";
import TodoItem from "../TodoItem";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

class SimpleTodos extends Component {
  state = {
    items: initialTodosList,
  };
  deleteTodo = (id) => {
    const { items } = this.state;
    const filterItems = items.filter((each) => each.id !== id);
    this.setState({
      items: filterItems,
    });
  };
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="container">
        <div className="todo-card">
          <h1>Simple Todo</h1>
          <ul>
            {items.length > 0 ? (
              items.map((each) => {
                return (
                  <TodoItem
                    key={each.id}
                    each={each}
                    deleteTodo={this.deleteTodo}
                  />
                );
              })
            ) : (
              <h2>Empty Items</h2>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default SimpleTodos;
