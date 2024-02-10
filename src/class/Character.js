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

        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);

        this.attack = Math.min(this.attack, 100);
        this.defence = Math.min(this.defence, 100);

        this.health = 100;
    }

    damage(points) {
        
        if (this.health === 0) {
            throw new Error('Cannot damage a dead character');
        }
        const actualDamage = points * (1 - this.defence / 100);

        this.health -= actualDamage;

        this.health = Math.max(this.health, 0);
    }
}

module.exports = Character;