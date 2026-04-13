import { entries as cuisineEntries } from '../cuisine/data'

// Re-export boissons entries from cuisine (no deletion, just a live reference)
export const boissonsEntries = cuisineEntries.filter((e) => e.category === 'Boissons')

export const boissonsCategories = [
  {
    id: 'cocktails',
    label: 'Cocktails',
    fullLabel: 'Cocktails & shakers',
    entryIds: ['mai-tai', 'porn-star', 'pink-panther', 'creme-brulee', 'psychedelic-frog'],
    color: '#00d4b8',
  },
  {
    id: 'liqueurs',
    label: 'Liqueurs',
    fullLabel: 'Liqueurs maison',
    entryIds: ['limoncello', 'liqueur-kiwi'],
    color: '#f4c542',
  },
]

export function getBoissonsFilteredEntries(filterId) {
  if (!filterId) return boissonsEntries
  const cat = boissonsCategories.find((c) => c.id === filterId)
  if (cat) return boissonsEntries.filter((e) => cat.entryIds.includes(e.id))
  return boissonsEntries
}
