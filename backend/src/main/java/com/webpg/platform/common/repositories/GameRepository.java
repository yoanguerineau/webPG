package com.webpg.platform.common.repositories;

import com.webpg.platform.common.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface GameRepository extends MongoRepository<Game, String> {
    @Query("{id:'?0'}")
    Game findGameById(String id);
}
