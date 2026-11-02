import { TourismPillar, CharityFocusArea } from '../types';

export const COMPANY_DETAILS = {
  name: 'JAMAINUS SAFARIS',
  tagline: 'Discover the Soul of Africa',
  subTagline: 'Based in Uganda. Connecting Africa. Every Journey Tells a Story.',
  motto: 'Explore the Adventure. Experience the Culture. Travel with Purpose.',
  headOffice: 'Mbale, Eastern Uganda',
  postalAddress: 'P.O. Box 530, Mbale, Uganda',
  website: 'www.jamainus.com',
  officialPdfPath: '/assets/aistudio/Jamainus_Safaris_Company_Profile_Draft_2_279d4c3b.pdf',
  emails: [
    'jjamainus@gmail.com',
    'jamainus784@yahoo.com'
  ],
  telephones: [
    { display: '+256 779 448916', raw: '+256779448916', isPrimary: true, isWhatsApp: true },
    { display: '+256 785 254899', raw: '+256785254899', isPrimary: false, isWhatsApp: false },
    { display: '+256 706 987025', raw: '+256706987025', isPrimary: false, isWhatsApp: false },
  ],
  charityArm: {
    name: 'JAMAINUS CHARITY FOUNDATION LTD',
    slogan: 'A Chance to Make a Difference',
    description: 'The NGO and charitable community-development dimension of the wider Jamainus vision, dedicated to disability inclusion, vulnerable communities, and grassroots preservation.'
  }
};

export const TOURISM_PILLARS: TourismPillar[] = [
  {
    id: 'cultural',
    title: 'Cultural Tourism',
    tagline: "Discover Africa's Living Heritage",
    summary: "Africa's cultures are expressed through languages, music, dance, food, craftsmanship, architecture, oral histories, traditional practices, and community life. We create respectful, community-led cultural encounters.",
    keyPoints: [
      'Community and village visits arranged with local hosts',
      'Traditional music, dance, storytelling, and cultural performances',
      'Local cuisine and authentic food preparation experiences',
      'Craft workshops and visits to artisan communities',
      'Historical sites, monuments, and heritage trails',
      'Encounters with elders and cultural custodians who wish to share their knowledge',
      'Traditional farming practices and indigenous food systems',
      'Learning about local traditions, customs, and ways of life',
      'Indigenous knowledge concerning forests, plants, and traditional uses, shared voluntarily with cultural respect'
    ],
    iconName: 'Landmark',
    badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
    accentBg: 'bg-amber-700'
  },
  {
    id: 'wildlife',
    title: 'Wildlife and Nature Tourism',
    tagline: "Experience Africa's Natural Wonders",
    summary: "Africa is home to extraordinary wildlife, forests, mountains, wetlands, rivers, savannahs, and coastlines. We connect travellers through nature-based experiences that encourage appreciation for biodiversity and responsible travel.",
    keyPoints: [
      'Wildlife safaris and guided game-viewing excursions in pristine national parks',
      'Birdwatching and specialist birding expeditions across Albertine Rift endemics',
      'Forest walks and guided nature trails with experienced rangers',
      'Primate-tracking experiences (Mountain Gorillas and Chimpanzees) where permitted',
      'Mountain hiking and trekking expeditions (Mount Elgon Caldera & Rwenzori peaks)',
      'Waterfall and scenic landscape visits (Sipi Falls 3-tier cascade and Murchison Falls)',
      'Camping and outdoor adventures in authorized conservation locations',
      'Nature photography and biodiversity interpretation',
      'Community-based conservation experiences and forest plant-heritage walks'
    ],
    iconName: 'Compass',
    badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    accentBg: 'bg-emerald-700'
  },
  {
    id: 'spiritual',
    title: 'Religious and Spiritual Tourism',
    tagline: 'Explore Africa’s Faith and Sacred Heritage',
    summary: 'Religion and spirituality have shaped Africa’s history, architecture, communities, and cultural identity for centuries. We develop experiences that help visitors understand diverse faith traditions and places of sacred significance.',
    keyPoints: [
      'Christian heritage tours and visits to historic cathedrals and mission posts',
      'Islamic heritage tours and visits to significant national and regional mosques',
      'Religious architecture and historic places of worship throughout East Africa',
      'Pilgrimage and faith-based travel arrangements (Uganda Martyrs Namugongo Shrine)',
      'Sacred landscapes and spiritual heritage sites where visitors are warmly welcome',
      'Religious festivals and cultural celebrations, subject to local community protocols',
      'Educational visits exploring the living history of religious communities',
      'Interfaith and cross-cultural learning experiences conducted with utmost reverence'
    ],
    iconName: 'Sparkles',
    badgeColor: 'text-sky-800 bg-sky-50 border-sky-200',
    accentBg: 'bg-sky-700'
  },
  {
    id: 'agritourism',
    title: 'Agritourism',
    tagline: 'Experience Africa Through Its Land and Food',
    summary: 'Agriculture is central to the lives, livelihoods, cuisines, and traditions of communities across Africa. Through agritourism, we connect visitors with farms, agricultural landscapes, local food systems, and the people who cultivate the land.',
    keyPoints: [
      'Arabica coffee farm visits and full bean-to-cup coffee processing demonstrations on Mount Elgon slopes',
      'Tea, cocoa, spice, and other agricultural heritage experiences across lush plantation corridors',
      'Visits to smallholder farms, women-led agricultural cooperatives, and organic gardens',
      'Traditional farming, harvesting, and food-production demonstrations',
      'Farm-to-table meals and traditional indigenous cuisine experiences',
      'Indigenous crops, heirloom seed traditions, and local food biodiversity',
      'Herbal gardens and traditional botanical plant knowledge shared responsibly',
      'Visits to vibrant agricultural markets and rural community enterprises'
    ],
    iconName: 'Wheat',
    badgeColor: 'text-yellow-800 bg-yellow-50 border-yellow-200',
    accentBg: 'bg-amber-800'
  }
];

