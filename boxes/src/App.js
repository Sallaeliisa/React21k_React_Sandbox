
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main_Router from "./Main_Router";
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main_Router />
      <Footer />
    </Router>
  );
}

export default App;
