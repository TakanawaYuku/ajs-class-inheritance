import Character from './character';

export default class Undead extends Character {
  constructor(name, type = 'Undead', health = 100, level = 1, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
  }
}
