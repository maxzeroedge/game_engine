const { BattleEngine } = require('./battle_engine');
const { Stats, Attack } = require('./stat_engine');

let stats1 = new Stats({
    'HP': 200,
    'MP': 10,
    'AGI': 5,
    'STR': 5,
    'INT': 5
});
let stats2 = new Stats({
    'HP': 100,
    'MP': 10,
    'AGI': 5,
    'STR': 2,
    'INT': 2
});
let atk1 = new Attack(1, 50);
let atk2 = new Attack(10, 50);

// Test
let intervalTimer = setInterval(() => {
    let dmg = BattleEngine.count_damage(stats1, stats2, atk1);
    console.log(dmg);
    stats1.HP = stats1.HP - dmg;
    console.log(dmg);
    dmg = BattleEngine.count_damage(stats2, stats1, atk1);
    stats2.HP = stats2.HP - dmg;
    console.log('Player HP: ' + stats1.HP + '\n Enemy HP: ' + stats2.HP);
    if(!stats1.HP || !stats2.HP){
        clearInterval(intervalTimer);
        console.log("This battle is over!")
    }
}, 2000);