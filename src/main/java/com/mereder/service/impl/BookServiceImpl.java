package com.mereder.service.impl;

import com.mereder.pojo.Book;
import com.mereder.repository.BookRepository;
import com.mereder.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;
    @Override
    public List<Book> getAllBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    @Override
    public Book getBookByIsbn13(String isbn13) {
        return bookRepository.findBookByIsbn13(isbn13);
    }

    @Override
    public void deleteBook(Book book) {
        bookRepository.delete(book);
    }
}
