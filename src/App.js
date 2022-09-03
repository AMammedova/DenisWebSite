
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from "./Components/Header";
import MainPage from './Components/MainPage';
import {useState} from 'react'
import Service from './Components/Service';

function App() {
 
  const [childWrapperClass,setChildWrapperClass]=useState("child_wrapper");
  

  return (
    <div className="App">
      
     
       <div className={childWrapperClass}>
       <Header childWrapperClass={childWrapperClass} setChildWrapperClass={setChildWrapperClass}/>
       <MainPage/>
       
       <Switch>
      
      <Route path='/portfolio' exact component={Portfolio}/>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/service' exact component={Service}/>
      

    
      </Switch>
       </div>
      
    </div>
  );
}

export default App;
