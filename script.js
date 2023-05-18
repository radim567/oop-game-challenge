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
  console.log(this.describe());
};

Player.prototype.describe = function () {
  return `${this.name} is at level ${this.lvl} with ${this.points} XP`;
};

console.log(Player.prototype);

const player1 = new Player('Jonas');
const player2 = new Player('Diana');
console.log(player1);
console.log(player2);

player1.gainXp(5);
player2.gainXp(4);
player1.gainXp(8);
player2.gainXp(9);
player1.gainXp(7);
player2.gainXp(3);
player1.gainXp(6);
player2.gainXp(2);

// console.log(player1.describe());
// console.log(player2.describe());
