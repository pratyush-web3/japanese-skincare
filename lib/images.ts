/**
 * Premium Japanese skincare imagery
 * Carefully curated Unsplash images for a luxury Japanese aesthetic
 */

function unsplash(photoId: string, width = 1400) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export const FALLBACK_IMAGE = unsplash(
  "photo-1556228578-8c89e6adf883",
  1400
);

/** Website imagery - Premium Japanese aesthetic */
export const siteImages = {
  // Minimal Japanese skincare products on natural surface
  hero: unsplash("photo-1556228578-8c89e6adf883", 1800),

  // Serene Japanese beauty aesthetic with natural elements
  about: unsplash("photo-1522335789203-aabd1fc54bc9", 1600),

  // Traditional Kyoto atmosphere - temple or garden
  kyoto: unsplash("photo-1545569341-9eb8b365d999", 1600),

  // Peaceful spa treatment setting
  spa: unsplash("photo-1515377905703-c4788e51af15", 1600),

  // Japanese wellness lifestyle - calm, minimal
  lifestyle: unsplash("photo-1487412720507-e7ab37603c6f", 1600),

  // Beauty ritual - skincare routine setup
  ritual: unsplash("photo-1512496015851-a90fb38ba796", 1600),

  // Sakura (cherry blossom) inspired visuals
  sakura: unsplash("photo-1522383225653-ed111181a951", 1600),

  // Additional premium images for enhanced sections
  // Natural textures - stone, wood, water
  texture: unsplash("photo-1501004318641-b39e6451bec6", 1600),

  // Matcha green tea aesthetic
  matcha: unsplash("photo-1582719508461-905c673771fd", 1600),

  // Bamboo and natural elements
  bamboo: unsplash("photo-1518509562904-e7ef99cdcc86", 1600),

  // Traditional Japanese paper (washi) texture
  washi: unsplash("photo-1555949963-ff9fe0c870eb", 1600),

  // Zen garden stones
  zen: unsplash("photo-1512949239451-30bb52f32876", 1600),

  // Soft natural light through shoji
  light: unsplash("photo-1542751371-adc38448a05e", 1600),
} as const;

/** Product imagery - Skincare products */
export const productImages = {
  // Camellia oil serum - rich, golden oil
  tsubakiSerum: unsplash("photo-1556228578-8c89e6adf883", 1000),

  // Sakura cream - soft pink, delicate
  sakuraCream: unsplash("photo-1522335789203-aabd1fc54bc9", 1000),

  // Matcha face mask - green, natural
  matchaMask: unsplash("photo-1512496015851-a90fb38ba796", 1000),

  // Yuzu toner - citrus, fresh, bright
  yuzuToner: unsplash("photo-1501004318641-b39e6451bec6", 1000),

  // Rice bran essence - milky, smooth
  riceEssence: unsplash("photo-1487412720507-e7ab37603c6f", 1000),

  // Camellia cleansing balm - smooth, luxurious
  camelliaCleanser: unsplash("photo-1515377905703-c4788e51af15", 1000),
} as const;