import Character from './Character';

export default class Bowman extends Character {
  constructor(name, defence, attackRange, attack) {
    super(name);
    this.type = 'Bowman';
    this.attack = attack;
    this.defence = defence;
    this.attackRange = attackRange;
  }
}
