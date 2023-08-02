import { useState } from 'react';
import Todo from './components/Todo';
import TodoForms from './components/TodoForms';
import Search from './components/search';
import Filter from './components/Filter';
import './App.css'   


const App = () => {


  const [todos, setTodos] = useState(
    [
      { id:1,
        text: "Criar funcionalidae X no sistema",
        category: "Trabalho",
        isCompleted: false 
      },

      {id:2,
        text: "Ir a Escola",
        category: "Pessoal",
        isCompleted: false
      },

      {id:3,
        text: "Criar um Todo Simples",
        category: "Projecto",
        isCompleted: false
      }
    ]);


    // Pesquisar

    const [search, setSearch] = useState ("");

    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc")


    // Adicionar todos
    const addTodo = (text, category) => {

      const newTodos = [
        ...todos,
        {id: Math.floor(Math.random() * 10000),
          text,
          category,
          isCompleted: false,
        },
      ];
      setTodos(newTodos)
    };

    // Remover todos

    const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
      setTodos(filteredTodos);
    };

    // cppmpleted  todos

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  };


 
 

return(
  <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter ={filter} setFilter={setFilter} setSort = {setSort} />
    <div className="todo-list">
      {todos
       .filter((todo) =>
       filter === "All" 
       ? true
       : filter === "Completed" 
       ? todo.isCompleted
       : !todo.isCompleted
      )
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a,b) =>
      sort === "Asc"
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text))
      .map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo ={completeTodo} /> 
      ))}
    </div>
    <TodoForms addTodo={addTodo} />

  </div>

);


} 

export default App;