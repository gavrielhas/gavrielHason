import React from "react";

export default ({ name, title }) => {
  return (
    <div>
      <h1>
        {name} <strong>{title}</strong>
      </h1>
    </div>
  );
};
