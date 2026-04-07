export interface Bastion {
  id: string;
  name: string;
  population: number;
  securityLevel: "Low" | "Medium" | "High";
  controllingFaction: string;
  isTradeHub: boolean;
}