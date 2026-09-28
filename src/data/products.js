export const CATEGORIES = [
  'All',
  'Sofa',
  'Chair',
  'Table',
  'Bedroom',
  'Office'
];

export const PRODUCTS = [
  {
    id: 'nordic-haven-sofa',
    name: 'Nordic Haven Sofa',
    category: 'Sofa',
    tagline: 'Deep seating silhouette crafted for timeless modern relaxation',
    description: 'The Nordic Haven Sofa seamlessly combines architectural purity with sink-in comfort. Featuring high-resilience multi-density foam cushions wrapped in ethically sourced down feathers, grounded by a solid American kiln-dried ash perimeter frame with tapered brushed metal joinery.',
    price: 1890,
    rating: 4.9,
    reviewsCount: 142,
    material: 'High-Performance Belgian Linen & Kiln-Dried Solid Ash Wood',
    dimensions: 'W 92" × D 39" × H 31" (Seat Height: 18")',
    weight: '142 lbs',
    leadTime: 'In Stock — Ships in 3-5 business days',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Front Angle', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80' },
      { id: 'living', label: 'Living Room Setting', url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80' },
      { id: 'detail', label: 'Material Detail', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'forest-emerald',
        name: 'Forest Emerald',
        hex: '#2D4B3E',
        accentHex: '#1D332A',
        blendMode: 'color-burn',
        overlayColor: 'rgba(45, 75, 62, 0.45)',
        filter: 'hue-rotate(0deg) saturate(1.2) brightness(0.95)',
        badge: 'Iconic Signature'
      },
      {
        id: 'cognac-brown',
        name: 'Cognac Brown',
        hex: '#8C532B',
        accentHex: '#673A1B',
        blendMode: 'multiply',
        overlayColor: 'rgba(140, 83, 43, 0.50)',
        filter: 'sepia(0.8) hue-rotate(-60deg) saturate(1.7) brightness(0.9)',
        badge: 'Classic Heritage'
      },
      {
        id: 'obsidian-black',
        name: 'Obsidian Black',
        hex: '#1F2421',
        accentHex: '#0E1110',
        blendMode: 'multiply',
        overlayColor: 'rgba(25, 28, 26, 0.70)',
        filter: 'grayscale(0.9) brightness(0.55) contrast(1.2)',
        badge: 'Modern Monochrome'
      },
      {
        id: 'nordic-cream',
        name: 'Nordic Cream',
        hex: '#EBE3D5',
        accentHex: '#D5C9B3',
        blendMode: 'soft-light',
        overlayColor: 'rgba(242, 235, 222, 0.65)',
        filter: 'sepia(0.2) brightness(1.25) contrast(0.95) saturate(0.8)',
        badge: 'Warm Minimalist'
      },
      {
        id: 'slate-grey',
        name: 'Slate Grey',
        hex: '#5E666D',
        accentHex: '#454C52',
        blendMode: 'multiply',
        overlayColor: 'rgba(94, 102, 109, 0.55)',
        filter: 'grayscale(0.8) hue-rotate(180deg) brightness(0.85) contrast(1.1)',
        badge: 'Urban Neutral'
      },
      {
        id: 'midnight-blue',
        name: 'Midnight Navy',
        hex: '#243447',
        accentHex: '#15212E',
        blendMode: 'multiply',
        overlayColor: 'rgba(36, 52, 71, 0.60)',
        filter: 'hue-rotate(160deg) saturate(1.4) brightness(0.8)',
        badge: 'Deep Mood'
      }
    ]
  },
  {
    id: 'solstice-lounge-chair',
    name: 'Solstice Lounge Chair',
    category: 'Chair',
    tagline: 'Organic sculptural contours with ergonomic recline and brushed walnut legs',
    description: 'Sculpted for pure tactile delight, the Solstice Lounge Chair features continuous compound curves that naturally cradle the human posture. Hand-finished solid walnut joinery pairs with dense Italian boucle upholstery.',
    price: 940,
    rating: 4.8,
    reviewsCount: 88,
    material: 'Textured Bouclé Fabric & Solid Walnut Base',
    dimensions: 'W 34" × D 36" × H 33" (Seat Height: 16.5")',
    weight: '48 lbs',
    leadTime: 'In Stock — Ships in 2-4 business days',
    featured: true,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Studio Showcase', url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80' },
      { id: 'angle', label: 'Side Profile', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'nordic-cream',
        name: 'Nordic Cream',
        hex: '#F0ECE1',
        accentHex: '#DED6C4',
        blendMode: 'screen',
        overlayColor: 'rgba(240, 236, 225, 0.40)',
        filter: 'sepia(0.15) brightness(1.1) contrast(1.0)',
        badge: 'Design Favorite'
      },
      {
        id: 'terracotta-clay',
        name: 'Desert Terracotta',
        hex: '#B8583D',
        accentHex: '#91422C',
        blendMode: 'multiply',
        overlayColor: 'rgba(184, 88, 61, 0.55)',
        filter: 'sepia(0.7) hue-rotate(-45deg) saturate(1.8) brightness(0.9)',
        badge: 'Warm Earth'
      },
      {
        id: 'charcoal-black',
        name: 'Charcoal Black',
        hex: '#232528',
        accentHex: '#141618',
        blendMode: 'multiply',
        overlayColor: 'rgba(35, 37, 40, 0.70)',
        filter: 'grayscale(0.9) brightness(0.5) contrast(1.2)',
        badge: 'Monochrome'
      },
      {
        id: 'moss-green',
        name: 'Olive Moss',
        hex: '#47533B',
        accentHex: '#313A28',
        blendMode: 'multiply',
        overlayColor: 'rgba(71, 83, 59, 0.60)',
        filter: 'sepia(0.5) hue-rotate(50deg) saturate(1.3) brightness(0.85)',
        badge: 'Naturalist'
      },
      {
        id: 'ocean-blue',
        name: 'Baltic Indigo',
        hex: '#2C445C',
        accentHex: '#1B2E40',
        blendMode: 'multiply',
        overlayColor: 'rgba(44, 68, 92, 0.60)',
        filter: 'hue-rotate(170deg) saturate(1.5) brightness(0.85)',
        badge: 'Coastal Tone'
      }
    ]
  },
  {
    id: 'artisan-dining-chair',
    name: 'Artisan Curved Dining Chair',
    category: 'Chair',
    tagline: 'Minimalist bentwood backrest with cushioned upholstered seat pad',
    description: 'Designed for lingering dinners, the Artisan Chair balances visual lightness with supportive structural integrity. Featuring curved steam-bent oak backings and seamless mortise-and-tenon craftsmanship.',
    price: 360,
    rating: 4.7,
    reviewsCount: 64,
    material: 'Steam-Bent White Oak & Semi-Aniline Leather Cushion',
    dimensions: 'W 21" × D 22" × H 31" (Seat Height: 18.5")',
    weight: '18 lbs',
    leadTime: 'In Stock — Sets of 2, 4 or 6 ready to ship',
    featured: false,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Chair Studio', url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'caramel-leather',
        name: 'Caramel Tan',
        hex: '#A76E43',
        accentHex: '#845330',
        blendMode: 'multiply',
        overlayColor: 'rgba(167, 110, 67, 0.50)',
        filter: 'sepia(0.6) hue-rotate(-40deg) saturate(1.6)',
        badge: 'Natural Patina'
      },
      {
        id: 'ebony-stained',
        name: 'Ebony Stained',
        hex: '#1D1D1D',
        accentHex: '#0F0F0F',
        blendMode: 'multiply',
        overlayColor: 'rgba(29, 29, 29, 0.70)',
        filter: 'grayscale(0.9) brightness(0.55)',
        badge: 'Contemporary'
      },
      {
        id: 'sandstone-linen',
        name: 'Sandstone Grey',
        hex: '#8D8880',
        accentHex: '#6F6B64',
        blendMode: 'multiply',
        overlayColor: 'rgba(141, 136, 128, 0.55)',
        filter: 'grayscale(0.6) brightness(0.95)',
        badge: 'Subtle Earth'
      },
      {
        id: 'cream-ivory',
        name: 'Cream Ivory',
        hex: '#ECE7DD',
        accentHex: '#D6CFC1',
        blendMode: 'soft-light',
        overlayColor: 'rgba(236, 231, 221, 0.50)',
        filter: 'brightness(1.15) contrast(0.95)',
        badge: 'Airy Light'
      }
    ]
  },
  {
    id: 'kinfolk-dining-table',
    name: 'Kinfolk Solid Oak Dining Table',
    category: 'Table',
    tagline: 'Monumental pillared pedestal base with chamfered live-edge detailing',
    description: 'An architectural gathering centerpiece. Hand-crafted from sustainably harvested European White Oak, finished in a matte protective ceramic oil that emphasizes the natural wood grain and knots.',
    price: 2250,
    rating: 4.95,
    reviewsCount: 52,
    material: '100% Solid European White Oak & Concealed Steel Tensioners',
    dimensions: 'L 84" × W 40" × H 30" (Comfortably seats 8)',
    weight: '210 lbs',
    leadTime: 'Crafted to Order — 2-3 weeks',
    featured: true,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Dining Pavilion', url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'natural-oak',
        name: 'Bleached Natural Oak',
        hex: '#D7BA89',
        accentHex: '#BA9C6B',
        blendMode: 'color-burn',
        overlayColor: 'rgba(215, 186, 137, 0.40)',
        filter: 'brightness(1.05) saturate(1.1)',
        badge: 'Signature Nordic'
      },
      {
        id: 'smoked-walnut',
        name: 'Smoked Walnut Brown',
        hex: '#5A3D28',
        accentHex: '#3E2818',
        blendMode: 'multiply',
        overlayColor: 'rgba(90, 61, 40, 0.60)',
        filter: 'sepia(0.7) hue-rotate(-50deg) saturate(1.5) brightness(0.7)',
        badge: 'Rich & Moody'
      },
      {
        id: 'charred-nero',
        name: 'Charred Nero Black',
        hex: '#1E1D1B',
        accentHex: '#0E0D0C',
        blendMode: 'multiply',
        overlayColor: 'rgba(30, 29, 27, 0.75)',
        filter: 'grayscale(0.9) brightness(0.5) contrast(1.15)',
        badge: 'Yakisugi Black'
      },
      {
        id: 'mist-grey',
        name: 'Weathered Mist Grey',
        hex: '#7A7A78',
        accentHex: '#5C5C5A',
        blendMode: 'multiply',
        overlayColor: 'rgba(122, 122, 120, 0.50)',
        filter: 'grayscale(0.7) brightness(0.9)',
        badge: 'Coastal Driftwood'
      }
    ]
  },
  {
    id: 'aero-executive-chair',
    name: 'Aero Ergonomic Executive Chair',
    category: 'Office',
    tagline: 'Synchronous lumbar recline mechanism engineered with breathable precision',
    description: 'The pinnacle of work-from-home luxury. Aero combines precision mechanical engineering with hand-tailored leather or high-tensile breathable knit, delivering proactive posture realignment all day.',
    price: 820,
    rating: 4.85,
    reviewsCount: 97,
    material: 'Cast Aluminum Alloy Base & Full-Grain Italian Leather',
    dimensions: 'W 27" × D 27" × H 41-46" (Adjustable Pneumatic Lift)',
    weight: '44 lbs',
    leadTime: 'In Stock — Ships next day',
    featured: true,
    image: 'https://images.unsplash.com/photo-1580481077195-731da03fed7e?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Office Profile', url: 'https://images.unsplash.com/photo-1580481077195-731da03fed7e?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'matte-black',
        name: 'Matte Obsidian Black',
        hex: '#1A1C1E',
        accentHex: '#0D0E0F',
        blendMode: 'multiply',
        overlayColor: 'rgba(26, 28, 30, 0.65)',
        filter: 'grayscale(0.8) brightness(0.7) contrast(1.2)',
        badge: 'Executive Standard'
      },
      {
        id: 'cognac-tan',
        name: 'Warm Saddle Tan',
        hex: '#965C34',
        accentHex: '#734322',
        blendMode: 'multiply',
        overlayColor: 'rgba(150, 92, 52, 0.55)',
        filter: 'sepia(0.75) hue-rotate(-50deg) saturate(1.8) brightness(0.95)',
        badge: 'Luxury Leather'
      },
      {
        id: 'pearl-cream',
        name: 'Sandstone Cream',
        hex: '#E0D8CB',
        accentHex: '#C5BCAC',
        blendMode: 'soft-light',
        overlayColor: 'rgba(224, 216, 203, 0.55)',
        filter: 'brightness(1.15) contrast(0.95)',
        badge: 'Studio Clean'
      },
      {
        id: 'navy-blue',
        name: 'Deep Pacific Navy',
        hex: '#1E324A',
        accentHex: '#121F2F',
        blendMode: 'multiply',
        overlayColor: 'rgba(30, 50, 74, 0.60)',
        filter: 'hue-rotate(160deg) saturate(1.6) brightness(0.85)',
        badge: 'Refined Blue'
      },
      {
        id: 'heather-grey',
        name: 'Heather Silver Grey',
        hex: '#697179',
        accentHex: '#4E555C',
        blendMode: 'multiply',
        overlayColor: 'rgba(105, 113, 121, 0.50)',
        filter: 'grayscale(0.7) brightness(0.95)',
        badge: 'Neutral Tech'
      }
    ]
  },
  {
    id: 'travertine-sculpt-coffee-table',
    name: 'Forma Travertine Coffee Table',
    category: 'Table',
    tagline: 'Honed Italian travertine stone slab balanced on geometric fluted plinths',
    description: 'Each Forma coffee table is cut from natural Italian travertine with unique sediment banding and porous organic textures. Polished with a protective satin sealant resistant to everyday liquids.',
    price: 1150,
    rating: 4.9,
    reviewsCount: 46,
    material: 'Honed Natural Travertine Stone & Solid Beech Inner Skeleton',
    dimensions: 'L 52" × W 28" × H 15.5"',
    weight: '165 lbs',
    leadTime: 'In Stock — White glove delivery included',
    featured: false,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Living Horizon', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'warm-cream',
        name: 'Warm Roman Travertine',
        hex: '#DDD2C1',
        accentHex: '#BFB29F',
        blendMode: 'multiply',
        overlayColor: 'rgba(221, 210, 193, 0.35)',
        filter: 'brightness(1.02) sepia(0.2)',
        badge: 'Authentic Stone'
      },
      {
        id: 'marquina-black',
        name: 'Marquina Noir Black',
        hex: '#202224',
        accentHex: '#101112',
        blendMode: 'multiply',
        overlayColor: 'rgba(32, 34, 36, 0.75)',
        filter: 'grayscale(0.85) brightness(0.55) contrast(1.2)',
        badge: 'Dramatic Stone'
      },
      {
        id: 'terracotta-red',
        name: 'Etruscan Sienna',
        hex: '#9F5542',
        accentHex: '#7C3E2F',
        blendMode: 'multiply',
        overlayColor: 'rgba(159, 85, 66, 0.55)',
        filter: 'sepia(0.6) hue-rotate(-50deg) saturate(1.6) brightness(0.85)',
        badge: 'Earth Ochre'
      },
      {
        id: 'silver-travertine',
        name: 'Silver Cloud Grey',
        hex: '#7C8187',
        accentHex: '#5C6166',
        blendMode: 'multiply',
        overlayColor: 'rgba(124, 129, 135, 0.50)',
        filter: 'grayscale(0.7) brightness(0.9)',
        badge: 'Cool Mineral'
      }
    ]
  },
  {
    id: 'haven-platform-bed',
    name: 'Haven Low Platform Bed Frame',
    category: 'Bedroom',
    tagline: 'Japanese-inspired floating platform with integrated solid wood headboard ledges',
    description: 'The Haven Bed creates a serene sanctuary grounded in minimalist design. Its low center of gravity features wide cantilevered side ledges that eliminate the need for bulky nightstands.',
    price: 2400,
    rating: 4.93,
    reviewsCount: 78,
    material: 'Solid American Walnut with Multi-Slat Ventilated Base',
    dimensions: 'King: W 88" × L 94" × H 28" (Platform clearance: 8")',
    weight: '240 lbs',
    leadTime: 'Crafted to Order — 3-4 weeks',
    featured: true,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Bedroom Oasis', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'walnut-brown',
        name: 'Warm American Walnut',
        hex: '#5E412F',
        accentHex: '#412C1F',
        blendMode: 'multiply',
        overlayColor: 'rgba(94, 65, 47, 0.50)',
        filter: 'sepia(0.6) hue-rotate(-40deg) saturate(1.4) brightness(0.85)',
        badge: 'Classic Wood'
      },
      {
        id: 'natural-ash',
        name: 'Nordic Bleached Cream',
        hex: '#D9C8B4',
        accentHex: '#BBA892',
        blendMode: 'soft-light',
        overlayColor: 'rgba(217, 200, 180, 0.45)',
        filter: 'brightness(1.15) saturate(0.9)',
        badge: 'Bright Oak'
      },
      {
        id: 'ebony-night',
        name: 'Midnight Ash Black',
        hex: '#1D1E1F',
        accentHex: '#0E0F0F',
        blendMode: 'multiply',
        overlayColor: 'rgba(29, 30, 31, 0.70)',
        filter: 'grayscale(0.9) brightness(0.55)',
        badge: 'Dark Zen'
      },
      {
        id: 'slate-smoke',
        name: 'Smoked Slate Grey',
        hex: '#6B6D70',
        accentHex: '#4D4E50',
        blendMode: 'multiply',
        overlayColor: 'rgba(107, 109, 112, 0.55)',
        filter: 'grayscale(0.7) brightness(0.85)',
        badge: 'Urban Loft'
      }
    ]
  },
  {
    id: 'arch-modular-bookshelf',
    name: 'Arch Minimalist Modular Bookshelf',
    category: 'Office',
    tagline: 'Open-grid architectural shelving with concealed magnetic modular dividers',
    description: 'An expansive open-silhouette shelving system that functions equally well as a dramatic room divider or wall showcase. Precision laser-milled powder-coated steel uprights paired with acoustic felt backed cubbies.',
    price: 1350,
    rating: 4.75,
    reviewsCount: 39,
    material: 'Aircraft-Grade Aluminum, Solid Ash Shelves & Wool Felt Insets',
    dimensions: 'W 72" × D 16" × H 78" (Adjustable shelf intervals)',
    weight: '125 lbs',
    leadTime: 'In Stock — Ships in 4-6 business days',
    featured: false,
    image: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Library Wall', url: 'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'matte-black',
        name: 'Matte Onyx Black',
        hex: '#212121',
        accentHex: '#121212',
        blendMode: 'multiply',
        overlayColor: 'rgba(33, 33, 33, 0.70)',
        filter: 'grayscale(0.9) brightness(0.55)',
        badge: 'Architectural'
      },
      {
        id: 'chalk-white',
        name: 'Warm Chalk White',
        hex: '#EFECE6',
        accentHex: '#DAD6CD',
        blendMode: 'soft-light',
        overlayColor: 'rgba(239, 236, 230, 0.55)',
        filter: 'brightness(1.2) contrast(0.95)',
        badge: 'Bright Gallery'
      },
      {
        id: 'walnut-timber',
        name: 'Espresso Walnut',
        hex: '#523B2B',
        accentHex: '#38261A',
        blendMode: 'multiply',
        overlayColor: 'rgba(82, 59, 43, 0.60)',
        filter: 'sepia(0.65) hue-rotate(-50deg) saturate(1.5) brightness(0.8)',
        badge: 'Natural Warmth'
      },
      {
        id: 'sage-green',
        name: 'Eucalyptus Green',
        hex: '#4A5B4F',
        accentHex: '#344138',
        blendMode: 'multiply',
        overlayColor: 'rgba(74, 91, 79, 0.60)',
        filter: 'sepia(0.4) hue-rotate(60deg) saturate(1.3) brightness(0.9)',
        badge: 'Botanical'
      },
      {
        id: 'deep-marine',
        name: 'Nordic Sea Blue',
        hex: '#283D4E',
        accentHex: '#192834',
        blendMode: 'multiply',
        overlayColor: 'rgba(40, 61, 78, 0.60)',
        filter: 'hue-rotate(165deg) saturate(1.4) brightness(0.85)',
        badge: 'Oceanic'
      }
    ]
  },
  {
    id: 'valencia-velvet-daybed',
    name: 'Valencia Sculptural Daybed',
    category: 'Bedroom',
    tagline: 'Low-slung minimalist bench with cylindrical bolster pillow & brass feet',
    description: 'Effortlessly elevating open living rooms, sunrooms, or luxury master suites. Valencia is wrapped in crushed Italian velvet with a dense supportive mattress foundation resting upon solid brushed brass bracket legs.',
    price: 1580,
    rating: 4.88,
    reviewsCount: 51,
    material: 'Crushed Cotton Velvet & Solid Brass Hardware',
    dimensions: 'W 76" × D 32" × H 22" (Seat Height: 16")',
    weight: '82 lbs',
    leadTime: 'In Stock — Ships in 3 business days',
    featured: false,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Daybed Vignette', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'mustard-gold',
        name: 'Ochre Amber Velvet',
        hex: '#C68B3E',
        accentHex: '#A26F2D',
        blendMode: 'color-burn',
        overlayColor: 'rgba(198, 139, 62, 0.45)',
        filter: 'sepia(0.5) hue-rotate(-20deg) saturate(1.7) brightness(1.0)',
        badge: 'Statement Luxe'
      },
      {
        id: 'midnight-navy',
        name: 'Midnight Velvet Blue',
        hex: '#1E2D42',
        accentHex: '#121C2B',
        blendMode: 'multiply',
        overlayColor: 'rgba(30, 45, 66, 0.65)',
        filter: 'hue-rotate(170deg) saturate(1.6) brightness(0.8)',
        badge: 'Moody Velvet'
      },
      {
        id: 'slate-charcoal',
        name: 'Charcoal Shadow',
        hex: '#2B2D31',
        accentHex: '#1B1C1F',
        blendMode: 'multiply',
        overlayColor: 'rgba(43, 45, 49, 0.70)',
        filter: 'grayscale(0.85) brightness(0.6) contrast(1.15)',
        badge: 'Dark Modern'
      },
      {
        id: 'almond-cream',
        name: 'Almond Bouclé Cream',
        hex: '#EDE4D6',
        accentHex: '#D4C9B6',
        blendMode: 'soft-light',
        overlayColor: 'rgba(237, 228, 214, 0.55)',
        filter: 'brightness(1.15) contrast(0.95)',
        badge: 'Neutral Warmth'
      },
      {
        id: 'forest-velvet',
        name: 'Emerald Forest',
        hex: '#244334',
        accentHex: '#162C22',
        blendMode: 'multiply',
        overlayColor: 'rgba(36, 67, 52, 0.60)',
        filter: 'sepia(0.4) hue-rotate(55deg) saturate(1.4) brightness(0.85)',
        badge: 'Botanical Luxe'
      }
    ]
  },
  {
    id: 'arcadia-sideboard-credenza',
    name: 'Arcadia Tambour Wood Credenza',
    category: 'Table',
    tagline: 'Ribbed tambour sliding doors concealing bespoke storage compartments',
    description: 'Arcadia highlights the kinetic grace of tambour woodcraft. Seamless solid timber slats glide smoothly along internal tracks to reveal adjustable interior shelving and cable integration passages.',
    price: 1980,
    rating: 4.92,
    reviewsCount: 63,
    material: 'Quarter-Sawn American Walnut & Brushed Smoked Bronze Legs',
    dimensions: 'W 74" × D 19" × H 31"',
    weight: '168 lbs',
    leadTime: 'In Stock — Ships in 5-7 business days',
    featured: false,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    views: [
      { id: 'front', label: 'Sideboard Front', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80' }
    ],
    availableColors: [
      {
        id: 'walnut-warm',
        name: 'Heritage Walnut Brown',
        hex: '#6A462F',
        accentHex: '#4A2F1E',
        blendMode: 'multiply',
        overlayColor: 'rgba(106, 70, 47, 0.50)',
        filter: 'sepia(0.6) hue-rotate(-40deg) saturate(1.5) brightness(0.9)',
        badge: 'Rich Timber'
      },
      {
        id: 'bleached-oak',
        name: 'Bleached Nordic Oak',
        hex: '#D6C4A9',
        accentHex: '#BAA688',
        blendMode: 'soft-light',
        overlayColor: 'rgba(214, 196, 169, 0.45)',
        filter: 'brightness(1.12) saturate(0.95)',
        badge: 'Scandinavian'
      },
      {
        id: 'carbon-black',
        name: 'Carbon Matte Black',
        hex: '#212224',
        accentHex: '#121314',
        blendMode: 'multiply',
        overlayColor: 'rgba(33, 34, 36, 0.70)',
        filter: 'grayscale(0.9) brightness(0.55)',
        badge: 'Industrial Chic'
      },
      {
        id: 'mineral-blue',
        name: 'Fjord Deep Blue',
        hex: '#2E4154',
        accentHex: '#1E2C3A',
        blendMode: 'multiply',
        overlayColor: 'rgba(46, 65, 84, 0.60)',
        filter: 'hue-rotate(165deg) saturate(1.5) brightness(0.85)',
        badge: 'Nordic Accent'
      }
    ]
  }
];

