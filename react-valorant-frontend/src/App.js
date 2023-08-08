import ListCharacterComponent from './components/ListCharacterComponent';
import CreateCharacterComponent from './components/CreateCharacterComponent';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Router>  
            <div className="container">
            <Routes>
                    <Route path = "/" exact element = {<ListCharacterComponent />} ></Route>
                    <Route path = "/getCharacters" element = {<ListCharacterComponent />} ></Route>
                    <Route path = "/add-character" element = {<CreateCharacterComponent />} ></Route>
                   
            </Routes>      
            </div>
    </Router>
</div> 
  );
}

export default App;




