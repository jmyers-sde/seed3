import React, { Component } from 'react'
import Table from './AllBooks/BooksTable'
import AddBookForm from './AllBooks/BookForm'
import ReviewPage from './BookReview/ReviewPage';
import './books.css'

function sortFunc(info) {
    info.sort((a, b) => {
        if (b.updatedAt > a.updatedAt) {
            return 1;
        }
        if (b.updatedAt < a.updatedAt) {
            return -1;
        }
        return 0;
    })
}

export default class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headers: ["Title", "Author", "Genre", "Reviews", "Av/Rating", "Last Update"],
            booksList: [],
            book: '',
            showForm: false,
            showBook: false,
            buttonClass: {
                open: "btn btn-primary",
                close: "btn btn-danger float-right d-inline-block",
            },
            buttonText: {
                open: "Open Form",
                close: "X",
                booksTable: 'All Books',
                deleteBook: 'Remove Book'
            }
        }
        this.handleBookSubmit = this.handleBookSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleComponent = this.toggleComponent.bind(this)
        this.toggleBook = this.toggleBook.bind(this)
        this.removeBook = this.removeBook.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
        this.organizer = this.organizer.bind(this)
        this.reviewOrganizer = this.reviewOrganizer.bind(this)
    }

    componentDidMount() {
        fetch('/api/books')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    booksList: json
                })
            })
    }

    componentDidUpdate() {
        console.log(this.state.booksList)
    }

    addNewBook = (form) => {
        if (!form) return
        fetch('/api/books', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: form.title,
                author: form.author,
                genre: form.genre,
                name: form.name,
                rating: form.rating,
                comment: form.comment
            })
        })
            .then(response => response.json())
            .then(result =>
                this.setState(prevState => ({
                    booksList: [...prevState.booksList, result]
                }))
            )
    }

    addNewReview = (form) => {
        if (!form) return
        fetch(`/api/books/${form.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                rating: form.rating,
                comment: form.comment
            })
        })
            .then(response => response.json())
            .then(result =>
                this.setState({
                    book: result,
                    booksList: this.state.booksList.map(original => {
                        return original._id === result._id ? original = result : original
                    })
                })
            )
    }

    removeBook(book) {
        fetch(`/api/books/${book._id}`, { method: "DELETE" })
            .then(response => response.json())
            .then(result => {
                let booksList = this.state.booksList.filter(book => book._id !== result._id);
                this.setState({
                    booksList: booksList,
                    book: book,
                    showBook: !this.state.showBook,
                    showForm: this.state.showForm ? !this.state.showForm : this.state.showForm
                });
            })
    }

    deleteReview(review, book) {
        fetch(`/api/books/${book._id}/review/${review._id}`, { method: "DELETE" })
            .then(response => response.json())
            .then(result => {
                let booksList = this.state.booksList.map(book => book._id === result._id ? result : book)
                this.setState(({
                    booksList: booksList,
                    book: result
                }))
            })
    }

    // ======================Handling The Front End================================

    organizer(data) {
        sortFunc(data)
    }

    reviewOrganizer(data) {
        sortFunc(data.reviews)
    }

    toggleComponent() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    toggleBook(book) {
        this.setState({
            book: book,
            showBook: !this.state.showBook,
            showForm: this.state.showForm ? !this.state.showForm : this.state.showForm
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleBookSubmit = (e) => {
        const bookRating = document.querySelector('input[name="rating"]:checked')
        const collection = document.forms[0]
        e.preventDefault();
        this.addNewBook({
            title: collection.title.value,
            author: collection.author.value,
            genre: collection.genre.value,
            name: collection.name.value,
            rating: parseInt(bookRating.value),
            comment: collection.comment.value,
        })
        this.toggleComponent();
    }

    handleReviewSubmit = (e) => {
        const bookRating = document.querySelector('input[name="rating"]:checked')
        const collection = document.forms[0]
        e.preventDefault();
        this.addNewReview({
            id: collection.id.value,
            name: collection.name.value,
            rating: parseInt(bookRating.value),
            comment: collection.comment.value,
        })
        this.toggleComponent()
    }

    render() {
        const { booksList, showForm, showBook, book, buttonClass, buttonText, headers } = this.state

        const { addNewBook, toggleBook, toggleComponent, hideComponent, handleBookSubmit, handleReviewSubmit, handleChange, removeBook, deleteReview, organizer, reviewOrganizer } = this

        return (
            <>
                {showBook === false ?
                    <div className="booksPage text-center">
                        <Table headers={headers}
                            bookData={booksList}
                            getBook={toggleBook}
                            organizer={organizer} />

                        <AddBookForm addNewBook={addNewBook}
                            hideForm={toggleComponent}
                            buttonFunction={toggleComponent}
                            handleSubmit={handleBookSubmit}
                            handleChange={handleChange}
                            showing={showForm}
                            buttonClass={buttonClass}
                            buttonText={buttonText}
                        />
                    </div>

                    : <div className="reviewPage text-center">
                        <ReviewPage buttonFunction={{
                            toggleComponent: toggleComponent,
                            toggleBook: toggleBook,
                        }}
                            buttonText={buttonText}
                            buttonClass={buttonClass}
                            showing={showForm}
                            hideForm={hideComponent}
                            handleSubmit={handleReviewSubmit}
                            book={book}
                            removeBook={removeBook}
                            deleteReview={deleteReview}
                            reviewOrganizer={reviewOrganizer}
                        />
                    </div>
                }
            </>
        )
    }
}