import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, Calendar, Users, ArrowRight, Heart, ShieldCheck, Check, Search, Download, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS, TOURISM_PILLARS, WHY_CHOOSE_US, GEOGRAPHIC_REGIONS } from '../data/companyData';
import { ALL_ITINERARIES, FEATURED_ITINERARIES } from '../data/itinerariesData';
import { SAFARI_IMAGES } from '../data/imageAssets';
import { Itinerary, TourismPillarId } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary?: Itinerary) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHeroTab, setActiveHeroTab] = useState<'gorilla' | 'sipi' | 'savannah'>('gorilla');

  const heroImages = {
    gorilla: {
      url: SAFARI_IMAGES.gorillaHero,
      title: 'Bwindi Impenetrable Mountain Gorillas',
      tagline: 'Misty Afro-montane rainforest habitat of over half the world’s surviving gentle giants',
      destination: 'Bwindi Impenetrable National Park, Southwestern Uganda',
      tourId: 'bwindi-gorilla-trekking-4day',
      tourLabel: 'View 4-Day Bwindi Gorilla Tour'
    },
    sipi: {
      url: SAFARI_IMAGES.sipiFalls,
      title: 'Mount Elgon & Sipi Falls Waterfalls',
      tagline: 'Three thunderous cascades and lush Arabica coffee terraces at our home base in Mbale',
      destination: 'Mbale & Kapchorwa, Eastern Uganda',
      tourId: 'mount-elgon-sipi-falls-5day',
      tourLabel: 'View 5-Day Mount Elgon & Sipi Explorer'
    },
    savannah: {
      url: SAFARI_IMAGES.savannahWildlife,
      title: 'Queen Elizabeth & Murchison Big Game',
      tagline: 'Elephants, lions, giraffes, and Kazinga Channel boat safaris across golden plains',
      destination: 'Queen Elizabeth & Murchison Falls National Parks',
      tourId: 'wild-africa-living-cultures',
      tourLabel: 'View 10-Day Wild Africa Itinerary'
    }
  };

  const currentHero = heroImages[activeHeroTab];

  const filteredItineraries = ALL_ITINERARIES.filter((it) => {
    const matchesPillar = selectedPillarFilter === 'all' || it.pillar === selectedPillarFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.countries.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section with High-Fidelity Safari Photography */}
      <section className="relative bg-[#1C1917] text-white overflow-hidden">
        {/* Full-bleed background hero photograph with measured contrast scrim */}
        <div className="absolute inset-0">
          <img
            src={currentHero.url}
            alt={currentHero.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-all duration-700 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Brand Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 text-xs font-medium tracking-wide backdrop-blur-xs">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Headquartered in Mbale, Eastern Uganda · Base of Mount Elgon</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Discover the <span className="text-amber-400 italic">Soul of Africa</span>.
              </h1>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl">
                We believe Africa is more than a safari destination. It is a continent of ancient civilizations, vibrant communities, remarkable biodiversity, sacred places, and living histories passed from generation to generation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('/itineraries')}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all rounded-md shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore All Safaris</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/custom-safari')}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-200 bg-stone-900/90 hover:bg-stone-800 hover:text-white border border-stone-700 active:scale-95 transition-all rounded-md cursor-pointer backdrop-blur-xs"
                >
                  Plan Custom Safari
                </button>
                <a
                  href={COMPANY_DETAILS.officialPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 border border-amber-800/70 hover:border-amber-700 rounded-md flex items-center gap-2 transition-colors backdrop-blur-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Company Profile PDF</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-5 text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Licensed Uganda Ground Operator</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>4 Pillars of Tourism</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Disability Inclusion & Charity Arm</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Featured Destination Card */}
            <div className="lg:col-span-5">
              <div className="bg-stone-900/85 backdrop-blur-md rounded-2xl border border-stone-700 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700/50">
                    Featured Destination
                  </span>
                  <div className="flex items-center gap-1 bg-stone-800/90 p-1 rounded-md text-xs">
                    <button
                      onClick={() => setActiveHeroTab('gorilla')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'gorilla'
                          ? 'bg-amber-800 text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Gorillas
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('sipi')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'sipi'
                          ? 'bg-amber-800 text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Sipi Falls
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('savannah')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'savannah'
                          ? 'bg-amber-800 text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Savannah
                    </button>
                  </div>
                </div>

                {/* Destination Preview Image */}
                <div className="h-48 sm:h-56 rounded-xl overflow-hidden relative border border-stone-800">
                  <img
                    src={currentHero.url}
                    alt={currentHero.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white text-xs space-y-0.5">
                      <span className="font-semibold block">{currentHero.title}</span>
                      <span className="text-stone-300 text-[11px] block">{currentHero.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {currentHero.tagline}
                  </p>
                  <button
                    onClick={() => onNavigate(`/itinerary/${currentHero.tourId}`)}
                    className="w-full py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{currentHero.tourLabel}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Search & Quick Filter Bar */}
      <section className="-mt-10 max-w-5xl mx-auto px-4 sm:px-8 relative z-20">
        <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl shadow-xl border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Search Journeys & Destinations
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Gorilla, Sipi Falls, Coffee, Faith, Mara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700 text-stone-800"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Filter by Tourism Pillar
              </label>
              <select
                value={selectedPillarFilter}
                onChange={(e) => setSelectedPillarFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700 text-stone-800"
              >
                <option value="all">All Tourism Pillars</option>
                <option value="cultural">Cultural Tourism</option>
                <option value="wildlife">Wildlife & Nature Tourism</option>
                <option value="spiritual">Religious & Spiritual</option>
                <option value="agritourism">Agritourism & Coffee</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-end">
              <button
                onClick={() => onNavigate('/itineraries')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded-md transition-colors text-center cursor-pointer shadow-xs"
              >
                View ({filteredItineraries.length}) Tours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: The Four Dimensions of Africa Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Breathtaking Africa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Landscapes, Wildlife & Living Culture
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From the cascading volcanic slopes of Mount Elgon to the savannas of Queen Elizabeth and ancient pilgrimage shrines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Sipi Falls (Eastern Uganda Base) */}
          <div
            onClick={() => onNavigate('/itinerary/mount-elgon-sipi-falls-5day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.sipiFalls}
                alt="Sipi Falls and Mount Elgon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Eastern Uganda
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Mount Elgon & Sipi Falls
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  The home base of Jamainus Safaris in Mbale. Three thunderous waterfalls plunging into coffee-terraced valleys.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>Explore Home Circuit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Wildlife Savannah */}
          <div
            onClick={() => onNavigate('/itinerary/wild-africa-living-cultures')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.savannahWildlife}
                alt="Uganda Wildlife Savannah"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Savannah Wilderness
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Big Five Savannah Safaris
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Elephants, tree-climbing lions, giraffes, and Kazinga Channel boat cruises in Queen Elizabeth and Murchison Falls.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Wildlife Itineraries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Arabica Coffee Agritourism */}
          <div
            onClick={() => onNavigate('/itinerary/coffee-tea-agricultural-trail')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.coffeeHarvest}
                alt="Arabica Coffee Agritourism Harvest"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Agritourism
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Coffee, Tea & Food Heritage
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Hand-picking volcanic Mount Elgon Arabica cherries, clay pot roasting over open fire, and tea plucking with co-ops.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Agritourism Trails</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 4: Faith & Spiritual Heritage */}
          <div
            onClick={() => onNavigate('/itinerary/africa-faith-heritage-trail')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.namugongoShrine}
                alt="Uganda Martyrs Sacred Shrine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Spiritual Heritage
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Africa Faith & Heritage Trail
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Namugongo Martyrs Basilica, Old Kampala National Mosque, historic cathedrals, and sacred hill sanctuaries.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Pilgrimage Trails</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars of Jamainus Safaris */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Our Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            The Four Pillars of Tourism
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Together, these four complementary pillars offer a broader perspective on African travel—one that connects people with places, communities, heritage, and nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURISM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${pillar.badgeColor}`}>
                    {pillar.title}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-medium text-amber-800 italic">
                  "{pillar.tagline}"
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.summary}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-600">
                  {pillar.keyPoints.slice(0, 3).map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-700 shrink-0 font-bold">·</span>
                      <span className="line-clamp-2">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/pillars')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Explore Experiences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Signature Journeys (from Company Profile Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
              Curated Expeditions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              Signature Experience Concepts
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Distinctive journeys bringing together our four pillars across Uganda and East Africa.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/itineraries')}
            className="text-xs font-semibold uppercase tracking-wider text-amber-800 hover:text-amber-950 flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>View All ({ALL_ITINERARIES.length}) Itineraries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_ITINERARIES.slice(0, 6).map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative">
                <div className="flex items-center justify-between text-xs text-stone-300 mb-3">
                  <span className="font-mono text-amber-400 font-semibold">
                    {itinerary.durationDays} Days / {itinerary.durationNights} Nights
                  </span>
                  <span className="text-stone-300">
                    {itinerary.countries.join(', ')}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white leading-snug">
                  {itinerary.title}
                </h3>

                <p className="text-xs text-amber-200/90 italic mt-1 line-clamp-1">
                  {itinerary.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center gap-3 text-xs text-stone-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="truncate max-w-[140px]">{itinerary.startLocation}</span>
                  </span>
                  <span>·</span>
                  <span>{itinerary.difficulty}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {itinerary.overview}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-100 pt-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                      Tour Highlights
                    </span>
                    {itinerary.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-stone-700 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate(`/itinerary/${itinerary.id}`)}
                    className="text-xs font-semibold text-stone-800 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    View Day-by-Day Plan
                  </button>
                  <button
                    onClick={() => onOpenInquiry(itinerary)}
                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded-md transition-colors cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Vision - From East Africa to the Continent */}
      <section className="bg-stone-100 py-16 px-4 sm:px-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
              Continental Horizons
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Our Geographic Vision
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              JAMAINUS SAFARIS is based in Uganda, with an ambition to grow into a tourism brand connecting travellers with destinations across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEOGRAPHIC_REGIONS.map((region, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border bg-white shadow-xs ${
                  idx === 0
                    ? 'border-amber-400 ring-1 ring-amber-400/30'
                    : 'border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {region.name}
                  </h3>
                  {idx === 0 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      Primary Base
                    </span>
                  )}
                </div>

                <div className="text-xs font-medium text-amber-800 mb-3">
                  {region.role}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {region.summary}
                </p>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  <strong className="text-stone-700">Target Destinations:</strong>{' '}
                  {region.countries.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('/destinations')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 hover:text-amber-950"
            >
              <span>Explore Detailed Regional Circuits & Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Jamainus Safaris? (Section 11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Our Differentiators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Why Choose Jamainus Safaris?
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every journey tells a story. We prioritize authentic human encounters, cultural custodians, and responsible travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2.5"
            >
              <div className="text-amber-700 text-xs font-mono font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Jamainus Charity Foundation LTD Spotlight (Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-8 sm:p-12 relative overflow-hidden border border-stone-800">
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>The Charity Arm of JAMAINUS SAFARIS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              JAMAINUS CHARITY FOUNDATION LTD
            </h2>

            <p className="text-amber-400 font-serif italic text-lg">
              Slogan: "A Chance to Make a Difference."
            </p>

            <p className="text-sm text-stone-300 leading-relaxed">
              We believe communities should not be left behind as tourism creates new opportunities. The Foundation focuses on <strong>disability inclusion</strong>, support for vulnerable people (orphans, widows, elders), education and skills development, and nature conservation through ecotourism.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/charity')}
                className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Explore Charity Programs & Focus Areas
              </button>
              <button
                onClick={() => onNavigate('/about')}
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Our Responsible Tourism Charter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Safari Tailor-Made CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Ready to Craft Your African Journey?
        </h2>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Tell us about your interests, dream destinations, travel dates, and any accessibility or disability requirements. Our local safari experts in Mbale will design a custom proposal tailored to you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/custom-safari')}
            className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded-md shadow-md transition-all"
          >
            Start Tailor-Made Safari Planner
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded-md transition-all"
          >
            Contact Mbale Office Directly
          </button>
        </div>
      </section>
    </div>
  );
};
