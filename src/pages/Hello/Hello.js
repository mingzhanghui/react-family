import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello world!</div>
        )
    }
}

export default hot(module)(Hello);