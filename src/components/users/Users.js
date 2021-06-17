import React,{Component} from 'react';
import axios from "axios";
import User from "./User";
import SearchUsers from "./SearchUsers";

export default class Users extends Component{
    constructor(props) {
        super(props);

        this.state = {
            users: []

        }
    }

    searchUserFromGit = (data) => {
        if( data !== '' ) {
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then(response => {
                    this.setState({users: response.data.items});
                })
        }
    }

    getUsers = () => {
        axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({users: response.data})
            })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <SearchUsers getUserSearch={this.searchUserFromGit} />
                    </div>
                </div>
                <div className="row" >
                {
                    users.map((user) => {
                        return (
                            <div className="col-md-4" key={user.id}>
                                <User user={user} />
                            </div>

                        )
                    })
                }
                </div>
            </div>
        )
    }
}