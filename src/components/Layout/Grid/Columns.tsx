import * as React from 'react';

class Columns extends React.Component<any, any> {
    render() {
        return (
            <div className={'columns ' + this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default Columns;