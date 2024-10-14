

import './App.scss';

import Header from './Header';
import Form from './Form';
import TodoList from './List';

function App() {



  return (
    <div className="App">
          <Header />
      <main>
          <Form />
          <TodoList />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;