import Magician from '../class/Magician'

describe('Magician class', () => {
    test('Magician should be created with correct default values', () => {
      const magician = new Magician('Mike');
      expect(magician.name).toBe('Mike');
      expect(magician.type).toBe('Magician');
      expect(magician.health).toBe(100);
      expect(magician.level).toBe(1);
      expect(magician.attack).toBe(0);
      expect(magician.defence).toBe(0);
    });
  });