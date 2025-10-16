/* // src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Importation des composants depuis le dossier "components"
import Bienvenue from "./components/Bienvenue";
import Compteur from "./components/Compteur";
import Formulaire from "./components/Formulaire";
import ListeCourses from "./components/ListeCourses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* En-tête d'origine Vite + React *///}
/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* 💡 Nos exercices React *///}
/*
      <hr />
      <h2>Exercice 1 : Composant simple</h2>
      <Bienvenue nom="Daissem" />

      <hr />
      <h2>Exercice 2 : useState</h2>
      <Compteur />

      <hr />
      <h2>Exercice 3 : Gérer les événements</h2>
      <Formulaire />

      <hr />
      <h2>Exercice 4 : Liste dynamique</h2>
      <ListeCourses />
    </>
  );
}

export default App; */
// src/App.jsx
import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  // 🗂️ État pour la liste des tâches
  const [todos, setTodos] = useState([]);

  // 📝 État pour la saisie de la nouvelle tâche
  const [task, setTask] = useState("");

  // ➕ Ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: task, completed: false },
      ]);
      setTask(""); // Réinitialiser le champ de saisie
    }
  };

  // ✅ Marquer une tâche comme complétée / non complétée
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ❌ Supprimer une tâche
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      {/* Champ de saisie */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
      />

      {/* Bouton Ajouter */}
      <button onClick={addTask}>Ajouter</button>

      {/* Liste des tâches */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleCompletion(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => deleteTask(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🔹 Composant principal qui affiche TodoApp
function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
