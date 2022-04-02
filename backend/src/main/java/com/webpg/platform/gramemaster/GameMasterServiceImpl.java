package com.webpg.platform.gramemaster;

import com.webpg.platform.common.model.Armors;
import com.webpg.platform.common.model.Character;
import com.webpg.platform.common.model.Game;
import com.webpg.platform.common.model.Identities;
import com.webpg.platform.common.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
public class GameMasterServiceImpl implements GameMasterService {

    @Autowired
    GameRepository gameRepository;

    @Override
    public int rollDice(int min, int max) throws Exception {
        if(min < max) {
            return new Random().nextInt(max) + min;
        } else {
            throw new Exception();
        }
    }

    @Override
    public String createGame(List<Character> characterList) throws Exception {
        String id = generateGameId();
        Game game = new Game(id, characterList);
        try {
            gameRepository.save(game);
        } catch(Exception e) {
            throw e;
        }
        return id;
    }

    @Override
    public void addArmor(Armors armors, List<Identities> identities, String id) throws Exception {
        Game game = this.gameRepository.findGameById(id);
        if(game == null) throw new Exception();

        System.out.println("GAME = " + game.toString());
        Character character = null;
        int index = 0;
        for(Character c : game.getCharacterList()) {
            if(this.equalityIdentitiesList(c.getIdentities(), identities)) {
                character = c;
                break;
            }
            index ++;
        }
        if(character == null) throw new Exception();

        List<Armors> armorsList = character.getArmors();
        armorsList.add(armors);

        character.setArmors(armorsList);

        game.characterList.set(index, character);

        try {
            gameRepository.save(game);
        } catch(Exception e) {
            throw e;
        }
    }

    private String generateGameId() {
        return UUID.randomUUID().toString();
    }
    private boolean equalityIdentitiesList(List<Identities> A, List<Identities> B) {
        ArrayList<Boolean> booleanArrayList = new ArrayList<>();
        int i = 0;
        for(Identities identitiesA: A) {
            booleanArrayList.add(false);
            for(Identities identitiesB : B) {
                if(identitiesA.equals(identitiesB)) booleanArrayList.set(i, true);
                break;
            }
            i++;
        }

        for(Boolean bool : booleanArrayList) {
            if(!bool) return false;
        }

        return true;
    }
}
