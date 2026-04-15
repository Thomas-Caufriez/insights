export const tradingEntries = [
  {
    id: 'bitcoin',
    type: 'asset',
    categoryId: 'bases',
    subcategoryId: null,
    market: 'Crypto',
    title: 'Bitcoin',
    subtitle: 'BTC — La réserve de valeur numérique',
    risk: 'Élevé',
    timeframe: 'Long terme',
    stats: [
      { label: 'Ticker', value: 'BTC' },
      { label: 'Offre max', value: '21 000 000' },
      { label: 'Mécanisme', value: 'Proof of Work' },
      { label: 'Bloc', value: '~10 min' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Bitcoin est le premier actif numérique décentralisé, créé en 2009 par Satoshi Nakamoto. Il fonctionne sur une blockchain publique sans autorité centrale — aucune banque, aucun gouvernement ne peut le bloquer ou l\'émettre à volonté.',
      },
      {
        title: 'Pourquoi c\'est unique',
        text: 'Son offre est plafonnée à 21 millions d\'unités, rendant toute inflation monétaire structurellement impossible. Tous les ~4 ans, le halving réduit de moitié les récompenses des mineurs, créant une pression déflationniste programmée.',
      },
      {
        title: 'Risques à connaître',
        text: 'Volatilité extrême : des corrections de -50% à -80% sont historiquement normales, même en bull market. Risque réglementaire selon les pays. Pas de flux de revenus intrinsèques — la valeur repose entièrement sur l\'adoption et la rareté.',
      },
    ],
    notes: 'Bitcoin se comporte de plus en plus comme de l\'or numérique : réserve de valeur à long terme, pas un outil de transaction quotidien. Les institutionnels (ETF, MicroStrategy) en font désormais un actif de bilan.',
  },
  {
    id: 'spy',
    type: 'asset',
    categoryId: 'bases',
    subcategoryId: null,
    market: 'ETF',
    title: 'SPY',
    subtitle: 'SPDR S&P 500 ETF — L\'indice américain par excellence',
    risk: 'Modéré',
    timeframe: 'Long terme',
    stats: [
      { label: 'Ticker', value: 'SPY' },
      { label: 'Exchange', value: 'NYSE' },
      { label: 'Devise', value: 'USD' },
      { label: 'Indice suivi', value: 'S&P 500' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'SPY (SPDR S&P 500 ETF Trust) est le premier ETF coté aux États-Unis, lancé en 1993 par State Street. Il réplique fidèlement la performance du S&P 500, l\'indice regroupant les 500 plus grandes entreprises américaines cotées en bourse.',
      },
      {
        title: 'Pourquoi c\'est une référence',
        text: 'Le S&P 500 est l\'indice de référence mondial pour mesurer la santé des marchés actions américains. Il concentre des géants comme Apple, Microsoft, Nvidia, Amazon et Google. Historiquement, il délivre un rendement annuel moyen d\'environ 10% sur le long terme.',
      },
      {
        title: 'Risques à connaître',
        text: 'SPY est exposé à 100% aux actions américaines — une correction du marché US impacte directement sa valeur. Pas de diversification géographique. En période de récession ou de krach, des baisses de -30% à -50% sont possibles, même si le marché a toujours fini par se redresser historiquement.',
      },
    ],
    notes: 'SPY est la version la plus liquide et tradée du S&P 500. Pour un investisseur long terme en DCA, VOO (Vanguard) ou IVV (iShares) ont des frais légèrement plus bas. SPY est davantage utilisé par les traders actifs pour sa liquidité extrême.',
  },
  {
    id: 'iwda',
    type: 'asset',
    categoryId: 'bases',
    subcategoryId: null,
    market: 'ETF',
    title: 'IWDA',
    subtitle: 'iShares Core MSCI World — La diversification mondiale',
    risk: 'Modéré',
    timeframe: 'Long terme',
    stats: [
      { label: 'Ticker', value: 'IWDA' },
      { label: 'Exchange', value: 'LSE' },
      { label: 'Devise', value: 'USD' },
      { label: 'Indice suivi', value: 'MSCI World' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'IWDA (iShares Core MSCI World UCITS ETF) réplique l\'indice MSCI World, qui couvre environ 1 500 grandes et moyennes capitalisations dans 23 pays développés. C\'est l\'ETF mondial de référence pour les investisseurs européens souhaitant une exposition globale en un seul produit.',
      },
      {
        title: 'Composition et diversification',
        text: 'Environ 70% du portefeuille est exposé aux États-Unis, le reste réparti entre Europe, Japon, Canada et Australie. Contrairement à SPY, IWDA offre une diversification géographique qui réduit le risque de concentration sur un seul pays. Les secteurs tech, finance et santé dominent.',
      },
      {
        title: 'Risques à connaître',
        text: 'Malgré la diversification, la forte pondération américaine signifie que IWDA suit de près les marchés US. Le risque de change existe si votre devise de référence est l\'euro — une version hedgée existe (IWDH) mais avec des frais plus élevés. Sensible aux cycles économiques mondiaux.',
      },
    ],
    notes: 'IWDA est souvent considéré comme le cœur idéal d\'un portefeuille passif européen. Associé à EMIM (marchés émergents), il forme la combinaison "MSCI All Country World" à moindre coût. Frais de gestion (TER) : 0,20% par an.',
  },
  {
    id: 'support-resistance',
    type: 'concept',
    categoryId: 'analyse',
    subcategoryId: null,
    market: 'Analyse technique',
    title: 'Support & Résistance',
    subtitle: 'Les niveaux de prix clés',
    risk: null,
    timeframe: 'Tous horizons',
    stats: [
      { label: 'Type', value: 'Analyse technique' },
      { label: 'Horizon', value: 'Tous timeframes' },
      { label: 'Fiabilité', value: 'Haute' },
    ],
    sections: [
      {
        title: 'Définition',
        text: 'Un support est un niveau de prix où la demande est historiquement forte — le marché a tendance à rebondir à la hausse. Une résistance est l\'inverse : un niveau où l\'offre domine et où le prix a du mal à passer.',
      },
      {
        title: 'Pourquoi ça fonctionne',
        text: 'Ces niveaux sont des zones de mémoire collective du marché. Les traders se souviennent des prix passés et placent leurs ordres autour de ces zones, créant une réaction auto-réalisatrice. Plus un niveau a été testé souvent, plus il est considéré comme solide.',
      },
      {
        title: 'Retournement de rôle',
        text: 'Quand un support est cassé de manière décisive, il devient résistance — et inversement. C\'est l\'un des principes les plus fiables de l\'analyse technique : l\'ancien plafond devient le nouveau plancher après un breakout confirmé.',
      },
      {
        title: 'Comment les utiliser',
        text: 'Ne jamais entrer en position juste parce que le prix touche un support ou résistance. Attendre une confirmation : bougie de rejet, volume élevé sur le rebond, divergence RSI. Les faux breakouts sont fréquents — le stop doit être placé sous/au-dessus de la zone, pas au niveau exact.',
      },
    ],
    notes: 'Les zones sont plus importantes que les lignes exactes. Un niveau de support à 100 € signifie que le marché réagit entre 98 € et 102 €, pas exactement à 100,00 €. Penser en zones, pas en traits.',
  },
  {
    id: 'rsi',
    type: 'concept',
    categoryId: 'analyse',
    subcategoryId: null,
    market: 'Analyse technique',
    title: 'RSI',
    subtitle: 'Relative Strength Index — L\'oscillateur de momentum',
    risk: null,
    timeframe: 'Tous horizons',
    stats: [
      { label: 'Période défaut', value: '14' },
      { label: 'Plage', value: '0 – 100' },
      { label: 'Surachat', value: '> 70' },
      { label: 'Survente', value: '< 30' },
    ],
    sections: [
      {
        title: 'Comment ça fonctionne',
        text: 'Le RSI mesure la vitesse et l\'amplitude des mouvements de prix. Il compare les gains moyens aux pertes moyennes sur une période donnée (14 jours par défaut). Résultat : un oscillateur entre 0 et 100.',
      },
      {
        title: 'Lecture classique',
        text: 'RSI > 70 : zone de surachat — le prix a monté fort et vite, une correction est possible. RSI < 30 : zone de survente — le prix a chuté fort, un rebond est possible. Attention : un actif peut rester en surachat longtemps dans une tendance forte.',
      },
      {
        title: 'Divergences',
        text: 'L\'usage le plus puissant du RSI est la divergence. Divergence baissière : le prix fait un nouveau plus haut mais le RSI ne confirme pas → signal de retournement. Divergence haussière : le prix fait un nouveau plus bas mais le RSI remonte → le momentum s\'épuise.',
      },
    ],
    notes: 'Ne jamais utiliser le RSI seul. C\'est un outil de confirmation, pas de signal. En tendance forte, les niveaux de surachat/survente ne signifient rien — c\'est pour les marchés en range que le RSI est le plus fiable.',
  },
  {
    id: 'dca',
    type: 'strategy',
    categoryId: 'strategies',
    subcategoryId: null,
    market: 'Stratégie',
    title: 'DCA',
    subtitle: 'Dollar-Cost Averaging — L\'investissement régulier',
    risk: 'Faible',
    timeframe: 'Long terme',
    stats: [
      { label: 'Type', value: 'Accumulation' },
      { label: 'Horizon', value: 'Long terme' },
      { label: 'Actif', value: 'Tout marché' },
      { label: 'Stress', value: 'Faible' },
    ],
    sections: [
      {
        title: 'Le principe',
        text: 'Le DCA consiste à investir une somme fixe à intervalles réguliers (chaque semaine, chaque mois), indépendamment du prix du marché. Au lieu d\'essayer de timer le marché, on lisse son prix d\'entrée dans le temps.',
      },
      {
        title: 'Pourquoi ça marche',
        text: 'Quand le prix baisse, votre somme fixe achète plus d\'unités. Quand il monte, elle en achète moins. Sur le long terme, cela donne un prix moyen d\'achat souvent inférieur au prix moyen du marché — et élimine le risque de tout investir au plus haut.',
      },
      {
        title: 'Limites',
        text: 'Dans un marché fortement haussier, un investissement unique en lump sum surperforme souvent le DCA. Le DCA est surtout utile pour les marchés volatils (crypto notamment) et pour les investisseurs qui n\'ont pas de grosse somme à investir d\'un coup.',
      },
    ],
    notes: 'Le DCA est la stratégie recommandée pour 90% des investisseurs non professionnels. Elle enlève la dimension émotionnelle et réduit drastiquement le risque de mauvais timing. La discipline est la seule vraie difficulté.',
  },
  {
    id: 'fomo',
    type: 'concept',
    categoryId: 'psychologie',
    subcategoryId: null,
    market: 'Psychologie',
    title: 'FOMO',
    subtitle: 'Fear of Missing Out — La peur de rater',
    risk: null,
    timeframe: null,
    stats: [
      { label: 'Type', value: 'Biais cognitif' },
      { label: 'Danger', value: 'Très élevé' },
      { label: 'Contexte', value: 'Bull market' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Le FOMO est l\'impulsion d\'acheter un actif uniquement parce qu\'il monte fort et que tout le monde en parle. On achète non pas parce qu\'on a analysé l\'opportunité, mais parce qu\'on a peur de rater une hausse.',
      },
      {
        title: 'Comment il se manifeste',
        text: 'Acheter après une hausse de +50% en pensant que ça va continuer. Checker les prix toutes les 10 minutes. Modifier son plan de trade en cours de route. Entrer sur des alts inconnues parce qu\'un influenceur en parle. Ce sont les signatures du FOMO.',
      },
      {
        title: 'Comment le contrer',
        text: 'Avoir un plan écrit avant d\'entrer dans un trade : entry price, stop loss, target. Si un actif ne correspond pas à vos critères définis à l\'avance, ne pas entrer. Accepter que certaines opportunités se feront sans vous — c\'est normal et sain.',
      },
    ],
    notes: 'Les pires trades de l\'histoire personnelle de la plupart des traders ont été faits sous FOMO. Le marché ne va nulle part — il y aura toujours d\'autres opportunités. Une trade ratée est infiniment moins grave qu\'une trade perdante prise par peur.',
  },
]

