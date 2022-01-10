import React, { Component } from 'react'
import Button from '../Button'

export default class AddBookForm extends Component {
    render() {
        return (
            <>
                {this.props.showing === true ?
                    <div className="formContainer">
                        <div className="mb-3">
                            <h4 className="d-inline-block">Add Review</h4>

                            <Button buttonFunction={this.props.buttonFunction}
                                buttonText={this.props.buttonText.close}
                                buttonClass={this.props.buttonClass.close} />
                        </div>

                        <form onSubmit={this.props.handleSubmit} name="newBookForm">
                            <input className="d-block w-100 mx-auto p-1 rounded"
                                id="title"
                                type="text"
                                onChange={this.props.handleChange}
                                name="title"
                                placeholder="Book Title..."
                                required />
                            <input className="d-block w-100 mt-2 mx-auto p-1 rounded"
                                type="text"
                                onChange={this.props.handleChange}
                                name="author"
                                placeholder="Author..."
                                required />

                            <input className="d-block w-100 mt-2 mx-auto p-1 rounded"
                                type="text"
                                onChange={this.props.handleChange}
                                name="genre"
                                placeholder="Genre..."
                                required />

                            <h4 className="mt-5 mb-3">What did you think of the book?</h4>

                            <hr className="bg-white" />

                            <input className="d-block w-100 mt-2 mx-auto p-1 rounded"
                                type="text"
                                onChange={this.props.handleChange}
                                name="name"
                                placeholder="Your Name..."
                                required />

                            <h5>Give a rating from 1 to 5</h5>

                            <div className="d-flex justify-content-around">
                                <div>
                                    <input type="radio" name="rating" value="1" required /> <p>Worst (1)</p>
                                </div>

                                <div>
                                    <input type="radio" name="rating" value="2" required /> <p>Bad (2)</p>
                                </div>

                                <div>
                                    <input type="radio" name="rating" value="3" required /> <p>Ok (3)</p>
                                </div>

                                <div>
                                    <input type="radio" name="rating" value="4" required /> <p>Good (4)</p>
                                </div>

                                <div>
                                    <input type="radio" name="rating" value="5" required /> <p>Best (5)</p>
                                </div>
                            </div>

                            <textarea className="d-block w-100 mt-2 mx-auto p-1 rounded"
                                type="text"
                                onChange={this.props.handleChange}
                                name='comment'
                                placeholder="Add Your Comment Here....."
                                required
                            />

                            <button className="btn btn-primary d-block mx-auto mt-3" type="submit">Submit</button>
                        </form>
                    </div>

                    :
                    <div className="addBook">
                        <p>Add New Book?...</p>
                        <Button buttonClass={this.props.buttonClass.open}
                            buttonFunction={this.props.buttonFunction}
                            buttonText={this.props.buttonText.open} />
                    </div>
                }
            </>
        )
    }
}