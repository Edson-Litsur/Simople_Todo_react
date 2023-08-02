import { useState } from "react";
import './todoforms.css';


const TodoForms = ({ addTodo}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value || !category) return;

    // Adicionar todo
    addTodo(value, category )
    setValue("");
    setCategory("")
  }

  return (
   <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite  o titulo' value={value} 
            onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Projeto">Projeto</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
   </div>
  )
}

export default TodoForms
