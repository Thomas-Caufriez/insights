// ICT / SMC curriculum — based on the HugoFX "Formation" (Smart Money Concepts).
// Benjamin Deleuze fundamentals are folded in as supporting context.

export const tradingEntries = [

  // ─── FOREX — les bases ──────────────────────────────────────────────────────
  {
    id: 'marche-forex',
    type: 'concept',
    categoryId: 'forex',
    subcategoryId: null,
    market: 'Forex',
    title: 'Le marché Forex',
    subtitle: 'FOReign EXchange — l\'échange de devises',
    risk: null,
    timeframe: '24h/24 · 5j/7',
    stats: [
      { label: 'Sigle', value: 'FX' },
      { label: 'Type', value: 'OTC' },
      { label: 'Ouverture', value: '24/5' },
      { label: 'Liquidité', value: 'La + élevée' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Le Forex est le marché mondial où les devises s\'échangent entre elles : on vend une monnaie contre une autre à un taux de change qui évolue à chaque seconde. C\'est le marché le plus liquide au monde, ouvert 24h/24 du lundi au vendredi, avec peu de commissions.',
      },
      {
        title: 'Un marché OTC',
        text: 'Le Forex est « Over The Counter » : il y a toujours une contrepartie en face. L\'argent ne se crée pas, il est transféré entre participants — principalement les banques et institutions. Chaque gain vient de la perte de quelqu\'un d\'autre.',
      },
      {
        title: 'Le rôle du dollar',
        text: 'Le dollar pèse plus de 80% des transactions mondiales : c\'est la devise pivot. Quand il se renforce, il impacte la dette, les matières premières et les pays émergents. Les jours fériés US ralentissent tous les marchés, même européens et asiatiques.',
      },
    ],
    notes: 'On ne trade pas contre une personne mais « 1 vs 1 avec soi-même ». Il y aura toujours de l\'argent sur le Forex — la vraie question est la discipline pour aller le chercher.',
  },
  {
    id: 'paires-devises',
    type: 'concept',
    categoryId: 'forex',
    subcategoryId: null,
    market: 'Forex',
    title: 'Les paires de devises',
    subtitle: 'Base / cotation — un rapport de force',
    risk: null,
    timeframe: null,
    stats: [
      { label: 'Format', value: 'XXX/YYY' },
      { label: 'Majeures', value: 'avec USD' },
      { label: 'Mineures', value: 'sans USD' },
      { label: 'Exotiques', value: 'risquées' },
    ],
    sections: [
      {
        title: 'Lire une paire',
        text: 'Une paire s\'écrit XXX/YYY. XXX est la devise de base (de transaction), YYY la devise de cotation (contrepartie). On vend du XXX pour acheter du YYY. Ex : EUR/USD 1.1582 signifie 1 EUR = 1.1582 USD. Si une devise monte, l\'autre baisse en face — c\'est un rapport de force entre deux économies.',
      },
      {
        title: 'Les trois familles',
        text: 'Majeures : contiennent toutes du dollar (EUR/USD, GBP/USD, USD/CHF, USD/JPY) — les plus liquides, à privilégier. Mineures : grandes monnaies sans dollar (EUR/GBP, GBP/JPY…). Exotiques : petites devises (USD/ZAR, USD/THB…) — plus dangereuses.',
      },
      {
        title: 'Se spécialiser',
        text: 'Chaque paire a son propre comportement. Mieux vaut se concentrer sur quelques paires pour ne pas passer des heures à tout analyser chaque jour. En ICT/SMC, on surveille aussi le DXY (indice dollar) pour lire la force du dollar seul.',
      },
    ],
    notes: 'Commence par EUR/USD et GBP/USD : très liquides, spreads faibles, et fortement corrélées au DXY — parfait pour appliquer la structure et la liquidité.',
  },
  {
    id: 'pips-lots',
    type: 'concept',
    categoryId: 'forex',
    subcategoryId: null,
    market: 'Forex',
    title: 'Pips & Lots',
    subtitle: 'Mesurer le mouvement et la taille',
    risk: null,
    timeframe: null,
    stats: [
      { label: 'Pip (EUR/USD)', value: '0.0001' },
      { label: 'Position', value: 'Lot' },
      { label: 'Long', value: 'Buy' },
      { label: 'Short', value: 'Sell' },
    ],
    sections: [
      {
        title: 'Le pip',
        text: 'Le pip est l\'unité de mesure du mouvement d\'un prix sur le Forex. Sur EUR/USD, 1 pip = 0.0001, soit le 4ème chiffre après la virgule. C\'est avec les pips qu\'on mesure la distance entre l\'entrée, le stop loss et le take profit.',
      },
      {
        title: 'Le lot',
        text: 'Le lot est la taille de position : combien j\'achète ou je vends. Associé au nombre de pips risqués, il détermine la somme réellement mise en jeu. C\'est le levier principal de la gestion du risque (voir la calculatrice du dashboard).',
      },
      {
        title: 'Le vocabulaire',
        text: 'Bullish = haussier, Bearish = baissier. Long = buy (acheter), Short = sell (vendre). Stop loss (SL) = point de sortie en perte pour éviter de perdre de trop. Take profit (TP) = objectif de gain qui ferme le trade automatiquement.',
      },
    ],
    notes: 'Toujours définir SL et TP dès la prise de position. Le lot se calcule à partir du risque voulu (ex : 1% du capital) et de la distance en pips jusqu\'au stop — jamais « au feeling ».',
  },
  {
    id: 'bougies',
    type: 'concept',
    categoryId: 'forex',
    subcategoryId: null,
    market: 'Forex',
    title: 'Les bougies japonaises',
    subtitle: 'Lire une unité de temps',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'candle-anatomy',
    stats: [
      { label: '1 bougie', value: '1 unité de temps' },
      { label: 'Corps', value: 'Ouv. → clôture' },
      { label: 'Mèches', value: 'Max / min' },
      { label: 'Doji', value: 'Indécision' },
    ],
    sections: [
      {
        title: 'Anatomie',
        text: 'Une bougie représente une temporalité : en 1h, une bougie = 1h. Elle est composée d\'un corps et de deux mèches. Les mèches marquent le prix maximum et minimum atteints dans l\'intervalle ; le corps relie l\'ouverture et la clôture.',
      },
      {
        title: 'Haussière ou baissière',
        text: 'Bougie haussière (verte) : ouvre en bas, ferme en haut — clôture plus haut que la précédente. Bougie baissière (rouge) : ouvre en haut, ferme en bas. Les bougies se suivent au niveau de leur ouverture/fermeture, sauf en cas de gap.',
      },
      {
        title: 'Signaux de force',
        text: 'Une petite bougie à grande mèche indique un rejet, un faux mouvement. Un gros corps à petite mèche montre une force nette. Le doji (corps quasi nul, grandes mèches) traduit une indécision totale entre acheteurs et vendeurs — souvent une pause ou un retournement.',
      },
    ],
    notes: 'En ICT/SMC, la couleur compte moins que la structure : ce sont les mèches (liquidité prise) et les gros corps (displacement) qui racontent qui contrôle réellement le marché.',
  },

  // ─── STRUCTURE DE MARCHÉ ─────────────────────────────────────────────────────
  {
    id: 'swing-points',
    type: 'concept',
    categoryId: 'structure',
    subcategoryId: null,
    market: 'Structure',
    title: 'Swing Points',
    subtitle: 'Les extrémités du marché',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'swing-points',
    stats: [
      { label: 'Motif', value: '3 bougies' },
      { label: 'Swing high', value: 'Sommet' },
      { label: 'Swing low', value: 'Creux' },
      { label: 'Rôle', value: 'Liquidité' },
    ],
    sections: [
      {
        title: 'Définition',
        text: 'Un swing point est un motif de 3 bougies formant un « chapeau » (swing high) ou un « U » (swing low), mèches comprises. Un swing high est un sommet local ; un swing low, un creux local avant que le prix ne retrace.',
      },
      {
        title: 'Pourquoi c\'est central',
        text: 'Les swings représentent les extrémités du marché. Ce sont précisément ces extrémités qui concentrent énormément de liquidité pour les banques et institutions : au-dessus d\'un swing high se logent les stops des vendeurs, sous un swing low ceux des acheteurs.',
      },
    ],
    notes: 'Les swing points sont la brique de base de tout le reste : structure (HH/HL), liquidité (BSL/SSL) et le placement du Fibonacci pour le premium/discount partent tous de swings.',
  },
  {
    id: 'structure-marche',
    type: 'concept',
    categoryId: 'structure',
    subcategoryId: null,
    market: 'Structure',
    title: 'Structure de marché',
    subtitle: '3 tendances — la théorie de Dow',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'market-structure',
    stats: [
      { label: 'Haussier', value: 'HH + HL' },
      { label: 'Baissier', value: 'LH + LL' },
      { label: 'Range', value: 'Sans tendance' },
      { label: 'Cycle', value: 'Cons→Exp→Retr' },
    ],
    sections: [
      {
        title: 'Les trois tendances',
        text: 'Haussier : le marché monte — des swing highs de plus en plus hauts (higher highs) et des swing lows de plus en plus hauts (higher lows). Baissier : l\'inverse (lower highs, lower lows). Consolidation / range : pas de tendance, les institutions placent leur capital — c\'est peu intéressant à trader car incertain.',
      },
      {
        title: 'Le cycle du marché',
        text: 'En général : consolidation, puis expansion (forte hausse ou baisse qui installe la tendance), puis retracement (correction qui « casse » l\'expansion sans forcément l\'inverser). Un retracement peut déboucher sur une nouvelle expansion.',
      },
      {
        title: 'Trader avec le marché',
        text: 'Identifier la phase permet de choisir une stratégie adaptée : on trade avec l\'élan, jamais contre lui. Plus une phase se reproduit, plus elle est puissante. Ne jamais anticiper : anticiper, c\'est parier — on attend la confirmation du mouvement.',
      },
    ],
    notes: 'La structure se lit en multi-timeframe : le daily donne le biais, le H4 doit être aligné, puis on affine en H1. Ne jamais trader un H1 haussier si le daily est clairement baissier.',
  },
  {
    id: 'bos',
    type: 'concept',
    categoryId: 'structure',
    subcategoryId: null,
    market: 'Structure',
    title: 'BOS — Break of Structure',
    subtitle: 'Confirmation de continuation',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'bos',
    stats: [
      { label: 'Signale', value: 'Continuation' },
      { label: 'Validé par', value: 'Le corps' },
      { label: 'Sens', value: 'De la tendance' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Le BOS confirme la continuation de la tendance. Il se voit quand une bougie clôture avec son corps au-delà du dernier higher high (marché haussier) ou lower low (marché baissier). C\'est la preuve que la tendance en cours garde le contrôle.',
      },
      {
        title: 'Corps vs mèche',
        text: 'Le corps doit casser le niveau, pas seulement la mèche. Si la mèche dépasse mais que le corps ne clôture pas au-delà, ce n\'est pas un BOS : c\'est une prise de liquidité, souvent un signe de retournement potentiel (attention aux liquidités externes).',
      },
    ],
    notes: 'Un BOS te dit « la tendance continue » — c\'est le feu vert pour chercher une entrée dans le sens du mouvement, sur un PD Array en discount (achat) ou premium (vente).',
  },
  {
    id: 'mss',
    type: 'concept',
    categoryId: 'structure',
    subcategoryId: null,
    market: 'Structure',
    title: 'MSS — Market Structure Shift',
    subtitle: 'Le retournement de tendance',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'mss',
    stats: [
      { label: 'Signale', value: 'Retournement' },
      { label: 'Haussier→bas', value: 'Bas + haut + bas' },
      { label: 'Confirme', value: 'Un changement' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Le MSS marque l\'inversion de la tendance. Dans un marché haussier qui se retourne, on voit un bas plus bas que le précédent et un haut plus bas que le précédent (et inversement en baissier). C\'est la cassure de la logique HH/HL qui portait la tendance.',
      },
      {
        title: 'BOS ou MSS ?',
        text: 'BOS = continuation (on casse dans le sens de la tendance). MSS = retournement (on casse dans le sens opposé, contre la structure établie). Un MSS se confirme souvent après une prise de liquidité (turtle soup) sur une extrémité.',
      },
    ],
    notes: 'Le MSS est le déclencheur d\'un nouveau biais directionnel : après un MSS validé, on cherche ses entrées dans le NOUVEAU sens, plus dans l\'ancien.',
  },
  {
    id: 'amd',
    type: 'concept',
    categoryId: 'structure',
    subcategoryId: null,
    market: 'Structure',
    title: 'AMD',
    subtitle: 'Accumulation · Manipulation · Distribution',
    risk: null,
    timeframe: 'Intraday',
    illustration: 'amd',
    stats: [
      { label: 'Phase 1', value: 'Accumulation' },
      { label: 'Phase 2', value: 'Manipulation' },
      { label: 'Phase 3', value: 'Distribution' },
    ],
    sections: [
      {
        title: 'Les 3 étapes des banques',
        text: 'AMD décrit le schéma que suivent les institutions. Accumulation : elles initient leurs positions progressivement (le marché est régi par l\'offre et la demande, il faut une contrepartie à chaque ordre) — c\'est le départ d\'une tendance. Manipulation : une forte bougie sert de leurre, une grosse prise de liquidité avant de partir dans l\'autre sens. Distribution : la vraie phase d\'expansion, dans le sens opposé au pic de manipulation.',
      },
      {
        title: 'Lire le piège',
        text: 'La manipulation existe pour piéger les traders mal placés : elle va chercher les stops d\'un côté avant que le prix ne s\'envole de l\'autre. Reconnaître cette séquence évite d\'entrer au pire moment (juste avant le retournement).',
      },
    ],
    notes: 'AMD se calque souvent sur les sessions : accumulation en Asie, manipulation à Londres, distribution à New York. C\'est la colonne vertébrale de la lecture intraday ICT.',
  },

  // ─── LIQUIDITÉ ───────────────────────────────────────────────────────────────
  {
    id: 'liquidite',
    type: 'concept',
    categoryId: 'liquidite',
    subcategoryId: null,
    market: 'Liquidité',
    title: 'La liquidité',
    subtitle: 'Là où se cache l\'argent',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'liquidity',
    stats: [
      { label: 'BSL', value: 'Sur swing high' },
      { label: 'SSL', value: 'Sous swing low' },
      { label: 'Effet', value: 'Retournement' },
    ],
    sections: [
      {
        title: 'Le carburant du marché',
        text: 'Les mouvements sont créés par les banques et institutions (les « baleines »). La liquidité, ce sont les endroits où l\'argent disponible est le plus concentré — essentiellement les stop loss placés par la foule. Le marché va souvent les chercher pour se retourner ensuite.',
      },
      {
        title: 'Buyside & Sellside',
        text: 'Buyside Liquidity (BSL) : au-dessus d\'un swing high (les stops des vendeurs). Sellside Liquidity (SSL) : sous un swing low (les stops des acheteurs). Atteindre une liquidité mène souvent à un retournement, plus ou moins violent selon son importance.',
      },
      {
        title: 'Interne vs externe',
        text: 'Liquidité interne = à l\'intérieur du range (un FVG, SIBI/BISI). Liquidité externe = les sommets et creux marqués (swing high/low). Le plan type va d\'une liquidité interne (point d\'entrée) vers une liquidité externe (point de sortie) — c\'est l\'IRL → ERL.',
      },
    ],
    notes: 'Reflexe ICT : « où sont les stops ? ». Le marché est attiré par la liquidité comme un aimant. On n\'achète pas un sommet — on attend qu\'il aille prendre la liquidité, puis on entre sur le retournement.',
  },
  {
    id: 'equal-hl',
    type: 'concept',
    categoryId: 'liquidite',
    subcategoryId: null,
    market: 'Liquidité',
    title: 'Equal Highs & Lows',
    subtitle: 'Liquidité empilée',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'equal-hl',
    stats: [
      { label: 'Motif', value: 'Niveaux égaux' },
      { label: 'Force', value: 'Renforcée' },
      { label: 'Cible', value: 'Fréquente' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Quand plusieurs sommets (equal highs) ou creux (equal lows) s\'alignent au même niveau, la liquidité s\'y empile. Le signal est plus fort : il y a d\'autant plus de stops accumulés, donc plus de chances que le marché vienne s\'y recharger.',
      },
      {
        title: 'La trendline aussi',
        text: 'Plusieurs liquidités formant une ligne diagonale créent une trendline liquidity : la diagonale devient elle-même une zone de liquidité importante que le prix peut venir chercher. Beaucoup de traders y placent leurs stops « sous la trendline » — donc les institutions les visent.',
      },
    ],
    notes: 'Des equal highs juste au-dessus du prix sont un aimant : très souvent le marché ira les balayer avant de vraiment repartir. Utile pour choisir un take profit réaliste.',
  },
  {
    id: 'turtle-soup',
    type: 'concept',
    categoryId: 'liquidite',
    subcategoryId: null,
    market: 'Liquidité',
    title: 'Turtle Soup',
    subtitle: 'La prise de liquidité',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'turtle-soup',
    stats: [
      { label: 'Signe', value: 'Grande mèche' },
      { label: 'Casse', value: 'Un extrême' },
      { label: 'Annonce', value: 'Retournement' },
    ],
    sections: [
      {
        title: 'Le faux breakout',
        text: 'Une grande mèche qui vient casser le précédent plus haut (ou plus bas) puis rejette indique une prise de liquidité, donc un retournement potentiel de la tendance — à confirmer tout de même avec un MSS. C\'est le classique « stop hunt ».',
      },
      {
        title: 'Contexte qui renforce',
        text: 'Le signal est plus fort si cette mèche se situe dans une zone où une prise de liquidité a déjà eu lieu, ou sur un niveau clé (previous day/week high, equal highs). Plus il y avait de stops, plus le rejet est significatif.',
      },
    ],
    notes: 'Turtle soup + MSS = combinaison d\'entrée puissante : la mèche prend la liquidité (le piège), le MSS confirme que la direction a changé. Le stop se place juste derrière la mèche.',
  },
  {
    id: 'irl-erl',
    type: 'strategy',
    categoryId: 'liquidite',
    subcategoryId: null,
    market: 'Liquidité',
    title: 'IRL → ERL',
    subtitle: 'Entrée sur zone, sortie sur liquidité',
    risk: null,
    timeframe: 'Intraday',
    illustration: 'irl-erl',
    stats: [
      { label: 'IRL', value: 'Internal (FVG)' },
      { label: 'ERL', value: 'External (liq.)' },
      { label: 'Entrée', value: 'PD Array' },
      { label: 'Sortie', value: 'Liquidité' },
    ],
    sections: [
      {
        title: 'Le flux',
        text: 'IRL to ERL = Internal Range Liquidity to External Range Liquidity. En résumé : le prix part d\'un PD Array interne (comme un FVG) pour aller chercher une liquidité externe. Le PD Array est le point d\'entrée, la liquidité est le point de sortie (take profit).',
      },
      {
        title: 'Toujours sortir sur la liquidité',
        text: 'On quitte le trade aux liquidités car le marché se retourne souvent après les avoir atteintes. Viser un swing high/low marqué ou des equal highs/lows donne un objectif logique plutôt qu\'un TP arbitraire.',
      },
    ],
    notes: 'C\'est le squelette d\'un trade ICT complet : entrer sur l\'interne (FVG/OB en discount ou premium), placer le stop derrière la zone, et viser l\'externe (la liquidité opposée).',
  },

  // ─── ZONES — PD ARRAYS ───────────────────────────────────────────────────────
  {
    id: 'order-block',
    type: 'concept',
    categoryId: 'zones',
    subcategoryId: null,
    market: 'PD Array',
    title: 'Order Block',
    subtitle: 'Là où les institutions chargent',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'order-block',
    stats: [
      { label: 'Sigle', value: 'OB' },
      { label: 'C\'est', value: 'Dernière bougie inverse' },
      { label: 'Rôle', value: 'Support / résist.' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Un Order Block est la zone où les institutions placent massivement leurs ordres avant une impulsion. Concrètement : la ou les dernières bougies dans le sens inverse de l\'expansion (une bougie baissière avant une forte hausse, par ex). On prend le corps de ces bougies (les mèches si elles sont trop petites).',
      },
      {
        title: 'Comment le marché l\'utilise',
        text: 'Après la première impulsion, le prix revient souvent dans l\'OB pour chercher plus de liquidité avant de repartir. L\'OB agit comme support/résistance et comme zone où les institutions aiment revenir. Attention : un support/résistance devient plus fragile à chaque fois qu\'il est touché.',
      },
    ],
    notes: 'C\'est l\'un des deux PD Arrays principaux (avec le FVG). Encore plus puissant quand un OB et un FVG se superposent : on prend alors position sur l\'OB.',
  },
  {
    id: 'fair-value-gap',
    type: 'concept',
    categoryId: 'zones',
    subcategoryId: null,
    market: 'PD Array',
    title: 'Fair Value Gap',
    subtitle: 'L\'imbalance à combler',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'fvg',
    stats: [
      { label: 'Sigle', value: 'FVG' },
      { label: 'Motif', value: '3 bougies' },
      { label: 'Haussier', value: 'BISI' },
      { label: 'Baissier', value: 'SIBI' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Un Fair Value Gap (ou imbalance) est un regroupement de 3 bougies avec un « trou » entre la mèche de la 1ère bougie et la mèche de la 3ème — un mouvement si rapide que le prix a laissé un déséquilibre. La couleur des bougies importe peu. À repérer en H4, à surveiller sur M15 à Weekly.',
      },
      {
        title: 'BISI, SIBI & CE',
        text: 'BISI (Buy-side Imbalance, Sell-side Inefficiency) = FVG haussier ; SIBI = FVG baissier. Le Consequent Encroachment (CE) est le niveau 50% du gap (un Fibonacci tracé dedans) : s\'il est rejeté, forte probabilité d\'une nouvelle impulsion dans le sens de la tendance.',
      },
      {
        title: 'Pourquoi ça marche',
        text: 'L\'IPDA (Interbank Price Delivery Algorithm) cherche à équilibrer le marché et revient donc souvent combler les FVG. Le FVG sert alors de support/résistance et de très bon point d\'entrée — à condition qu\'il soit en discount (achat) ou en premium (vente).',
      },
    ],
    notes: 'Un FVG ne fonctionne en général qu\'une seule fois. S\'il n\'est pas respecté (clôture au-delà), il devient un Inverted FVG — voir le Breaker Block.',
  },
  {
    id: 'breaker-block',
    type: 'concept',
    categoryId: 'zones',
    subcategoryId: null,
    market: 'PD Array',
    title: 'Breaker Block & IFVG',
    subtitle: 'Une zone qui s\'inverse',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'breaker-block',
    stats: [
      { label: 'BB', value: 'OB cassé' },
      { label: 'IFVG', value: 'FVG cassé' },
      { label: 'Devient', value: 'Support/résist. inversé' },
    ],
    sections: [
      {
        title: 'Breaker Block',
        text: 'Un Breaker Block est un Order Block qui n\'a pas été respecté : une bougie clôture avec son corps au-delà. Il se transforme alors en résistance (s\'il était support) ou en support (s\'il était résistance). Un BB induit obligatoirement un MSS — c\'est considéré comme la zone la plus puissante.',
      },
      {
        title: 'Inverted Fair Value Gap',
        text: 'Même logique pour le FVG : un IFVG est un Fair Value Gap non respecté (clôture du corps au-delà) qui s\'inverse en support/résistance. Ces zones « flippées » sont précieuses car elles marquent un vrai changement de contrôle.',
      },
    ],
    notes: 'Quand une zone censée tenir cède franchement (corps au-delà), ne la « défends » pas : elle vient de changer de camp. Le Breaker/IFVG te donne le nouveau niveau à trader.',
  },
  {
    id: 'premium-discount',
    type: 'concept',
    categoryId: 'zones',
    subcategoryId: null,
    market: 'PD Array',
    title: 'Premium & Discount',
    subtitle: 'Acheter bas, vendre haut',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'premium-discount',
    stats: [
      { label: 'Outil', value: 'Fibonacci' },
      { label: 'Séparation', value: '50%' },
      { label: 'Premium', value: '0–50%' },
      { label: 'Discount', value: '50–100%' },
    ],
    sections: [
      {
        title: 'Le principe',
        text: 'On trace un retracement de Fibonacci sur un mouvement passé récent (entre deux swing points), avec une séparation à 50%. Le premium se situe entre 0% et 50%, le discount entre 50% et 100% (l\'inverse à la vente). Le 50% est le prix « équilibre ».',
      },
      {
        title: 'Pourquoi ça marche',
        text: 'Le but : acheter en discount et vendre en premium. Le prix a plus de chances de revenir en discount avant de remonter, car ce sont les banques qui initient ces mouvements et achètent bas. Un PD Array (OB, FVG) ne se trade que du bon côté : en discount pour un achat, en premium pour une vente.',
      },
    ],
    notes: 'Filtre simple mais redoutable : un joli FVG en premium alors qu\'on cherche un achat ne vaut rien. La zone doit être du bon côté du 50%.',
  },
  {
    id: 'ote',
    type: 'strategy',
    categoryId: 'zones',
    subcategoryId: null,
    market: 'PD Array',
    title: 'OTE',
    subtitle: 'Optimal Trade Entry',
    risk: null,
    timeframe: 'Tous horizons',
    illustration: 'ote',
    stats: [
      { label: 'Zone', value: '0.62 – 0.79' },
      { label: 'Niveaux', value: '61.8 / 70.5 / 79' },
      { label: 'But', value: 'Entrée précise' },
    ],
    sections: [
      {
        title: 'Affiner le discount',
        text: 'Le premium/discount est simple mais un peu imprécis. En ajoutant les niveaux 61.8%, 70.5% et 79% du Fibonacci, on obtient plusieurs zones au-delà du 50%. C\'est l\'Optimal Trade Entry.',
      },
      {
        title: 'La zone optimale',
        text: 'Le but est d\'entrer entre 61.8% et 79% du retracement : cette zone a mathématiquement le plus de chances de faire repartir le marché vers le premium (à l\'achat). C\'est un point d\'entrée plus profond, donc un meilleur ratio risk/reward.',
      },
    ],
    notes: 'L\'OTE est encore plus fort quand il se superpose à un PD Array (OB/FVG) : entrée profonde + zone institutionnelle + discount = le trio ICT recherché.',
  },

  // ─── EXÉCUTION & TIMING ──────────────────────────────────────────────────────
  {
    id: 'kill-zones',
    type: 'concept',
    categoryId: 'execution',
    subcategoryId: null,
    market: 'Exécution',
    title: 'Kill Zones',
    subtitle: 'Quand la smart money est active',
    risk: null,
    timeframe: 'Intraday',
    illustration: 'kill-zones',
    stats: [
      { label: 'Asie', value: '2h – 6h' },
      { label: 'Londres', value: '8h – 11h' },
      { label: 'New York', value: '13h – 16h' },
      { label: 'Trader', value: 'Londres + NY' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Les kill zones sont les laps de temps où le marché est bien mieux à trader — le moment où la smart money est active, selon les ouvertures des banques (heures françaises). Elles ne concernent que le trading intraday (inutile en swing).',
      },
      {
        title: 'Les trois sessions',
        text: 'Asie (2h–6h) : souvent une phase d\'accumulation, en range — à ne pas trader. Londres (8h–11h) : souvent la manipulation. New York (13h–16h) : souvent la distribution. On trade uniquement Londres et New York, les seuls moments où la smart money est réellement présente.',
      },
    ],
    notes: 'Concrètement : il faut pouvoir travailler entre 8h et 16h. En dehors des kill zones de Londres/NY, les PD Arrays sont moins fiables et les faux mouvements plus fréquents.',
  },
  {
    id: 'styles-trading',
    type: 'concept',
    categoryId: 'execution',
    subcategoryId: null,
    market: 'Exécution',
    title: 'Styles de trading',
    subtitle: 'Swing · Day · Scalping',
    risk: null,
    timeframe: 'Selon profil',
    stats: [
      { label: 'Swing', value: 'D / H4' },
      { label: 'Day', value: 'H1 / M15' },
      { label: 'Scalping', value: 'M5 / M1' },
      { label: 'Choix', value: 'Ton profil' },
    ],
    sections: [
      {
        title: 'Les trois styles',
        text: 'Swing trading : positions en semaine, daily, H4 — très lent. Day trading : H1, 30 min, 15 min — souvent le plus rentable car le trade s\'ouvre et se ferme dans la journée. Scalping : 5 min, 1 min — très rapide et énergivore.',
      },
      {
        title: 'Trouver le sien',
        text: 'Il n\'existe pas une seule bonne méthode : le style dépend du temps disponible, de la psychologie et de l\'objectif. Conseil : tester les trois pour voir celui qu\'on préfère et qui colle à ses disponibilités. Dispo le soir → session US ; 30 min le matin → swing semi-automatisé.',
      },
      {
        title: 'Timeframe & puissance',
        text: 'Plus l\'unité de temps est élevée, plus un PD Array est puissant, car il a mis plus de temps à se créer. Un OB en H4 vaut bien plus qu\'un OB en M1.',
      },
    ],
    notes: 'Le meilleur style est celui adapté à ton rythme de vie et à ta capacité émotionnelle. Une stratégie gagnante est inutile si ton quotidien ne te permet pas de la respecter.',
  },
  {
    id: 'plan-trading',
    type: 'strategy',
    categoryId: 'execution',
    subcategoryId: null,
    market: 'Exécution',
    title: 'Plan de trading',
    subtitle: 'Le déroulé étape par étape',
    risk: null,
    timeframe: 'Chaque trade',
    stats: [
      { label: 'Étape 1', value: 'Structure' },
      { label: 'Étape 2', value: 'Premium/Disc.' },
      { label: 'Étape 3', value: 'IRL → ERL' },
      { label: 'Ordres', value: 'Marché / limit' },
    ],
    sections: [
      {
        title: 'La checklist',
        text: 'Un plan à suivre pas à pas, pour ne pas trader dans l\'émotionnel. 1) Structure de marché : tendance et PD Arrays. 2) Premium / discount, idéalement en OTE. 3) IRL → ERL : entrer sur un FVG/OB, viser la liquidité. Le stop se place juste derrière le PD Array sur lequel on entre.',
      },
      {
        title: 'Multi-timeframe',
        text: 'Setup d\'achat type : regarder la tendance en daily et ses confirmations structurelles (OB, BISI/SIBI). Vérifier que le H4 est aligné avec le daily. Si les confirmations tiennent, descendre en H1 pour affiner l\'entrée.',
      },
      {
        title: 'Les ordres',
        text: 'Ordre au marché : j\'achète/vends tout de suite au prix actuel. Ordre limit (buy/sell limit) : ordre à retardement qui s\'active quand le prix atteint une zone précise — idéal pour attendre le retour dans un PD Array sans rester devant l\'écran.',
      },
    ],
    notes: 'Combo de zones : si un OB et un FVG se touchent, on prend position sur l\'OB. S\'ils sont proches sans se toucher, on prend le premier array situé dans la zone discount.',
  },

  // ─── RISQUE & MENTAL ─────────────────────────────────────────────────────────
  {
    id: 'gestion-risque',
    type: 'concept',
    categoryId: 'risque',
    subcategoryId: null,
    market: 'Risque',
    title: 'Gestion du risque',
    subtitle: 'Protéger le capital avant tout',
    risk: null,
    timeframe: 'Chaque trade',
    stats: [
      { label: 'Base', value: '1% / trade' },
      { label: '-2% capital', value: 'Risque ÷ 2' },
      { label: '+2% capital', value: 'Risque ↑' },
      { label: 'Break even', value: '> 1 RR' },
    ],
    sections: [
      {
        title: 'La règle de base',
        text: 'L\'art de protéger son capital : sans gestion du risque, même la meilleure stratégie finit par échouer. La base est de risquer 1% de son capital par trade — un petit pourcentage fixe qui permet de tenir dans le temps, même avec une série de pertes.',
      },
      {
        title: 'Ajuster le pourcentage',
        text: 'Le risque peut évoluer. Tous les 2% perdus sous les 100% du capital, on divise son risque par deux : 1% → 2 pertes → 0.5% → 4 pertes → 0.25%. Tous les 2% gagnés au-dessus des 100%, on augmente un peu : 1% → 2 gains → 1.5% → 4 gains → 2%. On lisse ainsi les mauvaises séries.',
      },
      {
        title: 'Break Even',
        text: 'Si le trade dépasse 1 de RR, on peut ramener le stop loss au prix d\'entrée : le trade devient « gratuit », sans risque de perte. Une façon simple de sécuriser une position qui a déjà fait ses preuves.',
      },
    ],
    notes: 'Le risque par position doit rester constant et défini à l\'avance, peu importe la confiance ou l\'euphorie. Augmenter son risque parce qu\'un trade « paraît parfait », c\'est parier — le piège du casino qui détruit la constance.',
  },
  {
    id: 'risk-reward',
    type: 'concept',
    categoryId: 'risque',
    subcategoryId: null,
    market: 'Risque',
    title: 'Risk / Reward',
    subtitle: 'Le ratio qui rend rentable',
    risk: null,
    timeframe: 'Chaque trade',
    illustration: 'risk-reward',
    stats: [
      { label: 'Ratio', value: 'Perte : gain' },
      { label: 'Exemple', value: '1 : 2' },
      { label: 'Effet', value: 'Rentable < 50%' },
    ],
    sections: [
      {
        title: 'Ce que c\'est',
        text: 'Le risk/reward est le ratio entre la perte potentielle (stop loss) et la récompense visée (take profit). Exemple 1:2 — si je mise 100€, je peux perdre 100€ (SL) et gagner 200€ (TP). Plus le ratio est élevé, plus le trade est dur à remplir, mais moins il faut de trades gagnants pour être rentable.',
      },
      {
        title: 'Pourquoi c\'est clé',
        text: 'Avec un bon RR, on peut être rentable avec moins de 50% de réussite. « J\'ai perdu 4 trades et gagné 2, je suis nul » est faux : avec un RR suffisant, les 2 gains compensent les 4 pertes et dégagent du profit. C\'est la vraie mécanique de la rentabilité.',
      },
    ],
    notes: 'En ICT, le RR découle naturellement de la structure : entrée sur un PD Array profond (OTE), stop serré derrière la zone, TP sur la liquidité opposée. La méthode crée le ratio, pas l\'inverse.',
  },
  {
    id: 'psychologie',
    type: 'concept',
    categoryId: 'risque',
    subcategoryId: null,
    market: 'Psychologie',
    title: 'Psychologie & EDGE',
    subtitle: 'Trading = probabilités',
    risk: null,
    timeframe: null,
    stats: [
      { label: 'Nature', value: 'Probabiliste' },
      { label: 'Mesure', value: 'Sur 20–100 trades' },
      { label: 'Clé', value: 'L\'EDGE' },
    ],
    sections: [
      {
        title: 'Un jeu de probabilités',
        text: 'Impossible de prédire le marché à 100%, même avec le meilleur setup : le résultat d\'un trade est incertain. On raisonne en séries — évaluer sa performance sur 20, 50, 100 trades, pas sur un seul. La chance existe à court terme (3-4 gains d\'affilée ne prouvent rien).',
      },
      {
        title: 'L\'EDGE',
        text: 'L\'EDGE est l\'avantage statistique qui fait la différence entre un trader rentable et un trader perdant. Une stratégie solide repose sur un edge clairement défini et mesurable, qui donne un avantage reproductible dans le temps. On ne contrôle pas le résultat d\'un trade, mais on contrôle le processus, le risque et la discipline.',
      },
      {
        title: 'Gérer ses émotions',
        text: 'Difficile de gérer ses émotions : ne jamais trader sous émotion forte, au risque de faire des bêtises. Rester discipliné même après 10 trades perdus. Accepter l\'incertitude et rester rationnel — c\'est ce qui sépare l\'amateur du trader structuré.',
      },
    ],
    notes: 'Un bon trade = un trade qui respecte le plan, même s\'il perd. Un trade gagnant pris hors plan reste un mauvais trade. La constance d\'exécution prime sur le résultat d\'une position isolée.',
  },
]

