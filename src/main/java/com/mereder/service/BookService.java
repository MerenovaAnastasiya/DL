package com.mereder.service;

import com.mereder.pojo.Book;

import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    Book getBookByIsbn13(String isbn13);
    void deleteBook(Book book);
}
