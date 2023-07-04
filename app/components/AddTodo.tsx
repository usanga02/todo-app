import React from "react";
import { prisma } from "../db";

type Props = {};

const AddTodo = (props: Props) => {
  const addTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Title Invalid");
    }
    await prisma.todo.create({ data: { title, complete: false } });
  };

  return (
    <form action={addTodo} className="flex justify-between">
      <input
        type="text"
        name="title"
        placeholder="A New To Do Item"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none w-3/5 md:w-3/4"
      />
      <button
        type="submit"
        className=" bg-[#0080FF] px-5 py-3 rounded-md text-white"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddTodo;
