import React, { Component } from 'react'
import ReviewList from './ReviewList';
import BookInfo from './BookInfo';

export default class ReviewPage extends Component {
    render() {
        const { book, buttonClass, buttonFunction, buttonText, showing, handleSubmit, removeBook, deleteReview, reviewOrganizer } = this.props
        return (
            <>
                <BookInfo book={book}
                    buttonFunction={buttonFunction}
                    buttonClass={buttonClass}
                    buttonText={buttonText}
                    showing={showing}
                    handleSubmit={handleSubmit}
                    removeBook={removeBook}
                    reviewOrganizer={reviewOrganizer}
                />

                <ReviewList book={book}
                    deleteReview={deleteReview} />
            </>
        )
    }
}