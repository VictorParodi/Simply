import React, {useState} from 'react';
import ResourceList from './ResourceList.js';

const App = () => {
    const [resource, setResource] = useState('POST');

    return (
        <div className="ui container">
            <h1>App Component</h1>
            <div>
                <button onClick={() => setResource('POST')} className="ui basic button">POSTS</button>
                <button onClick={() => setResource('TODOS')} className="ui basic button">TODOS</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    );
}

export default App;