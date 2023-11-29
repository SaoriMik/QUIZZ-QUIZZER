var perguntas = [
      // Nível Fácil
  {
    pergunta: "Qual é a principal rota onde os jogadores costumam lutar um contra o outro?",
    alternativas: ["a) Topo", "b) Meio", "c) Selva", "d) Bot"],
    resposta: "a) Topo"
  },
  {
    pergunta: "Qual é o objetivo principal do jogo?",
    alternativas: ["a) Matar inimigos", "b) Destruir as torres inimigas", "c) Capturar dragões", "d) Conseguir mais ouro"],
    resposta: "b) Destruir as torres inimigas"
  },
  {
    pergunta: "Qual é o nome do mapa padrão em League of Legends?",
    alternativas: ["a) Summoner's Rift", "b) Twisted Treeline", "c) Howling Abyss", "d) Crystal Scar"],
    resposta: "a) Summoner's Rift"
  },
  {
    pergunta: "Quantos jogadores normalmente compõem uma equipe em LoL?",
    alternativas: ["a) 3", "b) 4", "c) 5", "d) 6"],
    resposta: "c) 5"
  },
  {
    pergunta: "Qual é o nome do monstro épico neutro que concede benefícios poderosos à equipe que o derrota?",
    alternativas: ["a) Golem", "b) Barão Nashor", "c) Dragão Ancião", "d) Arauto"],
    resposta: "b) Barão Nashor"
  },

  // Nível Médio
  {
    pergunta: "Qual é a função principal do suporte durante a partida?",
    alternativas: ["a) Causar dano", "b) Tankar os inimigos", "c) Ajudar o time com visão e utilidade", "d) Farmar minions"],
    resposta: "c) Ajudar o time com visão e utilidade"
  },
  {
    pergunta: "O que é 'kiting' em League of Legends?",
    alternativas: ["a) Dançar durante o jogo", "b) Manipular a agressão dos inimigos enquanto causa dano", "c) Trocar de campeão no meio da partida", "d) Usar habilidades de forma eficiente"],
    resposta: "b) Manipular a agressão dos inimigos enquanto causa dano"
  },
  {
    pergunta: "Qual é o nome do evento anual de campeonato mundial de LoL?",
    alternativas: ["a) Worlds Championship", "b) League Cup", "c) Summoner's Showdown", "d) Rift Rivals"],
    resposta: "a) Worlds Championship"
  },
  {
    pergunta: "O que são 'skins' em League of Legends?",
    alternativas: ["a) Itens consumíveis", "b) Campeões novos", "c) Roupas ou aparências personalizadas para os campeões", "d) Montarias"],
    resposta: "c) Roupas ou aparências personalizadas para os campeões"
  },
  {
    pergunta: "Qual é o nome do Nexus inimigo em Summoner's Rift?",
    alternativas: ["a) Altar", "b) Núcleo", "c) Ancient", "d) Cristal"],
    resposta: "b) Núcleo"
  },

  // Nível Difícil
  {
    pergunta: "Quais são as cinco posições principais em uma equipe de LoL?",
    alternativas: ["a) Topo, Meio, Selva, ADC, Suporte", "b) Atirador, Mago, Tanque, Assassino, Suporte", "c) Lutador, Mago, Assassino, Tanque, Suporte", "d) Guerreiro, Sacerdote, Mago, Ladino, Caçador"],
    resposta: "a) Topo, Meio, Selva, ADC, Suporte"
  },
  {
    pergunta: "O que é o 'backdoor' em League of Legends?",
    alternativas: ["a) Uma estratégia de fuga", "b) Entrar sorrateiramente na base inimiga e destruir o Nexus", "c) A compra de itens defensivos", "d) Um tipo de habilidade de campeão"],
    resposta: "b) Entrar sorrateiramente na base inimiga e destruir o Nexus"
  },
  {
    pergunta: "Qual é o nome da empresa responsável por desenvolver e publicar League of Legends?",
    alternativas: ["a) Valve", "b) Blizzard", "c) Riot Games", "d) Epic Games"],
    resposta: "c) Riot Games"
  },
  {
    pergunta: "O que significa 'CC' em League of Legends?",
    alternativas: ["a) Crowd Control", "b) Counter-Counter", "c) Core Champion", "d) Critical Chance"],
    resposta: "a) Crowd Control"
  },
  {
    pergunta: "Qual é o nome do torneio que reúne as melhores equipes de cada região em um evento internacional?",
    alternativas: ["a) Mundialito", "b) All-Stars", "c) Rift Rivals", "d) Mid-Season Invitational"],
    resposta: "d) Mid-Season Invitational"
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

