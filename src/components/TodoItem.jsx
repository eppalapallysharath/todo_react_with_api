import React from "react";

const TodoItem = ({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo" key={id}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => updateHandler(id)}
        />
        <button className="btn" onClick={() => deleteHandler(id)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
