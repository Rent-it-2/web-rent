export const UsuarioLogado = JSON.parse(sessionStorage.getItem("user"));
export const itemList = JSON.parse(sessionStorage.getItem("userItems"));
export const itemFavoritos = JSON.parse(sessionStorage.getItem("favoritos"));
export const cartoes = JSON.parse(sessionStorage.getItem("userCartoes"));
export const endereco = JSON.parse(sessionStorage.getItem("endereco"));
export const foto = sessionStorage.getItem("userFoto");
export const itensHome = JSON.parse(sessionStorage.getItem("itensHome"));
export const Transacao = JSON.parse(sessionStorage.getItem("transacao"));

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
    link: "perfil/itens",
  },
];

export const footerLinksAjuda = [
  {
    id: "faq",
    title: "FAQ",
    link: "https://wa.me/5511976408492?text=Ol%C3%A1%21+Preciso+de+ajuda%21",
  },
  {
    id: "contato",
    title: "Contato",
    link: "https://wa.me/5511976408492?text=Ol%C3%A1%21+Preciso+de+ajuda%21",
  },
  {
    id: "sobre",
    title: "Sobre nós",
    link: "https://wa.me/5511976408492?text=Ol%C3%A1%21+Preciso+de+ajuda%21",
  },
];

export const categorias = [
  {
    id: "1",
    title: "Vestuário",
    value: 1,  
  },
  {
    id: "2",
    title: "Ferramentas",
    value: 2,
  },
  {
    id: "3",
    title: "Eletrônicos",
    value: 3,
  },
  {
    id: "4",
    title: "Entretenimento",
    value: 4,
  },
  {
    id: "5",
    title: "Utensílios",
    value: 5,
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
  // {
  //   title: "Perfil Público",
  //   link: `/locador/${UsuarioLogado.id}`,
  //   icon:"share-variant"
  // },
  // {
  //   title: "Chat",
  //   link: "/perfil/chat",
  //   icon:"chat"
  // },
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
