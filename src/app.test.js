const Character = require('./app');

describe('Character class', () => {
  let character;

  beforeEach(() => {
    character = new Character('ValidName', 'Bowman');
  });

  test('Character should be created with correct default values', () => {
    expect(character.name).toBe('ValidName');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  test('Character creation should throw an error for invalid name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrowError('Name must be a string and have a length between 2 and 10 characters');
    expect(() => new Character('MoreThanTenCharacters', 'Bowman')).toThrowError('Name must be a string and have a length between 2 and 10 characters');
  });

  test('Character creation should throw an error for invalid type', () => {
    expect(() => new Character('ValidName', 'InvalidType')).toThrowError('Invalid character type. Allowed types: Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
  });

  test('levelUp should increase level, attack, and defence, and set health to 100', () => {
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeLessThanOrEqual(10); // Assuming the initial attack is 0
    expect(character.defence).toBeLessThanOrEqual(10); // Assuming the initial defence is 0
    expect(character.health).toBe(100);
  });

  test('levelUp should not exceed attack and defence values of 100', () => {
    character.attack = 100;
    character.defence = 100;
    character.levelUp();
    expect(character.attack).toBe(100);
    expect(character.defence).toBe(100);
  });

  test('levelUp should throw an error for a dead character', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('Cannot level up a dead character');
  });

  test('damage should decrease health based on points and defence', () => {
    character.damage(20);
    expect(character.health).toBeLessThanOrEqual(80);
  });

  test('damage should not decrease health below 0', () => {
    character.damage(120);
    expect(character.health).toBe(0);
  });

  test('damage should not process for a dead character', () => {
    character.health = 0;
    expect(() => character.damage(20)).toThrowError('Cannot damage a dead character');
  });
});