function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  return `${this.name} is at level ${this.lvl} with ${this.points} XP`;
};

console.log(Player.prototype);

const player1 = new Player("Jonas");
const player2 = new Player("Diana");
console.log(player1);
console.log(player2);
