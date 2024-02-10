import Daemon from '../class/Daemon'


describe('Daemon class', () => {
    test('Daemon should be created with correct default values', () => {
      const daemon = new Daemon('Dexter');
      expect(daemon.name).toBe('Dexter');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.health).toBe(100);
      expect(daemon.level).toBe(1);
      expect(daemon.attack).toBe(0);
      expect(daemon.defence).toBe(0);
    });
  });