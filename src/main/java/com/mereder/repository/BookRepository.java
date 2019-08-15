package com.mereder.repository;

import com.mereder.pojo.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book, Long> {
    Book findBookByIsbn13(String isbn13);
}
