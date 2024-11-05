import React, { useState } from "react";

const NumberInput = ({ maxPersonsByTeam, onChange }) => {
  const [count, setCount] = useState(maxPersonsByTeam);

  const handleClick = (type: "decrease" | "increase") => {
    setCount((prev: number) => {
      const count =
        type === "increase"
          ? Math.min(prev + 1, maxPersonsByTeam)
          : Math.max(prev - 1, 1);

      // onChange(count);
      return count;
    });
  };

  return (
    <div className="number_wrap">
      <strong className="form_title">인원</strong>
      <div className="count_wrap">
        {maxPersonsByTeam !== 1 && (
          <button
            type="button"
            className="count_button -minus"
            disabled={count <= 1}
            onClick={() => handleClick("decrease")}
          >
            <span className="blind">decrease</span>
          </button>
        )}
        <div className="count_text">{count}</div>
        {maxPersonsByTeam !== 1 && (
          <button
            type="button"
            className="count_button -plus"
            onClick={() => handleClick("increase")}
            disabled={count >= maxPersonsByTeam}
          >
            <span className="blind">increase</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NumberInput;
