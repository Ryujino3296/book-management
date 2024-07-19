import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { toastifyOption } from '../constant';
import axios from 'axios';

const EditModel = ({ toggleEditModel, book }) => {
    const [editedBookState, setEditedBookState] = useState({
        title: book.title,
        author: book.author,
        genre: book.gener,
        price: book.price,
        publishYear: book.publishYear

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBookState({ ...editedBookState, [name]: value })
    }
    const handleSubmit = () => {
        sendBook()
        toggleEditModel()
    }
    const sendBook = async () => {
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/books/${book._id}`, editedBookState, {
                withCredentials: true,
            })
            toast.success(data.message, toastifyOption)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, toastifyOption)

        }
    }
    console.log(editedBookState);
    return (
        <>
            <div className="model" style={{ backgroundColor: '#ecd0c5', zIndex: '100', position: 'fixed', height: '100vh', width: '100vw', top: '0', left: '0' }}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder='title' name='title' id='title' required value={editedBookState.title} onChange={handleChange} /><br />


                        <label htmlFor="author">Author</label>
                        <input type="text" placeholder='author' name='author' id='author' required value={editedBookState.author} onChange={handleChange} /><br />


                        <label htmlFor="publishYear">Publish Year</label>
                        <input type="number" placeholder='publishYear' name='publishYear' id='publishYear' required value={editedBookState.publishYear} onChange={handleChange} /><br />


                        <label htmlFor="price">Price</label>
                        <input type="number" placeholder='price' name='price' id='price' required value={editedBookState.price} onChange={handleChange} /><br />


                        <label htmlFor="genre">Genre</label>
                        <input type="text" placeholder='genre' name='genre' id='genre' value={editedBookState.genre} onChange={handleChange} /><br />
                        <button type='submit' >Edit book</button>
                    </form>
                </div>

                <button onClick={() => toggleEditModel()}>close</button>
            </div>
        </>
    )
}

export default EditModel;
