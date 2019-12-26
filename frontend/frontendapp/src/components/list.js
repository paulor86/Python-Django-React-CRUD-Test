import React, { Component } from "react";

class List extends Component {

    state = {
        lists: []
    }
    
    loadLists = () => {
        fetch('http://127.0.0.1:8000/api/lists/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${this.props.token}`
          },
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
          data => {
            this.setState({lists: data})
          }
        )
        .catch( error => console.error(error))
    }

    render() {
        return (
            <div>
                <h1>List Users</h1>
                { this.state.lists.map( list => {
                return <h3 key={list.id}>{list.name} {list.lastname} - {list.birth_date}</h3>
                })}
                <button onClick={this.loadLists}>Load Lists Users</button>            
            </div>
        );
    }
}

export default List;
