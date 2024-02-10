import Zombie from '../class/Zombie'


describe('Zombie class', () => {
    test('Zombie should be created with correct default values', () => {
      const zombie = new Zombie('Zack');
      expect(zombie.name).toBe('Zack');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.health).toBe(100);
      expect(zombie.level).toBe(1);
      expect(zombie.attack).toBe(0);
      expect(zombie.defence).toBe(0);
    });
  });