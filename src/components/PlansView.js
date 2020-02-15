import React, { Component } from 'react'
import PlanSummary from './PlanSummary'
import axios from "axios";
import PlanToggler from './PlanToggler';
import Loader from './Loader';

export class PlansView extends Component {

    state = {
        isMonthly: true,
        loading: false,
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
        this.setState({loading: true})
        await axios.get(url)
                .then(res => this.setState({plans: res.data.plans, loading: false}))
                .catch(error => {
                    console.log("Error: ", error); 
                    return this.setState({ loading: false });
                })
    }

    render() {
        let plans = this.state.plans
        plans = this.state.isMonthly ? plans.filter(plan => plan.interval === "monthly") : 
                                        plans.filter(plan => plan.interval === "year")
        return (
            <div className="container vertically-centered">
                <PlanToggler changeState={this.changeState} />
                { this.state.loading ? <Loader /> : <PlanSummary plans={plans} /> }
            </div>
        )
    }
}

export default PlansView
