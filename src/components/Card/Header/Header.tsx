import * as React from 'react';

class Header extends React.Component<any, any>{
    render() {
        return (
            <header className="card-header">
                {this.props.children}
            </header>
        )
    }
}

export default Header;