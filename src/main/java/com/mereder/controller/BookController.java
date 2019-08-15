package com.mereder.controller;
import com.mereder.pojo.Book;
import com.mereder.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<?> books(){
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }
    @GetMapping("/isbn13/{isbn13}")
    public ResponseEntity<?> getBookByIsbn13(@PathVariable String isbn13){
        Book book = bookService.getBookByIsbn13(isbn13);
        if(book == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(book);
    }

    @DeleteMapping("/isbn13/{isbn13}")
    public ResponseEntity<?> deleteBookByIsbn13(@PathVariable String isbn13){
        Book book = bookService.getBookByIsbn13(isbn13);
        if(book == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else {
            bookService.deleteBook(book);
            return ResponseEntity.ok(book);
        }
    }
//
//    @GetMapping("/search/{param}")
//    public ResponseEntity<?> search(@PathVariable String param){
//
//    }
}
