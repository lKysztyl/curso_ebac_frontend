

class Pokemon {
    #name;
    #type;
    #weakness;
    #height;
    #weight;
    #ability;
    #category;
    
    constructor(name, type, weakness, height, weight, ability, category) {
        this.#name = name;
        this.#type = type;
        this.#height = height;
        this.#weight = weight;
        this.#ability = ability;
        this.#category = category;
        this.#weakness = weakness;

    }

    get name() {
        return this.#name;
    };

    get type() {
        return this.#type;
    };

    get weakness() {
        return this.#weakness;
    };

    get height() {
        return this.#height;
    };

    get weight() {
        return this.#weight;
    };

    get ability() {
        return this.#ability;
    };

    get category() {
        return this.#category;
    };
};

Object.preventExtensions(Pokemon);


class Meowscarada extends Pokemon {
    #hp;
    #attack;
    #defense;
    #specialAttack;
    #specialDefense;
    #speed;
    constructor(name, type, weakness, height, weight, ability, category) {
        super(name, type, weakness, height, weight, ability, category);
        this.#hp = 5;
        this.#attack = 7;
        this.#defense = 5;
        this.#specialAttack = 5;
        this.#specialDefense = 5;
        this.#speed = 8;
    }

    get hp() {
        return this.#hp;
    };

    get attack() {
        return this.#attack;
    };

    get defense() {
        return this.#defense;
    };

    get specialAttack() {
        return this.#specialAttack;
    };

    get specialDefense() {
        return this.#specialDefense;
    };

    get speed() {
        return this.#speed;
    };
};

class Pikachu extends Pokemon {
    constructor(name, type, weakness, height, weight, ability, category) {
        super(name, type, weakness, height, weight, ability, category);
    }
};

class Bulbasaur extends Pokemon {
    constructor(name, type, weakness, height, weight, ability, category) {
        super(name, type, weakness, height, weight, ability, category);
    }
};

class Charmander extends Pokemon {
    constructor(name, type, weakness, height, weight, ability, category) {
        super(name, type, weakness, height, weight, ability, category);
    }
};

const pikachu = new Pikachu('Pikachu', 'Electric', 'Ground', '0.4m', '6kg', 'Static', 'Mouse Pokémon');
console.log(`Nome: ${pikachu.name} | Tipo: ${pikachu.type} | Fraqueza: ${pikachu.weakness} | Altura: ${pikachu.height} | Peso: ${pikachu.weight} | Habilidade: ${pikachu.ability} | Categoria: ${pikachu.category}`);

const charmander = new Charmander('Charmander', 'Fire', 'Water, Ground, Rock', '0.6m', '8.5kg', 'Blaze', 'Lizard Pokémon');
console.log(`Nome: ${charmander.name} | Tipo: ${charmander.type} | Fraqueza: ${charmander.weakness} | Altura: ${charmander.height} | Peso: ${charmander.weight} | Habilidade: ${charmander.ability} | Categoria: ${charmander.category}`);

const bulbasaur = new Bulbasaur('Bulbasaur', 'Grass, Poison', 'Fire, Ice, Flying, Psychic', '0.7m', '6.9kg', 'Overgrow', 'Seed Pokémon');
console.log(`Nome: ${bulbasaur.name} | Tipo: ${bulbasaur.type} | Fraqueza: ${bulbasaur.weakness} | Altura: ${bulbasaur.height} | Peso: ${bulbasaur.weight} | Habilidade: ${bulbasaur.ability} | Categoria: ${bulbasaur.category}`);

const meowscarada = new Meowscarada('Meowscarada', 'Grass, Dark', 'Fary, Poison, Fighting, Bug, Flying, Ice, Fire', '1.5m', '31.2kg', 'Overgrow', 'Magician Pokémon');
console.log(`Nome: ${meowscarada.name} | Tipo: ${meowscarada.type} | Fraqueza: ${meowscarada.weakness} | Altura: ${meowscarada.height} | Peso: ${meowscarada.weight} | Habilidade: ${meowscarada.ability} | Categoria: ${meowscarada.category}`);
