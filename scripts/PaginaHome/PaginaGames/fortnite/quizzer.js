var perguntas = [
  {
    pergunta: "Qual é o nome da ilha onde os jogadores começam suas partidas em Fortnite?",
    alternativas: ["a) Salty Springs", "b) Tilted Towers", "c) Spawn Island", "d) Pleasant Park"],
    resposta: "c) Spawn Island"
  },
  {
    pergunta: "Qual é o nome do personagem principal em Fortnite?",
    alternativas: ["a) Jonesy", "b) Ramirez", "c) Peely", "d) Raven"],
    resposta: "a) Jonesy"
  },
  {
    pergunta: "Em que temporada Fortnite introduziu o conceito de Battle Pass?",
    alternativas: ["a) Temporada 1", "b) Temporada 2", "c) Temporada 3", "d) Temporada 4"],
    resposta: "a) Temporada 1"
  },
  {
    pergunta: "Qual é o nome da cidade no centro do mapa em Fortnite?",
    alternativas: ["a) Retail Row", "b) Salty Springs", "c) Pleasant Park", "d) Tilted Towers"],
    resposta: "d) Tilted Towers"
  },
  {
    pergunta: "Qual arma é conhecida por causar grandes danos estruturais em Fortnite?",
    alternativas: ["a) Shotgun", "b) Rocket Launcher", "c) Submachine Gun", "d) Pistol"],
    resposta: "b) Rocket Launcher"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome do evento sazonal em que o mapa de Fortnite é transformado?",
    alternativas: ["a) Blitz", "b) Overhaul", "c) The End", "d) The Storm"],
    resposta: "c) The End"
  },
  {
    pergunta: "Quem é o vilão principal na história de Fortnite?",
    alternativas: ["a) The Visitor", "b) The Foundation", "c) The Cube", "d) The Scientist"],
    resposta: "b) The Foundation"
  },
  {
    pergunta: "Qual é o nome da ilha flutuante que apareceu em Fortnite durante a Temporada 6?",
    alternativas: ["a) Sky Island", "b) Nimbus Isle", "c) The Spire", "d) Floating Haven"],
    resposta: "c) The Spire"
  },
  {
    pergunta: "Qual é o nome do modo de jogo em que os jogadores competem para serem os últimos sobreviventes?",
    alternativas: ["a) Save the World", "b) Team Rumble", "c) Creative", "d) Battle Royale"],
    resposta: "d) Battle Royale"
  },
  {
    pergunta: "Qual é o nome do famoso dançarino que processou a Epic Games por usar sua dança em Fortnite?",
    alternativas: ["a) Carlton Banks", "b) Michael Jackson", "c) Alfonso Ribeiro", "d) Usher"],
    resposta: "c) Alfonso Ribeiro"
  },

  // Nível Difícil
  {
    pergunta: "Quantas ilhas flutuantes havia inicialmente no mapa de Fortnite durante a Temporada 8?",
    alternativas: ["a) 1", "b) 3", "c) 5", "d) 7"],
    resposta: "c) 5"
  },
  {
    pergunta: "Qual é o nome do local onde os jogadores podem encontrar o cubo em Fortnite?",
    alternativas: ["a) Loot Lake", "b) Salty Springs", "c) Wailing Woods", "d) Kevin's Kingdom"],
    resposta: "a) Loot Lake"
  },
  {
    pergunta: "Qual é o nome do evento ao vivo que aconteceu em Fortnite, envolvendo um concerto virtual de Travis Scott?",
    alternativas: ["a) The Nexus Event", "b) The Zero Crisis Event", "c) Astronomical", "d) The Butterfly Event"],
    resposta: "c) Astronomical"
  },
  {
    pergunta: "Qual é o nome da agência de espionagem presente em Fortnite durante várias temporadas?",
    alternativas: ["a) E.G.O.", "b) A.L.T.E.R.", "c) S.H.A.D.O.W.", "d) G.H.O.S.T."],
    resposta: "a) E.G.O."
  },
  {
    pergunta: "Qual foi a temporada em que os Jogos Vorazes foram homenageados em Fortnite com a adição do Distrito 13?",
    alternativas: ["a) Temporada 7", "b) Temporada 8", "c) Temporada 9", "d) Temporada 10"],
    resposta: "a) Temporada 7"
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

