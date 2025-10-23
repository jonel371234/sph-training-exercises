CREATE DATABASE library_db;
USE library_db;

CREATE TABLE authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE borrow_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    member_id INT,
    borrow_date DATE,
    return_date DATE,
    isReturned BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);

-- Insert Data

INSERT INTO authors (name) VALUES
('J.K. Rowling'),
('George Orwell'),
('J.R.R. Tolkien');

INSERT INTO books (title, author_id) VALUES
('Harry Potter and the Sorcerer\'s Stone', 1),
('Harry Potter and the Chamber of Secrets', 1),
('1984', 2),
('Animal Farm', 2),
('The Hobbit', 3);

INSERT INTO members (name, email) VALUES
('Alice Santos', 'alice@example.com'),
('Bob Cruz', 'bob@example.com'),
('Charlie Dela Cruz', 'charlie@example.com'),
('Diana Lopez', 'diana@example.com'),
('Ethan Reyes', 'ethan@example.com');

INSERT INTO borrow_records (book_id, member_id, borrow_date, return_date, isReturned) VALUES
(1, 1, '2025-10-01', '2025-10-10', TRUE),  
(3, 2, '2025-10-05', NULL, FALSE),         
(5, 3, '2025-10-07', NULL, FALSE),         
(2, 5, '2025-10-15', NULL, FALSE);         

-- Queries

-- a) Show all books with authors.
SELECT 
    b.title AS book_title, 
    a.name AS author_name
FROM books b
JOIN authors a ON b.author_id = a.author_id;

-- b) Show borrowed books (not returned).
SELECT 
    b.title AS borrowed_book, 
    m.name AS borrowed_by, 
    br.return_date, 
    br.isReturned
FROM borrow_records br
JOIN books b ON br.book_id = b.book_id
JOIN members m ON br.member_id = m.member_id
WHERE br.isReturned = FALSE;

-- c) List members who borrowed from a specific author.
SELECT DISTINCT 
    m.name AS member_name, 
    a.name AS author_name
FROM borrow_records br
JOIN books b ON br.book_id = b.book_id
JOIN authors a ON b.author_id = a.author_id
JOIN members m ON br.member_id = m.member_id
WHERE a.name = 'J.K. Rowling';

-- d) Count books per author.
SELECT 
    a.name AS author_name, 
    COUNT(b.book_id) AS total_books
FROM authors a
LEFT JOIN books b ON a.author_id = b.author_id
GROUP BY a.author_id;

-- e) Borrowing history for a specific member.
SELECT 
    m.name AS member_name, 
    b.title AS book_title, 
    br.borrow_date, 
    br.return_date, 
    br.isReturned
FROM borrow_records br
JOIN members m ON br.member_id = m.member_id
JOIN books b ON br.book_id = b.book_id
WHERE m.name = 'Alice Santos';
