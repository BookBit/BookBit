const express = require ('express');
const router = express.Router();

const dbController = require('../controllers/dbController');

router.get('/books', dbController.getBooks, (req, res) => {
    console.log('here')
    return res.status(200).json(res.locals.myBooks);
  })

  // Login
  // Verify that username exists and matches password in database
  // SELECT * FROM users...WHERE username = `${query}`...RETURNING _id

  // Sign up
  // Verify that username is not in the table
  // Then you insert new entry into the users table, RETURNING _id

  // getBooks
  // Front end sends backend _id, backend retrieves all volume_ids associated with that user id
  // Fetch google api for book information pertaining to those volume ids
  // Return back an array with objects containing all info for books to be rendered on homepage

  // addBook

  // deleteBook

  // updateBook

  // updateNote

  // updateFavorite

  module.exports = router;