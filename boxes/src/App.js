
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";


function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
