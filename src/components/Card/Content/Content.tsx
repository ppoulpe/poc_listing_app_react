import * as React from 'react';

class Content extends React.Component<any, any>{
    render() {
        return (
            <div className="card-content">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Content;