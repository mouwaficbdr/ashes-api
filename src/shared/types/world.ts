export interface Bastion {
  id: string;
  name: string;
  population: number;
  securityLevel: 'Low' | 'Medium' | 'High';
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
    current: number;
    max: number;
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

export interface Faction {
  id: string;
  name: string;
  ideology: string;
  territory: string[];
  description: string;
}

type ItemEffect =
  | {
      stat: 'status';
      value: string;
      trigger: 'onHit' | 'onCrit';
      duration: number | null;
    }
  | {
      stat: 'hunger' | 'radiation' | 'hp' | 'pain' | 'regen';
      delta: number;
      duration: number | null;
    };

interface BaseItem {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  weight: number;
  value: number;
  requirements: { level: number; class: string[] | null };
  effects: ItemEffect[];
  description: string;
}

type WeaponStats = { dmg: number; acc?: number; dur?: number };
type ArmorStats = { def: number; res?: number; cap?: number; acc?: number };
type MedicineStats = {
  utility: number;
  dur?: number;
  def?: number;
  res?: number;
};
type FoodStats = { utility: number; res?: number };

interface WeaponItem extends BaseItem {
  type: 'Weapon';
  subtype: 'melee' | 'ranged';
  stats: WeaponStats;
}
interface ArmorItem extends BaseItem {
  type: 'Armor';
  subtype: 'chest' | 'hands' | 'waist' | 'back' | 'full-body';
  stats: ArmorStats;
}
interface MedicineItem extends BaseItem {
  type: 'Medicine';
  subtype: 'injectable' | 'oral';
  stats: MedicineStats;
}
interface FoodItem extends BaseItem {
  type: 'Food';
  subtype: 'packaged' | 'liquid';
  stats: FoodStats;
}

export type Item = WeaponItem | ArmorItem | MedicineItem | FoodItem;
