import React from 'react'
import logo from "../logo192.png";

export const Plan = (props) => {
    let basis = props.plan.interval === "monthly" ? "month" : "year"
    return (
        <div className='col-md-4'>
            <div className="plan-container">
                <div className="plan-image">
                    <img className="img-fluid plan-logo" alt="Plan Type" src={logo} />
                </div>
                <div className="plan-name">
                    {props.plan.planName}
                </div>
                <div className="plan-description">
                    {props.plan.planDescription}
                </div>
                <div className="plan-price">
                    <span className="currency-symbol">{props.plan.currencySymbol}&nbsp;</span>
                    <span className="amount">{props.plan.amount}</span>
                    <span className="basis"> / {basis}</span>
                </div>

                <div className="plan-features">
                    <ul>
                        { props.plan.features.map((p, index) => <li key={index}>{p}</li>) }
                    </ul>
                </div>

            </div>
        </div>
    )
}
