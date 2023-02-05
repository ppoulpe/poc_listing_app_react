import * as React from 'react';

class Card extends React.Component<any, any>{

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}

export default Card;