import { Armors } from "./armors";
import { Identities } from "./identities";
import { Levels } from "./levels";
import { Money } from "./money";
import { Resources } from "./resources";
import { Skills } from "./skills";
import { Statistics } from "./statistics";

export type Character = {
    identities: Identities[];
    resources: Resources[];
    levels: Levels[];
    armors: Armors[];
    skills: Skills[];
    statistics: Statistics[];
    money: Money;
}