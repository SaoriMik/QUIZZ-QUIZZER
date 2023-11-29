var perguntas = [
     // Nível Fácil
  {
    pergunta: "Qual é o nome do bloco básico usado para construir na superfície?",
    alternativas: ["a) Pedra", "b) Terra", "c) Areia", "d) Grama"],
    resposta: "b) Terra"
  },
  {
    pergunta: "Qual é a principal ameaça durante a primeira noite no Minecraft?",
    alternativas: ["a) Zumbis", "b) Enderman", "c) Esqueletos", "d) Creeper"],
    resposta: "d) Creeper"
  },
  {
    pergunta: "Qual é o objetivo principal do jogo Minecraft?",
    alternativas: ["a) Construir estruturas", "b) Sobreviver", "c) Explorar cavernas", "d) Criar poções"],
    resposta: "b) Sobreviver"
  },
  {
    pergunta: "Qual é o material usado para criar tochas?",
    alternativas: ["a) Pedra", "b) Carvão", "c) Madeira", "d) Ferro"],
    resposta: "b) Carvão"
  },
  {
    pergunta: "Qual é o nome do bloco usado para criar portais para o Nether?",
    alternativas: ["a) Obsidiana", "b) Pedra-sabão", "c) Pedregulho", "d) Areia dos Sombrios"],
    resposta: "a) Obsidiana"
  },

  // Nível Médio
  {
    pergunta: "O que é necessário para criar uma poção no Minecraft?",
    alternativas: ["a) Água", "b) Poções pré-existentes", "c) Cenoura", "d) Vidro"],
    resposta: "b) Poções pré-existentes"
  },
  {
    pergunta: "Qual é a principal utilidade do Ender Chest no jogo?",
    alternativas: ["a) Armazenamento interdimensional", "b) Criar portais", "c) Teletransporte", "d) Criação de golems"],
    resposta: "a) Armazenamento interdimensional"
  },
  {
    pergunta: "Qual é o nome da dimensão alternativa acessada por portais do Nether?",
    alternativas: ["a) Céu", "b) Submundo", "c) Abismo", "d) The End"],
    resposta: "d) The End"
  },
  {
    pergunta: "Como os aldeões podem ser curados após serem infectados por zumbis?",
    alternativas: ["a) Comendo maçãs douradas", "b) Bebendo leite", "c) Lançando poções de cura", "d) Dormindo em camas"],
    resposta: "c) Lançando poções de cura"
  },
  {
    pergunta: "Qual é o nome do bloco usado para criar livros e estantes?",
    alternativas: ["a) Pedra de Redstone", "b) Madeira", "c) Estante", "d) Mesa de Trabalho"],
    resposta: "c) Estante"
  },

  // Nível Difícil
  {
    pergunta: "Qual é a função do Beacon no Minecraft?",
    alternativas: ["a) Produzir luz", "b) Invocar mobs especiais", "c) Oferecer buffs aos jogadores", "d) Teletransportar jogadores"],
    resposta: "c) Oferecer buffs aos jogadores"
  },
  {
    pergunta: "Qual é o nome da dimensão alternativa introduzida na atualização 1.16?",
    alternativas: ["a) Nether", "b) Overworld", "c) The End", "d) O Submundo"],
    resposta: "a) Nether"
  },
  {
    pergunta: "Qual é o material mais resistente no Minecraft para criar ferramentas?",
    alternativas: ["a) Ferro", "b) Ouro", "c) Diamante", "d) Netherite"],
    resposta: "d) Netherite"
  },
  {
    pergunta: "O que é necessário para invocar o Wither no jogo?",
    alternativas: ["a) Cabeças de esqueleto", "b) Ossos", "c) Poções de invisibilidade", "d) Pó de blaze"],
    resposta: "a) Cabeças de esqueleto"
  },
  {
    pergunta: "Qual é o nome do chefe final no jogo, encontrado na dimensão The End?",
    alternativas: ["a) Enderman", "b) Dragão do Ender", "c) Wither", "d) Creeper Rainha"],
    resposta: "b) Dragão do Ender"
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

