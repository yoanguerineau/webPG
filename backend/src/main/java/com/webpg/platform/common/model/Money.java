package com.webpg.platform.common.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Money {
    private String name;
    private String symbol;
    private int value;
}
