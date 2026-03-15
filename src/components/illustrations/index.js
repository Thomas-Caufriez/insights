import ChickenMustardIllustration from './ChickenMustardIllustration'
import ChickenCurryIllustration from './ChickenCurryIllustration'
import BrothIllustration from './BrothIllustration'
import ChickenBreakdownIllustration from './ChickenBreakdownIllustration'
import RiceBowlIllustration from './RiceBowlIllustration'
import FingerMeasureIllustration from './FingerMeasureIllustration'
import LimoncelloIllustration from './LimoncelloIllustration'

export const illustrations = {
  'chicken-mustard': ChickenMustardIllustration,
  'chicken-curry': ChickenCurryIllustration,
  'broth': BrothIllustration,
  'chicken-breakdown': ChickenBreakdownIllustration,
  'rice-bowl': RiceBowlIllustration,
  'finger-measure': FingerMeasureIllustration,
  'limoncello': LimoncelloIllustration,
}

export function getIllustration(key) {
  return illustrations[key] || null
}
