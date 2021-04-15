import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactsList from "./components/ContactsList/ContactsList";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Menu from "./components/Menu/Menu";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    },2500)
},[])

if (isLoading === true) {
    return (
        <Loading />
    )  
}

  return (
    <>
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
            <Header />
           <ContactsList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact>
            <Header />
            <ContactsList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
