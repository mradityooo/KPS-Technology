import React from 'react';

export interface WaveDividerProps {
  /** Warna latar section tujuan (misal: 'white', 'slate-50', atau kode hex seperti '#ffffff') */
  toColor?: string;
  /** Set true jika section asal berlatar gelap (seperti Hero atau Dark Section) */
  fromDark?: boolean;
  /** Set true jika section tujuan berlatar gelap (seperti Footer) */
  toDark?: boolean;
  /** Membalik arah gelombang secara horizontal agar tidak monoton */
  flipX?: boolean;
  /** Tinggi divider (default: responsif h-12 di hp hingga h-20 di desktop) */
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  toColor = 'white',
  fromDark = false,
  toDark = false,
  flipX = false,
  className = 'h-12 sm:h-16 md:h-20',
}) => {
  // Menentukan warna penutup solid di lapisan terdepan
  let solidFill = '#ffffff';
  if (toColor === 'slate-50') solidFill = '#f8fafc';
  else if (toColor === 'dark' || toDark) solidFill = '#0a272e';
  else if (toColor.startsWith('#')) solidFill = toColor;

  // Menentukan warna & transparansi 2 lapisan bayangan di belakangnya
  let layer1Fill = '#0f4c5c';
  let layer1Opacity = 0.12;
  let layer2Fill = '#0f4c5c';
  let layer2Opacity = 0.22;

  if (fromDark) {
    // Dari section gelap ke terang (persis seperti contoh gambar Anda)
    layer1Fill = '#061a1f';
    layer1Opacity = 0.45;
    layer2Fill = '#11353f';
    layer2Opacity = 0.75;
  } else if (toDark) {
    // Dari section terang menuju section gelap (misal sebelum Footer)
    layer1Fill = '#0f4c5c';
    layer1Opacity = 0.35;
    layer2Fill = '#0a272e';
    layer2Opacity = 0.65;
  } else {
    // Antar section terang (kontras lembut)
    layer1Fill = '#0f4c5c';
    layer1Opacity = 0.08;
    layer2Fill = '#94a3b8';
    layer2Opacity = 0.16;
  }

  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={flipX ? { transform: 'scaleX(-1)' } : undefined}
      >
        {/* Lapisan 1: Gelombang Belakang (Gradasi/Bayangan Paling Atas) */}
        <path
          d="M0,0 C160,85 360,-35 520,55 C680,140 920,15 1200,45 L1200,120 L0,120 Z"
          fill={layer1Fill}
          fillOpacity={layer1Opacity}
        />

        {/* Lapisan 2: Gelombang Tengah (Gradasi Tingkat Kedua) */}
        <path
          d="M0,25 C210,105 430,5 610,65 C810,125 1010,25 1200,60 L1200,120 L0,120 Z"
          fill={layer2Fill}
          fillOpacity={layer2Opacity}
        />

        {/* Lapisan 3: Gelombang Depan Solid (Menutup dan menyatu dengan section berikutnya) */}
        <path
          d="M0,52 C190,118 390,28 590,82 C790,132 990,55 1200,78 L1200,120 L0,120 Z"
          fill={solidFill}
        />
      </svg>
    </div>
  );
};