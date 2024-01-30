class Character {
    constructor(name, type) {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно содержать от 2 до 10 символов');
      }

      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
        throw new Error('Invalid character type. Allowed types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  }

  class Bowman extends Character {
    constructor(name) {
      super(name, 'Bowman');
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
    }
  }

  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
      this.attack = 25;
      this.defence = 25;
    }
  }

  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
      this.attack = 40;
      this.defence = 10;
    }
  }

  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
      this.attack = 10;
      this.defence = 40;
    }
  }

  const bowman = new Bowman('Bowman');
console.log(bowman);

    const swordsman = new Swordsman('Swordsman');
console.log(swordsman);

    const magician = new Magician('Magician');
console.log(magician);

    const undead = new Undead('Undead');
console.log(undead);

    const zombie = new Zombie('Zombie');
console.log(zombie);

    const daemon = new Daemon('Daemon');
console.log(daemon);

module.exports = {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon
};