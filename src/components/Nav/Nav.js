import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './nav.css';

export default class Nav extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            url: ''
        }
    }
    switchTab(e) {
        var a = e.target;
        [].slice.call(a.parentNode.parentNode.childNodes).forEach(function(li) {
            li.classList.contains(style.active) && li.classList.remove(style.active);
        });
        if (a.href === window.location.href) {
            a.parentNode.classList.add(style.active);
        }
    }
    render() {
        return (
            <header className={style.staticTop}>
                <ul className={`${style.nav} ${style.navbar}`}>
                    <li className={style.active} onClick={(e) => this.switchTab(e)}><Link to="/">首页</Link></li>
                    <li onClick={(e) => this.switchTab(e)}><Link to="/hello">Welcome</Link></li>
                    <li onClick={(e) => this.switchTab(e)}><Link to="/page1">Page1</Link></li>
                    <li onClick={(e) => this.switchTab(e)}><Link to="/counter">Counter</Link></li>
                    <li onClick={(e) => this.switchTab(e)}><Link to="/userinfo">UserInfo</Link></li>
                </ul>
            </header>
        )
    }
}