export const muscuEntries = [
  {
    id: 'developpe-couche',
    type: 'exercise',
    categoryId: 'poitrine',
    muscleGroup: 'Poitrine',
    titleBase: 'Développé',
    titleItalic: 'couché',
    difficulty: 'Intermédiaire',
    equipment: 'Barre',
    sets: '4 × 8',
    muscles: {
      primary: ['Pectoraux'],
      secondary: ['Triceps', 'Épaules ant.'],
    },
    steps: [
      { text: 'Allonge-toi sur le banc, les yeux sous la barre. Pieds à plat au sol, dos légèrement arqué, omoplates serrées et enfoncées dans le banc.' },
      { text: 'Saisit la barre en prise pronation, mains légèrement plus larges que les épaules. Le poignet doit être parfaitement droit — pas fléchi vers l\'arrière.' },
      { text: 'Décroche la barre et amène-la au-dessus de la poitrine, bras tendus. Inspire profondément et bloque ta respiration (valsalva) avant de descendre.' },
      { text: 'Descends la barre de façon contrôlée jusqu\'à effleurer la poitrine, au niveau des mamelons. Les coudes à environ 45° par rapport au corps — pas à l\'horizontale.' },
      { text: 'Pousse explosément en expirant, en imaginant que tu repousses le banc loin de toi plutôt que de pousser la barre vers le haut. Termine bras tendus sans verrouiller les coudes.' },
      { text: 'Effectue toutes tes répétitions, puis repose la barre dans le rack en t\'aidant d\'un spot si besoin.' },
    ],
    notes: 'Ne rebondis jamais la barre sur la poitrine — la descente doit rester sous contrôle. Si tu sens tes épaules se fermer vers l\'avant, réduis le poids et réapprends le mouvement. Un spot est fortement recommandé sur les séries lourdes.',
  },
]

export const muscuCategories = [
  { id: 'poitrine', label: 'Poitrine', entryIds: ['developpe-couche'] },
  { id: 'dos', label: 'Dos', entryIds: [] },
  { id: 'jambes', label: 'Jambes', entryIds: [] },
  { id: 'epaules', label: 'Épaules', entryIds: [] },
  { id: 'bras', label: 'Bras', entryIds: [] },
  { id: 'gainage', label: 'Gainage', entryIds: [] },
  { id: 'routines', label: 'Routines', entryIds: [] },
]

export function getMuscuFilteredEntries(filterId) {
  if (!filterId) return muscuEntries
  const cat = muscuCategories.find((c) => c.id === filterId)
  if (!cat) return muscuEntries
  return muscuEntries.filter((e) => cat.entryIds.includes(e.id))
}
