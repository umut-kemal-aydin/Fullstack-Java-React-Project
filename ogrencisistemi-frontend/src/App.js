import EmployeeList from './components/EmployeesList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';
import OgrenciListeleComponent from './components/OgrenciListeleComponent';
import {BrowserRouter as Router, Route , Switch} from  'react-router-dom';
import OgrenciOlusturComponent from './components/OgrenciOlusturComponent';
import OgrenciGuncelleComponent from './components/OgrenciGuncelleComponent';
function App() {
  return (
    <div>
      <Router>
        <div className ="container"> 
            <div className ="container">
              <Switch> http://localhost:3000/
                  <Route path = "/" exact component = {OgrenciListeleComponent}></Route>
                  <Route path = "/ogrenciler" component  = {OgrenciListeleComponent}></Route>
                  <Route path = "/ogrenciolustur" component  = {OgrenciOlusturComponent}></Route>
                  <Route path = "/ogrenciguncelle/:id" component  = {OgrenciGuncelleComponent}></Route>
                 <OgrenciListeleComponent/>
              </Switch>
            </div>
       </div>
    </Router>
    </div>
   
  );
}


export default App;
