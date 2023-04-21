export const UsuarioLogado = JSON.parse(sessionStorage.getItem("user"));

export const footerLinksLct = [
  {
    id: "criar",
    title: "Criar um perfil",
    link: "/cadastro",
  },
  {
    id: "pagamento",
    title: "Adicionar método de pagamento",
    link: "",
  },
  {
    id: "historico",
    title: "Histórico de aluguéis",
    link: "",
  },
];

export const footerLinksLcd = [
  {
    id: "criar",
    title: "Criar um perfil",
    link: "/cadastro",
  },
  {
    id: "produtos",
    title: "Listar seus produtos",
    link: "perfil/itens",
  },
  {
    id: "impulsionar",
    title: "Impulsionar seu produto",
    link: "",
  },
];

export const footerLinksAjuda = [
  {
    id: "faq",
    title: "FAQ",
    link: "",
  },
  {
    id: "contato",
    title: "Contato",
    link: "",
  },
  {
    id: "sobre",
    title: "Sobre nós",
    link: "",
  },
];

export const categorias = [
  {
    id: "vest",
    title: "Vestuário",
    value: "vestuario",
  },
  {
    id: "ferr",
    title: "Ferramentas",
    value: "ferramenta",
  },
  {
    id: "elet",
    title: "Eletrônicos",
    value: "eletronico",
  },
  {
    id: "ente",
    title: "Entretenimento",
    value: "entretenimento",
  },
  {
    id: "uten",
    title: "Utensílios",
    value: "utensilio",
  },
];

export const zonas = [
  {
    id: "norte",
    title: "Zona Norte",
    value: "N",
  },
  {
    id: "sul",
    title: "Zona Sul",
    value: "S",
  },
  {
    id: "leste",
    title: "Zona Leste",
    value: "L",
  },
  {
    id: "oeste",
    title: "Zona Oeste",
    value: "O",
  },
  {
    id: "centro",
    title: "Zona Centro",
    value: "C",
  },
];

export const paginas = [
  {
    title: "Meus Dados",
    link: "/perfil/meus-dados",
    icon:"account"
  },
  {
    title: "Perfil Público",
    // link: `/locador/${UsuarioLogado.id}`,
    link: "/perfil",
    icon:"share-variant"
  },
  {
    title: "Chat",
    link: "/perfil",
    icon:"chat"
  },
  {
    title: "Transações",
    link: "/perfil/transacoes",
    icon:"transfer"
  },
  {
    title: "Meus Itens",
    link: "/perfil/meus-itens",
    icon:"shape"
  },
  {
    title: "Cartões",
    link: "/perfil/cartoes",
    icon:"credit-card"
  },
  {
    title: "Favoritos",
    link: "/perfil/favoritos",
    icon:"heart"
  },
  {
    title: "Sair",
    link: "/",
    icon:"logout"
  },
];
