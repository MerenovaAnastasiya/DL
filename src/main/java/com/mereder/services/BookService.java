package com.mereder.services;

import com.mereder.entities.Book;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    Book getBookByIsbn13(String isbn13);
}
