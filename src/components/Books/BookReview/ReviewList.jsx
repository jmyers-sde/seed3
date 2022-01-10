import React, { Component } from 'react'

export default class ReviewList extends Component {
    render() {
        const { book, deleteReview = f => f } = this.props

        return (
            <>
                <h1 className="my-3 reviewTitle">Review List...</h1>
                <div className="reviewList">
                    <ul>
                        {book.reviews.map((review) => {
                            let date = new Date(review.createdAt).toDateString()
                            // console.log(date, review.createdAt)
                            return <li key={review._id}>
                                <div className="alert alert-info">
                                    <button type="button" className="close"
                                        onClick={() => deleteReview(review, book)}>&times;</button>
                                    <h3><b className="mr-3">{review.name}</b> <i>Posted On: <small>{date}</small></i></h3>
                                    <h5><b>Rate:</b> {review.rating}</h5>
                                    <h5><b className="border-bottom border-dark">Comment</b></h5>
                                    <p>"<i>{review.comment}</i>"</p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </>
        )
    }
}