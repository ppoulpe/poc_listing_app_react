import * as React from 'react';

class Item extends React.Component<any, any>{
    render() {
        return (
            <a
                className="card-footer-item"
                onClick={this.props.onClick}
                data-value={this.props.dataValue}
            >
                {this.props.value}
            </a>
        )
    }
}

export default Item;