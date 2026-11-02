import React from 'react';
import { Mail, Phone, MapPin, Download, Heart, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, TOURISM_PILLARS } from '../data/companyData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1 & 2: Brand & Foundation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-amber-700 text-amber-50 flex items-center justify-center font-serif font-bold text-xl">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  JAMAINUS SAFARIS
                </span>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                  Discover the Soul of Africa
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed pr-4">
              Tourism and travel brand based in Mbale, Eastern Uganda, connecting travellers to the diverse cultures, natural landscapes, wildlife, spiritual traditions, agricultural heritage, and living histories of Africa.
            </p>

            {/* Charity Arm Badge */}
            <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>JAMAINUS CHARITY FOUNDATION LTD</span>
              </div>
              <p className="text-xs text-stone-400 leading-normal">
                Slogan: <em>A Chance to Make a Difference</em>. Supporting disability inclusion, vulnerable communities, education, and ecotourism conservation.
              </p>
              <button
                onClick={() => onNavigate('/charity')}
                className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>Learn about our charity mission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Four Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Our 4 Pillars
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              {TOURISM_PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate('/pillars')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/itineraries')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                >
                  <span>View All 10+ Itineraries</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  Who We Are & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-white transition-colors">
                  Geographic Scope & Circuits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/custom-safari')} className="hover:text-white transition-colors">
                  Custom Safari Planner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  Contact & Inquiries
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={COMPANY_DETAILS.officialPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-400 transition-colors p-1.5 rounded bg-stone-900 border border-stone-800"
                >
                  <Download className="w-3.5 h-3.5 text-amber-500" />
                  <span>Download Company Profile (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Head Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Head Office (Mbale)
            </h4>
            <div className="space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.headOffice}
                  <br />
                  <span className="text-xs text-stone-400">{COMPANY_DETAILS.postalAddress}</span>
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-xs font-mono text-stone-400">Phone & WhatsApp:</div>
                {COMPANY_DETAILS.telephones.map((tel, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <a
                      href={`tel:${tel.raw}`}
                      className="hover:text-white transition-colors font-mono tabular-nums text-xs"
                    >
                      {tel.display}
                    </a>
                  </div>
                ))}
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-xs font-mono text-stone-400">Official Emails:</div>
                {COMPANY_DETAILS.emails.map((email, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-white transition-colors text-xs truncate max-w-[190px]"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>
              &copy; {new Date().getFullYear()} Jamainus Safaris & Jamainus Charity Foundation Ltd. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Explore the Adventure</span>
            <span>·</span>
            <span>Experience the Culture</span>
            <span>·</span>
            <span>Travel with Purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
