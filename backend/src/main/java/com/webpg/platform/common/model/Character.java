package com.webpg.platform.common.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

@AllArgsConstructor
@Setter
@Getter
public class Character {

    private List<Identities> identities;
    private List<Resources> resources;
    private List<Levels> levels;
    private List<Armors> armors;
    private List<Skills> skills;
    private List<Statistics> statistics;
    private Money money;

    @Override
    public boolean equals(Object o) {
        if(this == o) return true;
        if(o instanceof Character) {
            Character c = (Character) o;

            if(this.identities.size() != c.getIdentities().size()) return false;

            Stack<Boolean> identitiesEquivalence = new Stack<>();
            for(Identities localIdentities : this.identities) {
                identitiesEquivalence.push(false);
                for(Identities objectIdentities : c.getIdentities()) {
                    if(localIdentities.equals(objectIdentities)) {
                        identitiesEquivalence.pop();
                        identitiesEquivalence.push(true);
                    }
                }
            }

            for(Boolean b : identitiesEquivalence) {
                if(b==false) return false;
            }

            return true;
        } else {
            return false;
        }
    }
}
