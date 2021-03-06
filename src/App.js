import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import RecipeResults from "./components/RecipeResults/RecipeResults";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <RecipeResults />
      </div>
    );
  }
}

export default App;
