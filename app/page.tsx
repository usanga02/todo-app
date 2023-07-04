import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { prisma } from "./db";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col h-screen max-w-2xl p-10 md:p-24">
      <header>
        <h1 className="text-3xl pb-3 font-bold text-left">To Do List</h1>
        <hr />
        <h4 className="py-3 text-gray-500">Done</h4>
        <hr />
      </header>
      <ul className="py-3 flex flex-col h-full justify-start">
        {todos.map((todo, index) => (
          <TodoItem
            id={"" + index}
            title={todo.title}
            complete={todo.complete}
            createdAt={todo.createdAt}
          />
        ))}
      </ul>
      <AddTodo />
    </main>
  );
}
