package com.mereder.repositories;

import com.mereder.entities.Book;
import org.springframework.data.repository.CrudRepository;


public interface BookRepository extends CrudRepository<Book, Long> {
    Book findBookByIsbn13(String isbn13);
}
