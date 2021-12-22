import React, { Component } from "react";
import ReactDOM from "react-dom";
import ItemComponent from "./item";
import  "./css.css";
import add from "./imgs/add.png"

class App extends Component {
  item = "";
  state = {
    listItems: [],
  };
  addItem = (e) => {
    e.preventDefault();
    this.state.listItems.push(this.item);
    this.item = "";
    document.querySelector("#todo").value = "";

    this.setState({
      listItems: this.state.listItems,
    });
  };
  hendelCheck = (e) => {
    this.state.listItems.splice(e.target.id,1);
    this.setState({
      listItems:this.state.listItems
    })
  };
  handelDelete = (e) => {
    let x =document.querySelectorAll(".title")
   x[e.target.id].classList.toggle("delete");

      };

  render() {
    return (
      <div className="cotainer">
        <div className="form-input">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              name="toDoInput"
              id="todo"
              onChange={(e) => (this.item = e.target.value)}
            />
           <input type="image"  src={add} />
                    </form>
        </div>
        <div>
          {this.state.listItems.map((title, index) => {
            return (
              <ItemComponent
                toDoTitle={title}
                key={index}
                id={index}
                handelCheck={this.hendelCheck}
                handelDelete={this.handelDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
