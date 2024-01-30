class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string and have a length between 2 and 10 characters');
    }

    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (!allowedTypes.includes(type)) {
      throw new Error(`Invalid character type. Allowed types: ${allowedTypes.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack += Math.floor(Math.random() * 10) + 1;
    this.defence += Math.floor(Math.random() * 10) + 1;

    // Ensure that attack and defence values do not exceed 100
    this.attack = Math.min(this.attack, 100);
    this.defence = Math.min(this.defence, 100);

    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Cannot damage a dead character');
    }

    const actualDamage = points - this.defence;

    if (actualDamage > 0) {
      this.health -= actualDamage;
    }

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;