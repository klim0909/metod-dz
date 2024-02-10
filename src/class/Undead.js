const Character = require('./Character');

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

module.exports = Undead;
