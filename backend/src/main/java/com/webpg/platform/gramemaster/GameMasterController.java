package com.webpg.platform.gramemaster;

import com.webpg.platform.common.model.Armors;
import com.webpg.platform.common.model.Character;
import com.webpg.platform.common.model.Identities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController()
@RequestMapping(value = "/gamemaster")
public class GameMasterController {

    @Autowired
    GameMasterService gameMasterService;

    @GetMapping(value = "/roll/{min}/{max}", produces = MediaType.APPLICATION_JSON_VALUE)
    public int rollDice(@PathVariable int min, @PathVariable int max) throws Exception {
        return this.gameMasterService.rollDice(min, max);
    }

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    public String createGame(@RequestBody List<Character> characterList) throws Exception {
        String id = this.gameMasterService.createGame(characterList);
        System.out.println(id);
        return id;
    }

    @PostMapping(value = "/addEquipement/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addArmor(@RequestBody ArmorsAndIdentities json, @PathVariable String id) throws Exception {
        this.gameMasterService.addArmor(json.armors, json.identities, id);
    }
}

class ArmorsAndIdentities {
    public Armors armors;
    public List<Identities> identities;
}
