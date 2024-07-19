import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { toastifyOption } from '../constant'
import EditModel from './EditModel'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Book = ({ book, deleteBook }) => {
    const [loading, setLoading] = useState(false)
    const [startEditing, setStartEditing] = useState(false);
    const { isAuth } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleDelete = async () => {
        if (isAuth) {
            setLoading(true)
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/books/${book._id}`, {
                    withCredentials: true
                })
                console.log(data)
                deleteBook(book._id)
                toast.success(data.message, toastifyOption)
            }
            catch (e) {
                console.log(e)
            }
            setLoading(false)
        }
        else {
            navigate('/login')
        }
    }
    const handleEdit = async () => {
        if (isAuth) {
            setStartEditing(true)
        }
        else {
            navigate('/login')
        }
    }
    const toggleEditModel = () => {

        setStartEditing(!startEditing)

    }
    return (
        <>
            <div style={{ border: '2px solid blue', margin: '1rem', padding: '1rem' }}>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>{book.publishYear}</p>
                <p>Rs.{book.price}</p>
                <button disabled={loading} onClick={handleDelete}>Delete Book</button>
                {startEditing && <EditModel toggleEditModel={toggleEditModel} book={book} />}
                <button disabled={loading} onClick={handleEdit}>Edit Book</button>
            </div>
        </>
    )
}

export default Book