export const CHARITY_FOCUS_AREAS: CharityFocusArea[] = [
  {
    id: 1,
    title: 'Disability Inclusion and Empowerment',
    description: 'Supporting greater participation, dignity, inclusion, and opportunity for persons with disabilities.',
    bullets: [
      'Community awareness and advocacy campaigns',
      'Accessible tourism standards and mobility assistance',
      'Skills development programs and inclusive livelihood support'
    ]
  },
  {
    id: 2,
    title: 'Support for Vulnerable Communities',
    description: 'Working toward improved well-being and opportunities for vulnerable people across Eastern Uganda and partner regions.',
    bullets: [
      'Direct assistance for orphans, child-headed households, and vulnerable youth',
      'Support initiatives for widows and elderly community members',
      'Relief for rural families experiencing severe economic hardship'
    ]
  },
  {
    id: 3,
    title: 'Education and Skills Development',
    description: 'Encouraging access to educational opportunities, practical skills, and vocational training.',
    bullets: [
      'School supplies and education assistance for underprivileged children',
      'Practical vocational skills workshops for youth and young adults',
      'Initiatives that help individuals and communities build secure futures'
    ]
  },
  {
    id: 4,
    title: 'Community Livelihoods and Empowerment',
    description: 'Promoting community initiatives that strengthen livelihoods, support local enterprise, and build resilience.',
    bullets: [
      'Micro-enterprise coaching for local artisan and craft makers',
      'Community-led ecotourism employment and guiding opportunities',
      'Strengthening rural household income streams through sustainable tourism linkages'
    ]
  },
  {
    id: 5,
    title: 'Nature Conservation Through Ecotourism',
    description: 'Protecting natural environments and encouraging responsible stewardship between communities and landscapes.',
    bullets: [
      'Tree-planting and reforestation programs around Mount Elgon and water catchments',
      'Community-based conservation education in human-wildlife interface zones',
      'Protection of fragile montane forests, wetlands, and bird habitats'
    ]
  },
  {
    id: 6,
    title: 'Cultural and Historical Preservation',
    description: 'Encouraging the documentation, appreciation, and transmission of local histories, oral traditions, and cultural practices.',
    bullets: [
      'Documenting oral histories with consent and involvement of community elders',
      'Preserving indigenous songs, crafts, and traditional agricultural practices',
      'Supporting cultural centers and historical heritage trails'
    ]
  },
  {
    id: 7,
    title: 'Humanitarian and Community Support',
    description: 'Seeking opportunities to assist people and communities facing unforeseen hardships.',
    bullets: [
      'Targeted emergency assistance during climate shocks or hardship events',
      'Health awareness and hygiene support in underserved rural outposts',
      'Collaborative partnerships with reputable civil society institutions'
    ]
  }
];

