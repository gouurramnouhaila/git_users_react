import React,{Component} from 'react';
import './../../style.css';

export default class SearchUsers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            search : ''
        }
    }

    handleForm = (e) => {
           this.setState({search: e.target.value})
    }

    handleSearchUser = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }



    render() {
        const {search} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSearchUser}>
                    <fieldset>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input type="text"   id="search" onChange={this.handleForm}
                                  placeholder="Search users..." className="inp" value={search}/>
                                <button type="submit" className="btn btn-info inp">Search</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}