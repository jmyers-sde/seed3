import React from 'react'

export default function Table({ bookData, headers, getBook = f => f, organizer = f => f }) {

    organizer(bookData)

    return (
        <div className="allBooks">
            {bookData.length === 0 ?
                <h1 className="emptyData">There are currently no books in the database...</h1> :

                <table>
                    <thead>
                        <tr>{
                            headers.map((title, idx) =>
                                <th key={idx}>
                                    {title}
                                </th>
                            )
                        }</tr>
                    </thead>
                    <tbody >
                        {
                            bookData.map((row, idx) => {
                                let date = new Date(row.updatedAt).toDateString()

                                return <tr key={row._id} >
                                    <td className="book" onClick={() => getBook(row)}>
                                        {row.title}
                                    </td>
                                    <td>{row.author}</td>
                                    <td>{row.genre}</td>
                                    <td>{row.reviews.length === 0 ? 0 : row.reviews.length}</td>
                                    <td>{row.reviews.length <= 0 ? '0.00' :
                                        (row.reviews.reduce(function (accumulator, currentValue) {
                                            return accumulator + currentValue.rating
                                        }, 0) / row.reviews.length).toFixed(2)}</td>
                                    <td>{date}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            }
        </div>
    )
}