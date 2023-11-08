
class Warrior {
  static ranks = ["Pushover", "Novice", "Fighter",
    "Warrior", "Veteran", "Sage", "Elite", "Conqueror",
    "Champion", "Master", "Greatest"];

  constructor() {
    this.levelVal = 1;
    this.experienceVal = 100;
    this.rankVal = "Pushover";
    this.achievementsVal = [];
  }

  level() {
    return this.levelVal;
  };

  rank() {
    return this.rankVal;
  };

  experience() {
    return this.experienceVal;
  };

  achievements() {
    return this.achievementsVal;
  };

  updateLevel() {
    this.levelVal = parseInt('' + this.experienceVal / 100);
    if (this.levelVal > 100) {
      this.levelVal = 100
    }
  }

  updateExperience(num) {
    this.experienceVal += num;
    if (this.experienceVal > 10000) {
      this.experienceVal = 10000;
    }
  }

  updateRank() {
    this.rankVal = Warrior.ranks[parseInt('' + this.levelVal / 10)];
  }

  training(event) {
    const [description, experiencePoints, minLevel] = event;

    if (this.levelVal >= minLevel) {
      this.achievementsVal.push(description);
      this.updateExperience(experiencePoints);
      this.updateLevel();
      this.updateRank();
      return description;
    }

    return "Not strong enough";
  };

  battle(enemy_level) {

    const enemy_rank = parseInt('' + enemy_level / 10);
    const warrior_rank = Warrior.ranks.indexOf(this.rankVal);
    let message;

    if (enemy_level > 100 || enemy_level < 1) {
      return 'Invalid level';
    }

    if (enemy_rank > warrior_rank && enemy_level - this.levelVal >= 5) {
      return "You've been defeated";
    }

    if (enemy_level < 1 || enemy_level > 100) {
      return "Invalid level";
    }

    if (enemy_level === this.levelVal) {
      this.updateExperience(10);
    }

    if (this.levelVal - enemy_level === 1) {
      this.updateExperience(5);
    }

    if (enemy_level - this.levelVal >= 1) {
      const diff = enemy_level - this.levelVal;
      this.updateExperience(20 * diff * diff);
    }

    if (this.levelVal - enemy_level >= 2) {
      message = "Easy fight";
    } else if (this.levelVal - enemy_level === 1 || enemy_level === this.levelVal) {
      message = "A good fight";
    } else {
      message = "An intense fight";
    }

    this.updateLevel();
    this.updateRank();

    return message;
  };
}
