import React from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { UserList } from "./users/UserList";
import { fetchData } from "../service/service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false,
      users: []
    }
  }

  onClick = () => {

    const isGrid = !this.state.isGrid;

    localStorage.setItem("isGrid", isGrid);


    this.setState({
      isGrid
    });
  }

  componentDidMount() {

    const users = fetchData();
    const previousView = localStorage.getItem("isGrid") === "true" ? true : false;

    users.then((listOfUsers) => {
      this.setState({
        users: listOfUsers,
        isGrid: previousView
      });
    })


  }

  componentWillUnmount() {
    alert("Unmount triggerd");

  }


  render() {

    return (
      <div>
        <Header title="Bit People" onClickHandler={this.onClick} isGrid={this.state.isGrid} />
        <UserList listOfUsers={this.state.users} isGrid={this.state.isGrid} />
        <Footer />
      </div>
    )
  }
}

export default App;
