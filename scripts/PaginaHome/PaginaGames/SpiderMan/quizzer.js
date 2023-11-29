// Início das perguntas
var perguntas = [
  // Spider-Man (2018)
  {
    pergunta: "Quem é o desenvolvedor principal do jogo 'Spider-Man' (2018)?",
    alternativas: ["a) Naughty Dog", "b) Insomniac Games", "c) Rocksteady Studios", "d) Sucker Punch Productions"],
    resposta: "b) Insomniac Games"
  },
  {
    pergunta: "Qual é a identidade secreta de Peter Parker em 'Spider-Man' (2018)?",
    alternativas: ["a) Miles Morales", "b) Harry Osborn", "c) Norman Osborn", "d) Peter Parker"],
    resposta: "d) Peter Parker"
  },
  {
    pergunta: "Quem é o principal antagonista no jogo 'Spider-Man' (2018)?",
    alternativas: ["a) Kingpin", "b) Doctor Octopus", "c) Green Goblin", "d) Venom"],
    resposta: "b) Doctor Octopus"
  },
  {
    pergunta: "Qual é o nome da organização de crimes que Spider-Man enfrenta no jogo?",
    alternativas: ["a) Sinister Six", "b) The Maggia", "c) Sable International", "d) F.E.A.S.T."],
    resposta: "b) The Maggia"
  },
  {
    pergunta: "Em que cidade o jogo 'Spider-Man' (2018) se passa?",
    alternativas: ["a) Gotham City", "b) Metropolis", "c) New York City", "d) Los Angeles"],
    resposta: "c) New York City"
  },

  // Spider-Man: Miles Morales
  {
    pergunta: "Quem é o protagonista jogável em 'Spider-Man: Miles Morales'?",
    alternativas: ["a) Peter Parker", "b) Gwen Stacy", "c) Miles Morales", "d) Ben Reilly"],
    resposta: "c) Miles Morales"
  },
  {
    pergunta: "Qual é o poder especial de Miles Morales que o diferencia de Peter Parker?",
    alternativas: ["a) Teia biônica", "b) Sentido de aranha aprimorado", "c) Camuflagem bioelétrica", "d) Voo"],
    resposta: "c) Camuflagem bioelétrica"
  },
  {
    pergunta: "Quem é o principal antagonista em 'Spider-Man: Miles Morales'?",
    alternativas: ["a) Rhino", "b) Prowler", "c) Tinkerer", "d) Scorpion"],
    resposta: "c) Tinkerer"
  },
  {
    pergunta: "Qual é o nome da empresa de Roxxon envolvida em atividades suspeitas no jogo?",
    alternativas: ["a) Oscorp", "b) Fisk Industries", "c) Alchemax", "d) Roxxon"],
    resposta: "d) Roxxon"
  },
  {
    pergunta: "O que Miles Morales usa para se locomover pela cidade de Nova York?",
    alternativas: ["a) Teia lançadora", "b) Asa-delta", "c) Skate elétrico", "d) Trenó magnético"],
    resposta: "c) Skate elétrico"
  },

  // Perguntas Gerais
  {
    pergunta: "Qual jogo apresenta a versão mais recente do traje Iron Spider?",
    alternativas: ["a) Spider-Man: Shattered Dimensions", "b) Spider-Man: Edge of Time", "c) Spider-Man (2018)", "d) Spider-Man: Miles Morales"],
    resposta: "d) Spider-Man: Miles Morales"
  },
  {
    pergunta: "Qual desses personagens não faz parte do universo do Homem-Aranha nos jogos?",
    alternativas: ["a) Mary Jane Watson", "b) Yuri Watanabe", "c) Jesse Faden", "d) Miles Morales"],
    resposta: "c) Jesse Faden"
  },
  {
    pergunta: "Qual é o nome do laboratório de pesquisa de Otto Octavius em 'Spider-Man' (2018)?",
    alternativas: ["a) Oscorp Tower", "b) F.E.A.S.T.", "c) Octavius Industries", "d) Horizon Labs"],
    resposta: "c) Octavius Industries"
  },
  {
    pergunta: "Qual é o veículo principal usado por Miles Morales em 'Spider-Man: Miles Morales'?",
    alternativas: ["a) Helicóptero", "b) Táxi", "c) Jetpack", "d) Subway"],
    resposta: "b) Táxi"
  },
  {
    pergunta: "Qual é o apelido dado pelos cidadãos de Nova York a Spider-Man em ambos os jogos?",
    alternativas: ["a) Vigilante", "b) Web-slinger", "c) Wall-crawler", "d) Spider-Man"],
    resposta: "c) Wall-crawler"
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

