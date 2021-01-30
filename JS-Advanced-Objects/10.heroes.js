function solve() {

    function cast(spell) {
        this.mana -= 1;
        console.log(`${this.name} cast ${spell}`);
    }


    function mage(name) {
        return state = {
            name,
            health: 100,
            mana: 100,
            cast,
        }
    }

    function fight() {
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
    }

    function fighter(name) {
        return state = {
            name,
            health: 100,
            stamina: 100,
            fight,
        }
    }


    return  {mage, fighter,}
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

