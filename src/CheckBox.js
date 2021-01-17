import React, {useState} from "react";

function CheckBox(props) {
  let [check, setCheck] = useState(false);
  let checkChange = (event) => {
    if (event.target.checked === true) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div>
      <form name="check_box">
        <input
          type="checkbox"
          className="option-input02 checkbox"
          checked={check}
          onChange={checkChange}
        />
      </form>
    </div>
  );
}

export default CheckBox;