export const tradingCategories = [
  {
    id: 'bases',
    label: 'Fondamentaux',
    fullLabel: 'Fondamentaux',
    color: '#7c85f0',
    entryIds: ['bitcoin', 'spy', 'iwda'],
    subcategories: [],
  },
  {
    id: 'ecosysteme',
    label: 'Écosystème',
    fullLabel: 'Écosystème & Acteurs',
    color: '#00d4aa',
    entryIds: [],
    subcategories: [],
  },
  {
    id: 'transactions',
    label: 'Transactions',
    fullLabel: 'Acheter, vendre & gérer',
    color: '#f7931a',
    entryIds: [],
    subcategories: [],
  },
  {
    id: 'strategies',
    label: 'Stratégies',
    fullLabel: 'Stratégies & Rendement',
    color: '#e5c46b',
    entryIds: ['dca'],
    subcategories: [],
  },
  {
    id: 'securite',
    label: 'Sécurité',
    fullLabel: 'Sécurité & Conservation',
    color: '#ef5350',
    entryIds: [],
    subcategories: [],
  },
  {
    id: 'analyse',
    label: 'Analyse',
    fullLabel: 'Analyse technique',
    color: '#4fc3f7',
    entryIds: ['support-resistance', 'rsi'],
    subcategories: [],
  },
  {
    id: 'psychologie',
    label: 'Psychologie',
    fullLabel: 'Psychologie du trader',
    color: '#ce93d8',
    entryIds: ['fomo'],
    subcategories: [],
  },
]

export function getTradingFilteredEntries(filterId, subcategoryId) {
  if (!filterId) return tradingEntries
  const cat = tradingCategories.find((c) => c.id === filterId)
  if (!cat) return tradingEntries
  const inCat = tradingEntries.filter((e) => cat.entryIds.includes(e.id))
  if (!subcategoryId) return inCat
  return inCat.filter((e) => e.subcategoryId === subcategoryId)
}
