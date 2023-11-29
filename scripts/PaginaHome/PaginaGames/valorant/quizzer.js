var perguntas = [
     // Nível Fácil
  {
    pergunta: "Qual é a principal organização antiterrorista em Valorant?",
    alternativas: ["a) Phoenix", "b) Valorant", "c) Ciphers", "d) Ghosts"],
    resposta: "b) Valorant"
  },
  {
    pergunta: "Qual é a função principal do agente Sage em Valorant?",
    alternativas: ["a) Curandeiro", "b) Atirador de elite", "c) Hacker", "d) Líder"],
    resposta: "a) Curandeiro"
  },
  {
    pergunta: "Qual é a arma padrão para os agentes no início de cada rodada?",
    alternativas: ["a) Vandal", "b) Guardian", "c) Frenzy", "d) Classic"],
    resposta: "d) Classic"
  },
  {
    pergunta: "Qual é o nome do mapa que apresenta um campo de treinamento militar em Valorant?",
    alternativas: ["a) Split", "b) Bind", "c) Haven", "d) Ascent"],
    resposta: "c) Haven"
  },
  {
    pergunta: "Qual é a habilidade suprema do agente Jett?",
    alternativas: ["a) Relâmpago", "b) Furtividade", "c) Tempestade de Kunais", "d) Ressurreição"],
    resposta: "c) Tempestade de Kunais"
  },

  // Nível Médio
  {
    pergunta: "Qual é o agente conhecido por suas habilidades de bloqueio de visão com fumaça em Valorant?",
    alternativas: ["a) Viper", "b) Brimstone", "c) Omen", "d) Cypher"],
    resposta: "c) Omen"
  },
  {
    pergunta: "Quantas bombas (spikes) uma equipe pode plantar em uma única rodada em Valorant?",
    alternativas: ["a) 1", "b) 2", "c) 3", "d) 4"],
    resposta: "b) 2"
  },
  {
    pergunta: "Qual é a arma corpo a corpo disponível em Valorant?",
    alternativas: ["a) Faca", "b) Machado", "c) Espada", "d) Bastão de Choque"],
    resposta: "a) Faca"
  },
  {
    pergunta: "Qual é o papel do agente Sova em Valorant?",
    alternativas: ["a) Curandeiro", "b) Duelista", "c) Iniciador", "d) Controlador"],
    resposta: "c) Iniciador"
  },
  {
    pergunta: "Qual é a habilidade suprema do agente Phoenix?",
    alternativas: ["a) Ressurreição", "b) Tempestade de Fogo", "c) Expurgo", "d) Muralha de Fogo"],
    resposta: "b) Tempestade de Fogo"
  },

  // Nível Difícil
  {
    pergunta: "Qual é a habilidade suprema do agente Cypher?",
    alternativas: ["a) Expurgo", "b) Retribuição", "c) Ira do Céu", "d) Ronda Rápida"],
    resposta: "a) Expurgo"
  },
  {
    pergunta: "Qual é o agente especializado em bloquear habilidades inimigas?",
    alternativas: ["a) Sage", "b) Viper", "c) Phoenix", "d) Killjoy"],
    resposta: "d) Killjoy"
  },
  {
    pergunta: "Quantas armas primárias diferentes um agente pode comprar em Valorant?",
    alternativas: ["a) 1", "b) 2", "c) 3", "d) 4"],
    resposta: "c) 3"
  },
  {
    pergunta: "Qual é o agente conhecido por sua habilidade de criar portais em Valorant?",
    alternativas: ["a) Brimstone", "b) Omen", "c) Jett", "d) Raze"],
    resposta: "b) Omen"
  },
  {
    pergunta: "Qual é o nome do modo de jogo em que uma equipe ataca e a outra defende, alternando em rodadas?",
    alternativas: ["a) Assault", "b) Conquista", "c) Desarmamento", "d) Ataque/Defesa"],
    resposta: "d) Ataque/Defesa"
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

