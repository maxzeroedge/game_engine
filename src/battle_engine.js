const _ = require('lodash')
const {Stats, Attack} = require('./stat_engine');

/**
 * This is the core battle engine that will calculate damages and effects
 */
export class BattleEngine {
    constructor(){}
    /**
     * 
     * @param {Stats} attacker_stats 
     * @param {Stats} victim_stats 
     * @param {Attack} attack 
     */
    static count_damage(attacker_stats, victim_stats, attack){
        let diff_stats = Stats.difference(attacker_stats, victim_stats)
        let dmg = 0;
        // TODO: Consider special effects?
        if(attack.type == Attack.NORMAL){
            dmg = diff_stats.STR * Stats.difference(attacker_stats.ATKM, victim_stats.DEFM); 
        }
        if(attack.type == Attack.MAGIC){
            dmg = diff_stats.MP * Stats.difference(attacker_stats.MATKM, victim_stats.MDEFM); 
        }
        return dmg
    }
}