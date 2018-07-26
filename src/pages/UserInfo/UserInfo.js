import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

import style from '../../bootstrap/css/index.css';

class UserInfo extends Component {
    constructor(props) {super(props); this.state = {};}

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div className={style.container}>
                {
                    isLoading ? '请求信息中......' : (
                        errorMsg ? errorMsg :
                            <div className={style.rows}>
                                <p>用户信息</p>
                                <p>用户名：{userInfo.name}</p>
                                <p>介绍：{userInfo.intro}</p>
                            </div>
                    )
                }
                <button className={`${style.btn} ${style.btnPrimary}`} onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

// function mapStateToProps(state) {return { userinfo: state.userInfo }}
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);

