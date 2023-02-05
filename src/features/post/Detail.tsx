import * as React from 'react';

class Detail extends React.Component<any, any> {

    render() {
        if (this.props.post) {
            return (
                <div className="box has-background-white">
                    <strong>{this.props.post?.title}</strong>
                    <hr />
                    <p>
                        {this.props.post?.body}
                    </p>
                    <hr />
                    <p>
                        {this.props.post?.id}
                    </p>
                </div>
            )
        }
    }
}

export default Detail;