import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    
      <div className="bg">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='font'>.Learning_Q</h1>
        <br/>
        <form className='form'>
          <button className="button1"><Link to="/Login" className="d">Login</Link></button>
          <button className="button2"><Link to="/Signup" className="d">Signup</Link></button>
        </form>
      </div>
    </>
  );
}

export default App;