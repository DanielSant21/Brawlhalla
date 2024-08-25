import { Clan } from "./clan";
import { Lenda } from "./lenda";

export interface Data {
    brawlhalla_id: number;
    clan: Clan;
    damagebomb: string;
    damagemine: string;
    damagesidekick: string;
    damagespikeball: string;
    games: number;
    hitsnowball: number;
    kobomb: number;
    komine: number;
    kosidekick: number;
    kosnowball: number;
    kospikeball: number;
    lastSynced: number;
    legends: Lenda[];
    level: number;
    name: string;
    wins: number;
    xp: number;
    xp_percentage: number;
  }