package com.webpg.platform.common.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@Setter
@Getter
@ToString
@Document("games")
public class Game {
    @Id
    private String id;

    public List<Character> characterList;
}
