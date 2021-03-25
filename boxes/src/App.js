import logo from './logo.svg';
import './App.css';

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

function App() {
  return (
    <div>
    <header>
      <h1>Logo</h1>
    </header>
    <main>
      <Box name="Salla Vuorikko" age="33" title="student" />
      <Box name="Taimi from Kujala" age="6" title="the dog" />
      <Box name="Jane Doan" age="50" title="doctor" />
    </main>
    <footer>
      <p>copyright</p>
    </footer>
    </div>
  );
}

export default App;
