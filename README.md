# MyReads Project

In this app, you could manage 3 categories book shelves: Currently Reading, Want to Read and Read. The book could be moved among different shelves
You could also search book and add it to any book shelf. Moving to 'None' means remove from My Reads.

The main page contains 3 shelves. There's an 'ADD' button at the lower right corner, by clicking on it, you'll be navigated to search page.

## How to Start this app

Git clone this project to local machine.

Go to main starter folder:
- install all project dependencies with `npm install`
- start the development server with `npm start`
- access the server in local browser `http://localhost:3000/`

## The project architecture

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── components # React components for different pages/elements/functions
    │   ├── Book.js # Return element for each book, includes it's stored shelf status
    │   ├── ListBooks.js # The default page of the app, contains 3 shelves
    │   ├── SearchPage.js # Add book by searching in this page
    │   ├── Shelf.js # A collection of books in same shelf
```