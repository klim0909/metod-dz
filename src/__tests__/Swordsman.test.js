import Swordsman from '../class/Swordsman'
describe('Swordsman class', () => {
    test('Swordsman should be created with correct default values', () => {
      const swordsman = new Swordsman('Sam');
      expect(swordsman.name).toBe('Sam');
      expect(swordsman.type).toBe('Swordsman');
      expect(swordsman.health).toBe(100);
      expect(swordsman.level).toBe(1);
      expect(swordsman.attack).toBe(0);
      expect(swordsman.defence).toBe(0);
    });
  });