import React from "react";

type Props = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
};

const TodoItem = ({ id, title, complete, createdAt }: Props) => {
  return (
    <li className="my-2 flex items-center round">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer w-10 h-10 peer mr-5"
      />
      <div>
        <label
          htmlFor={id}
          className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer font-[500] text-xl"
        >
          {title}
          <p className="text-gray-400 text-base">{createdAt.toDateString()}</p>
        </label>
      </div>
    </li>
  );
};

export default TodoItem;
