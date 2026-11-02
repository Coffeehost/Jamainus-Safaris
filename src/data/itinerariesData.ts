import { Itinerary } from '../types';

export const ALL_ITINERARIES: Itinerary[] = [
  // 1. Signature Experience: The Soul of Africa Journey
  {
    id: 'soul-of-africa-journey',
    title: 'The Soul of Africa Journey',
    tagline: 'A culture-led expedition connecting African living heritage, storytelling, and wilderness',
    pillar: 'cultural',
    pillarLabel: 'Cultural Tourism',
    durationDays: 12,
    durationNights: 11,
    startLocation: 'Entebbe / Kampala, Uganda',
    endLocation: 'Entebbe / Kampala, Uganda',
    countries: ['Uganda'],
    difficulty: 'Moderate',
    groupSize: 'Small Group (2-10 travelers) or Private',
    idealFor: 'Culture enthusiasts, conscious travelers, photographers, intergenerational families',
    featured: true,
    overview: 'The signature flagship itinerary of Jamainus Safaris. A profound, culture-led journey exploring Africa’s living heritage, community-led cultural encounters, traditional foods, oral storytelling, ancient historical kingdoms, and sacred landscapes, thoughtfully combined with selected wildlife and nature encounters.',
    keyHighlights: [
      'Authentic storytelling evenings around traditional village hearths with community elders',
      'Indigenous food preparation, ancestral recipes, and traditional Bagisu & Buganda cuisine',
      'Heritage trails exploring Kasubi Royal Tombs, kingdom palaces, and ancient artisan quarters',
      'Eastern Uganda cultural immersion at the foot of Mount Elgon: Imbalu heritage & folklore',
      'Responsible wildlife game drive across Queen Elizabeth National Park savannah',
      'Boat cruise on the world-famous Kazinga Channel with community-led fishing village dialogue',
      'Tree-planting ceremony and dialogue with Jamainus Charity Foundation local youth leaders'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Entebbe – Welcome to the Pearl of Africa',
        destination: 'Entebbe / Lake Victoria',
        description: 'Touch down at Entebbe International Airport on the shores of Lake Victoria. Met by your senior Jamainus Safaris cultural safari director with a warm East African reception and transferred to your serene boutique lodge.',
        morning: 'International arrivals, luggage assistance, and VIP airport welcome.',
        afternoon: 'Check-in and orientation briefing on Jamainus philosophy: Discover the Soul of Africa.',
        evening: 'Welcome dinner featuring fresh organic Lake Victoria tilapia and tropical fruits.',
        mealsIncluded: 'Dinner',
        accommodationType: 'Karibu Guest House / 2 Friends Beach Hotel (Comfort Mid-Range/Luxury)',
        highlights: ['Lake Victoria breeze', 'Safari briefing', 'Cultural orientation']
      },
      {
        dayNumber: 2,
        title: 'Kampala Cultural Roots & Kingdom Heritage Trail',
        destination: 'Kampala City',
        description: 'Immerse in the rich history of the Buganda Kingdom, exploring ancient craftsmanship, oral traditions, and architecture that survived centuries of change.',
        morning: 'Guided walking tour through Kasubi Tombs (UNESCO World Heritage) and royal palace grounds.',
        afternoon: 'Traditional lunch at a local heritage culinary house; visit to the Uganda National Museum cultural ethnology collection.',
        evening: 'Interactive performance of traditional instruments (adungu, amadinda, and ngoma drums) with master musicians.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Cassia Lodge / Fairway Hotel, Kampala',
        highlights: ['Kasubi Tombs UNESCO', 'Traditional music workshop', 'Royal history']
      },
      {
        dayNumber: 3,
        title: 'Journey to the East – Source of the Nile & Mabira Ancient Forest',
        destination: 'Jinja & Eastern Uganda',
        description: 'Travel east toward the rising sun. Traverse the historic Mabira Forest reserve, stopping for an indigenous plant walk with elder herbalists who share traditional botanicals with community respect.',
        morning: 'Scenic drive east with roasted plantain and sweet banana tasting at popular roadside markets.',
        afternoon: 'Guided walk in Mabira Forest led by a community ecologist; visit the historic Source of the Nile in Jinja.',
        evening: 'Riverside dinner listening to the sound of flowing water and local Basoga storytelling.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'The Haven Eco River Lodge / 2 Friends Jinja',
        highlights: ['Indigenous medicinal plant walk', 'Source of the River Nile', 'Local storytelling']
      },
      {
        dayNumber: 4,
        title: 'Mbale Foothills – The Home of Jamainus Safaris',
        destination: 'Mbale, Eastern Uganda',
        description: 'Arrive in Mbale, the vibrant capital of Eastern Uganda nestled at the foot of Mount Elgon and the headquarters of Jamainus Safaris. Experience true regional community hospitality.',
        morning: 'Scenic journey through Tororo rock formations to Mbale.',
        afternoon: 'Visit Jamainus Safaris regional center; community welcome by Bagisu cultural custodians explaining the historic Imbalu cultural cycle.',
        evening: 'Traditional meal of Malewa (smoked bamboo shoots cooked in groundnut sauce) with steamed matooke.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel / Wash & Wills Hotel, Mbale',
        highlights: ['Mbale town heritage', 'Bagisu cultural customs', 'Authentic Malewa culinary experience']
      },
      {
        dayNumber: 5,
        title: 'Mount Elgon Slopes & Sipi Falls Community Encounter',
        destination: 'Sipi Falls, Kapchorwa',
        description: 'Ascend into the lush green heights of Sipi. Walk the dramatic three-tiered waterfalls with local Sabiny guides and hear ancient mountain migration tales.',
        morning: 'Hike to the magnificent 100m top waterfall through village paths and banana groves.',
        afternoon: 'Traditional pottery and handicraft demonstration with local women artisans.',
        evening: 'Sunset over the vast Karamoja plains below; fireside elders forum sharing folk legends.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge / Rafiki Lodge Sipi',
        highlights: ['Sipi Falls 3-tier hike', 'Women artisan weaving collective', 'Fireside elder folklore']
      },
      {
        dayNumber: 6,
        title: 'Trans-Uganda Cultural Scenic Drive to the Albertine Rift',
        destination: 'Fort Portal / Kibale Environs',
        description: 'Journey across central Uganda toward the magical Rwenzori "Mountains of the Moon", observing changing landscapes, architecture, and agricultural traditions.',
        morning: 'Depart early, traversing pastoral corridors with views of Ankole long-horned cattle.',
        afternoon: 'Arrival in Fort Portal tourism city; visit the Palace of the Tooro Kingdom atop Kabarole Hill.',
        evening: 'Relaxation at an eco-lodge surrounded by tea fields and crater lakes.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Turaco Treetops / Mountains of the Moon Hotel',
        highlights: ['Scenic country traverse', 'Tooro Kingdom royal palace', 'Crater lake vistas']
      },
      {
        dayNumber: 7,
        title: 'Kibale Forest Primate Habitat & Community Ecotourism Walk',
        destination: 'Kibale Forest & Bigodi Wetlands',
        description: 'Experience nature and community living side-by-side. Morning chimpanzee tracking followed by a guided community wetland walk in Bigodi.',
        morning: 'Guided primate walk in Kibale Forest National Park, home to 13 primate species.',
        afternoon: 'Bigodi Wetland sanctuary walk managed entirely by the local village community, spotting great blue turacos.',
        evening: 'Coffee ceremony with local women farmers reinvesting ecotourism proceeds into community schools.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Turaco Treetops / Kibale Forest Camp',
        highlights: ['Chimpanzee tracking in wild forest', 'Bigodi community ecotourism wetland', 'Women-led coffee dialogue']
      },
      {
        dayNumber: 8,
        title: 'Queen Elizabeth National Park – Savannah Wildlife & Salt Lake Traditions',
        destination: 'Queen Elizabeth National Park',
        description: 'Descend into the Great African Rift Valley. Explore the ancient Katwe Salt Lake, where generations of families have harvested rock salt using traditional methods.',
        morning: 'Game drive across the Kasenyi savannah plains searching for lions, elephants, Uganda kobs, and buffalos.',
        afternoon: 'Katwe Salt Lake historical tour: learn about ancient trade routes connecting the Congo basin and East Africa.',
        evening: 'Sun downer overlooking the Albertine Rift escarpment.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mweya Safari Lodge / Twin Lakes Safari Lodge',
        highlights: ['Big game savannah safari', 'Katwe ancient salt pan heritage', 'Rift valley sunset']
      },
      {
        dayNumber: 9,
        title: 'Kazinga Channel Boat Cruise & Fisherfolk Community Dialogue',
        destination: 'Kazinga Channel & Ishasha Sector',
        description: 'A 2-hour boat cruise along the natural 32km canal connecting Lake George and Lake Edward, witnessing highest concentrations of hippos and river birds, followed by responsible community engagement.',
        morning: 'Boat safari on the Kazinga Channel with knowledgeable park rangers.',
        afternoon: 'Drive through Ishasha sector in search of famous tree-climbing lions resting in fig trees.',
        evening: 'Fireside conversation on human-wildlife co-existence with community rangers.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Enjojo Lodge / Ishasha Jungle Lodge',
        highlights: ['Kazinga Channel hippos and birdlife', 'Tree-climbing lions search', 'Conservation dialogue']
      },
      {
        dayNumber: 10,
        title: 'Bwindi Forest Cultural Environs & Indigenous Batwa Heritage',
        destination: 'Bwindi Impenetrable National Park',
        description: 'Reach the misty highlands of Bwindi. Experience the living memory and ancestral forest heritage of the Batwa people through respectful, community-led programs.',
        morning: 'Scenic mountain drive through rolling terraced hills and misty bamboo passes.',
        afternoon: 'Batwa cultural trail led by indigenous elders sharing traditional shelter building, fire-making, and forest music.',
        evening: 'Quiet reflection on ancient wisdom, conservation, and indigenous rights.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Bakiga Community Lodge / Mahogany Springs, Bwindi',
        highlights: ['Misty mountain roads', 'Batwa indigenous heritage walk', 'Bakiga community cultural center']
      },
      {
        dayNumber: 11,
        title: 'Lake Bunyonyi – The Place of Many Little Birds & Dugout Canoeing',
        destination: 'Lake Bunyonyi, Kabale',
        description: 'Arrive at Africa’s second deepest lake, studded with 29 legendary islands. Experience calm waters and hear the histories of Punishment Island and Scottish medical pioneers.',
        morning: 'Traditional wooden dugout canoe or motorized boat expedition to historic islands.',
        afternoon: 'Visit a highland community school supported through grassroots community tourism.',
        evening: 'Farewell cultural gala dinner with traditional Bakiga folk dance and reflection circle.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Birdnest Resort / Bunyonyi Overland Resort',
        highlights: ['Dugout canoe glide', 'Punishment Island folklore', 'Bakiga celebration dinner']
      },
      {
        dayNumber: 12,
        title: 'Equator Crossing & Return to Entebbe for Departure',
        destination: 'Equator Line & Entebbe Airport',
        description: 'Drive back across the Ugandan heartland. Stop at the famous Equator landmark in Kayabwe for geographic demonstrations and unique artisan craft curio shopping.',
        morning: 'Depart Lake Bunyonyi, driving via Mbarara with views of rolling pasturelands.',
        afternoon: 'Stop at the Equator for lunch and the Coriolis water experiment; explore artisan craft stalls.',
        evening: 'Transfer to Entebbe International Airport for your return flight or onward journey.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Day room provided if evening departure',
        highlights: ['Equator water experiment', 'Artisan fair trade gifts', 'Fond farewell to Africa']
      }
    ],
    included: [
      'Transport in specialized 4x4 safari vehicle with pop-up roof and charging ports',
      'Services of a professional Jamainus Safaris English-speaking cultural safari director',
      'All 11 nights lodge and hotel accommodations on full-board basis (breakfast, lunch, dinner)',
      'All park entrance fees to Queen Elizabeth National Park and Kazinga Channel boat safari',
      'All community, heritage, elder, and cultural activity donations & permits',
      'Mabira Forest guided walk, Kasubi Tombs, and Source of the Nile visit',
      'Chimpanzee tracking permit in Kibale Forest (subject to UWA availability)',
      'Dugout canoe expedition on Lake Bunyonyi and Katwe salt lake historical tour',
      'Unlimited purified drinking water inside safari vehicle throughout all days',
      'Airport pick-up and drop-off transfers'
    ],
    excluded: [
      'International flights and entry visas for Uganda',
      'Personal travel & medical insurance (strongly recommended)',
      'Alcoholic beverages and premium sodas during dinners',
      'Optional mountain gorilla permit (can be added seamlessly to Day 10)',
      'Gratuities for driver-guide, cultural elders, and lodge staff',
      'Personal purchases, souvenirs, and laundry services'
    ],
    packingAdvice: [
      'Comfortable lightweight hiking shoes for nature trails and village walks',
      'Modest cultural clothing covering knees and shoulders for village and sacred site visits',
      'Warm fleece or jacket for cool highland evenings in Bwindi, Sipi, and Bunyonyi',
      'Broad-brimmed sun hat, sunglasses, and eco-friendly insect repellent',
      'Reusable water bottle, binoculars for birdwatching, and camera with extra memory cards'
    ]
  },

  // 2. Signature Experience: The East African Discovery Trail
  {
    id: 'east-african-discovery-trail',
    title: 'The East African Discovery Trail',
    tagline: 'A regional trans-border odyssey linking Uganda, Rwanda, Kenya & Tanzania',
    pillar: 'cultural',
    pillarLabel: 'Regional Expedition',
    durationDays: 14,
    durationNights: 13,
    startLocation: 'Kigali, Rwanda or Entebbe, Uganda',
    endLocation: 'Nairobi, Kenya or Arusha, Tanzania',
    countries: ['Uganda', 'Rwanda', 'Kenya', 'Tanzania'],
    difficulty: 'Active',
    groupSize: 'Small Group (4-8 travelers) or Private Custom',
    idealFor: 'Broad-minded adventurers, cross-border travelers, nature & culture lovers',
    featured: true,
    overview: 'A milestone regional travel concept bringing together nature, wildlife, cultural encounters, agricultural landscapes, and historical heritage sites across East Africa. From the clean hills of Kigali to Uganda’s primate forests, Kenya’s great savannahs, and Tanzania’s volcanic wonders.',
    keyHighlights: [
      'Multi-country regional immersion combining Uganda, Rwanda, Kenya, and Tanzania',
      'Kigali Genocide Memorial and Rwanda cultural reconciliation initiatives',
      'Bwindi or Volcanoes primate-tracking encounter in ancient Afro-montane rainforest',
      'Cross-border overland expedition through the dramatic Great Rift Valley',
      'Maasai and Karamojong indigenous pastoralist heritage dialogues',
      'World-famous wildlife migrations across Serengeti and Maasai Mara ecosystem',
      'Swahili cultural and spice culinary heritage connections'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Kigali – Clean Hills & Modern African Renaissance',
        destination: 'Kigali, Rwanda',
        description: 'Arrive in Kigali, acclaimed as Africa’s cleanest city. Orientation on East African historical connections and dinner featuring Rwandan culinary traditions.',
        morning: 'Airport pick-up and check-in to boutique hotel.',
        afternoon: 'Guided visit to the Kigali Genocide Memorial to honor history and understand peacebuilding.',
        evening: 'Dinner with views over Kigali’s illuminated rolling hills.',
        mealsIncluded: 'Dinner',
        accommodationType: 'Hotel des Mille Collines / Heaven Restaurant & Boutique Hotel, Kigali',
        highlights: ['Kigali clean city tour', 'Genocide memorial reflection', 'Rwandan cuisine']
      },
      {
        dayNumber: 2,
        title: 'Kigali to Volcanoes National Park / Bwindi Highland Frontier',
        destination: 'Musanze / Kisoro Border',
        description: 'Travel through the thousand hills of Rwanda toward the dramatic Virunga volcano range, crossing into southwestern Uganda.',
        morning: 'Visit the Kimironko Artisan Market; drive through terraced volcanic ridges.',
        afternoon: 'Cross Cyanika border into Uganda’s misty mountain gorilla sanctuary.',
        evening: 'Lodge check-in with views of Mount Muhavura and Mount Gahinga.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mount Gahinga Lodge / Chameleon Hill Lodge',
        highlights: ['Virunga volcanoes landscape', 'Artisan market visit', 'Cross-border transition']
      },
      {
        dayNumber: 3,
        title: 'Mountain Gorilla Tracking in Bwindi / Mgahinga Primates',
        destination: 'Bwindi Impenetrable National Park',
        description: 'An unforgettable encounter with a habituated mountain gorilla family in their lush natural habitat, guided by experienced conservation rangers.',
        morning: 'Ranger briefing at park headquarters; trek into the mist-covered montane forest.',
        afternoon: 'One precious hour observing gentle giant gorillas interacting in the canopy.',
        evening: 'Celebration dinner and certificate of tracking ceremony at the lodge.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Bakiga Lodge / Rushaga Gorilla Camp',
        highlights: ['Mountain gorilla tracking', 'Afro-montane forest ecology', 'Conservation certificate']
      },
      {
        dayNumber: 4,
        title: 'Lake Bunyonyi to Queen Elizabeth Savannah Corridor',
        destination: 'Queen Elizabeth National Park',
        description: 'Traverse scenic highlands to the open plains of Queen Elizabeth National Park.',
        morning: 'Canoe across tranquil Lake Bunyonyi.',
        afternoon: 'Drive into Queen Elizabeth Park with afternoon game drive.',
        evening: 'Campfire under African night sky listening to distant lions and hyenas.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Enganzi Game Lodge / Elephant Plains Lodge',
        highlights: ['Lake Bunyonyi canoeing', 'Savannah entry game drive', 'Campfire stories']
      },
      {
        dayNumber: 5,
        title: 'Savannah Safari & Kazinga Channel Water Safari',
        destination: 'Queen Elizabeth National Park',
        description: 'Morning game drive across Kasenyi tracking lions and leopards, followed by a boat cruise along the Kazinga Channel.',
        morning: 'Dawn game drive across savannah trails.',
        afternoon: 'Boat cruise alongside thousands of hippos, Nile crocodiles, and elephant herds.',
        evening: 'Dinner featuring local fresh grilled tilapia and matooke.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Enganzi Game Lodge',
        highlights: ['Predator tracking', 'Kazinga channel boat cruise', 'Rift valley landscape']
      },
      {
        dayNumber: 6,
        title: 'Kampala & Flight/Drive to Kenya – Maasai Mara Ecosystem',
        destination: 'Nairobi / Maasai Mara, Kenya',
        description: 'Regional transit from Uganda into Kenya’s premier wildlife haven.',
        morning: 'Transfer to Entebbe/Nairobi flight or cross-border connection.',
        afternoon: 'Arrival at Maasai Mara National Reserve; check-in at tented safari camp.',
        evening: 'Sunset introductory game drive over endless golden savannah.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mara Serena Safari Lodge / Basecamp Explorer Mara',
        highlights: ['Trans-regional transit', 'Mara golden hour safari', 'Tented camp atmosphere']
      },
      {
        dayNumber: 7,
        title: 'Maasai Mara Big Cats & Pastoralist Community Dialogue',
        destination: 'Maasai Mara, Kenya',
        description: 'Full day exploring the Mara river crossings, cheetah hunting grounds, and visiting an authentic Maasai Manyatta village.',
        morning: 'Full-day game drive with picnic lunch under an acacia tree.',
        afternoon: 'Encounter lions, elephants, giraffes, zebras, and wildebeests.',
        evening: 'Maasai village visit led by community elders; understanding cattle culture and beadwork.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mara Serena Safari Lodge',
        highlights: ['Big Cats of the Mara', 'Authentic Maasai Manyatta dialogue', 'Acacia picnic']
      },
      {
        dayNumber: 8,
        title: 'Great Rift Valley Lakes – Lake Nakuru & Lake Naivasha',
        destination: 'Great Rift Valley, Kenya',
        description: 'Travel into the Great Rift Valley, viewing pink flamingos and walking among peaceful wildlife on Crescent Island.',
        morning: 'Game drive through Lake Nakuru sanctuary for rhinos and flamingos.',
        afternoon: 'Boat ride on Lake Naivasha; walking safari on Crescent Island alongside giraffes.',
        evening: 'Lakeside dinner surrounded by yellow-barked acacia fever trees.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Lake Naivasha Sopa Resort / Sawela Lodge',
        highlights: ['Rhino sanctuary Lake Nakuru', 'Crescent Island walking safari', 'Fever tree forest']
      },
      {
        dayNumber: 9,
        title: 'Transit to Tanzania via Namanga – Arusha Foothills',
        destination: 'Arusha, Tanzania',
        description: 'Cross the border into Northern Tanzania under the shadow of Mount Meru and Mount Kilimanjaro.',
        morning: 'Drive south through scenic agricultural landscapes to Namanga border.',
        afternoon: 'Customs clearance and entry into Tanzania; arrival in Arusha coffee country.',
        evening: 'Swahili spice dinner and introduction to Northern Tanzania safari circuit.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Arusha Planet Lodge / Mount Meru Game Lodge',
        highlights: ['Border crossing experience', 'Mount Meru view', 'Swahili culinary heritage']
      },
      {
        dayNumber: 10,
        title: 'Tarangire National Park – Giants of the Baobab Plains',
        destination: 'Tarangire National Park, Tanzania',
        description: 'Explore Tarangire, famous for ancient massive baobab trees and the largest elephant herds in East Africa.',
        morning: 'Drive to Tarangire; morning game drive along Tarangire River.',
        afternoon: 'Witness herds of elephants digging for subterranean water beneath huge baobabs.',
        evening: 'Lodge perched with panoramic view of the African wilderness.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Tarangire Safari Lodge / Maramboi Tented Lodge',
        highlights: ['Elephant herds in baobab forests', 'Tarangire river wildlife', 'Sundowner views']
      },
      {
        dayNumber: 11,
        title: 'Ngorongoro Crater – The Eighth Wonder of the Natural World',
        destination: 'Ngorongoro Conservation Area',
        description: 'Descend 600 meters into the world’s largest unbroken volcanic caldera teeming with over 25,000 large animals.',
        morning: 'Early morning crater floor descent through lush montane rim forests.',
        afternoon: 'Game drive across the caldera: black rhinos, pride of lions, flamingos on Lake Magadi.',
        evening: 'Ascend to the crater rim for panoramic sunset views.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Ngorongoro Serena Safari Lodge / Rhino Lodge',
        highlights: ['Caldera floor descent', 'Critically endangered Black Rhino sighting', 'Crater rim sunset']
      },
      {
        dayNumber: 12,
        title: 'Serengeti National Park – Endless Savannah Plains',
        destination: 'Central Serengeti (Seronera)',
        description: 'Enter the world-renowned Serengeti plains, home to the greatest terrestrial mammal spectacle on earth.',
        morning: 'Drive through Olduvai Gorge, the cradle of mankind, learning about early hominid fossils.',
        afternoon: 'Endless plains game drive spotting cheetahs on kopjes and leopard in sausage trees.',
        evening: 'Dinner at tented camp with true sounds of wild Africa.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Serengeti Kati Kati Tented Camp / Kubu Kubu Lodge',
        highlights: ['Olduvai Gorge archaeological site', 'Serengeti kopjes predators', 'Wild tented stay']
      },
      {
        dayNumber: 13,
        title: 'Full Day Serengeti Deep Safari & Maasai-Datoga Cultural Exchange',
        destination: 'Serengeti National Park',
        description: 'Deep game exploration followed by respectful visits to nearby traditional pastoral and blacksmith communities.',
        morning: 'Dawn balloon safari or sunrise game drive over the Mara/Seronera river.',
        afternoon: 'Cultural learning exchange with Datoga metal artisans and pastoralists.',
        evening: 'Farewell regional safari banquet celebrating four extraordinary nations.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Serengeti Kati Kati Tented Camp',
        highlights: ['Sunrise predator action', 'Datoga artisan blacksmith encounter', 'Farewell safari feast']
      },
      {
        dayNumber: 14,
        title: 'Flight from Serengeti to Arusha / Kilimanjaro International Airport',
        destination: 'Arusha / Kilimanjaro',
        description: 'Scenic bush flight over the Great Rift Valley back to Arusha. Connect to international flight home.',
        morning: 'Final morning sunrise game drive; transfer to Seronera airstrip.',
        afternoon: 'Scenic bush plane flight to Arusha; day room and gift shopping for Tanzanian tanzanite and wood carvings.',
        evening: 'Transfer to Kilimanjaro International Airport (JRO) for departure.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Day room included in Arusha',
        highlights: ['Scenic bush flight over Rift Valley', 'African curio & spice shopping', 'Departure home']
      }
    ],
    included: [
      'Comprehensive regional ground transport in custom 4x4 safari landcruisers',
      'All 13 nights accommodations in selected lodges and deluxe eco-tented camps',
      'All meals throughout the safari (full board)',
      'Cross-border assistance and international park conservation fees in Uganda, Rwanda, Kenya, Tanzania',
      'Services of certified multilingual regional safari directors',
      'Ngorongoro crater floor fee, Olduvai Gorge entrance, and Tarangire fees',
      'Kazinga channel boat cruise and Lake Naivasha boat excursion',
      'All community visits, elder storytelling, and cultural custodian protocol fees',
      'Domestic flight connection or bush flight as detailed in final itinerary',
      '24/7 emergency medical evacuation insurance coverage'
    ],
    excluded: [
      'International flights to Kigali / from Kilimanjaro or Nairobi',
      'East Africa Tourist Visa or single entry visas (we provide visa advisory)',
      'Primate permits (Gorilla permit in Uganda/Rwanda arranged upon request)',
      'Optional hot air balloon safari over Serengeti or Maasai Mara',
      'Tips and gratuities for safari guides and camp staff',
      'Personal travel insurance'
    ],
    packingAdvice: [
      'Layered clothing suitable for chilly highland mornings and warm savannah days',
      'Neutral earth-toned clothing (khaki, olive, tan; avoid dark blue and bright black which attract tsetse flies)',
      'Soft-sided duffel luggage (required for domestic bush flights, max 15kg)',
      'Passport valid for at least 6 months with multiple blank pages for border stamps'
    ]
  },

  // 3. Signature Experience: The Coffee, Tea, and Agricultural Heritage Trail
  {
    id: 'coffee-tea-agricultural-trail',
    title: 'The Coffee, Tea, and Agricultural Heritage Trail',
    tagline: 'Experience Africa through its fertile soils, Arabica highlands, and rural cooperatives',
    pillar: 'agritourism',
    pillarLabel: 'Agritourism',
    durationDays: 7,
    durationNights: 6,
    startLocation: 'Entebbe / Kampala, Uganda',
    endLocation: 'Entebbe / Kampala, Uganda',
    countries: ['Uganda'],
    difficulty: 'Easy',
    groupSize: 'Small Group (2-12 travelers) or Private',
    idealFor: 'Foodies, coffee enthusiasts, agronomists, eco-travelers, sustainable living advocates',
    featured: true,
    overview: 'A specialized sensory and educational expedition through Uganda’s richest agricultural landscapes. Based from Jamainus Safaris home in Mbale, explore world-renowned Mount Elgon Arabica coffee farms, high-altitude tea plantations, Mukono organic cocoa and vanilla estates, and smallholder farmer cooperatives.',
    keyHighlights: [
      'Hands-on bean-to-cup Mount Elgon Arabica coffee harvesting, pulping, roasting, and cupping',
      'Visits to smallholder farmers and women-led agricultural cooperatives in Kapchorwa and Mbale',
      'Highland tea estate plucking and organic tea factory tour in Fort Portal / Mpanga',
      'Mukono organic cocoa and fragrant bourbon vanilla farm-to-table culinary workshop',
      'Traditional agricultural cooking methods, heirloom seed preservation, and permaculture gardens',
      'Scenic hike to Sipi Falls waterfalls integrated within community coffee smallholdings',
      'Direct contribution to sustainable rural farming livelihoods'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Entebbe & Kampala Botanical Introduction',
        destination: 'Entebbe / Kampala',
        description: 'Arrive in Uganda. Visit the historic Entebbe Botanical Gardens founded in 1898 to view original colonial agricultural specimen trees including coffee, rubber, and indigenous medicinal flora.',
        morning: 'Airport pick-up and transfer.',
        afternoon: 'Guided walk in Entebbe Botanical Gardens with an indigenous botanist.',
        evening: 'Dinner featuring fresh Ugandan organic produce and local herbal tea infusion.',
        mealsIncluded: 'Dinner',
        accommodationType: 'The Boma Hotel / Lake Victoria Serena',
        highlights: ['Botanical heritage walk', 'Medicinal flora introduction', 'Organic dinner']
      },
      {
        dayNumber: 2,
        title: 'Mukono Cocoa, Vanilla & Spice Heritage Route',
        destination: 'Mukono & Mabira Corridor',
        description: 'Explore the fertile Mukono basin where high-grade cocoa pods, fragrant vanilla orchids, and spices thrive under tropical agroforestry shade.',
        morning: 'Drive to Mukono organic agroforestry farm; discover the delicate manual pollination of vanilla orchids.',
        afternoon: 'Cocoa pod harvesting demonstration, fermentation boxes, and sun-drying racks; taste raw cacao pulp and pure artisan chocolate.',
        evening: 'Overnight in Jinja along the banks of the Nile.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'The Haven River Lodge / Jinja Nile Resort',
        highlights: ['Vanilla orchid pollination', 'Cocoa fermentation & tasting', 'River Nile sunset']
      },
      {
        dayNumber: 3,
        title: 'Journey to the Arabica Highland Capital – Mbale & Mount Elgon',
        destination: 'Mbale, Eastern Uganda',
        description: 'Drive to Mbale, the vibrant hub of Bugisu Arabica coffee. Mount Elgon’s volcanic soil produces some of the world’s most prized high-altitude Arabica beans.',
        morning: 'Scenic drive to Mbale; visit the historic Bugisu Cooperative Union (BCU) headquarters.',
        afternoon: 'Meet senior cooperative elders and learn about smallholder coffee grower history since 1954.',
        evening: 'Dinner hosted at Jamainus Safaris community pavilion in Mbale.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel / Wash and Wills',
        highlights: ['Historic Bugisu Cooperative Union', 'Volcanic soil agro-ecology', 'Mbale hospitality']
      },
      {
        dayNumber: 4,
        title: 'Sipi Falls Arabica Coffee: Harvest to Cup Experience',
        destination: 'Sipi Falls, Kapchorwa (1,800m - 2,200m altitude)',
        description: 'Ascend to the steep slopes of Mount Elgon. Join a local farming family in their coffee shambas.',
        morning: 'Walk through organic shade-grown coffee gardens, hand-picking ripe red cherries.',
        afternoon: 'Hand-cranking the pulping machine, washing, sun-drying, roasting over an open fire in clay pots, and grinding in a wooden mortar.',
        evening: 'Brew and cup the freshest coffee of your life with views of the thunderous Sipi Falls.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge / Rafiki Lodge Sipi',
        highlights: ['Shade-grown coffee harvest', 'Open-fire artisanal roasting', 'Sipi Falls panorama']
      },
      {
        dayNumber: 5,
        title: 'Highland Agricultural Co-ops, Seed Traditions & Herbal Gardens',
        destination: 'Mount Elgon Slopes',
        description: 'Discover indigenous seed preservation, traditional pest management, and medicinal herb gardens integrated into food production.',
        morning: 'Visit a women’s organic farming collective cultivating heirloom beans, millet, and indigenous greens.',
        afternoon: 'Guided walk through a traditional herbal nursery with a community healer and agro-ecologist.',
        evening: 'Farm-to-table banquet prepared using ingredients gathered directly during your morning farm visits.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge',
        highlights: ['Heirloom seed saving', 'Medicinal botanical nursery', 'Farm-to-table organic banquet']
      },
      {
        dayNumber: 6,
        title: 'Lush Tea Estates of Mpanga & Mabira Agro-Forestry Corridor',
        destination: 'Central Uganda Tea Belt',
        description: 'Explore the emerald rolling carpets of Uganda’s tea estates.',
        morning: 'Depart highlands toward central Uganda tea estates.',
        afternoon: 'Join local tea pluckers with traditional baskets, learning the art of "two leaves and a bud"; tour the rolling, drying, and grading factory.',
        evening: 'Tea tasting ceremony comparing orthodox black tea, green tea, and silver tips.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Rainforest Lodge Mabira / Lake Victoria Hotel Entebbe',
        highlights: ['Tea plucking technique', 'Factory processing tour', 'Tea cupping masterclass']
      },
      {
        dayNumber: 7,
        title: 'Kampala Organic Farmers Market & Return Journey',
        destination: 'Kampala & Entebbe Airport',
        description: 'Conclude your agricultural pilgrimage exploring a bustling local produce market before departing for the airport.',
        morning: 'Visit Nakasero Fresh Produce Market to see how rural harvests supply the bustling city.',
        afternoon: 'Purchase packaged single-origin Mount Elgon coffee and fair-trade dried fruits directly supporting farmer co-ops.',
        evening: 'Transfer to Entebbe International Airport for outbound flights.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Nakasero vibrant market', 'Direct trade coffee gifts', 'Departure']
      }
    ],
    included: [
      'Full ground transport in comfortable 4x4 safari van/cruiser',
      'All 6 nights accommodations in selected eco-lodges and countryside hotels',
      'All meals (full board) with authentic farm-to-table culinary focus',
      'Dedicated Jamainus Safaris agronomist and cultural guide',
      'All farm entry fees, cooperative donations, and demonstration costs',
      'Full Sipi bean-to-cup hands-on roasting workshop and souvenir sample bag',
      'Tea factory tour and professional cupping session',
      'Sipi Falls hike fees and local community guide fees',
      'Unlimited drinking water during transfers'
    ],
    excluded: [
      'International flights and visas',
      'Personal alcoholic beverages',
      'Tips for farmer hosts and guides',
      'Personal purchases and cargo shipping for coffee beans'
    ],
    packingAdvice: [
      'Comfortable walking shoes with good grip for muddy garden paths',
      'Light rain jacket for highland mountain showers',
      'Camera or notebook for recording recipes and processing steps'
    ]
  },

  // 4. Signature Experience: The Forest, Herbs, and Heritage Experience
  {
    id: 'forest-herbs-heritage-experience',
    title: 'The Forest, Herbs, and Heritage Experience',
    tagline: 'An indigenous botanical and forest sanctuary journey into ancient plant lore',
    pillar: 'cultural',
    pillarLabel: 'Botanical & Cultural',
    durationDays: 8,
    durationNights: 7,
    startLocation: 'Entebbe / Kampala, Uganda',
    endLocation: 'Entebbe / Kampala, Uganda',
    countries: ['Uganda'],
    difficulty: 'Moderate',
    groupSize: 'Small Group (2-8 travelers) or Private',
    idealFor: 'Herbalists, botanical researchers, holistic wellness travelers, forest therapy seekers',
    featured: true,
    overview: 'A guided exploration of Uganda’s oldest primary forests, biodiversity hotspots, traditional plant heritage, and indigenous botanical knowledge. Shared by willing local custodians with utmost cultural respect and ethical consent, without unsupported claims, celebrating the symbiotic connection between forests and African communities.',
    keyHighlights: [
      'Guided indigenous ethnobotanical walks in Mabira, Kibale, and Bwindi Impenetrable forests',
      'Encounters with community botanical elders sharing traditional bark, root, and leaf usages',
      'Medicinal tree conservation and reforestation projects on Mount Elgon foothills',
      'Forest canopy bathing, bird acoustic recording, and ancient tree identification',
      'Learning how indigenous communities preserved forest sanctuaries before modern parks',
      'Ethical herbal preparation workshops: balms, teas, and natural plant soaps'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Entebbe – Introduction to Tropical Rainforest Ecology',
        destination: 'Entebbe',
        description: 'Arrive in Uganda. Orientation on ethical guidelines concerning traditional knowledge and consent.',
        morning: 'Airport pickup and check-in to quiet lakeside lodge.',
        afternoon: 'Orientation briefing on traditional knowledge protocols and environmental ethics.',
        evening: 'Dinner with fresh botanical infusions.',
        mealsIncluded: 'Dinner',
        accommodationType: 'Karibu Guest House Entebbe',
        highlights: ['Orientation on ethical protocols', 'Lakeside botanical relaxation']
      },
      {
        dayNumber: 2,
        title: 'Mabira Ancient Forest – The Sacred Canopy & Herbal Trails',
        destination: 'Mabira Forest Reserve',
        description: 'Explore Mabira Forest, central Uganda’s largest secondary and primary forest tract.',
        morning: 'Drive to Mabira; walk guided by veteran forest herbalists identifying medicinal tree barks and vines.',
        afternoon: 'Learn about indigenous forest conservation rules and traditional sacred groves.',
        evening: 'Sleep inside the forest surrounded by canopy sounds and tree hyrax calls.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Rainforest Lodge Mabira',
        highlights: ['Sacred tree groves', 'Medicinal vine identification', 'Canopy night sounds']
      },
      {
        dayNumber: 3,
        title: 'Journey to the Mount Elgon Montane Plant Sanctuaries',
        destination: 'Mbale & Mount Elgon',
        description: 'Travel to Eastern Uganda to investigate high-altitude medicinal flora uniquely adapted to volcanic soil.',
        morning: 'Drive via Eastern Uganda plains to Mbale.',
        afternoon: 'Visit a community-led medicinal arboretum in Mbale preserving endangered indigenous trees.',
        evening: 'Fireside conversation with elders regarding plant folklore and historical community healing.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel',
        highlights: ['High-altitude montane flora', 'Community arboretum visit', 'Elder oral traditions']
      },
      {
        dayNumber: 4,
        title: 'Mount Elgon Bamboo Zone & Water Catchment Ecology',
        destination: 'Mount Elgon National Park',
        description: 'Ascend into the bamboo belt of Mount Elgon, where the edible bamboo shoots (malewa) are harvested.',
        morning: 'Guided hike into the bamboo and podocarpus forest belt.',
        afternoon: 'Observe sustainable wild harvesting techniques practiced by local Bagisu communities.',
        evening: 'Traditional meal cooked using wild mountain herbs and bamboo shoots.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge',
        highlights: ['Bamboo zone ecology', 'Sustainable wild foraging techniques', 'Malewa culinary art']
      },
      {
        dayNumber: 5,
        title: 'Kibale Forest – The Primate Capital & Botanical Richness',
        destination: 'Kibale Forest National Park',
        description: 'Travel west to Kibale Forest, home to 351 tree species and extraordinary primate biodiversity.',
        morning: 'Scenic cross-country travel with picnic lunch.',
        afternoon: 'Forest edge plant walk documenting wild figs, ironwood trees, and wild nutmeg.',
        evening: 'Check-in to forest canopy camp.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Turaco Treetops / Primate Lodge Kibale',
        highlights: ['Wild figs and ancient ironwood', 'Canopy bird identification', 'Forest immersion']
      },
      {
        dayNumber: 6,
        title: 'Chimpanzee Forest Behavior & Primate Self-Medication Lore',
        destination: 'Kibale Forest',
        description: 'Morning chimpanzee trek; observe how wild primates consume specific bitter leaves and tree pith for self-medication.',
        morning: 'Guided chimpanzee trek with primatologists and ethnobotanists.',
        afternoon: 'Discussion with researchers on zoopharmacognosy (animal self-medication in the wild).',
        evening: 'Relaxation and tea tasting with wild lemongrass and hibiscus.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Turaco Treetops',
        highlights: ['Chimpanzee tracking', 'Zoopharmacognosy observation', 'Herbal tea cupping']
      },
      {
        dayNumber: 7,
        title: 'Bwindi Impenetrable Forest – The Afro-Montane Botanical Vault',
        destination: 'Bwindi Impenetrable Forest',
        description: 'Explore one of the oldest ecosystems on Earth, surviving the last ice age for over 25,000 years.',
        morning: 'Drive through volcanic rift landscapes to southern Bwindi.',
        afternoon: 'Walk the Munyaga waterfall botanical trail guided by indigenous Batwa custodians.',
        evening: 'Community demonstration on making natural soaps and balms from botanical extracts.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Bakiga Lodge / Mahogany Springs Bwindi',
        highlights: ['25,000-year-old ancient forest', 'Munyaga waterfall trail', 'Natural plant extract workshop']
      },
      {
        dayNumber: 8,
        title: 'Tree Planting Ceremony & Return to Entebbe',
        destination: 'Entebbe Airport',
        description: 'Conclude with a symbolic indigenous tree-planting ceremony offsetting safari emissions before departure.',
        morning: 'Plant native mahogany or prunus africana seedlings with a youth conservation club.',
        afternoon: 'Return drive to Entebbe with Equator lunch stop.',
        evening: 'Drop-off at Entebbe International Airport.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure',
        highlights: ['Tree-planting legacy ceremony', 'Equator crossing', 'Flight departure']
      }
    ],
    included: [
      'Transport in comfortable 4x4 safari cruiser',
      'All 7 nights accommodations in serene eco-lodges',
      'Full board meals including herbal culinary dinners',
      'Services of certified ethnobotanical guide and cultural custodians',
      'Chimpanzee tracking permit in Kibale Forest',
      'All forest walk permits (Mabira, Elgon, Kibale, Bwindi)',
      'Community arboretum visits, elder honorariums, and workshop materials',
      'Tree seedling donation for reforestation program'
    ],
    excluded: [
      'International flights and visas',
      'Optional gorilla tracking permit upgrade (Day 7)',
      'Gratuities and personal tips',
      'Travel insurance'
    ],
    packingAdvice: [
      'Good waterproof hiking boots and gaiters for forest undergrowth',
      'Botanical field notebook or sketchbook',
      'Light long-sleeve shirts and trousers for insect protection in primary forest'
    ]
  },

  // 5. Signature Experience: The Africa Faith and Heritage Trail
  {
    id: 'africa-faith-heritage-trail',
    title: 'The Africa Faith and Heritage Trail',
    tagline: 'A sacred journey exploring historic cathedrals, grand mosques, and pilgrimage shrines',
    pillar: 'spiritual',
    pillarLabel: 'Spiritual Tourism',
    durationDays: 6,
    durationNights: 5,
    startLocation: 'Entebbe / Kampala, Uganda',
    endLocation: 'Entebbe / Kampala, Uganda',
    countries: ['Uganda'],
    difficulty: 'Easy',
    groupSize: 'Pilgrimage Groups, Families, Interfaith Travelers (2-20)',
    idealFor: 'Pilgrims, faith leaders, religious historians, architectural admirers, cultural tourists',
    featured: true,
    overview: 'A profoundly inspiring journey exploring selected religious landmarks, historic places of worship, sacred heritage sites, and the vital role of faith in African communities. Visiting the world-renowned Uganda Martyrs Shrine at Namugongo, historic Christian cathedrals, the magnificent Gaddafi National Mosque, and sacred hills.',
    keyHighlights: [
      'Uganda Martyrs Basilica and Protestant Shrine at Namugongo (site of annual June 3 pilgrimage)',
      'Saint Paul’s Cathedral Namirembe (Uganda’s oldest cathedral, Anglican history)',
      'Saint Mary’s Cathedral Rubaga (Seat of Roman Catholic Archdiocese on historic royal hill)',
      'Uganda National Mosque (Gaddafi Mosque) with 360-degree panoramic minaret tower view',
      'Baha’i Mother Temple of Africa (the only Baha’i continental house of worship in Africa)',
      'Sacred landscapes, historic mission stations, and respectful interfaith dialogue seminars',
      'Community charitable visits in partnership with faith-based social institutions'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Entebbe & Historical Mission Settlement Walk',
        destination: 'Entebbe',
        description: 'Arrive at Entebbe. Visit the earliest Christian mission landing site in Kigungu where Father Siméon Lourdel and Brother Amans landed in 1879.',
        morning: 'Airport reception and check-in.',
        afternoon: 'Visit Father Lourdel memorial shrine and chapel at Kigungu on Lake Victoria.',
        evening: 'Quiet contemplation and welcome dinner.',
        mealsIncluded: 'Dinner',
        accommodationType: 'Laico Lake Victoria / 2 Friends Entebbe',
        highlights: ['Kigungu mission landing site', 'Lake Victoria reflections', 'Spiritual orientation']
      },
      {
        dayNumber: 2,
        title: 'The Seven Hills of Kampala – Sacred Cathedrals & Historic Mosques',
        destination: 'Kampala Hills',
        description: 'Explore the religious architecture of Kampala, built across scenic hills granted by ancient Buganda monarchs.',
        morning: 'Visit Rubaga Cathedral on Rubaga Hill; explore the sacred art and crypts.',
        afternoon: 'Tour Saint Paul’s Cathedral Namirembe; visit the memorial tombs of early missionary pioneers.',
        evening: 'Ascend to the Uganda National Mosque on Old Kampala Hill; climb the 270-step minaret for breathtaking 360-degree city views.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Cassia Lodge / Fairway Hotel Kampala',
        highlights: ['Rubaga Cathedral', 'Namirembe Anglican pioneer history', 'Old Kampala minaret panoramic view']
      },
      {
        dayNumber: 3,
        title: 'Uganda Martyrs Shrine Namugongo – Heart of African Pilgrimage',
        destination: 'Namugongo',
        description: 'A full day dedicated to the sacred history of the 22 Catholic and 23 Anglican martyrs canonized by the Vatican and commemorated globally.',
        morning: 'Visit the architectural marvel of Namugongo Catholic Basilica and the sacred holy water lake.',
        afternoon: 'Walk to the Protestant Martyrs Shrine and Museum documenting the historical events of 1886.',
        evening: 'Special prayer service or contemplative reflection; meeting with shrine custodians.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Cassia Lodge Kampala',
        highlights: ['Namugongo Basilica architecture', 'Martyrs Museum', 'Holy water lake reflection']
      },
      {
        dayNumber: 4,
        title: 'The Baha’i Mother Temple of Africa & Interfaith Harmony Center',
        destination: 'Kikaaya Hill & Kampala',
        description: 'Visit the Baha’i Mother Temple of Africa, sitting amid 52 acres of tranquil gardens on Kikaaya Hill, symbolizing unity of all mankind.',
        morning: 'Walk the serene contemplative gardens and attend quiet prayer session inside the temple.',
        afternoon: 'Roundtable dialogue on interfaith peacebuilding with Ugandan community faith leaders.',
        evening: 'Dinner with choir performance of traditional Ugandan sacred hymns.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Cassia Lodge Kampala',
        highlights: ['Baha’i Mother Temple of Africa', 'Interfaith peacebuilding session', 'Sacred choral music']
      },
      {
        dayNumber: 5,
        title: 'Eastern Pilgrimage Route to Bishop Hannington Memorial Shrine',
        destination: 'Kyando, Mayuge / Jinja',
        description: 'Travel east toward the historical shrine of Bishop James Hannington in Kyando, Mayuge district.',
        morning: 'Drive east across the Nile; visit the sacred rock caves and spring at Kyando.',
        afternoon: 'Learn the historical context of early cultural encounters and peace reconciliations.',
        evening: 'Relax by the tranquil River Nile; fireside spiritual reflection.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'The Haven River Lodge / Jinja Nile Resort',
        highlights: ['Bishop Hannington Memorial Shrine', 'Kyando sacred caves', 'Nile fireside prayer']
      },
      {
        dayNumber: 6,
        title: 'Faith in Action – Community Outreach & Departure',
        destination: 'Kampala & Entebbe Airport',
        description: 'Witness faith in action through a community educational project supported by Jamainus Charity Foundation before departing.',
        morning: 'Visit a vocational training center for young people with disabilities.',
        afternoon: 'Closing blessing, souvenir craft shopping, and transfer to Entebbe Airport.',
        evening: 'Flight departures.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Community outreach visit', 'Disability inclusion project', 'Airport departure']
      }
    ],
    included: [
      'All transfers in private air-conditioned tour vehicle',
      'All 5 nights accommodations with full board',
      'Professional spiritual & heritage safari guide',
      'All shrine entrance donations, minaret access, and site custodian fees',
      'Arrangements for private devotional times at shrines upon request',
      'Bottled drinking water throughout'
    ],
    excluded: [
      'International flights and visas',
      'Church/mosque collection donations (at traveler discretion)',
      'Personal travel insurance'
    ],
    packingAdvice: [
      'Respectful pilgrimage attire (long skirts/trousers, headscarf for mosque entry)',
      'Comfortable slip-on shoes for visiting places of worship',
      'Personal journal or devotional book'
    ]
  },

  // 6. Signature Experience: The African Rural Life Experience
  {
    id: 'african-rural-life-experience',
    title: 'The African Rural Life Experience',
    tagline: 'An authentic immersion into village livelihoods, farming, and community enterprise',
    pillar: 'cultural',
    pillarLabel: 'Community & Culture',
    durationDays: 6,
    durationNights: 5,
    startLocation: 'Mbale / Entebbe, Uganda',
    endLocation: 'Mbale / Entebbe, Uganda',
    countries: ['Uganda'],
    difficulty: 'Easy',
    groupSize: 'Small Group (2-8 travelers)',
    idealFor: 'Cultural travelers, families, students, educators, community development workers',
    featured: true,
    overview: 'An opportunity to step away from tourist corridors and understand real rural livelihoods, traditional farming, culinary heritage, craftsmanship, and everyday community life in Eastern Uganda through locally arranged, respectful village visits.',
    keyHighlights: [
      'Authentic homestead living and daily chores in a welcoming Eastern Ugandan village',
      'Learning traditional cooking: harvesting greens, grounding peanuts, and wood-stove cooking',
      'Hands-on clay pottery making, basket weaving, and traditional tool forging',
      'Visits to vibrant village weekly cattle and produce trading markets',
      'Storytelling evenings with village elders regarding historical clan lineages and customs',
      'Direct contribution to community household incomes through fair tourism partnerships'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Mbale – Welcome to the Village Gateway',
        destination: 'Mbale, Eastern Uganda',
        description: 'Arrive at Mbale base. Meet the host community liaison and receive traditional Bagisu welcome.',
        morning: 'Pickup from Entebbe/Kampala or Mbale.',
        afternoon: 'Orientation on village customs, appropriate greetings in Lugisu, and cultural etiquette.',
        evening: 'Welcome dinner featuring local groundnut stew and matooke.',
        mealsIncluded: 'Dinner',
        accommodationType: 'Mbale Resort Hotel or Village Eco-Cottages',
        highlights: ['Warm village welcome', 'Lugisu language greeting lesson', 'Traditional dinner']
      },
      {
        dayNumber: 2,
        title: 'A Day in the Life of a Rural Homestead',
        destination: 'Mount Elgon Foothills Homestead',
        description: 'Wake to the rooster’s call. Experience the morning rhythm of an African rural family.',
        morning: 'Milking family cows, gathering fresh water, and sweeping the homestead yard.',
        afternoon: 'Join the family in their smallholding garden: hoeing, weeding, and picking organic vegetables.',
        evening: 'Fireside preparation of roasted maize and sweet potatoes.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Homestead Guest Cottage / Mbale Eco Lodge',
        highlights: ['Hands-on morning chores', 'Garden harvest', 'Fireside evening stories']
      },
      {
        dayNumber: 3,
        title: 'Traditional Craftsmanship – Clay Pottery & Basket Weaving',
        destination: 'Artisan Women Collective',
        description: 'Spend time with skilled village artisans who transform natural river clay and banana fibers into functional art.',
        morning: 'Collect riverbed clay and shape cooking pots using ancestral hand techniques (no potter wheel).',
        afternoon: 'Basket weaving using natural dyes extracted from wild roots and leaves.',
        evening: 'Village folk singing and drumming performance by local youth group.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Homestead Guest Cottage',
        highlights: ['Handmade clay pottery', 'Natural dye basket weaving', 'Youth drum performance']
      },
      {
        dayNumber: 4,
        title: 'The Rural Weekly Market Day & Cattle Auction',
        destination: 'Local Village Market',
        description: 'Experience the electric color, commerce, and social vibrancy of a weekly rural open-air market.',
        morning: 'Walk to the market with village hosts carrying produce to trade.',
        afternoon: 'Explore stalls of vibrant kitenge fabrics, spices, hand-forged hoes, and livestock auctions.',
        evening: 'Share roasted goat meat skewers (muchomo) and local fresh banana juice.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Homestead Guest Cottage',
        highlights: ['Open-air market barter', 'Cattle auction excitement', 'Muchomo tasting']
      },
      {
        dayNumber: 5,
        title: 'Community School & Jamainus Charity Foundation Workshop',
        destination: 'Village Primary School & Health Outpost',
        description: 'Visit a rural community school to understand educational challenges and local resilience initiatives.',
        morning: 'Interact with teachers and students, sharing songs and educational games.',
        afternoon: 'Dialogue with community leaders on disability inclusion and women’s economic empowerment.',
        evening: 'Grand community farewell feast with traditional Bagisu Mwaga dance.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel',
        highlights: ['Community school interaction', 'Disability inclusion talk', 'Mwaga celebration dance']
      },
      {
        dayNumber: 6,
        title: 'Return to Kampala / Entebbe with Lasting Friendships',
        destination: 'Entebbe Airport',
        description: 'Say heartfelt goodbyes to host families and return with meaningful memories of authentic Africa.',
        morning: 'Farewell gift exchange of artisan baskets and coffee.',
        afternoon: 'Scenic drive to Entebbe with lunch on the shores of Lake Victoria.',
        evening: 'Departure flights.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Heartfelt farewell', 'Lake Victoria lunch', 'Airport drop-off']
      }
    ],
    included: [
      'Private 4x4 safari cruiser transport',
      'All 5 nights accommodations (eco-cottage / lodge options)',
      'Full board meals with authentic home-cooked foods',
      'Community host family compensation and artisan workshop materials',
      'Dedicated Jamainus community facilitator and English interpreter',
      'Drinking water provided daily'
    ],
    excluded: [
      'Flights and visas',
      'Personal donations to schools or families (voluntary)',
      'Travel insurance'
    ],
    packingAdvice: [
      'Modest village attire (long trousers, below-knee skirts)',
      'Slip-on shoes or sandals for household cleanliness',
      'Flashlight or headlamp for rural evenings'
    ]
  },

  // 7. Signature Experience: Wild Africa and Living Cultures
  {
    id: 'wild-africa-living-cultures',
    title: 'Wild Africa and Living Cultures',
    tagline: 'The ultimate fusion of Big Five wildlife wilderness and indigenous cultural traditions',
    pillar: 'wildlife',
    pillarLabel: 'Wildlife & Culture',
    durationDays: 10,
    durationNights: 9,
    startLocation: 'Entebbe, Uganda',
    endLocation: 'Entebbe, Uganda',
    countries: ['Uganda'],
    difficulty: 'Moderate',
    groupSize: '2 to 10 travelers',
    idealFor: 'First-time African safari travelers wanting both premier wildlife and deep human culture',
    featured: true,
    overview: 'A premier expedition that seamlessly combines world-class wildlife and nature experiences with vibrant cultural activities, local cuisine, heritage sites, and community engagement. Journeying through Murchison Falls, the dramatic savannahs of Kidepo Valley, and the Karamojong warrior pastoralists.',
    keyHighlights: [
      'Game drives across Murchison Falls National Park spotting lions, leopards, giraffes, and elephants',
      'Spectacular boat cruise on the River Nile to the thunderous bottom of Murchison Falls',
      'Exclusive expedition to remote Kidepo Valley National Park – Africa’s wildest frontier',
      'Cultural immersion in an authentic Karamojong Manyatta (homestead) in Moroto',
      'Tracking southern white rhinos on foot at Ziwa Rhino Sanctuary',
      'Trek to the top of Murchison Falls where the entire Nile squeezes through a 7-meter gorge'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Arrival in Entebbe – Gateway to Uganda',
        destination: 'Entebbe',
        description: 'Meet your Jamainus Safaris guide and transfer to your peaceful lodge on Lake Victoria.',
        morning: 'Airport arrival and reception.',
        afternoon: 'Relaxation and safari briefing.',
        evening: 'Welcome dinner.',
        mealsIncluded: 'Dinner',
        accommodationType: '2 Friends Beach Hotel Entebbe',
        highlights: ['Safari briefing', 'Lake Victoria sunset']
      },
      {
        dayNumber: 2,
        title: 'Ziwa Rhino Sanctuary & Murchison Falls National Park',
        destination: 'Ziwa Sanctuary & Murchison Falls',
        description: 'Track endangered white rhinos on foot with expert rangers before continuing to Murchison Falls.',
        morning: 'Drive north to Ziwa Rhino Sanctuary for on-foot tracking.',
        afternoon: 'Continue through Masindi to Murchison Falls National Park.',
        evening: 'Dinner with views of the sunset over the River Nile.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Pakuba Safari Lodge / Paraa Safari Lodge',
        highlights: ['On-foot rhino tracking', 'Entry to Murchison Falls park']
      },
      {
        dayNumber: 3,
        title: 'Murchison Falls Savannah Safari & Nile Boat Cruise',
        destination: 'Murchison Falls National Park',
        description: 'Morning game drive across northern savannah trails and an afternoon boat cruise to the base of the world’s most powerful waterfall.',
        morning: 'Dawn game drive: lions, Rothschild giraffes, Cape buffalo, and Jackson hartebeests.',
        afternoon: 'Boat cruise along the Nile encountering hippos, giant Nile crocs, and elephants.',
        evening: 'Hike to the thunderous top of Murchison Falls where 300 cubic meters of water crash every second.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Pakuba Safari Lodge',
        highlights: ['Predator game drive', 'Nile river boat cruise', 'Top of Murchison Falls gorge']
      },
      {
        dayNumber: 4,
        title: 'Journey to the Wild Frontier – Kitgum & Kidepo Valley',
        destination: 'Northern Uganda & Kidepo',
        description: 'Travel into northern Uganda, observing Acholi architectural settlements with conical thatched roofs.',
        morning: 'Drive through Gulu and Kitgum across dramatic northern savannah landscapes.',
        afternoon: 'Arrive at the remote rugged mountain boundary of Kidepo Valley National Park.',
        evening: 'First sunset over the Narus Valley; hear roar of lions in the distance.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Kidepo Savannah Lodge / Apoka Safari Lodge',
        highlights: ['Acholi architectural villages', 'Remote northern terrain', 'Narus Valley sunset']
      },
      {
        dayNumber: 5,
        title: 'Kidepo Valley Deep Wilderness Game Safari',
        destination: 'Kidepo Valley National Park',
        description: 'Full day exploring Africa’s true lost wilderness. Kidepo boasts wildlife found nowhere else in Uganda including cheetahs, ostriches, and bat-eared foxes.',
        morning: 'Dawn game drive in Narus Valley around water holes.',
        afternoon: 'Game drive through Kidepo River sand bed and Borassus palm forests.',
        evening: 'Sundowner on rocky outcrops with sweeping panoramic wilderness views.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Kidepo Savannah Lodge',
        highlights: ['Cheetah and ostrich tracking', 'Narus valley waterhole herds', 'Panoramic mountain backdrop']
      },
      {
        dayNumber: 6,
        title: 'Karamojong Manyatta Cultural Immersion',
        destination: 'Kotido / Moroto Environs',
        description: 'Spend the day with the proud pastoralist Karamojong people, learning about their ancient cattle culture, warrior traditions, and vibrant beadwork.',
        morning: 'Visit an authentic Manyatta (walled thorn settlement) guided by local youth.',
        afternoon: 'Join the cattle kraal, witness traditional jumping dances and archery demonstrations.',
        evening: 'Fireside dialogue with village elders on nomadic heritage and climate resilience.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Kara-Tunga Safari Camp Moroto',
        highlights: ['Authentic Manyatta village visit', 'Karamojong jumping dance', 'Cattle culture insight']
      },
      {
        dayNumber: 7,
        title: 'Mount Moroto & Eastern Uganda Highlands Transition',
        destination: 'Moroto & Sipi Foothills',
        description: 'Descend from Karamoja into the lush green terraces of Eastern Uganda and Mount Elgon.',
        morning: 'Walk along the foothills of Mount Moroto with Tepeth indigenous guides.',
        afternoon: 'Scenic drive to Sipi Falls in Kapchorwa; temperature cools pleasantly.',
        evening: 'Dinner overlooking the three-tier Sipi waterfalls.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge / Rafiki Lodge Sipi',
        highlights: ['Tepeth hill walk', 'Karamoja to Elgon transition', 'Sipi waterfall views']
      },
      {
        dayNumber: 8,
        title: 'Sipi Falls Adventure & Coffee Roasting with Local Farmers',
        destination: 'Sipi Falls & Mbale',
        description: 'Hike the dramatic waterfalls and process Arabica coffee with local smallholder farmers.',
        morning: 'Guided hike to the 3 Sipi Falls caves and cascades.',
        afternoon: 'Coffee picking and roasting masterclass with community co-op.',
        evening: 'Arrive at Jamainus Safaris home base in Mbale.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel',
        highlights: ['Sipi 3 waterfalls trek', 'Artisan coffee cupping', 'Mbale city relaxation']
      },
      {
        dayNumber: 9,
        title: 'Jinja Adventure – Source of the Nile & White Water Rapids',
        destination: 'Jinja on the River Nile',
        description: 'Travel to Jinja, the adventure capital of East Africa. Take a boat to the historic Source of the Nile where John Hanning Speke stood in 1858.',
        morning: 'Drive to Jinja; boat cruise to the actual underwater spring source of the Nile.',
        afternoon: 'Optional mild grade white water rafting, tubing, or sunset horseback riding alongside the river.',
        evening: 'Riverside barbecue dinner.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'The Haven River Lodge / Jinja Nile Resort',
        highlights: ['Source of the Nile monument', 'River Nile boat cruise', 'Adventure river activities']
      },
      {
        dayNumber: 10,
        title: 'Return to Entebbe via Sezibwa Cultural Falls & Departure',
        destination: 'Kampala & Entebbe Airport',
        description: 'Visit Sezibwa Falls, an ancient cultural and spiritual site steeped in Buganda folk legends, before transfer to airport.',
        morning: 'Drive toward Kampala with stop at Sezibwa cultural waterfall.',
        afternoon: 'Farewell lunch and craft shopping in Kampala.',
        evening: 'Transfer to Entebbe International Airport for your flight.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Sezibwa cultural waterfall', 'Ugandan craft shopping', 'Airport drop-off']
      }
    ],
    included: [
      '4x4 customized safari vehicle with pop-up roof for game viewing',
      '9 nights quality accommodations on full board',
      'Services of certified English-speaking safari guide & cultural specialist',
      'All park entrance fees: Murchison Falls and Kidepo Valley',
      'Ziwa Rhino Sanctuary on-foot tracking fee',
      'Boat cruise on the River Nile and hike to top of Murchison Falls',
      'Karamojong Manyatta cultural immersion and community fees',
      'Source of the Nile boat cruise and Sipi Falls hike',
      'Bottled drinking water provided daily'
    ],
    excluded: [
      'International flights and visas',
      'Optional white water rafting in Jinja',
      'Gratuities for driver-guide and lodge staff',
      'Personal travel insurance'
    ],
    packingAdvice: [
      'Dust-proof cover or scarf for Karamoja open roads',
      'Comfortable lightweight safari attire in neutral khaki/green tones',
      'Warm fleece for cool nights in Kidepo and Sipi',
      'Binoculars and telephoto camera lens'
    ]
  },

  // 8. Classic Uganda Safari: 4-Day Bwindi Ultimate Mountain Gorilla Experience
  {
    id: 'bwindi-gorilla-trekking-4day',
    title: '4-Day Bwindi Ultimate Mountain Gorilla Experience',
    tagline: 'Face-to-face encounter with gentle giant mountain gorillas in ancient rainforest',
    pillar: 'wildlife',
    pillarLabel: 'Wildlife & Nature',
    durationDays: 4,
    durationNights: 3,
    startLocation: 'Entebbe or Kigali',
    endLocation: 'Entebbe or Kigali',
    countries: ['Uganda'],
    difficulty: 'Active',
    groupSize: '1 to 8 travelers',
    idealFor: 'Wildlife lovers, photographers, bucket-list adventure travelers',
    featured: false,
    overview: 'The definitive Ugandan primate pilgrimage. Venture deep into Bwindi Impenetrable National Park, a UNESCO World Heritage site housing more than half the world’s surviving mountain gorillas, followed by relaxing canoe glides on stunning Lake Bunyonyi.',
    keyHighlights: [
      'Official Uganda Wildlife Authority (UWA) Mountain Gorilla tracking permit included',
      'One magical hour in the presence of a habituated gorilla family',
      'Scenic traverse across the Equator line and western Uganda rolling highlands',
      'Batwa indigenous cultural storytelling experience',
      'Tranquil dugout canoe relaxation on Lake Bunyonyi'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Entebbe/Kampala to Bwindi Impenetrable Forest',
        destination: 'Bwindi Impenetrable National Park',
        description: 'Depart early morning from Entebbe or Kampala, crossing the Equator line at Kayabwe with photo stop. Journey through Mbarara and rolling Kigezi highlands.',
        morning: 'Early morning pickup in 4x4 cruiser; Equator demonstration stop.',
        afternoon: 'Lunch in Mbarara; wind through terraced hillside roads to Bwindi.',
        evening: 'Lodge check-in; hear sounds of the primeval rainforest.',
        mealsIncluded: 'Lunch, Dinner',
        accommodationType: 'Bakiga Lodge / Rushaga Gorilla Lodge',
        highlights: ['Equator crossing', 'Kigezi terraced hills', 'Rainforest arrival']
      },
      {
        dayNumber: 2,
        title: 'The Gorilla Trekking Day in Bwindi',
        destination: 'Bwindi National Park',
        description: 'The pinnacle day! Meet rangers at 7:30 AM for tracking protocols before entering the dense emerald canopy.',
        morning: 'Trek through misty valleys guided by machete-carrying rangers.',
        afternoon: 'Spend one awe-inspiring hour observing silverbacks, mothers, and playful infants.',
        evening: 'Batwa indigenous community performance and celebration dinner.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Bakiga Lodge',
        highlights: ['Mountain gorilla tracking', 'Silverback eye contact', 'Batwa forest lore']
      },
      {
        dayNumber: 3,
        title: 'Bwindi to Lake Bunyonyi – Island Canoe Glide',
        destination: 'Lake Bunyonyi',
        description: 'Travel to Lake Bunyonyi, famed for bilharzia-free crystal waters and 29 emerald islands.',
        morning: 'Leisurely breakfast; scenic drive to Lake Bunyonyi.',
        afternoon: 'Guided dugout canoe excursion visiting Punishment Island and local crafts.',
        evening: 'Relax on the water terrace with fresh crayfish dinner.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Birdnest Resort Bunyonyi',
        highlights: ['Lake Bunyonyi scenic boat glide', 'Punishment Island folklore', 'Crayfish dinner']
      },
      {
        dayNumber: 4,
        title: 'Lake Bunyonyi to Entebbe / Kigali & Departure',
        destination: 'Entebbe / Kigali',
        description: 'Return journey to Entebbe or short 4-hour drive to Kigali for departure flight.',
        morning: 'Breakfast with morning lake mist; begin return drive.',
        afternoon: 'Lunch stop and traditional drum makers market.',
        evening: 'Airport drop-off for flight home.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Igongo cultural center lunch', 'Drum makers curio market', 'Departure']
      }
    ],
    included: [
      'Official UWA Mountain Gorilla Trekking Permit (Value $800 included)',
      'Ground transport in customized 4x4 safari cruiser with pop-up roof',
      '3 nights accommodation with full board',
      'Professional safari driver-guide',
      'Lake Bunyonyi canoe excursion and Batwa cultural encounter',
      'All government taxes and park entry fees'
    ],
    excluded: [
      'International flights and visas',
      'Porter hire during gorilla trekking ($15-$20 recommended)',
      'Tips and personal expenses'
    ],
    packingAdvice: [
      'Sturdy waterproof hiking boots with ankle support',
      'Garden gloves for gripping thorny vegetation during steep climbs',
      'Long socks to tuck trousers into (prevents safari ants)',
      'Rain jacket and lightweight warm fleece'
    ]
  },

  // 9. Classic Uganda Safari: 5-Day Mount Elgon & Sipi Falls Explorer (Mbale Circuit)
  {
    id: 'mount-elgon-sipi-falls-5day',
    title: '5-Day Mount Elgon & Sipi Falls Explorer',
    tagline: 'The home circuit of Jamainus Safaris – majestic waterfalls, Arabica coffee & caldera trails',
    pillar: 'agritourism',
    pillarLabel: 'Agritourism & Hiking',
    durationDays: 5,
    durationNights: 4,
    startLocation: 'Mbale or Entebbe, Uganda',
    endLocation: 'Mbale or Entebbe, Uganda',
    countries: ['Uganda'],
    difficulty: 'Active',
    groupSize: '2 to 12 travelers',
    idealFor: 'Hikers, coffee lovers, nature enthusiasts, photographers',
    featured: false,
    overview: 'Experience the home territory of Jamainus Safaris in Eastern Uganda. Mount Elgon boasts the largest intact volcanic caldera in the world, surrounded by the stunning 3-tier Sipi Falls, rich Bagisu and Sabiny heritage, and aromatic Arabica coffee plantations.',
    keyHighlights: [
      'Trek all 3 cascades of Sipi Falls with local Sabiny mountaineers',
      'Hands-on bean-to-cup coffee experience on Mount Elgon volcanic slopes',
      'Mount Elgon National Park day hike to Kapkwai exploration center and Chebonet falls',
      'Explore ancient caves once used as livestock shelters by mountain pastoralists',
      'Visit Jamainus Safaris community outreach and disability inclusion initiatives in Mbale'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Transfer to Mbale – Heart of Eastern Uganda',
        destination: 'Mbale, Eastern Uganda',
        description: 'Journey east across the Nile bridge at Jinja, arriving at the foot of Mount Elgon in Mbale.',
        morning: 'Pickup from Entebbe/Kampala; travel through sugarcane and tea belts.',
        afternoon: 'Arrive in Mbale; check-in at hotel and visit Jamainus Safaris office.',
        evening: 'Dinner with views of the sheer Wanale cliff ridge.',
        mealsIncluded: 'Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel',
        highlights: ['Nile River crossing', 'Wanale Ridge backdrop', 'Mbale city tour']
      },
      {
        dayNumber: 2,
        title: 'Sipi Falls 3-Tier Waterfalls Expedition',
        destination: 'Sipi Falls, Kapchorwa',
        description: 'Ascend to Kapchorwa and hike the dramatic series of three waterfalls cascading down Mount Elgon escarpment.',
        morning: 'Scenic winding drive to Sipi; begin hike to the upper 85m and middle 75m waterfalls.',
        afternoon: 'Reach the thunderous main 100m Sipi Falls; walk behind the falling curtain of water into natural cave.',
        evening: 'Sunset drinks overlooking the vast plains of Karamoja.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge / Rafiki Lodge Sipi',
        highlights: ['Behind the waterfall cave walk', '100m cascade panorama', 'Sunset over Karamoja']
      },
      {
        dayNumber: 3,
        title: 'Arabica Coffee Masterclass & Sabiny Elder Storytelling',
        destination: 'Sipi Slopes',
        description: 'Immerse in the aromatic world of Bugisu Arabica coffee with local smallholders.',
        morning: 'Participate in harvesting, depulping, open-fire roasting, and traditional pounding of coffee beans.',
        afternoon: 'Sabiny cultural storytelling session on ancient circumcision rites and mountain traditions.',
        evening: 'Traditional dinner featuring organic pumpkin, beans, and fresh local fruits.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Sipi River Lodge',
        highlights: ['Artisanal coffee cupping', 'Sabiny elder oral traditions', 'Traditional farm cuisine']
      },
      {
        dayNumber: 4,
        title: 'Mount Elgon National Park Forest Exploration',
        destination: 'Kapkwai Exploration Center',
        description: 'Hike into the montane forest of Mount Elgon National Park, spotting black-and-white colobus monkeys and rare forest birds.',
        morning: 'Guided hike through bamboo zones and Chebonet waterfall trail.',
        afternoon: 'Explore Khauka cave, famed for bat colonies and petrified wood formations.',
        evening: 'Return to Mbale for dinner and Jamainus Charity Foundation presentation.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Mbale Resort Hotel',
        highlights: ['Colobus monkeys tracking', 'Khauka bat cave', 'Charity foundation presentation']
      },
      {
        dayNumber: 5,
        title: 'Return to Kampala / Entebbe via Jinja Nile Adventure',
        destination: 'Entebbe Airport',
        description: 'Travel back via Jinja, stopping for a boat excursion to the Source of the Nile before airport drop-off.',
        morning: 'Depart Mbale; stop in Jinja for boat ride to the Source of the Nile.',
        afternoon: 'Lunch on the riverbanks; craft shopping.',
        evening: 'Transfer to Entebbe International Airport.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Source of the Nile monument', 'Artisan market gifts', 'Airport farewell']
      }
    ],
    included: [
      '4x4 safari cruiser transport with experienced mountain driver-guide',
      '4 nights quality accommodation on full board',
      'All Sipi Falls guide and community fees',
      'Full coffee processing tour and take-home coffee sample',
      'Mount Elgon National Park entry and ranger guide fees',
      'Source of the Nile boat cruise in Jinja'
    ],
    excluded: [
      'International flights and visas',
      'Abseiling down the 100m Sipi Falls (optional $50)',
      'Tips and personal items'
    ],
    packingAdvice: [
      'Hiking shoes with aggressive rubber tread for steep mountain dirt trails',
      'Warm fleece and rain jacket',
      'Sunscreen and insect repellent'
    ]
  },

  // 10. Classic Uganda Safari: 4-Day Murchison Falls Big Game & Nile Safari
  {
    id: 'murchison-falls-4day',
    title: '4-Day Murchison Falls Big Game & Nile Safari',
    tagline: 'Spectacular wildlife game drives, boat safari to the waterfall base & Ziwa rhinos',
    pillar: 'wildlife',
    pillarLabel: 'Wildlife & Nature',
    durationDays: 4,
    durationNights: 3,
    startLocation: 'Entebbe or Kampala',
    endLocation: 'Entebbe or Kampala',
    countries: ['Uganda'],
    difficulty: 'Easy',
    groupSize: '2 to 10 travelers',
    idealFor: 'Families, Big Five seekers, wildlife photographers, birders',
    featured: false,
    overview: 'Uganda’s oldest and largest conservation area. Murchison Falls National Park is bisected by the Victoria Nile, creating rich floodplains filled with elephants, Rothschild giraffes, lions, leopards, hippos, and over 450 bird species.',
    keyHighlights: [
      'Track wild southern white rhinos on foot at Ziwa Rhino Sanctuary',
      'Morning game drives across northern delta savannah with pride of lions and giraffes',
      'Iconic boat safari along the Nile to the roaring base of Murchison Falls',
      'Stand on top of the world’s most powerful waterfall watching the Nile squeeze through a 7m rock fissure',
      'Spotting rare Shoebill storks and Goliath herons along the riverbanks'
    ],
    dayByDay: [
      {
        dayNumber: 1,
        title: 'Kampala to Ziwa Rhino Tracking & Murchison Falls',
        destination: 'Murchison Falls National Park',
        description: 'Depart early northward through Luweero triangle to Ziwa Rhino Sanctuary for walking safari with rhinos.',
        morning: 'Pickup and drive to Ziwa; 2-hour walking safari with endangered white rhinos.',
        afternoon: 'Lunch at Kabalega Diners; enter Murchison Falls National Park.',
        evening: 'Arrive at lodge on the riverbanks; dinner with hippos calling.',
        mealsIncluded: 'Lunch, Dinner',
        accommodationType: 'Pakuba Safari Lodge / Fort Murchison',
        highlights: ['On-foot rhino encounter', 'Northern savannah landscape', 'River Nile sunset']
      },
      {
        dayNumber: 2,
        title: 'Northern Delta Game Drive & Victoria Nile Boat Cruise',
        destination: 'Murchison Falls National Park',
        description: 'A day packed with classic African savannah wildlife and boat safari.',
        morning: 'Early morning game drive: lions, leopards, hyenas, elephants, giraffes, buffaloes, and oribi.',
        afternoon: '3-hour boat cruise up to the foot of Murchison Falls; witness massive Nile crocodiles and hippos.',
        evening: 'Scenic sundowner game drive back to the lodge.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Pakuba Safari Lodge',
        highlights: ['Big cats savannah drive', 'Nile river boat safari', 'Hippo pods and crocodiles']
      },
      {
        dayNumber: 3,
        title: 'Top of Murchison Falls & Albert Delta Boat Exploration',
        destination: 'Murchison Falls & Albert Nile Delta',
        description: 'Explore the Albert Delta, prime habitat for the elusive Shoebill stork, followed by a visit to the top of the falls.',
        morning: 'Boat trip or game drive along the tranquil Albert Delta looking for rare Shoebill storks.',
        afternoon: 'Visit the dramatic top of the falls; feel the ground vibrate under immense hydraulic power.',
        evening: 'Campfire dinner under starlit African skies.',
        mealsIncluded: 'Breakfast, Lunch, Dinner',
        accommodationType: 'Pakuba Safari Lodge',
        highlights: ['Shoebill stork search', 'Top of the Falls vibration', 'Starlit campfire']
      },
      {
        dayNumber: 4,
        title: 'Return to Kampala / Entebbe & Departure',
        destination: 'Entebbe Airport',
        description: 'Final morning game drive as you exit the park, returning to Kampala/Entebbe for your outbound flight.',
        morning: 'Morning game drive exiting the park through Budongo forest.',
        afternoon: 'Lunch stop in Masindi; continue to Kampala/Entebbe.',
        evening: 'Airport drop-off.',
        mealsIncluded: 'Breakfast, Lunch',
        accommodationType: 'Departure day',
        highlights: ['Final savannah game drive', 'Budongo forest pass', 'Airport transfer']
      }
    ],
    included: [
      '4x4 customized safari vehicle with pop-up roof and fuel',
      '3 nights accommodation on full board',
      'Professional licensed tour driver-guide',
      'All Murchison Falls park entrance fees',
      'Ziwa Rhino Sanctuary tracking fees',
      'Boat cruise to the bottom of the falls and top of falls visit',
      'Bottled drinking water throughout safari'
    ],
    excluded: [
      'International flights and visas',
      'Optional hot air balloon safari ($380)',
      'Gratuities and personal expenses'
    ],
    packingAdvice: [
      'Light cotton safari clothing in neutral tones',
      'Sun hat, sunglasses, and high SPF sunscreen',
      'Binoculars and extra camera batteries'
    ]
  }
];

export const FEATURED_ITINERARIES = ALL_ITINERARIES.filter(it => it.featured);
