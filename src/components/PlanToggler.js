import React, { Component } from 'react'

class PlanToggler extends Component {

    handleChange = (e) => {
        // console.log(e.target.checked)
        e.target.checked ? this.props.changeState(false) : this.props.changeState(true)
    }

    render() {
        return (
            <div className="toggler">
                <span>MONTHLY</span>
                &nbsp;&nbsp;&nbsp;
                <label className="switch">
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="slider round"></span>
                </label>
                &nbsp;&nbsp;
                <span>YEARLY</span>
                <span className="prices-small">Prices</span>
            </div>
        )
    }
}

export default PlanToggler
