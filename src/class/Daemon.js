const Character = require('./Character');

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

module.exports = Daemon;
