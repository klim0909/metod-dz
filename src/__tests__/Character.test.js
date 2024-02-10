import Character from '../class/Character'

describe('Character class', () => {
  test('Character should be created with correct default values', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  test('Character should throw error if name length is less than 2 characters', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string and have a length between 2 and 10 characters');
  });

  test('Character should throw error if name length is more than 10 characters', () => {
    expect(() => new Character('TooLongName', 'Bowman')).toThrow('Name must be a string and have a length between 2 and 10 characters');
  });

  test('Character should throw error if type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow('Invalid character type. Allowed types: Bowman, Swordsman, Magician, Undead, Zombie, Daemon');
  });
});