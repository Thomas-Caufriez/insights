export const fromagesEntries = [
  {
    id: 'comte',
    type: 'fromage',
    categoryId: 'presses-cuites',
    famille: 'Pâte pressée cuite',
    lait: 'Vache cru',
    region: 'Franche-Comté',
    aop: true,
    affinage: '4 – 24 mois',
    title: 'Comté',
    subtitle: 'Le roi des fromages de montagne',
    stats: [
      { label: 'Lait', value: 'Vache cru' },
      { label: 'Région', value: 'Franche-Comté' },
      { label: 'Affinage', value: '4 – 24 mois' },
      { label: 'AOP', value: 'Depuis 1958' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'Le Comté est l\'un des plus anciens fromages français, produit dans le massif du Jura depuis le Moyen Âge. Sa fabrication en "fruitières" — coopératives fromagères collectives — remonte au XIIe siècle, permettant de pooler le lait de plusieurs éleveurs pour produire de grandes meules pouvant dépasser 40 kg. Chaque meule nécessite environ 450 litres de lait.',
      },
      {
        title: 'Texture & aspect',
        text: 'La pâte est souple, légèrement élastique, de couleur ivoire à jaune paille selon la saison. Sa croûte est dure, grisée ou dorée selon l\'affinage. On peut observer de petites ouvertures appelées "lainures" ou des trous de la taille d\'un pois — signe d\'une bonne fermentation maîtrisée.',
      },
      {
        title: 'Goût & arômes',
        text: 'Le Comté est l\'un des fromages les plus complexes aromatiquement : plus de 83 arômes ont été identifiés. Il exprime des notes fruitées (abricot, noisette), florales, voire légèrement caramélisées selon l\'affinage. Un Comté jeune (4-8 mois) est doux et lacté ; un Comté vieux (18+ mois) développe des cristaux de tyrosine et une saveur intense et persistante.',
      },
      {
        title: 'Accords mets',
        text: 'Idéal sur un plateau de fromages, en fondue ou en gratin. Se marie parfaitement avec des charcuteries, noix, raisins et pain de campagne. Peut remplacer le Gruyère dans toutes les recettes : quiches, croque-monsieur, gratins. Excellent en copeaux sur une salade de roquette.',
      },
      {
        title: 'Accords boissons',
        text: 'S\'accorde idéalement avec un vin jaune du Jura (Savagnin), un Chardonnay de Bourgogne ou un Riesling d\'Alsace. Pour les amateurs de bière, une ambrée ou une ale aux notes maltées fonctionne très bien. Un verre d\'eau plate laisse s\'exprimer pleinement les arômes lors d\'une dégustation nature.',
      },
    ],
    notes: 'La mention "Comté Extra" (étiquette verte) correspond aux meules les plus qualitatives, ayant obtenu plus de 15 points sur 20 lors de l\'examen. L\'étiquette brune indique un fromage de second choix. Préfère toujours l\'étiquette verte pour la dégustation.',
  },
  {
    id: 'camembert',
    type: 'fromage',
    categoryId: 'molles-fleuries',
    famille: 'Pâte molle à croûte fleurie',
    lait: 'Vache cru',
    region: 'Normandie',
    aop: true,
    affinage: '3 semaines min.',
    title: 'Camembert',
    subtitle: 'L\'icône normande, moelleuse et caractérielle',
    stats: [
      { label: 'Lait', value: 'Vache cru (AOP)' },
      { label: 'Région', value: 'Normandie' },
      { label: 'Affinage', value: '3 semaines min.' },
      { label: 'AOP', value: 'Depuis 1983' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'Marie Harel, originaire du village de Camembert dans l\'Orne, est considérée comme l\'inventrice du fromage en 1791. La légende veut qu\'un prêtre réfractaire normand lui aurait transmis un savoir-faire fromagier en échange de protection pendant la Révolution française. Le Camembert de Normandie (AOP) se distingue fondamentalement du "camembert" industriel pasteurisé vendu en grande surface.',
      },
      {
        title: 'Texture & aspect',
        text: 'La croûte est blanche et duveteuse, parsemée de taches rouge-orangé dues aux levures naturelles. La pâte doit être souple, crémeuse et légèrement coulante à cœur lorsque le fromage est à maturité optimale. Un Camembert trop ferme est insuffisamment affiné ; trop coulant et ammoniacal, il commence à passer.',
      },
      {
        title: 'Goût & arômes',
        text: 'Arômes puissants de champignon, de sous-bois et note lactique crémeuse. Un Camembert bien affiné développe aussi des notes animales légères et une légère amertume en fin de bouche. La croûte elle-même est comestible et apporte une texture contrastée et une note de noisette.',
      },
      {
        title: 'Accords mets',
        text: 'Classiquement servi avec du pain de campagne et des cornichons. Se marie très bien avec des pommes et des noix. Peut être rôti au four entier — entaille la croûte, ajoute un filet de miel et du romarin — pour un apéritif festif. Accompagne les charcuteries normandes et le jambon cru.',
      },
      {
        title: 'Accords boissons',
        text: 'Le mariage classique est avec un cidre brut de Normandie — l\'accord régional par excellence. Un Calvados en toute petite quantité en fin de repas. En vin : un Bourgogne rouge léger (Pinot Noir), un Beaujolais ou un Bordeaux fruité. À éviter : les vins tanniques puissants qui écrasent la finesse du fromage.',
      },
    ],
    notes: 'Attention à la distinction cruciale : le "Camembert de Normandie" (AOP, lait cru moulé à la louche) est fondamentalement différent du "camembert" industriel pasteurisé. Le premier se reconnaît à la mention AOP et à son boîtier en bois. Ne les confonds pas lors de l\'achat.',
  },
  {
    id: 'roquefort',
    type: 'fromage',
    categoryId: 'persillees',
    famille: 'Pâte persillée',
    lait: 'Brebis cru',
    region: 'Aveyron',
    aop: true,
    affinage: '3 mois min.',
    title: 'Roquefort',
    subtitle: 'Le roi des bleus, né dans les caves de Combalou',
    stats: [
      { label: 'Lait', value: 'Brebis cru' },
      { label: 'Région', value: 'Aveyron' },
      { label: 'Affinage', value: '3 mois min.' },
      { label: 'AOP', value: 'Depuis 1925' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'Le Roquefort est l\'un des plus anciens fromages du monde. La légende raconte qu\'un berger, distrait par une belle bergère, aurait oublié son repas dans une grotte du rocher de Combalou. En revenant des semaines plus tard, il aurait trouvé son fromage envahi de moisissures bleues — délicieuses. La première AOP fromagère au monde lui fut accordée en 1925.',
      },
      {
        title: 'Texture & aspect',
        text: 'Pâte ivoire à blanc cassé, parcourue de veines bleu-vert de Penicillium roqueforti — les moisissures nobles qui lui donnent son caractère. La texture est crémeuse et friable à la fois, légèrement humide. Elle s\'émiette facilement mais fond en bouche. Pas de croûte : le fromage est enveloppé dans du papier aluminium pendant l\'affinage.',
      },
      {
        title: 'Goût & arômes',
        text: 'Goût puissant, salé et piquant, avec une belle richesse lactique apportée par le lait de brebis. Les notes de bleu (poivrées, légèrement amères) sont équilibrées par la douceur grasse du lait. Saveur persistante et complexe avec une finale longue. Intense mais jamais agressif sur un exemplaire de qualité.',
      },
      {
        title: 'Accords mets',
        text: 'Excellent émietté sur une salade de roquette avec des poires et des noix. Se marie très bien avec le magret de canard, les endives braisées, le miel. En sauce, il relève parfaitement un steak ou des pâtes. Base incontournable de la sauce roquefort pour les viandes rouges.',
      },
      {
        title: 'Accords boissons',
        text: 'L\'accord le plus célèbre : un Sauternes ou un Monbazillac (vin blanc liquoreux). Le contraste sucré-salé est exceptionnel. Également très bon avec un Porto vintage ou un Banyuls. La bière stout ou porter se marie remarquablement bien avec ses notes terreuses.',
      },
    ],
    notes: 'Sors le Roquefort du frigo au moins 30 minutes avant de le déguster — le froid tue les arômes. Conserve-le dans son papier aluminium d\'origine, dans le bac à légumes. Une fois entamé, consomme-le dans les deux semaines. Petit fun fact : il est interdit dans les transports en commun au Japon à cause de son odeur.',
  },
  {
    id: 'brie-meaux',
    type: 'fromage',
    categoryId: 'molles-fleuries',
    famille: 'Pâte molle à croûte fleurie',
    lait: 'Vache cru',
    region: 'Île-de-France',
    aop: true,
    affinage: '4 – 8 semaines',
    title: 'Brie de Meaux',
    subtitle: 'Le fromage des rois de France',
    stats: [
      { label: 'Lait', value: 'Vache cru' },
      { label: 'Région', value: 'Île-de-France' },
      { label: 'Affinage', value: '4 – 8 semaines' },
      { label: 'AOP', value: 'Depuis 1980' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'Charlemagne l\'apprécia lors d\'un arrêt à l\'abbaye de Reuil-en-Brie en 774 ap. J.-C. Au Congrès de Vienne en 1815, Talleyrand le présenta comme "le roi des fromages et le fromage des rois" lors d\'une dégustation internationale — et remporta largement le titre face aux fromages de toutes les nations européennes présentes.',
      },
      {
        title: 'Texture & aspect',
        text: 'Grande meule plate (36-37 cm de diamètre) à la croûte fleurie blanche parsemée de taches rouge-brun. La pâte est jaune pâle, souple et crémeuse, légèrement coulante quand parfaitement affiné. Le "cœur blanc" légèrement plus ferme au centre est normal en début d\'affinage.',
      },
      {
        title: 'Goût & arômes',
        text: 'Saveur douce, beurrée et légèrement champignon. Moins intense que le Camembert, le Brie de Meaux est plus fin et subtil. Les arômes évoluent avec l\'affinage : lacté et frais en début de vie, puis plus floraux et légèrement terreux. La croûte apporte une note de noisette et une légère amertume bienvenue.',
      },
      {
        title: 'Accords mets',
        text: 'Incontournable sur un plateau de fromages. Se marie avec des fruits secs, du miel de fleurs, des raisins. En cuisine, fond élégamment dans des feuilletés, des sauces délicates ou en garniture de volaille. S\'accommode parfaitement avec un jambon de Paris ou des champignons sautés.',
      },
      {
        title: 'Accords boissons',
        text: 'Accord classique avec un Champagne brut — l\'accord régional par excellence — ou un Chablis. En rouge, un Pinot Noir léger de Bourgogne ou un Sancerre rouge. À éviter les vins trop tanniques ou boisés qui domineraient sa finesse caractéristique.',
      },
    ],
    notes: 'Ne coupe jamais un Brie en coupant la pointe — tu prendrais toute la partie la mieux affinée et tu te ferais remarquer. La bonne façon : coupe parallèlement au bord, pour que chaque part ait un peu de croûte et un peu de cœur.',
  },
  {
    id: 'reblochon',
    type: 'fromage',
    categoryId: 'presses-non-cuites',
    famille: 'Pâte pressée non cuite',
    lait: 'Vache cru',
    region: 'Haute-Savoie',
    aop: true,
    affinage: '5 – 8 semaines',
    title: 'Reblochon',
    subtitle: 'Né de la fraude, devenu le classique savoyard',
    stats: [
      { label: 'Lait', value: 'Vache cru' },
      { label: 'Région', value: 'Haute-Savoie' },
      { label: 'Affinage', value: '5 – 8 semaines' },
      { label: 'AOP', value: 'Depuis 1958' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'Le nom vient de "reblocher" en patois savoyard, signifiant "traire une seconde fois". Au Moyen Âge, les fermiers payaient une redevance calculée sur la quantité de lait produite lors de l\'inspection. Ils ne traïaient pas entièrement leurs vaches devant le collecteur. Dès qu\'il repartait, ils effectuaient une seconde traite, plus riche en matières grasses, pour fabriquer ce fromage en catimini.',
      },
      {
        title: 'Texture & aspect',
        text: 'Petite meule plate (14 cm de diamètre) à croûte orangée légèrement duveteuse. La pâte est souple, onctueuse, fondante, de couleur ivoire à jaune pâle. Une pastille de caséine verte (Reblochon fermier) ou rouge (Reblochon laitier) est apposée sur la croûte.',
      },
      {
        title: 'Goût & arômes',
        text: 'Goût doux, crémeux et légèrement noisette. Arômes d\'herbes alpines et de foin liés à l\'alimentation des vaches de montagne (Abondance, Tarentaise, Montbéliarde). Finale fraîche et légèrement acidulée. Le Reblochon fermier (pastille verte) est généralement plus typé et aromatique.',
      },
      {
        title: 'Accords mets',
        text: 'Ingrédient central de la Tartiflette — LE plat savoyard. Se déguste sur un plateau avec des noix et du miel. Se marie avec les charcuteries de montagne (saucisson, jambon sec). En cuisine, idéal pour garnir des pommes de terre en robe des champs, des tartes salées ou des crêpes savoyardes.',
      },
      {
        title: 'Accords boissons',
        text: 'Accord régional incontournable : un vin blanc de Savoie (Apremont, Roussette de Savoie, Chignin-Bergeron). Un Chardonnay de Bourgogne fonctionne également très bien. En rouge, un Gamay de Savoie ou un Beaujolais léger. La bière blanche est une belle alternative pour un repas tartiflette.',
      },
    ],
    notes: 'Pour une tartiflette réussie, choisis un Reblochon à maturité avancée (croûte bien orangée, pâte bien souple). Coupe-le en deux dans l\'épaisseur et pose chaque moitié, croûte sur le dessus, sur les pommes de terre. La croûte fondra légèrement sans se dissoudre — c\'est exactement ce qu\'on cherche.',
  },
  {
    id: 'epoisses',
    type: 'fromage',
    categoryId: 'molles-lavees',
    famille: 'Pâte molle à croûte lavée',
    lait: 'Vache pasteurisé',
    region: 'Bourgogne',
    aop: true,
    affinage: '5 – 8 semaines',
    title: 'Époisses',
    subtitle: 'Puissant en odeur, délicat en bouche',
    stats: [
      { label: 'Lait', value: 'Vache pasteurisé' },
      { label: 'Région', value: 'Bourgogne' },
      { label: 'Affinage', value: '5 – 8 semaines' },
      { label: 'AOP', value: 'Depuis 1991' },
    ],
    sections: [
      {
        title: 'Histoire',
        text: 'L\'Époisses est né au XVIe siècle dans le village éponyme de Côte-d\'Or, élaboré par des moines cisterciens de l\'abbaye de Cîteaux. Napoléon Bonaparte en était grand amateur. Le fromage disparut presque complètement pendant la Seconde Guerre mondiale, avant d\'être ressuscité dans les années 1950 par la famille Berthaut.',
      },
      {
        title: 'Texture & aspect',
        text: 'Petite meule à croûte orangée-brique, luisante et humide, lavée au Marc de Bourgogne pendant l\'affinage. La pâte est crémeuse, presque coulante à cœur quand le fromage est parfaitement affiné. Conditionné dans une boîte en bois de peuplier pour contenir sa forme.',
      },
      {
        title: 'Goût & arômes',
        text: 'L\'odeur est puissante, animale, corsée — bien plus forte que le goût. En bouche, le contraste est saisissant : la pâte est douce, crémeuse, légèrement salée, avec des notes de beurre et de crème fraîche. Le Marc de Bourgogne apporte une légère chaleur alcoolisée très agréable.',
      },
      {
        title: 'Accords mets',
        text: 'Servi en fin de repas, seul ou avec peu d\'accompagnements pour ne pas masquer sa personnalité. Un peu de pain au levain ou de pain de campagne, éventuellement des noix. En cuisine, dans des sauces très riches pour viandes rouges ou en garniture de pommes de terre au four.',
      },
      {
        title: 'Accords boissons',
        text: 'L\'accord le plus surprenant et réussi : un grand Bourgogne rouge (Gevrey-Chambertin, Chambolle-Musigny) — l\'accord régional magistral. Un Pinot Gris d\'Alsace vendanges tardives est aussi remarquable. En blanc, un Chablis Grand Cru. À éviter les vins légers et fruités qui seraient écrasés.',
      },
    ],
    notes: 'Ne conserve pas l\'Époisses au frigo sans protection — son odeur va imprégner tout le reste, et tu vas te faire des ennemis. Range-le dans sa boîte d\'origine, dans un sac hermétique. Sors-le 30 min avant de le déguster. Et oui, il est officiellement interdit dans les transports en commun au Japon.',
  },
]