export const RESPONSIBLE_PRINCIPLES = [
  {
    title: 'Community Participation',
    desc: 'We work closely with local guides, cultural custodians, farmers, artisans, accommodation providers, and community enterprises wherever practical and appropriate.'
  },
  {
    title: 'Environmental Responsibility',
    desc: 'We encourage respect for wildlife, habitats, protected areas, water resources, and natural landscapes. Activities strictly follow conservation guidelines.'
  },
  {
    title: 'Cultural Respect',
    desc: 'We seek to preserve the dignity of host communities, respect local customs, obtain voluntary consent for cultural encounters, and avoid turning cultures into spectacles.'
  },
  {
    title: 'Disability Inclusion',
    desc: 'We actively advocate for travellers and community members with disabilities, designing accessible journeys and promoting inclusive tourism planning.'
  },
  {
    title: 'Local Economic Participation',
    desc: 'We support local livelihoods by creating fair economic opportunities for communities and small enterprises along all safari routes.'
  },
  {
    title: 'Heritage Preservation',
    desc: 'We value the preservation of local history, oral traditions, cultural practices, and indigenous knowledge for future generations.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'An African Perspective',
    desc: 'We see Africa as a continent of ancient civilizations, vibrant communities, sacred places, and many stories—not simply a destination for conventional wildlife game drives.'
  },
  {
    title: 'A Strong East African Foundation',
    desc: 'Headquartered in Mbale, Eastern Uganda, at the foothills of Mount Elgon, our team possesses intimate local relationships, unmatched regional terrain mastery, and trusted community ties.'
  },
  {
    title: 'Four Complementary Tourism Pillars',
    desc: 'Our holistic model seamlessly weaves culture, wildlife, spirituality, and agritourism into rich, multi-layered travel experiences.'
  },
  {
    title: 'Beyond Conventional Safaris',
    desc: 'We connect travellers with indigenous farmers, artisan custodians, sacred historical sites, and living rural communities alongside classic Big Five wildlife.'
  },
  {
    title: 'A Community-Conscious Vision',
    desc: 'Through JAMAINUS CHARITY FOUNDATION LTD, your journeys support disability inclusion, vulnerable families, and local environmental conservation.'
  },
  {
    title: 'Responsible, Practical Growth',
    desc: 'We operate with transparent pricing, verified safety protocols, licensed safari custom 4x4 vehicles, and clear confirmation of every inclusion.'
  }
];

export const GEOGRAPHIC_REGIONS = [
  {
    name: 'East Africa',
    role: 'Our Regional Foundation',
    countries: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi'],
    summary: 'Our primary operating base and regional stronghold. From the gorillas of Bwindi and the peaks of Mount Elgon to the Serengeti migration, the spice heritage of the Swahili coast, and the rolling thousand hills of Rwanda.'
  },
  {
    name: 'Central Africa',
    role: 'Forests, Biodiversity & Cultural Heritage',
    countries: ['DR Congo borderlands', 'Congo Basin', 'Gabon'],
    summary: 'Longer-term vision exploring ancient equatorial rainforests, immense river systems, primate sanctuaries, and distinctive forest peoples through vetted conservation partnerships.'
  },
  {
    name: 'West Africa',
    role: 'History, Arts & Living Cultures',
    countries: ['Ghana', 'Senegal', 'Nigeria', 'Benin'],
    summary: 'Connecting travellers with deep historical memory, artisan brass and textile traditions, vibrant music, world-renowned architecture, and ancestral heritage trails.'
  },
  {
    name: 'North Africa',
    role: 'Ancient Civilizations & Spiritual Heritage',
    countries: ['Egypt', 'Morocco', 'Tunisia'],
    summary: 'Exploring millennium-old civilizations, historic imperial medinas, trans-Saharan trade corridors, monumental architecture, and sacred traditions.'
  },
  {
    name: 'Southern Africa',
    role: 'Wildlife, Landscapes & Heritage',
    countries: ['Botswana', 'Namibia', 'South Africa', 'Zambia', 'Zimbabwe'],
    summary: 'Dramatic coastal ranges, Victoria Falls, the Okavango delta, arid desert wilderness, and centuries-old agricultural and indigenous cultural heritage.'
  }
];
