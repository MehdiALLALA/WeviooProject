import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './App.css'
import Post from './components/Post';
import PostDetails from './components/PostDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/PostDetails" element={<PostDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
