import Event from "../event/model/event";
import Id from "../shared/Id";

const eventos: Event[] = [
  {
    id: Id.novo(),
    alias: "evento-fullstack",
    password: "senha123",
    name: "Evento de Desenvolvimento Fullstack",
    date: new Date("2024-12-01T10:00:00Z"),
    location: "São Paulo, SP",
    description:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imageBG:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    public: 200,
    guest: [
      {
        id: Id.novo(),
        name: "Alice Silva",
        email: "alice@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 1,
      },
      {
        id: Id.novo(),
        name: "Carlos Pereira",
        email: "carlos@example.com",
        confirmed: false,
        hasCompanion: false,
        companionNumber: 0,
      },
      {
        id: Id.novo(),
        name: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 2,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "evento-js-avancado",
    password: "js2024",
    name: "Workshop Avançado de JavaScript",
    date: new Date("2024-11-20T15:00:00Z"),
    location: "Rio de Janeiro, RJ",
    description: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBG:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    public: 100,
    guest: [
      {
        id: Id.novo(),
        name: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmed: true,
        hasCompanion: false,
        companionNumber: 0,
      },
      {
        id: Id.novo(),
        name: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 1,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "evento-dev-frontend",
    password: "front123",
    name: "Bootcamp de Desenvolvimento Frontend",
    date: new Date("2024-11-15T09:00:00Z"),
    location: "Belo Horizonte, MG",
    description: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBG:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    public: 150,
    guest: [
      {
        id: Id.novo(),
        name: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 1,
      },
      {
        id: Id.novo(),
        name: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmed: false,
        hasCompanion: false,
        companionNumber: 0,
      },
      {
        id: Id.novo(),
        name: "Isabela Martins",
        email: "isabela@example.com",
        confirmed: true,
        hasCompanion: false,
        companionNumber: 0,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "casamento-alberto-marina",
    password: "casamento2024",
    name: "Casamento do Alberto e Marina",
    date: new Date("2024-11-25T16:00:00Z"),
    location: "Florianópolis, SC",
    description:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBG:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    public: 150,
    guest: [
      {
        id: Id.novo(),
        name: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 1,
      },
      {
        id: Id.novo(),
        name: "Carla Mendes",
        email: "carla@example.com",
        confirmed: true,
        hasCompanion: false,
        companionNumber: 0,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "aniversario-joao",
    password: "joao2024",
    name: "Aniversário do João - 30 Anos",
    date: new Date("2024-12-05T18:00:00Z"),
    location: "Curitiba, PR",
    description:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBG:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    public: 80,
    guest: [
      {
        id: Id.novo(),
        name: "Maria Souza",
        email: "maria@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 2,
      },
      {
        id: Id.novo(),
        name: "José Almeida",
        email: "jose@example.com",
        confirmed: false,
        hasCompanion: false,
        companionNumber: 0,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "inauguracao-loja-estrela",
    password: "estrela2024",
    name: "Inauguração da Loja Estrela",
    date: new Date("2024-12-10T09:00:00Z"),
    location: "Porto Alegre, RS",
    description:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    public: 300,
    guest: [
      {
        id: Id.novo(),
        name: "Cláudia Lima",
        email: "claudia@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 3,
      },
      {
        id: Id.novo(),
        name: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmed: true,
        hasCompanion: false,
        companionNumber: 0,
      },
    ],
  },
  {
    id: Id.novo(),
    alias: "reuniao-familia-oliveira",
    password: "familia2024",
    name: "Reunião da Família Oliveira",
    date: new Date("2024-12-15T12:00:00Z"),
    location: "Salvador, BA",
    description: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBG:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    public: 50,
    guest: [
      {
        id: Id.novo(),
        name: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmed: true,
        hasCompanion: true,
        companionNumber: 4,
      },
      {
        id: Id.novo(),
        name: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmed: true,
        hasCompanion: false,
        companionNumber: 0,
      },
    ],
  },
];

export default eventos;