export const tradingCategories = [
  {
    id: 'forex',
    label: 'Forex',
    fullLabel: 'Les bases du Forex',
    color: '#00d4aa',
    entryIds: ['marche-forex', 'paires-devises', 'pips-lots', 'bougies'],
    subcategories: [],
  },
  {
    id: 'structure',
    label: 'Structure',
    fullLabel: 'Structure de marché',
    color: '#c44fff',
    entryIds: ['swing-points', 'structure-marche', 'bos', 'mss', 'amd'],
    subcategories: [],
  },
  {
    id: 'liquidite',
    label: 'Liquidité',
    fullLabel: 'La liquidité',
    color: '#ff2d78',
    entryIds: ['liquidite', 'equal-hl', 'turtle-soup', 'irl-erl'],
    subcategories: [],
  },
  {
    id: 'zones',
    label: 'Zones',
    fullLabel: 'Zones institutionnelles (PD Arrays)',
    color: '#00f5ff',
    entryIds: ['order-block', 'fair-value-gap', 'breaker-block', 'premium-discount', 'ote'],
    subcategories: [],
  },
  {
    id: 'execution',
    label: 'Exécution',
    fullLabel: 'Exécution & timing',
    color: '#00ff88',
    entryIds: ['kill-zones', 'styles-trading', 'plan-trading'],
    subcategories: [],
  },
  {
    id: 'risque',
    label: 'Risque',
    fullLabel: 'Gestion & psychologie',
    color: '#f4c542',
    entryIds: ['gestion-risque', 'risk-reward', 'psychologie'],
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
