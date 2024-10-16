

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/AddHeader';
import Form from './components/Form/AddForm';
import TodoList from './components/Tasks/AddTodoList';
import Refund from './components/GetRefund/AddRefund';
import Comunication from './components/Comunication/AddComunication';
import Friend from './components/FriendList/AddFriend';


function App() {

  return (

    <Router>
      <div className="App">
        <Header />
      
        <main>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/list" element={<TodoList />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/comunication" element={<Comunication />} />
            <Route path="/friend" element={<Friend />} />
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;