import * as React from 'react';

class Column extends React.Component<any, any> {
    render() {
        return (
            <div className={'column ' + this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default Column;