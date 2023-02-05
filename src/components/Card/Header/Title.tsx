import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class Title extends React.Component<any, any>{
    render() {
        return (
            <>
                <p className="card-header-title">
                    {this.props.title}
                </p>
                <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <FontAwesomeIcon icon={icon({ name: 'bars', style: 'solid' })} />
                    </span>
                </button>
            </>
        )
    }
}

export default Title;