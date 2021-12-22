import React, { Component, Fragment } from "react";
import deleteBottun from "./imgs/delete.png";
import checkBottun from "./imgs/check.png";
class ItemComponent extends Component {
  render() {
    return (
      <Fragment>
        <div  className="item">
          <div className="title">{this.props.toDoTitle}</div>
          <div>
            <img
              src={deleteBottun}
              alt=""
              onClick={this.props.handelDelete}
              id={this.props.id}
              alt="de"
            />

            <img
              src={checkBottun}
              alt=""
              onClick={this.props.handelCheck}
              id={this.props.id}
              alt="che"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ItemComponent;
