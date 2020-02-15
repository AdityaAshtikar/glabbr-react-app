import React, { Component } from 'react'
import PlanSummary from './PlanSummary'
import axios from "axios";
import PlanToggler from './PlanToggler';

export class PlansView extends Component {

    state = {
        isMonthly: true,
        plans: []
    }

    changeState = (isMonthly) => {
        this.setState({
            isMonthly: isMonthly
        })
    }

    async componentDidMount () {
                // https://www.mocky.io/v2/5e3156863200007200888450
        let url = 'https://www.mocky.io/v2/5e3156863200007200888450'
        await axios.get(url)
                .then(res => this.setState({plans: res.data.plans}))
                .catch(error => console.log("Error: ", error))
    }

    render() {
        let plans = this.state.plans
        plans = this.state.isMonthly ? plans.filter(plan => plan.interval === "monthly") : 
                                        plans.filter(plan => plan.interval === "year")
        return (
            <div className="container vertically-centered">
                <PlanToggler changeState={this.changeState} />
                <PlanSummary plans={plans} />
            </div>
        )
    }
}

export default PlansView
