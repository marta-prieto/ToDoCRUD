

import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/AddHeader';
import Form from './components/AddForm';
import TodoList from './components/AddTodoList';
import Refund from './components/AddRefund';
import Comunication from './components/AddComunication';
import Friend from './components/AddFriend';

function App() {
  return (
   
       <Router>
         <div className="App">
            <Header path="/form" element={<Header />} />
          <main>
              <Routes>
                <Route path="/form" element={<Form />} />
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