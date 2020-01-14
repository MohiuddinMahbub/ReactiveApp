package io.naztech.r2dbc.config;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import io.naztech.r2dbc.model.Person;
import io.naztech.r2dbc.repository.PersonRepository;

@Component
public class DatabaseInitializer {

	private final Logger log = LoggerFactory.getLogger(DatabaseInitializer.class);

	private final PersonRepository personRepository;

	public DatabaseInitializer(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}

	@PostConstruct
	public void init() {
		
		log.info("Initializing database if necessary");
		
		personRepository.findAll().count().subscribe(count -> {
			if (count == 0) {
				
				log.info("Database is empty, inserting sample data");
				
				createPerson("Mohiuddin", "Mahbub", "Naztech");
				createPerson("Aqil", "Mihsan", "Home");
			} else {
				log.info("Database is already initialized");
			}
		});
	}

	private void createPerson(String firstName, String lastName, String company) {
		Person person = new Person();
		person.setFirstName(firstName);
		person.setLastName(lastName);
		person.setCompany(company);
		personRepository.save(person).log().subscribe();
	}
}