/* eslint-disable no-new */

import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('to check that created object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const Nick = new Character('Nick', 'Bowman', 100, 1, 25, 25);
  expect(Nick).toEqual(sample);
});

test('to check that class throws error for name < 2 bytes', () => {
  expect(() => { new Character('E', 'Bowman', 100, 1, 25, 25); }).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test('to check that class throws error for name > 10 bytes', () => {
  expect(() => { new Character('NickNickNick', 'Bowman', 100, 1, 25, 25); }).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test('to check that class throws error for wrong type', () => {
  expect(() => { new Character('Nick', 'SomeType', 100, 1, 25, 25); }).toThrow('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
});

test('to check that created Bowman object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const Nick = new Bowman('Nick');
  expect(Nick).toEqual(sample);
});

test('to check that created Magician object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const Nick = new Magician('Nick');
  expect(Nick).toEqual(sample);
});

test('to check that created Swordsman object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const Nick = new Swordsman('Nick');
  expect(Nick).toEqual(sample);
});

test('to check that created Zombie object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const Nick = new Zombie('Nick');
  expect(Nick).toEqual(sample);
});

test('to check that created Daemon object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const Nick = new Daemon('Nick');
  expect(Nick).toEqual(sample);
});

test('to check that created Undead object has all properties', () => {
  const sample = {
    name: 'Nick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const Nick = new Undead('Nick');
  expect(Nick).toEqual(sample);
});

test('to check method levelUp() increases unit level.', () => {
  const sampleLvl2 = {
    name: 'Nick',
    type: 'Swordsman',
    health: 200,
    level: 2,
    attack: 48,
    defence: 12,
  };
  const Nick = new Character('Nick', 'Swordsman', 100, 1, 40, 10);
  Nick.levelUp();
  expect(Nick).toEqual(sampleLvl2);
});

test('to check method levelUp() throws error for dead unit.', () => {
  const sample = new Character('Nick', 'Swordsman', 0, 1, 40, 10);
  expect(() => { sample.levelUp(); }).toThrow('The hero is dead.');
});

test('to check method damage() affects the unit.', () => {
  const sampleLvl2 = {
    name: 'Nick',
    type: 'Swordsman',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const Nick = new Character('Nick', 'Swordsman', 100, 1, 40, 10);
  Nick.damage(10);
  expect(Nick).toEqual(sampleLvl2);
});

test('to check method damage() throws error for dead unit.', () => {
  const sample = new Character('Nick', 'Swordsman', 0, 1, 40, 10);
  expect(() => { sample.damage(10); }).toThrow('The hero is dead.');
});