export const fromagesCategories = [
  {
    id: 'molles-fleuries',
    label: 'Croûte fleurie',
    fullLabel: 'Pâtes molles à croûte fleurie',
    color: '#e8c87a',
    entryIds: ['camembert', 'brie-meaux'],
  },
  {
    id: 'molles-lavees',
    label: 'Croûte lavée',
    fullLabel: 'Pâtes molles à croûte lavée',
    color: '#e8935a',
    entryIds: ['epoisses'],
  },
  {
    id: 'presses-cuites',
    label: 'Pressées cuites',
    fullLabel: 'Pâtes pressées cuites',
    color: '#d4c44c',
    entryIds: ['comte'],
  },
  {
    id: 'presses-non-cuites',
    label: 'Pressées non cuites',
    fullLabel: 'Pâtes pressées non cuites',
    color: '#c4a44c',
    entryIds: ['reblochon'],
  },
  {
    id: 'persillees',
    label: 'Persillées',
    fullLabel: 'Pâtes persillées — bleus',
    color: '#7ab8d4',
    entryIds: ['roquefort'],
  },
  {
    id: 'chevres',
    label: 'Chèvres',
    fullLabel: 'Fromages de chèvre',
    color: '#a8d48a',
    entryIds: [],
  },
  {
    id: 'frais',
    label: 'Frais',
    fullLabel: 'Fromages frais',
    color: '#d4eaa8',
    entryIds: [],
  },
]

export function getFromagesFilteredEntries(filterId) {
  if (!filterId) return fromagesEntries
  const cat = fromagesCategories.find((c) => c.id === filterId)
  if (!cat) return fromagesEntries
  return fromagesEntries.filter((e) => cat.entryIds.includes(e.id))
}
