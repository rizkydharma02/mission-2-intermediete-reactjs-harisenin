import { useState } from 'react';
import { dataDesktop } from '../constant/dataDesktop';
import { dataIcons } from '../assets/icons/dataIcons';

const CardWatchList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < dataDesktop.length - 3 ? prev + 1 : prev));
  };

  return (
    <section className="px-[20px] md:px-[80px] py-[20px] md:py-[40px] w-full">
      <h2 className="mb-[20px] md:mb-[32px] font-lato font-bold text-[20px] text-light-white md:text-[32px]">Melanjutkan Tonton Film</h2>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="hidden md:block top-1/2 left-[-10px] z-10 absolute bg-[#2F3334] hover:bg-gray-700 disabled:opacity-50 rounded-full w-12 h-12 transition-all -translate-x-4 -translate-y-1/2 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <img src={dataIcons.arrowLeftIcon} className="hidden md:block bg-contain md:w-[44px] md:h-[44px]" alt="Arrow Icon" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= dataDesktop.length - 3}
          className="hidden md:block top-1/2 right-[-20px] z-10 absolute bg-[#2F3334] hover:bg-gray-700 disabled:opacity-50 rounded-full w-12 h-12 transition-all -translate-y-1/2 translate-x-4 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <img src={dataIcons.arrowRightIcon} className="hidden md:block bg-cover md:w-[44px] md:h-[44px] overflow-auto" alt="Arrow Icon" />
        </button>

        <div className="overflow-hidden">
          <div className="flex gap-[16px] md:gap-[41px] transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * (302 + 41)}px)` }}>
            {dataDesktop.map((item) => (
              <div key={item.id} className="group relative flex-shrink-0 rounded-[8px] w-auto h-auto overflow-hidden cursor-pointer">
                <img src={item.img} className="w-[309px] md:w-[302px] h-[151px] md:h-[162px] object-cover group-hover:scale-105 transition-transform duration-300" alt={item.title} />

                <div className="right-0 bottom-0 left-0 absolute flex justify-between items-end gap-[10px] p-[16px]">
                  <h3 className="flex-1 font-lato font-bold text-[14px] text-light-white md:text-[18px] truncate">{item.title}</h3>

                  {item.rating && (
                    <div className="flex flex-shrink-0 items-center gap-[4px]">
                      <img src={dataIcons.starIcon} className="bg-cover w-[12px] md:w-[16px] h-[12px] md:h-[16px]" alt="Arrow Icon" />
                      <span className="font-lato font-normal text-[12px] text-light-white md:text-[14px]">{item.rating}/5</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardWatchList;
