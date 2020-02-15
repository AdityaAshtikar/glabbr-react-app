import React from 'react'
import { Plan } from './Plan'
import Error from './Error'

function PlanSummary (props) {
    const plans = props.plans
    
    return (
        plans.length <=0 ? <Error /> : 
            <div>
                <div className="container plan-summary">
                    <div className="row">
                        { plans.map((plan, index) => <Plan plan={plan} key={index} />) }
                    </div>
                </div>
                <div className="row plan-button-container">
                    <div className="col-md-6">
                            <button className="btn btn-block btn-primary">Get Started For Free</button>
                    </div>
                </div>
            </div>
    )
}

export default PlanSummary
