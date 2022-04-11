abstract class Character {
  constructor( public name: string ) {
    this.name = name
  }
  abstract attack(): void
  abstract talk(): void
}

class MeleeCharacter extends Character {
  attack() {
    console.log(`${this.name} attacks at a range of 3`)
  }
  talk() {
    console.log(`Olá, eu sou o ${this.name} e sou uma classe corpo a corpo`);
  }
}

class RangedCharacter extends Character {
  attack() {
    console.log(`${this.name} attacks at a range of 10`)
  }
  talk() {
    console.log(`Olá, eu sou o ${this.name} e sou uma classe de longo alcance`);
  }
}

const link = new MeleeCharacter('Link');
link.attack();
link.talk();

const icaro = new RangedCharacter('Kid Icarus');
icaro.attack();
icaro.talk();
