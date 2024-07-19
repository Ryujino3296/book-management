import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { toastifyOption } from '../constant'

const BookModel = ({toggleModel,addBook}) => {

    const [book,setBook]=useState({
        title: '',
        author: '',
        publishYear:'',
        price:"",
        genre:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setBook({...book,[name]:value})
    }
const sendBook=async()=>{
    try {
        const {data}=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/books`,book,{
            withCredentials:true
        })
        //console.log(data.newBook)
        toast.success(data.message,toastifyOption)
        addBook(data.newBook)

    } catch (error) {
        toast.error(error.response.data.message,toastifyOption)
    }
}
    const handleSubmit=async (e)=>{
        
        e.preventDefault();
        //console.log(book);
       sendBook();
       toggleModel()
  
    }

  return (
    <>
        <div className="model" style={{backgroundColor: '#ecd0c5',zIndex: '100', position: 'fixed', height: '100vh', width: '100vw', top: '0',left: '0'}}>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder='title' name='title' id='title' required onChange={handleChange}/><br />


                <label htmlFor="author">Author</label>
                <input type="text" placeholder='author' name='author' id='author' required onChange={handleChange}/><br />


                <label htmlFor="publishYear">Publish Year</label>
                <input type="number" placeholder='publishYear' name='publishYear' id='publishYear' required onChange={handleChange}/><br />


                <label htmlFor="price">Price</label>
                <input type="number" placeholder='price' name='price' id='price' required onChange={handleChange}/><br />


                <label htmlFor="genre">Genre</label>
                <input type="text" placeholder='genre' name='genre' id='genre' onChange={handleChange}/><br />
                <button type='submit' >Add book</button>
                </form>
            </div>
         
            <button onClick={()=>toggleModel()}>close</button>
        </div>
    </>
  )
}

export default BookModel;
