import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS, RESPONSIBLE_PRINCIPLES, WHY_CHOOSE_US } from '../data/companyData';
import { SAFARI_IMAGES } from '../data/imageAssets';
import { Download, ShieldCheck, Heart, MapPin, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const servicesList = [
    'Tailor-made travel itineraries',
    'Wildlife safaris and nature excursions',
    'Cultural and heritage tours',
    'Birdwatching and specialist nature trips',
    'Religious and spiritual heritage travel',
    'Farm visits and agritourism experiences',
    'Community-based tourism activities',
    'Transport arrangements and tourist 4x4 vehicles',
    'Airport transfers and regional transfers',
    'Accommodation reservations across lodges & hotels',
    'Guided excursions and group tours',
    'Hiking, camping, and outdoor activities where permitted',
    'Regional and multi-country travel planning through suitable partners',
    'Educational and cultural-exchange visits'
  ];

  const targetAudiences = [
    'International visitors exploring Africa for the first time or returning',
    'Domestic and regional East African travellers',
    'Wildlife and birdwatching enthusiasts seeking endemic species',
    'Cultural and heritage travellers wanting authentic human encounters',
    'Religious and pilgrimage groups visiting sacred shrines',
    'Nature and ecotourism enthusiasts focused on habitat conservation',
    'Agricultural and food-tourism visitors, coffee roasters, and agronomists',
    'Families, couples, and independent solo travellers',
    'Schools, universities, and educational study groups',
    'Cultural-exchange and community learning delegations',
    'Travel agencies and tour operators seeking reliable local ground handling in Uganda',
    'Visitors interested in responsible, community-conscious travel'
  ];

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Discover the Soul of Africa
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif italic text-amber-900">
            Based in Uganda. Connecting Africa. Every Journey Tells a Story.
          </p>
        </div>
      </div>

      {/* Story & Vision / Mission Bento */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              1. Who We Are
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              <strong>JAMAINUS SAFARIS</strong> is a tourism and travel brand based in Mbale, Eastern Uganda, with a vision of connecting travellers to the diverse cultures, natural landscapes, wildlife, spiritual traditions, agricultural heritage, and living histories of Africa.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              We believe Africa is more than a safari destination. It is a continent of ancient civilizations, vibrant communities, remarkable biodiversity, indigenous knowledge, sacred places, traditional farming systems, and stories passed from one generation to the next.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Our goal is to create meaningful travel experiences that allow visitors to discover these dimensions of Africa while encouraging responsible tourism, community participation, environmental conservation, and cultural preservation. Our journey begins in East Africa, with a long-term ambition to develop partnerships and experiences across the wider African continent.
            </p>

            {/* Sipi Falls / Mount Elgon Base Photo */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border border-stone-200 h-64 sm:h-80 relative shadow-xs">
                <img
                  src={SAFARI_IMAGES.sipiFalls}
                  alt="Sipi Falls and Mount Elgon - The home base of Jamainus Safaris in Mbale, Eastern Uganda"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-0.5">
                    <span className="font-semibold block">Mount Elgon Caldera & Sipi Falls</span>
                    <span className="text-stone-300 block">Mbale, Eastern Uganda · The Founding Foothills of Jamainus Safaris</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
            {/* Vision */}
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-800 font-bold">
                Section 2
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                To become a recognized African tourism brand connecting the world with the continent’s cultural diversity, natural heritage, spiritual traditions, agricultural wealth, and indigenous knowledge.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-800 font-bold">
                Section 3
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                To develop meaningful and memorable travel experiences across East Africa and, through responsible growth and reliable partnerships, the wider African continent. We aim to connect visitors with Africa’s people, wildlife, landscapes, cultures, faith traditions, and agricultural heritage while promoting community participation, environmental responsibility, disability inclusion, and the preservation of local history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services List (Section 7) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            7. Our Tourism and Travel Services
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Depending on destination, availability, and confirmed local arrangements, JAMAINUS SAFARIS provides or coordinates:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-white border border-stone-200 shadow-xs flex items-center gap-2.5 text-xs text-stone-800"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsible & Inclusive Tourism Charter (Section 8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Guiding Principles
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            8. Responsible and Inclusive Tourism
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            We believe tourism should create value for visitors and host communities while respecting the environment and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-700">
                  Principle 0{idx + 1}
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-800" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {principle.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audiences (Section 10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Traveller Profiles
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            10. Who We Aim to Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {targetAudiences.map((aud, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs text-stone-700"
            >
              <span className="text-amber-800 font-bold shrink-0">·</span>
              <span className="leading-relaxed">{aud}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Commitment (Section 12) & PDF Download Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-8 sm:p-10 border border-stone-800 space-y-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Section 12
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              JAMAINUS SAFARIS is committed to building a tourism brand that celebrates Africa’s diversity and encourages travellers to experience the continent with curiosity, respect, and a sense of responsibility.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our ambition is continental, but our growth must be practical, responsible, and built on trust. We want every journey to help travellers discover something meaningful about Africa—and leave them with a deeper appreciation of the people, places, and stories they encounter.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Download the official Jamainus Safaris Company Profile document (Draft 2).
            </div>
            <a
              href={COMPANY_DETAILS.officialPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
