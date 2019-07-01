package com.mereder.controllers;

import com.mereder.entities.Book;
import com.mereder.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<?> books(){
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }
    @GetMapping("/books/{isbn13}")
    public ResponseEntity<?> book(@PathVariable String isbn13){
        return new ResponseEntity<>(bookService.getBookByIsbn13(isbn13), HttpStatus.OK);
    }


}
