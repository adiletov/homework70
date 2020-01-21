import React from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MoviePage from "./Components/MoviePage/MoviePage";

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
              <Route path="/movie/:id" exact component={MoviePage}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
