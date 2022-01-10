import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { buttonClass, buttonFunction = f => f, buttonText } = this.props
        return (
            <button className={buttonClass}
                onClick={buttonFunction}>
                {buttonText}
            </button>
        )
    }
}