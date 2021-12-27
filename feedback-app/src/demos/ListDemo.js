import React from "react";

function ListDemo() {
  const comments = [
    { id: 1, text: "comment 1" },
    { id: 2, text: "comment 2" },
    { id: 3, text: "comment 3" },
  ];
  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListDemo;
