var perguntas = [
      {
        pergunta: "Quem é o protagonista principal em God of War (2018)?",
        alternativas: ["a) Kratos", "b) Zeus", "c) Ares", "d) Poseidon"],
        resposta: "a) Kratos"
      },
      {
        pergunta: "Qual é o nome do filho de Kratos em God of War?",
        alternativas: ["a) Atreus", "b) Deimos", "c) Hermes", "d) Apollo"],
        resposta: "a) Atreus"
      },
      {
        pergunta: "Quem é o antagonista principal no início de God of War (2018)?",
        alternativas: ["a) Baldur", "b) Odin", "c) Thor", "d) Freya"],
        resposta: "a) Baldur"
      },
      {
        pergunta: "Qual é a arma principal de Kratos em God of War (2018)?",
        alternativas: ["a) Blades of Chaos", "b) Leviathan Axe", "c) Spartan Spear", "d) Blade of Olympus"],
        resposta: "b) Leviathan Axe"
      },
      {
        pergunta: "Em qual mitologia God of War se baseia?",
        alternativas: ["a) Egípcia", "b) Nórdica", "c) Grega", "d) Romana"],
        resposta: "b) Nórdica"
      },

      // Nível Médio
      {
        pergunta: "Qual é o nome da bruxa que ajuda Kratos e Atreus em God of War (2018)?",
        alternativas: ["a) Athena", "b) Circe", "c) Freya", "d) Hecate"],
        resposta: "c) Freya"
      },
      {
        pergunta: "O que Kratos usa para se locomover no mundo em God of War (2018)?",
        alternativas: ["a) Asas de Ícaro", "b) Pégaso", "c) Barco de Caronte", "d) Bifröst"],
        resposta: "c) Barco de Caronte"
      },
      {
        pergunta: "Qual é o nome do irmão mais novo de Baldur?",
        alternativas: ["a) Modi", "b) Magni", "c) Mimir", "d) Brok"],
        resposta: "a) Modi"
      },
      {
        pergunta: "O que acontece com a esposa de Kratos antes do início de God of War (2018)?",
        alternativas: ["a) Ela é morta por Baldur", "b) Ela trai Kratos", "c) Ela se torna uma deusa", "d) Ela desaparece misteriosamente"],
        resposta: "a) Ela é morta por Baldur"
      },
      {
        pergunta: "Qual é o nome da serpente gigante em God of War (2018)?",
        alternativas: ["a) Jormungandr", "b) Níðhöggr", "c) Fenrir", "d) Sleipnir"],
        resposta: "a) Jormungandr"
      },

      // Nível Difícil
      {
        pergunta: "Quem é o pai de todas as criaturas em God of War (2018)?",
        alternativas: ["a) Ymir", "b) Surtr", "c) Loki", "d) Chronos"],
        resposta: "c) Loki"
      },
      {
        pergunta: "Qual é o nome do reino onde a maior parte da jornada de Kratos ocorre?",
        alternativas: ["a) Alfheim", "b) Midgard", "c) Asgard", "d) Helheim"],
        resposta: "b) Midgard"
      },
      {
        pergunta: "Qual é o nome do machado mágico usado por Kratos em God of War (2018)?",
        alternativas: ["a) Gungnir", "b) Mjölnir", "c) Leviathan", "d) Tyrfing"],
        resposta: "c) Leviathan"
      },
      {
        pergunta: "Quem é o criador da Leviathan Axe em God of War (2018)?",
        alternativas: ["a) Brok", "b) Sindri", "c) Hephaestus", "d) Dwarven Smith"],
        resposta: "a) Brok"
      },
      {
        pergunta: "Qual é o título completo do jogo God of War (2018)?",
        alternativas: ["a) God of War: Ascension", "b) God of War: Ragnarok", "c) God of War: Betrayal", "d) God of War: Chains of Olympus"],
        resposta: "b) God of War: Ragnarok"
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

