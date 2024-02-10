import Bowman from '../class/Bowman';

describe('Bowman class', () => {
    test('Bowman should be created with correct default values', () => {
      const bowman = new Bowman('Bob');
      expect(bowman.name).toBe('Bob');
      expect(bowman.type).toBe('Bowman');
      expect(bowman.health).toBe(100);
      expect(bowman.level).toBe(1);
      expect(bowman.attack).toBe(0);
      expect(bowman.defence).toBe(0);
    });
  });