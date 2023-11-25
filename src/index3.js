class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const heroiMago = new Heroi('Merlin', 100, 'mago');
  heroiMago.atacar(); // Saída: O mago atacou usando magia
  
  const heroiGuerreiro = new Heroi('Conan', 35, 'guerreiro');
  heroiGuerreiro.atacar(); // Saída: O guerreiro atacou usando espada