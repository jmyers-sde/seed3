import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <main className="homePage">
        <div>
          <h1>Book Nook!</h1>

          <h2>Do you love books?</h2>

          <p>Then welcome to the Book Nook where you can share your love of books with other people around the world!!!</p>

          <div className="listContainer">
            <ul>
              <li>Just click on the Books tab in the navbar</li>
              <li>Look through the list of books and click on a title</li>
              <li>If your book is not on the list then add a book by clicking on the button at the bottom of the books page</li>
              <li>Picking a title will bring you to the review page for that book</li>
              <li>You can look through all the reviews and add one of your own if you please</li>
              <li>While reviewing the book you can delete the book or any of the reviews using the X button in the review and the remove book button</li>
            </ul>
          </div>

          <p className="mt-3">Enjoy the sight and the same love of books that I have as well!!</p>
        </div>
      </main>
    )
  }
}