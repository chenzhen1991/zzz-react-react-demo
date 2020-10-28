import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/index';
import {Button} from 'antd'

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.dispatch(increment())
    }

    render() {
        return (
            <div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick()}>点击+1</button></div>
                <Button type="primary">按钮</Button>
            </div>
        );
    }
}
export default connect(
    state => ({
        number: state.number
    })
)(Demo);