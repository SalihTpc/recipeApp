import React from "react";

const Recipe = (title, calori, url) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calori}</p>
      <img src={url} alt="" />
    </div>
  );
};
export default Recipe;
