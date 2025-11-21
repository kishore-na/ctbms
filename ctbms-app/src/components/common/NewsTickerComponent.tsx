import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';

export function NewsTicker() {
  const [isVisible, setIsVisible] = useState(true);

  const newsItems = [
    "Admissions open for Sanskrit Classes 2025 - Enroll Now!",
    "Annual General Meeting scheduled for December 15th at BBA Headquarters.",
    "Scholarship applications for 2025-26 academic year due by Jan 30th.",
    "Join us for the Ugadi Celebrations on March 30th, 2025.",
    "Health Checkup Camp this Sunday at Malleshwaram Branch."
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-[#800000] text-white overflow-hidden relative h-10 flex items-center z-40">
      <div className="container mx-auto flex items-center h-full px-4 relative">
        <div className="bg-[#800000] z-10 pr-4 flex items-center h-full shadow-[4px_0_8px_-4px_rgba(0,0,0,0.3)]">
          <span className="font-bold text-[#F59E0B] flex items-center text-sm uppercase tracking-wider whitespace-nowrap">
            <Megaphone className="h-4 w-4 mr-2" />
            Latest Updates
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {newsItems.map((item, index) => (
                <span key={index} className="mx-8 text-sm font-medium inline-block">
                  {item}
                </span>
              ))}
              {/* Duplicate for seamless scroll */}
              {newsItems.map((item, index) => (
                <span key={`dup-${index}`} className="mx-8 text-sm font-medium inline-block">
                  {item}
                </span>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
