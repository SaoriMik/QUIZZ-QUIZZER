var perguntas = [
     // Nível Fácil
  {
    pergunta: "Qual é o nome do protagonista principal da série 'The Legend of Zelda'?",
    alternativas: ["a) Link", "b) Zelda", "c) Ganondorf", "d) Sheik"],
    resposta: "a) Link"
  },
  {
    pergunta: "Qual é o nome da princesa que geralmente precisa ser resgatada em muitos jogos da série?",
    alternativas: ["a) Zelda", "b) Malon", "c) Impa", "d) Saria"],
    resposta: "a) Zelda"
  },
  {
    pergunta: "Qual é o item recorrente que Link utiliza para se proteger em vários jogos?",
    alternativas: ["a) Varinha Mágica", "b) Escudo Hyliano", "c) Espada Mestra", "d) Arco e Flecha"],
    resposta: "b) Escudo Hyliano"
  },
  {
    pergunta: "Qual é o nome da terra principal onde a maioria dos jogos da série se passa?",
    alternativas: ["a) Hyrule", "b) Termina", "c) Kokiri Forest", "d) Lorule"],
    resposta: "a) Hyrule"
  },
  {
    pergunta: "Qual é o instrumento musical utilizado por Link em 'The Legend of Zelda: Ocarina of Time'?",
    alternativas: ["a) Flauta Deku", "b) Harpa de Nayru", "c) Lira de Farore", "d) Ocarina"],
    resposta: "d) Ocarina"
  },

  // Nível Médio
  {
    pergunta: "Qual é o título do primeiro jogo da série 'The Legend of Zelda', lançado em 1986?",
    alternativas: ["a) Zelda's Quest", "b) The Adventure of Link", "c) A Link to the Past", "d) The Legend of Zelda"],
    resposta: "d) The Legend of Zelda"
  },
  {
    pergunta: "Qual é a raça de criaturas que vive na Cidade das Águas em 'The Legend of Zelda: The Wind Waker'?",
    alternativas: ["a) Zoras", "b) Gorons", "c) Ritos", "d) Koroks"],
    resposta: "c) Ritos"
  },
  {
    pergunta: "Qual é o vilão principal recorrente na série 'The Legend of Zelda'?",
    alternativas: ["a) Vaati", "b) Demise", "c) Ganondorf", "d) Zant"],
    resposta: "c) Ganondorf"
  },
  {
    pergunta: "Qual é o nome do cavalo companheiro de Link em vários jogos da série?",
    alternativas: ["a) Epona", "b) Shadowfax", "c) Roach", "d) Agro"],
    resposta: "a) Epona"
  },
  {
    pergunta: "Qual é o título do jogo em que Link viaja entre dois mundos paralelos, um escuro e um claro?",
    alternativas: ["a) A Link to the Past", "b) Twilight Princess", "c) Oracle of Seasons", "d) A Link Between Worlds"],
    resposta: "d) A Link Between Worlds"
  },

  // Nível Difícil
  {
    pergunta: "Qual é a ordem correta das peças da Triforce, símbolo sagrado da série?",
    alternativas: ["a) Poder, Coragem, Sabedoria", "b) Sabedoria, Poder, Coragem", "c) Coragem, Poder, Sabedoria", "d) Sabedoria, Coragem, Poder"],
    resposta: "c) Coragem, Poder, Sabedoria"
  },
  {
    pergunta: "Qual é o título do jogo em que Link se transforma em lobo?",
    alternativas: ["a) Ocarina of Time", "b) Twilight Princess", "c) Majora's Mask", "d) Breath of the Wild"],
    resposta: "b) Twilight Princess"
  },
  {
    pergunta: "Qual é o nome do reino alternativo sombrio em 'A Link to the Past'?",
    alternativas: ["a) Holodrum", "b) Labrynna", "c) Dark World", "d) Lorule"],
    resposta: "c) Dark World"
  },
  {
    pergunta: "Qual é o nome do barqueiro que leva Link entre as ilhas em 'The Legend of Zelda: The Wind Waker'?",
    alternativas: ["a) King of Red Lions", "b) Beedle", "c) Linebeck", "d) Tetra"],
    resposta: "a) King of Red Lions"
  },
  {
    pergunta: "Qual é o título do jogo lançado para o Nintendo Switch que se passa em um vasto mundo aberto?",
    alternativas: ["a) Breath of the Wild", "b) Skyward Sword", "c) Hyrule Warriors: Age of Calamity", "d) Link's Awakening"],
    resposta: "a) Breath of the Wild"
  }
];

    var Indice = -1;
    var A, B, C, D;

    function GerarIndice() {
        let NovoIndice = Math.floor(Math.random() * 15);
        Validador(NovoIndice);
    }

    function Validador(NovoIndice) {
        if(Indice === NovoIndice){
            GerarIndice();
        }else{
            Indice = NovoIndice;
            InserirQuestao()
        }
    }

    function InserirQuestao() {
        let Tamanho = perguntas.length;

        document.getElementById("pergunta").textContent = perguntas[Indice].pergunta;

        document.getElementById("a").textContent = perguntas[Indice].alternativas[0];
        document.getElementById("b").textContent = perguntas[Indice].alternativas[1];
        document.getElementById("c").textContent = perguntas[Indice].alternativas[2];
        document.getElementById("d").textContent = perguntas[Indice].alternativas[3];
        console.log(Indice)
    }

    window.addEventListener('load',GerarIndice)

      

      function ClickA() {
        A = document.getElementById("a").textContent;
        verificarResposta(A);
      }
      function ClickB() {
        B = document.getElementById("b").textContent;
        verificarResposta(B);
      }
      function ClickC() {
        C = document.getElementById("c").textContent;
        verificarResposta(C);
      }
      function ClickD() {
        D = document.getElementById("d").textContent;
        verificarResposta(D);
      }
      
      function verificarResposta(elemento) {
        let resposta = elemento;
        if (perguntas && Indice !== undefined && resposta === perguntas[Indice].resposta) {
          alert("CERTA A RESPOSTA");
          GerarIndice()
        }
        else{
          alert("ERROU")
        }
      }

