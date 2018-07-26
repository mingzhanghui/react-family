import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import style from '../../bootstrap/css/index.css';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.container}>Hello world!</div>
        )
    }
}

export default hot(module)(Hello);