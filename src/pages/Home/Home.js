import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import style from '../../bootstrap/css/index.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div className={style.container}>
                <p>This is home</p>
                <p>当前计数：{this.state.count}<br/></p>
                <button className={`${style.btn} ${style.btnPrimary}`} onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}

export default hot(module)(Home);