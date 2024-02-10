import Undead from '../class/Undead'

describe('Undead class', () => {
    test('Undead should be created with correct default values', () => {
      const undead = new Undead('Udo');
      expect(undead.name).toBe('Udo');
      expect(undead.type).toBe('Undead');
      expect(undead.health).toBe(100);
      expect(undead.level).toBe(1);
      expect(undead.attack).toBe(0); 
      expect(undead.defence).toBe(0);
    });
  });
