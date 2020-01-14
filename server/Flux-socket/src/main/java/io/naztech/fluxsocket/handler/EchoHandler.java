package io.naztech.fluxsocket.handler;

import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;

import reactor.core.publisher.Mono;

public class EchoHandler implements WebSocketHandler {
	@Override
	public Mono<Void> handle(WebSocketSession session) {
		return session.send(session.receive().map(msg -> "RECEIVED ON SERVER :: " + msg.getPayloadAsText())
				.map(session::textMessage));
	}
	
	/*
	 * private static List<Movie> movie = new ArrayList<>();
	 * 
	 * static { movie.add(new Movie("Polar (2019)", 64)); movie.add(new
	 * Movie("Iron Man (2008)", 79)); movie.add(new
	 * Movie("The Shawshank Redemption (1994)", 93)); movie.add(new
	 * Movie("Forrest Gump (1994)", 83)); movie.add(new Movie("Glass (2019)", 70));
	 * }
	 * 
	 * @Override public Flux<Movie> findAll() { //Simulate big list of data,
	 * streaming it every 2 second delay return
	 * Flux.fromIterable(movie).delayElements(Duration.ofSeconds(2)); }
	 */
}