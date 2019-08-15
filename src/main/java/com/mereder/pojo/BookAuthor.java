package com.mereder.pojo;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;


@Entity
@Data
@NoArgsConstructor
@Table(name = "author")
public class BookAuthor extends BaseEntity {

    @Column
    @NotNull
    private String name;

    @Column
    private String surname;

    @ManyToMany(mappedBy = "authors")
    private Set<Book> books;
}
