import React, {Component} from 'react';

import style from './Page1.css';

import brickpsert from './images/brickpsert.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                this is page1~
                <img src={brickpsert}/>
            </div>
        )
    }
}