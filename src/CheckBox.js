import React, {Component} from "react";
import firebase from "firebase/app";
import "./CheckBox.css";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange(event) {
    console.log(event.target.checked);
    if (event.target.checked === true) {
      this.setState((state) => ({check: true}));
    } else {
      this.setState((state) => ({check: false}));
    }
  }

  render() {
    return (
      <div>
        <div>
          <form name="check_box">
            <input
              type="checkbox"
              className="check_box"
              checked={this.state.check}
              onChange={this.colorChange}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default CheckBox;