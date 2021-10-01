import { Route } from 'react-router';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Users from './components/users/users';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
