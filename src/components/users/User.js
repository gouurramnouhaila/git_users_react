import React from 'react';


export default function User(props) {

    const { login,avatar_url,html_url,repos_url } = props.user;
    return (

        <div className="card">
            <img className="card-img-top" src={avatar_url} />
            <div className="card-body">
                <h4 className="card-title">{login}</h4>
                <p className="card-text">
                    <a href={html_url} className="btn btn-secondary m-1">Show more</a>
                    <a href={repos_url} className="btn btn-info">Repositories</a>
                </p>
            </div>
        </div>
    )
}