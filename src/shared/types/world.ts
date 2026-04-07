export interface Bastion {
  id: string;
  name: string;
  population: number;
  securityLevel: "Low" | "Medium" | "High";
  controllingFaction: string;
  isTradeHub: boolean;
}

export interface Drifter {
  id: string;
  name: string;
  class: string;
  level: number;
  xp: number;
  hp: {
    "current": number;
    "max": number;
  };
  hunger: number;
  radiation: number;
  maxWeight: number;
  currentWeight: number;
  reputation: {
    'The Council': number;
    'The Drifters': number;
    'The Iron Order': number;
  };
}