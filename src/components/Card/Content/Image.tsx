import * as React from 'react';

class Image extends React.Component<any, any>{
    render() {
        return (
            <div className="card-image">
                <figure className={"image is-" + this.props.format ?? "4by3"}>
                    <img src={this.props.src} alt={this.props.alt} />
                </figure>
            </div>
        )
    }
}

export default Image;