package io.naztech.r2dbc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.naztech.r2dbc.model.Person;
import io.naztech.r2dbc.repository.PersonRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class PersonController {
	//private final Logger log = LoggerFactory.getLogger(PersonController.class);
	
	@Autowired
	private PersonRepository personRepository;
	//private final PersonRepository personRepository;

	public PersonController(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}

	@GetMapping("/persons/{id}")
	public Mono<Person> getPerson(@PathVariable String id) {
		
		Long personId = Long.valueOf(id);
		return personRepository.findById(personId);
	}
	
	@GetMapping("/persons/all")
	public Flux<Person> getAllPerson() {
		return personRepository.findAll();
	}

	@CrossOrigin(origins = "*")
	@GetMapping(value="/persons/live", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<Person> getLivePerson() {
				
		Flux<Person> pList = personRepository.findAll();
				
		return pList;//personRepository.findAll();
	}
}