package com.webpg.platform.common.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Identities {
    private String name;
    private String type;

    @Override
    public boolean equals(Object o) {
        if(o == this) return true;
        if(o instanceof Identities) {
            Identities i = (Identities) o;
            boolean b = this.name.equals(i.getName()) && this.type.equals(i.getType());
            return b;
        } else {
            return false;
        }
    }
}
