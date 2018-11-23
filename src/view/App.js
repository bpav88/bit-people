import React, { Fragment } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { Search } from "./partials/Search";
import { Footer } from "./partials/Footer";
import { UserList } from "./users/UserList";
import { fetchData } from "../service/service";
import { Loader } from './partials/Loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGrid: false,
            users: [],
            isLoading: true,
            searchText: '',
            page: 'list'
        }
    }

    onClick = () => {

        const isGrid = !this.state.isGrid;

        localStorage.setItem("isGrid", isGrid);


        this.setState({
            isGrid
        });
    }

    onSearch = (event) => {
        this.setState({
            //searchText
            searchText: event.target.value
        })
    }

    onAbout = () => {
        this.setState({
            page: 'about'
        })

    }

    fetchUsers = () => {
        const previousView = localStorage.getItem("isGrid") === "true" ? true : false;
        fetchData()
            .then((listOfUsers) => {
                this.setState({
                    users: listOfUsers,
                    isGrid: previousView,
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        this.fetchUsers();
    }

    onRefresh = () => {
        this.fetchUsers();
    }

    render() {
        const searchedUsers = this.state.users.filter((user) => {
            return user.firstName.includes(this.state.searchText);
        })

        return (
            <Fragment>
                <Header title="Bit People"
                    onClickHandler={this.onClick}
                    isGrid={this.state.isGrid}
                    onRefreshClick={this.onRefresh}
                    onAboutClick={this.onAbout} />

                {this.state.isLoading ?
                    <Loader /> :
                    <Fragment>
                        <Search onSearchHandler={this.onSearch} />
                        <UserList
                            listOfUsers={searchedUsers}
                            isGrid={this.state.isGrid}
                            page={this.state.page} />
                    </Fragment>
                }
                <Footer />
            </Fragment >
        )
    }
}

export default App;
