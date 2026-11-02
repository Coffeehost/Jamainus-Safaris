import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ALL_ITINERARIES } from '../data/itinerariesData';
import { Itinerary, TourismPillarId } from '../types';
import { Search, Filter, Calendar, MapPin, Check, ArrowRight } from 'lucide-react';

interface ItinerariesPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary: Itinerary) => void;
}

export const ItinerariesPage: React.FC<ItinerariesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Safaris' },
    { id: 'cultural', label: 'Cultural & Heritage' },
    { id: 'wildlife', label: 'Wildlife & Primates' },
    { id: 'agritourism', label: 'Agritourism & Coffee' },
    { id: 'spiritual', label: 'Religious & Spiritual' },
  ];

  const filtered = useMemo(() => {
    return ALL_ITINERARIES.filter((it) => {
      // Pillar filter
      if (selectedPillar !== 'all' && it.pillar !== selectedPillar) {
        return false;
      }
      // Duration filter
      if (selectedDuration === 'short' && it.durationDays > 5) return false;
      if (selectedDuration === 'medium' && (it.durationDays < 6 || it.durationDays > 9)) return false;
      if (selectedDuration === 'long' && it.durationDays < 10) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = it.title.toLowerCase().includes(q);
        const matchesOverview = it.overview.toLowerCase().includes(q);
        const matchesHighlights = it.keyHighlights.some(h => h.toLowerCase().includes(q));
        const matchesCountry = it.countries.some(c => c.toLowerCase().includes(q));
        if (!matchesTitle && !matchesOverview && !matchesHighlights && !matchesCountry) {
          return false;
        }
      }

      return true;
    });
  }, [selectedPillar, selectedDuration, searchQuery]);

  return (
    <div className="space-y-8 pb-20">
      <Breadcrumbs items={[{ label: 'Safaris & Itineraries' }]} onNavigate={onNavigate} />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Jamainus Safaris Catalogue
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            East African Safaris & Journeys
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Explore all official signature experience concepts from Jamainus Safaris, blending our four pillars of Cultural, Wildlife & Nature, Religious & Spiritual, and Agritourism travel. Each itinerary is adaptable for private travellers, families, or groups.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-4">
          {/* Pillar Filter Tabs - Interactive filter buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPillar(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedPillar === tab.id
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2 border-t border-stone-100">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by keywords, park, mountain or highlight (e.g. Bwindi, Mbale, Sipi, Coffee, Martyrs)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700 text-stone-800"
              />
            </div>

            {/* Duration Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700 text-stone-800"
              >
                <option value="all">All Trip Durations</option>
                <option value="short">Short Expeditions (1 to 5 Days)</option>
                <option value="medium">Medium Journeys (6 to 9 Days)</option>
                <option value="long">Extended Grand Odysseys (10 to 14 Days)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 pb-2 border-b border-stone-200">
          <span>Showing <strong className="text-stone-900">{filtered.length}</strong> verified itineraries</span>
          {(selectedPillar !== 'all' || selectedDuration !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedDuration('all');
                setSearchQuery('');
              }}
              className="text-amber-800 hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center space-y-4">
            <p className="text-stone-600 text-sm">
              No itineraries found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedDuration('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-amber-800 text-white rounded text-xs font-semibold uppercase tracking-wider"
            >
              Show All Itineraries
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((itinerary) => (
              <div
                key={itinerary.id}
                className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Header Banner */}
                <div className="p-6 bg-stone-900 text-white relative">
                  <div className="flex items-center justify-between text-xs text-stone-300 mb-2">
                    <span className="font-mono text-amber-400 font-semibold">
                      {itinerary.durationDays} Days / {itinerary.durationNights} Nights
                    </span>
                    <span className="text-stone-300 text-xs">
                      {itinerary.countries.join(', ')}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white leading-snug">
                    {itinerary.title}
                  </h3>

                  <p className="text-xs text-amber-200/90 italic mt-1 line-clamp-1">
                    {itinerary.tagline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate max-w-[130px]">{itinerary.startLocation}</span>
                    </span>
                    <span className="text-amber-300 font-medium">{itinerary.pillarLabel}</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                      {itinerary.overview}
                    </p>

                    <div className="space-y-1.5 border-t border-stone-100 pt-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                        Included Highlights
                      </span>
                      {itinerary.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                        <div key={hIdx} className="text-xs text-stone-700 flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onNavigate(`/itinerary/${itinerary.id}`)}
                      className="text-xs font-semibold text-stone-800 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Full Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenInquiry(itinerary)}
                      className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded-md transition-colors cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Custom Planning Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        <div className="bg-[#1C1917] text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">
              Looking for a Custom Combination?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              We customize any itinerary to match your exact dates, fitness level, budget, and accessibility requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/custom-safari')}
            className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer"
          >
            Design Custom Safari
          </button>
        </div>
      </div>
    </div>
  );
};
