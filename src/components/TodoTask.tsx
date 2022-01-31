import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <b>Task name: </b>
        <span>{task.taskName}</span>
        <b> Deadline: </b>
        <span>{task.deadline}</span>
        <b> days.</b>
      </div>
      <div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TodoTask;
