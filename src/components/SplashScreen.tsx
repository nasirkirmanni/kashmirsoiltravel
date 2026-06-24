import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Trigger initial animation shortly after mount
    const mountTimer = setTimeout(() => {
      setHasMounted(true);
    }, 100);

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Remove from DOM after transition completes (3.5 seconds)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark text-white transition-all duration-1000 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className={`flex flex-col items-center justify-center transform transition-all duration-1000 ease-out ${
        !hasMounted 
          ? 'translate-y-8 opacity-0 scale-95' 
          : isFadingOut 
            ? '-translate-y-8 opacity-0 scale-105' 
            : 'translate-y-0 opacity-100 scale-100'
      }`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-wide mb-6 text-center px-4 drop-shadow-lg">
          Kashmir Soil Travels
        </h1>
        <div className={`w-16 sm:w-24 h-[2px] bg-brand-accent mb-6 rounded-full transition-all duration-1000 delay-500 ${
          !hasMounted ? 'w-0 opacity-0' : 'opacity-100'
        }`}></div>
        <p className={`text-sm sm:text-base md:text-xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-brand-accent/90 uppercase text-center px-4 transition-all duration-1000 delay-700 ${
          !hasMounted ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          The best in the valley
        </p>
      </div>
    </div>
  );
}
