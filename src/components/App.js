import React from 'react';

class App extends React.Component {
    state = {resourse: 'Posts'};

    render() {
        return (
            <div className="ui container">
                <h1>App Component</h1>
                <div>
                    <button onClick={() => this.setState({resourse: 'Posts'})} className="ui basic button">POSTS</button>
                    <button onClick={() => this.setState({resourse: 'Todos'})} className="ui basic button">TODOS</button>
                </div>
                <h3>{this.state.resourse}</h3>
            </div>
        );
    }
}

export default App;