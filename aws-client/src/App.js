import './App.css';
import Login from './components/Login/login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/signup';

function App() {
  return (
    <>
   <div className="app">
    <Login />
    <Navbar />
   </div>
   <SignUp /> 
   </>
  );
}

export default App;
