import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = {resource: []};

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resource: response});
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resource: response});
        }
    }

    render() {
        return (
            <div>
                <h3>Resources</h3>
                <p>{this.props.resource}</p>
            </div>
        );
    }
}

export default ResourceList;