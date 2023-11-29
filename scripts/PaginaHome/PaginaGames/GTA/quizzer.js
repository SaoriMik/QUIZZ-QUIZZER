var perguntas = [
     // Nível Fácil
  {
    pergunta: "Quem é o protagonista jogável principal em GTA V?",
    alternativas: ["a) Michael De Santa", "b) Trevor Philips", "c) Franklin Clinton", "d) Todos os anteriores"],
    resposta: "d) Todos os anteriores"
  },
  {
    pergunta: "Qual é a cidade fictícia onde a maior parte de GTA V se passa?",
    alternativas: ["a) Liberty City", "b) Vice City", "c) Los Santos", "d) San Fierro"],
    resposta: "c) Los Santos"
  },
  {
    pergunta: "Qual é o nome do filho de Michael De Santa em GTA V?",
    alternativas: ["a) Jimmy", "b) Franklin", "c) Lamar", "d) Trevor Jr."],
    resposta: "a) Jimmy"
  },
  {
    pergunta: "Quem é o chefe do cartel de drogas que aparece em GTA V?",
    alternativas: ["a) Martin Madrazo", "b) Trevor Philips", "c) Lamar Davis", "d) Devin Weston"],
    resposta: "a) Martin Madrazo"
  },
  {
    pergunta: "Qual é o nome do cachorro de Franklin em GTA V?",
    alternativas: ["a) Chop", "b) Spike", "c) Rex", "d) Max"],
    resposta: "a) Chop"
  },

  // Nível Médio
  {
    pergunta: "Qual é o nome do banco que os protagonistas tentam assaltar em GTA V?",
    alternativas: ["a) Banco Nacional de Los Santos", "b) Banco Fleeca", "c) Union Depository", "d) Pacific Standard"],
    resposta: "c) Union Depository"
  },
  {
    pergunta: "O que Trevor Philips possui como negócio principal em Blaine County?",
    alternativas: ["a) Oficina de Carros", "b) Clube Noturno", "c) Loja de Armas", "d) Fábrica de Metanfetamina"],
    resposta: "d) Fábrica de Metanfetamina"
  },
  {
    pergunta: "Qual é o nome do piloto de corrida que Franklin Clinton ajuda em missões de perseguição em GTA V?",
    alternativas: ["a) Ricky", "b) Lamar", "c) Simeon", "d) Dom"],
    resposta: "d) Dom"
  },
  {
    pergunta: "Onde se passa a missão final de assalto a banco em GTA V?",
    alternativas: ["a) Aeroporto Internacional de Los Santos", "b) Maze Bank Arena", "c) Union Depository", "d) Galeria de Arte"],
    resposta: "c) Union Depository"
  },
  {
    pergunta: "Qual é o nome do iate de propriedade de Michael em GTA V?",
    alternativas: ["a) Sea Shark", "b) The Aquarius", "c) S.S. Bulker", "d) El Gordo"],
    resposta: "b) The Aquarius"
  },

  // Nível Difícil
  {
    pergunta: "Qual é o nome do programa de TV fictício que é popular em GTA V e apresenta um reality show?",
    alternativas: ["a) Fame or Shame", "b) Weazel News", "c) Los Santos Life", "d) The Simian"],
    resposta: "a) Fame or Shame"
  },
  {
    pergunta: "Quem é o empresário bilionário que os protagonistas conhecem durante a história de GTA V?",
    alternativas: ["a) Devin Weston", "b) Steve Haines", "c) Solomon Richards", "d) Stretch"],
    resposta: "a) Devin Weston"
  },
  {
    pergunta: "Qual é o nome do grupo de motociclistas que Trevor Philips lidera em GTA V?",
    alternativas: ["a) Lost MC", "b) Angels of Death", "c) Vagos", "d) The Professionals"],
    resposta: "a) Lost MC"
  },
  {
    pergunta: "Qual é o nome da gangue rival de Lamar Davis em GTA V?",
    alternativas: ["a) Ballas", "b) Families", "c) Vagos", "d) The O'Neil Brothers"],
    resposta: "a) Ballas"
  },
  {
    pergunta: "Qual é o nome do hacker especialista em computadores que os protagonistas recrutam para os assaltos em GTA V?",
    alternativas: ["a) Lester Crest", "b) Paige Harris", "c) Avi Schwartzman", "d) Rickie Lukens"],
    resposta: "a) Lester Crest"
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

