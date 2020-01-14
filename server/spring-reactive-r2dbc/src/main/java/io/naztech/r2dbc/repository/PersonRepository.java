package io.naztech.r2dbc.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import io.naztech.r2dbc.model.Person;

@Repository
public interface PersonRepository extends ReactiveCrudRepository<Person, Long> {

}