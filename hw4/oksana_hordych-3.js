class Warrior {
    constructor(initialLevel, initialRank, initialAchievements, initialExperience) {
        this._level = initialLevel || 1;
        this._rank = initialRank || 0;
        this._achievements = initialAchievements || [];
        this._experience = initialExperience || 100;
        this._ranks = ["Pushover", "Novice", "Fighter",
            "Warrior", "Veteran", "Sage", "Elite",
            "Conqueror", "Champion", "Master", "Greatest"];
    }

    experience() {
        return this._experience;
    }

    achievements() {
        return this._achievements;
    }

    rank() {
        return this._ranks[this._rank];
    }

    level() {
        const newLevel = Math.floor(this._experience / 100);
        if (newLevel > this._level) {
            this._level = newLevel;
            this._rank = Math.floor(this._level / 10);
        }
        return this._level;
    }

    gain(exp) {
        this._experience += exp;
        this._experience = Math.min(this._experience, 10000);
        this.level(); // Recalculate level and rank
    }

    training(array) {
        const msg = array[0];
        const exp = array[1];
        const t_level = array[2];
        if (t_level <= this._level) {
            this._achievements.push(msg);
            this.gain(exp);
            return msg;
        }
        return "Not strong enough";
    }

    battle(enemyL) {
        const diff_rank = Math.floor(enemyL / 10) - Math.floor(this._level / 10);
        const diff_level = this._level - enemyL;

        if (enemyL > 100 || enemyL <= 0) {
            return "Invalid level";
        } else if (diff_level <= -5 && diff_rank > 0) {
            return "You've been defeated";
        } else {
            if (diff_level >= 2) {
                return "Easy fight";
            } else if (diff_level <= 1 && diff_level >= 0) {
                this.gain(diff_level === 1 ? 5 : 10);
                return "A good fight";
            }
            this.gain((diff_level ** 2) * 20);
            return "An intense fight";
        }
    }
}



const bruce_lee = new Warrior();
console.log("Initial Level:", bruce_lee.level()); // Output: 1
console.log("Initial Experience:", bruce_lee.experience()); // Output: 100
console.log("Initial Rank:", bruce_lee.rank()); // Output: "Pushover"
console.log("Initial Achievements:", bruce_lee.achievements()); // Output: []
console.log("Training Result:", bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // Output: "Defeated Chuck Norris"
console.log("Updated Experience:", bruce_lee.experience()); // Output: 9100
console.log("Updated Level:", bruce_lee.level()); // Output: 91
console.log("Updated Rank:", bruce_lee.rank()); // Output: "Master"
console.log("Battle Result:", bruce_lee.battle(90)); // Output: "A good fight"
console.log("Updated Experience after Battle:", bruce_lee.experience()); // Output: 9105
console.log("Updated Achievements:", bruce_lee.achievements()); // Output: ["Defeated Chuck Norris"]