const Character = require('./Character');

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}

module.exports = Zombie;