export const BRAND_INFO = {
  name: 'Furniture Studio',
  tagline: 'Artisanal Furniture & Interactive Customization',
  description: 'Meticulously crafted Scandinavian and Mid-Century contemporary furniture for discerning modern homes. Visualize materials, textures, and bespoke palettes before choosing.',
  address: '420 Design Boulevard, Soho Design District, NY 10013',
  email: 'concierge@furniturestudio.design',
  phone: '+1 (800) 482-3876',
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM EST'
};

export const ROOM_PRESETS = [
  { id: 'studio', name: 'Minimal Studio', bgClass: 'bg-gradient-to-b from-[#F7F5F0] via-[#EFECE5] to-[#E5E0D6]', lighting: 'Neutral 5500K' },
  { id: 'warm', name: 'Warm Living Room', bgClass: 'bg-gradient-to-tr from-[#EADBC8] via-[#F8F3EA] to-[#E3D4BE]', lighting: 'Warm Amber 3000K' },
  { id: 'loft', name: 'Industrial Dark Loft', bgClass: 'bg-gradient-to-br from-[#242528] via-[#1A1A1C] to-[#121214]', textDark: true, lighting: 'Moody Gallery 4000K' },
  { id: 'sunlit', name: 'Sunlit Solarium', bgClass: 'bg-gradient-to-t from-[#EFE9DF] via-[#FAF7F2] to-[#FFF]', lighting: 'Direct Daylight 6500K' }
];
