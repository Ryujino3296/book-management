import React, { useContext, useEffect, useState } from 'react'
import Book from './Book'
import axios from 'axios'
import BookModel from './BookModel'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'


const Books = () => {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [isAddBookModelOpen, setIsAddBookModelOpen] = useState(false)
  const {isAuth}=useContext(AuthContext)
  const navigate=useNavigate()
  const getAllBooks = async () => {
    setLoading(true)
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/books`)
    setBooks(data)
    setLoading(false)
  }
  useEffect(() => {
    getAllBooks();
  }, [])
  const deleteBook = (id) => {
    setBooks(prev => prev.filter(b => b._id !== id))
  }
  const toggleModel = () => {
    setIsAddBookModelOpen(!isAddBookModelOpen)
  }
  const addBook = (book) => {
    console.log(books,book)
    setBooks(prev => [...prev, book])
  }
  const handleClick=()=>{
    if(isAuth){
      toggleModel()
    }
    else{
      navigate('/login')
    }
  }
  console.log(isAuth)
  if (loading) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <>
        <h1>All Books</h1>
        <button onClick={handleClick}>Add a Book</button>
        {isAddBookModelOpen && <BookModel toggleModel={toggleModel} addBook={addBook}/>}
        <div style={{ border: '2px solid blue', margin: '1rem', padding: '1rem' }}>
          {books.length > 0 ? (
            books.map((book) => <Book key={book._id} book={book} deleteBook={deleteBook} />)
          ) : (
            <p>No books available</p>
          )}
        </div>
      </>
    )
  }
}

export default Books;
