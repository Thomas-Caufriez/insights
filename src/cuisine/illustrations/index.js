import ChickenMustardIllustration from './ChickenMustardIllustration'
import ChickenCurryIllustration from './ChickenCurryIllustration'
import BrothIllustration from './BrothIllustration'
import ChickenBreakdownIllustration from './ChickenBreakdownIllustration'
import RiceBowlIllustration from './RiceBowlIllustration'
import FingerMeasureIllustration from './FingerMeasureIllustration'
import CarbonaraIllustration from './CarbonaraIllustration'
import CoconutRockIllustration from './CoconutRockIllustration'
import GarlicButterIllustration from './GarlicButterIllustration'
import LemonCakeIllustration from './LemonCakeIllustration'

export const illustrations = {
  'chicken-mustard': ChickenMustardIllustration,
  'chicken-curry': ChickenCurryIllustration,
  'broth': BrothIllustration,
  'chicken-breakdown': ChickenBreakdownIllustration,
  'rice-bowl': RiceBowlIllustration,
  'finger-measure': FingerMeasureIllustration,
  'carbonara': CarbonaraIllustration,
  'coconut-rock': CoconutRockIllustration,
  'garlic-butter': GarlicButterIllustration,
  'lemon-cake': LemonCakeIllustration,
}

export function getIllustration(key) {
  return illustrations[key] || null
}
