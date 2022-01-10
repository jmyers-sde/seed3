import React, { Component } from 'react'
import Button from '../Button';

export default class AddReviewForm extends Component {
    render() {
        const {
            showing,
            buttonFunction,
            buttonText,
            buttonClass,
            handleChange,
            handleSubmit,
            book
        } = this.props

        return (
            <>
                {showing === true ?
                    <div className="reviewForm text-center">
                        <div className="mb-3">
                            <h4 className="d-inline-block">Add Review</h4>

                            <Button buttonFunction={buttonFunction.toggleComponent}
                                buttonText={buttonText.close}
                                buttonClass={buttonClass.close} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input className="d-none"
                                type="text"
                                name="id"
                                defaultValue={book._id} />


                            <input className="d-block w-100 mt-2 mx-auto p-1 rounded"
                                type="text"
                                onChange={handleChange}
                                name="name"
                                placeholder="Your Name Goes Here..."
                                required />

                            <h5 className="mt-3 mx-auto rating w-50">Give a rating... 1 to 5</h5>

                            <div className="d-flex justify-content-around">
                                <div className="rating">
                                    <input type="radio" name="rating" value="1" required /> <p >Worst (1)</p>
                                </div>

                                <div className="rating">
                                    <input type="radio" name="rating" value="2" required /> <p >Bad (2)</p>
                                </div>

                                <div className="rating">
                                    <input type="radio" name="rating" value="3" required /> <p >Ok (3)</p>
                                </div>

                                <div className="rating">
                                    <input type="radio" name="rating" value="4" required /> <p >Good (4)</p>
                                </div>

                                <div className="rating">
                                    <input type="radio" name="rating" value="5" required /> <p >Best (5)</p>
                                </div>
                            </div>

                            <textarea className="d-block w-100 mt-5 mx-auto p-1 rounded"
                                type="text"
                                onChange={handleChange}
                                name='comment'
                                placeholder="Add Your Comment Here....."
                                required
                            />

                            <button className="btn btn-primary d-block mx-auto mt-3" type="submit">Submit</button>
                        </form>
                    </div>
                    
                    : <Button buttonFunction={buttonFunction.toggleComponent}
                        buttonClass={buttonClass.open}
                        buttonText={buttonText.open} />
                }
            </>
        )
    }
}