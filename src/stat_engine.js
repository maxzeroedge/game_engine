const _ = require('lodash')
/**
 * Every character will have the following stats:
 * HEALTH POINTS
 * MAGIC POINTS
 * AGILITY: Increases chances of attack hitting
 * STRENGTH: Increases normal attack and defense
 * INTELLIGENCE: Increases magic attack and defense
 * ATTACK_MULTIPLIER: 0.5 <= ATKM <= 2
 * DEFENSE_MULTIPLIER: 0.5 <= DEFM <= 2
 * MAGIC_ATTACK_MULTIPLIER: 0.5 <= MATKM <= 2
 * MAGIC_DEFENSE_MULTIPLIER: 0.5 <= MDEFM <= 2
 */
export class Stats{
    constructor(current_stats){
        this.init_stats()
        if(current_stats){
            // TODO: Throw error if some stat is missing?
            _.each(current_stats, (v, k)=>{
                this[k] = v;
            })
        }
    }
    init_stats(){
        this.HP = 0; // HEALTH POINTS;
        this.MP = 0; // MAGIC POINTS;
        this.AGI = 0; // AGILITY;
        this.STR = 0; // STRENGTH;
        this.INT = 0; // INTELLIGENCE;
        this.ATKM = 2; // ATTACK_MULTIPLIER
        this.DEFM = 1; // DEFENSE_MULTIPLIER
        this.MATKM = 2; // MAGIC_ATTACK_MULTIPLIER
        this.MDEFM = 1; // MAGIC_DEFENSE_MULTIPLIER
    }
    // TODO: Also consider any existing effect into play
    /**
     * 
     * @param {Stats} target_stats: The stats of the target of attack
     * @param {Stats} source_stats: The stats of the source of attack
     * @param {Object} stats_to_consider: Optional: Which stats to consider for difference
     */
    static difference(target_stats, source_stats, stats_to_consider=['AGI', 'STR', 'INT']){
        let diff_stats = {};
        _.each(stats_to_consider, (k)=>{
            diff_stats[k] = Stats.get_difference(target_stats[k], source_stats[k])
        })
        return new Stats(diff_stats)
    }
    static get_difference(a, b){
        return a < b ? 0 : a - b;
    }
}



/**
 * Each attack will have:
 * type: Magic or Normal
 * damage: The base damage of the attack
 */
export class Attack {
    constructor(type, damage){
        this.type = type;
        this.damage = damage;
        this.NORMAL = 1;
        this.MAGIC = 10;
    }
}