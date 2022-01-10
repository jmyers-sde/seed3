import React from 'react'
import Button from '../Button'
import AddReviewForm from './ReviewForm'

export default function BookInfo({ book, buttonClass, buttonFunction, buttonText, hideForm, showing, handleSubmit, removeBook = f => f, reviewOrganizer = f => f }) {

    reviewOrganizer(book)

    return (

        <div className="theBook">
            <h1 className="display-4">{book.title}</h1>
            <h5>Author: <span>{book.author}</span></h5>
            <h5>Genre: <span>{book.genre}</span></h5>
            <h5>Avg/Rating: <span>{
                book.reviews.length <= 0 ? '0.00' :
                    (book.reviews.reduce(function (accumulator, currentValue) {
                        return accumulator + currentValue.rating
                    }, 0) / book.reviews.length).toFixed(2)}</span> (out of 5)</h5>

            <div className="d-flex justify-content-around mt-5">
                <div>
                    <p className="text-warning">Back to the Books Table?</p>
                    <Button buttonFunction={buttonFunction.toggleBook}
                        buttonClass={buttonClass.open}
                        buttonText={buttonText.booksTable} />
                </div>

                <div>
                    <p className="text-warning">Delete Book?...</p>
                    <button onClick={() => removeBook(book)}
                        className="btn btn-danger">Remove Book</button>
                </div>

                <div>
                    <p className="text-warning">Add a Review?</p>
                    <AddReviewForm buttonText={buttonText}
                        buttonFunction={buttonFunction}
                        buttonClass={buttonClass}
                        hideForm={hideForm}
                        showing={showing}
                        handleSubmit={handleSubmit}
                        book={book} />
                </div>
            </div>
        </div>
    )
}