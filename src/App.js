import './App.css';
import Profile from './Components/Profile'
import Login from './Components/Login'
import ChangeColor from './Components/ChangeColor';
import ChangeBackground from './Components/ChangeBackground';
function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <ChangeBackground />
    </div>
  );
}

export default App;
