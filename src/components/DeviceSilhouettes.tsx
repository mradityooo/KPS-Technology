import React from 'react';

// 1. Desktop / iMac Silhouette with exact colors & geometry from the uploaded screenshot
export const DesktopSilhouette: React.FC<{ brandText?: string }> = ({ brandText = 'kpstechnology' }) => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <div className="relative w-full max-w-[210px] flex flex-col items-center">
      {/* Outer Monitor Frame */}
      <div className="w-full bg-[#111923] rounded-t-xl p-2 border border-[#1e2a38] shadow-inner">
        {/* Inner Screen Display */}
        <div className="w-full bg-[#182330] rounded-lg p-2.5 flex flex-col gap-2">
          {/* Top Bar with 3 Dots & kpstechnology text */}
          <div className="flex items-center justify-between border-b border-[#223143] pb-1.5">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
            </div>
            <span className="text-[10px] font-bold text-[#8ba0b6] font-['Outfit'] tracking-wide">
              {brandText}
            </span>
            <div className="w-3" />
          </div>

          {/* Wireframe Header Bars */}
          <div className="space-y-1.5 pt-0.5">
            <div className="w-24 h-2 rounded-xs bg-[#2b3c4f]" />
            <div className="w-36 h-1.5 rounded-xs bg-[#243343]" />
          </div>

          {/* Wireframe Cards Grid: 2 rows x 3 columns with rounded rectangles exactly as in screenshot */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-9 rounded-md bg-[#223244] border border-[#2c3f55]" />
            <div className="h-9 rounded-md bg-[#223244] border border-[#2c3f55]" />
            <div className="h-9 rounded-md bg-[#223244] border border-[#2c3f55]" />
            <div className="h-7 rounded-md bg-[#1f2d3d] border border-[#26374a]" />
            <div className="h-7 rounded-md bg-[#1f2d3d] border border-[#26374a]" />
            <div className="h-7 rounded-md bg-[#1f2d3d] border border-[#26374a]" />
          </div>
        </div>
      </div>

      {/* Monitor Bottom Chin with Apple-style camera/logo dot */}
      <div className="w-full h-3 bg-[#182330] rounded-b-md flex items-center justify-center border-x border-b border-[#1e2a38]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#41556c]" />
      </div>

      {/* Stand Neck */}
      <div className="w-7 h-3.5 bg-[#253547]" />
      {/* Stand Base */}
      <div className="w-16 h-1.5 bg-[#374c63] rounded-full" />
    </div>
  </div>
);

// 2. Mobile Phones Silhouette (Two overlapping phones matching dark blueprint aesthetic)
export const MobileSilhouette: React.FC<{ brandText?: string }> = ({ brandText = 'kpstechnology' }) => (
  <div className="w-full h-full flex items-center justify-center p-2 relative">
    <div className="relative w-full max-w-[190px] h-32 flex items-center justify-center">
      {/* Left Back Phone */}
      <div className="absolute left-2 bottom-0 w-22 h-28 bg-[#151f2b] rounded-2xl p-1.5 shadow-md border border-[#223244] -rotate-3">
        <div className="w-full h-full bg-[#182330] rounded-xl p-2 flex flex-col justify-between items-center">
          <div className="w-5 h-1 rounded-full bg-[#2c3f55] mt-0.5" />
          <span className="text-[9px] font-bold text-[#62778e] font-['Outfit']">{brandText}</span>
          <div className="w-7 h-1 rounded-full bg-[#2c3f55] mb-0.5" />
        </div>
      </div>

      {/* Right Front Phone */}
      <div className="absolute right-3 bottom-0 w-24 h-32 bg-[#111923] rounded-2xl p-1.5 shadow-xl border border-[#2a3c50] z-10">
        <div className="w-full h-full bg-[#182330] rounded-xl p-2 flex flex-col justify-between">
          {/* Top Speaker pill */}
          <div className="flex justify-center">
            <div className="w-8 h-1 rounded-full bg-[#3d5168]" />
          </div>

          {/* Screen Wireframe Mock */}
          <div className="space-y-1.5 text-center flex flex-col items-center justify-center my-auto">
            <div className="w-6 h-6 rounded-lg bg-[#0f4c5c] text-white flex items-center justify-center text-[8px] font-black font-['Outfit']">
              KPS
            </div>
            <span className="text-[10px] font-bold text-[#8ba0b6] font-['Outfit'] tracking-wider">
              {brandText}
            </span>
            <div className="w-12 h-1 rounded-full bg-[#2c3f55]" />
          </div>

          {/* Bottom Home Indicator */}
          <div className="flex justify-center">
            <div className="w-9 h-1 rounded-full bg-[#3d5168]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 3. Laptop Silhouette with Open Screen
export const LaptopSilhouette: React.FC<{ brandText?: string }> = ({ brandText = 'kpstechnology' }) => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <div className="relative w-full max-w-[210px] flex flex-col items-center">
      {/* Laptop Screen Lid */}
      <div className="w-full bg-[#111923] rounded-t-xl p-2 border border-[#1e2a38] shadow-inner">
        {/* Screen inner */}
        <div className="w-full bg-[#182330] rounded-lg p-2.5 flex flex-col gap-1.5">
          {/* Browser header */}
          <div className="flex items-center justify-between border-b border-[#223143] pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3d5168]" />
            </div>
            <span className="text-[10px] font-bold text-[#8ba0b6] font-['Outfit'] tracking-wider">
              {brandText}
            </span>
            <div className="w-3" />
          </div>

          {/* Central System/POS Wireframe */}
          <div className="h-14 flex flex-col items-center justify-center gap-1">
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-lg bg-[#223244] border border-[#2c3f55] flex items-center justify-center text-[9px] font-bold text-[#8ba0b6] font-['Outfit'] shadow-xs">
                POS
              </div>
              <div className="absolute -left-3 w-1.5 h-1.5 rounded-full bg-teal-500" />
              <div className="absolute -right-3 w-1.5 h-1.5 rounded-full bg-teal-500" />
              <div className="absolute -top-2.5 w-1.5 h-1.5 rounded-full bg-teal-500" />
              <div className="absolute -bottom-2.5 w-1.5 h-1.5 rounded-full bg-teal-500" />
            </div>
            <div className="w-16 h-1 rounded-xs bg-[#243343] mt-1" />
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div className="w-[108%] h-2.5 bg-[#253547] rounded-b-lg border-x border-b border-[#1e2a38] shadow-sm relative flex items-center justify-center">
        <div className="w-9 h-1 rounded-b-md bg-[#182330]" />
      </div>
    </div>
  </div>
);
