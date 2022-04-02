package com.webpg.platform.gramemaster;

import com.webpg.platform.common.model.Armors;
import com.webpg.platform.common.model.Character;
import com.webpg.platform.common.model.Identities;

import java.util.List;

public interface GameMasterService {
    int rollDice(int min, int max) throws Exception;

    String createGame(List<Character> characterList) throws Exception;

    void addArmor(Armors armors, List<Identities> identities, String id) throws  Exception;
}
