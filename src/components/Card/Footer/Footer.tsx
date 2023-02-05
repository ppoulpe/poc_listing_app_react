import * as React from 'react';

class Footer extends React.Component<any, any>{
    render() {
        return (
            <footer className="card-footer">
                {this.props.children}
            </footer>
        )
    }
}

export default Footer;