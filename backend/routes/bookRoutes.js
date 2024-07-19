const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const catchAsync = require('../error/catchAsync');
const validateUser = require('../middlewares/validateUser');
const validateBookSchema = require('../utils/validateBookSchema');
const appError = require('../error/appError');
const mongoose = require('mongoose');


router.get('/', catchAsync(async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books)
}))
router.post('/', validateUser, catchAsync(async (req, res) => {
    const { title, author, publishYear, price, genre } = req.body;
    const { error } = await validateBookSchema.validateAsync({ title, author, publishYear, price })
    if (error) throw new appError(error.details[0].message, 400)
    let newBook;
    if (!genre) {
        newBook = new Book({ title, author, publishYear, price })
    }
    else {
        newBook = new Book({ title, author, publishYear, price, genre })
    }
    await newBook.save();
    res.json({ newBook, message: 'Book added successfully' })
}))
router.get('/:bookId', catchAsync(async (req, res) => {
    const { bookId } = req.params;
    //console.log(bookId)
    if (!mongoose.Types.ObjectId.isValid(bookId)) throw new appError('not a valid book id', 400)
    const requiredBook = await Book.findById(bookId)
    if (!requiredBook) throw new appError('book not found', 404)
    res.json(requiredBook)
}))
router.put('/:bookId', validateUser, catchAsync(async (req, res) => {
    const { bookId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(bookId)) throw new appError('not a valid book id', 400)
    const { title, author, publishYear, price, genre } = req.body;
    const { error } = await validateBookSchema.validateAsync({ title, author, publishYear, price })
    console.log(error)
    if (error) throw new appError(error.details[0].message, 400)
    const requiredBook = await Book.findById(bookId)
    if (!requiredBook) throw new appError('book not found', 404)
    if(genre)requiredBook.genre=genre;
    requiredBook.title=title;
    requiredBook.author=author;
    requiredBook.publishYear=publishYear;
    requiredBook.price=price;
    await requiredBook.save();
    res.json({updatedBook:requiredBook,message:"updated successfully"});
}))

router.delete('/:bookId', validateUser, catchAsync(async (req, res) => {
    const { bookId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(bookId)) throw new appError('not a valid book id', 400)
    const deletedBook = await Book.findByIdAndDelete(bookId);
    res.json({ deletedBook, message: 'Book deleted successfully' })
}))


module.exports = router;