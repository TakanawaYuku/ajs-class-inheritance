/* eslint-disable no-param-reassign,no-unused-vars */

import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type = 'Swordsman', health = 100, level = 1, attack = 40, defence = 10);
  }
}
