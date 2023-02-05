import * as React from 'react';

class Root extends React.Component<any, any> {
    render() {
        return (
            <section className="section">
                <div className="container">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Root;