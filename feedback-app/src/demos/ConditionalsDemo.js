import React from "react";

function ConditionalsDemo() {
  const comments = [
    { id: 1, text: "comment 1" },
    { id: 2, text: "comment 2" },
    { id: 3, text: "comment 3" },
  ];
  const isLoading = false;
  if (isLoading) return "Loading...";

  const showComments = true;

  return (
    <div>
      {/* {showComments ? "yes" : "no"} */}
      {/* {showComments && "yes"} */}
      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConditionalsDemo;
