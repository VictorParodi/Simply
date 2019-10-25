import React from 'react';

class ResourceList extends React.Component {
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