const { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } = require('./app');

describe('Character class', () => {
  test('Character should be created with correct default values', () => {
    expect(() => new Character('A', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('MoreThanTenCharacters', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');

    const character = new Character('ValidName', 'Bowman');
    expect(character.name).toBe('ValidName');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(0);
    expect(character.defence).toBe(0);
  });

  test('Character creation should throw an error for invalid name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('MoreThanTenCharacters', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
  });

  test('Character creation should throw an error for invalid type', () => {
    expect(() => new Character('ValidName', 'InvalidType')).toThrowError('Invalid character type. Allowed types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
  });
});

describe('Bowman class', () => {
  test('Bowman should be created with correct stats', () => {
    const bowman = new Bowman('Bowman');
    expect(bowman.name).toBe('Bowman');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman class', () => {
  test('Swordsman should be created with correct stats', () => {
    const swordsman = new Swordsman('Swordsman');
    expect(swordsman.name).toBe('Swordsman');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

describe('Magician class', () => {
  test('Magician should be created with correct stats', () => {
    const magician = new Magician('Magician');
    expect(magician.name).toBe('Magician');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

describe('Undead class', () => {
  test('Undead should be created with correct stats', () => {
    const undead = new Undead('Undead');
    expect(undead.name).toBe('Undead');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

describe('Zombie class', () => {
  test('Zombie should be created with correct stats', () => {
    const zombie = new Zombie('Zombie');
    expect(zombie.name).toBe('Zombie');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});

describe('Daemon class', () => {
  test('Daemon should be created with correct stats', () => {
    const daemon = new Daemon('Daemon');
    expect(daemon.name).toBe('Daemon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});