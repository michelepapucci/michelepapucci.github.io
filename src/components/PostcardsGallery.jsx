import { useState } from 'react';

const postcards = [
{
    id: 2,
    title: 'ACL Vienna 2025',
    front: '/pictures/postcards/vienna2025_front.jpg',
    back: '/pictures/postcards/vienna2025_back.png',
    frontDescription: 'This postcard was sent from ACL in Vienna 2025. For now, this is a placeholder image shot before sending the postcard trough mail. When the original will arrive I\'ll update the photos.',
    backDescription: 'This postcard was sent from ACL in Vienna 2025. For now, this is a placeholder image shot before sending the postcard trough mail. When the original will arrive I\'ll update the photos.'
  },
  {
    id: 1,
    title: 'Lipari Summer School July 2025',
    front: '/pictures/postcards/lipari2025_front.jpg',
    back: '/pictures/postcards/lipari2025_back.png',
    frontDescription: 'Sent from Lipari, during my Lipari Summer School in July 2025.\n On the lower part it says "Lipari\'s Castle - Eolie Islands".',
    backDescription: 'The message reads: "Greetings from Lipari, Summer School Lipari 2025. From Michele Papucci". Address redacted for privacy. \nThe stamp shows Lecce\s Theather and was issued in Rome 2024.'
  },

  // Add more postcards here
];

export default function PostcardGallery() {
  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState(false);

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {postcards.map((card) => (
          <div
            key={card.id}
            className="cursor-pointer"
            onClick={() => {
              setSelected(card);
              setFlipped(false); // reset to front when opening
            }}
          >
            <img
              src={card.front}
              alt={card.title}
              className="rounded-xl shadow-lg transition hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
        >
            <div
            className="bg-base-200 rounded-xl p-4 sm:p-6 w-[95vw] max-w-[1200px] flex flex-col sm:flex-row gap-6 sm:gap-8 relative items-start"
            onClick={(e) => e.stopPropagation()}
            >
            <button
                className="absolute top-2 right-2 text-black hover:text-red-500"
                onClick={() => setSelected(null)}
            >
                ✕
            </button>

            {/* Image and Flip Button Block */}
            <div className="flex flex-col items-center w-full sm:w-1/2">
              <div className="w-full perspective flex justify-center">
                <div
                  className={`relative card-3d ${flipped ? 'rotate-y-180' : ''}`}
                  style={{ maxHeight: '60vh', width: '100%' }}
                >
                  {/* Front */}
                  <div className="card-face">
                    <img
                      src={selected.front}
                      alt="Postcard front"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* Back */}
                  <div className="card-face card-back">
                    <img
                      src={selected.back}
                      alt="Postcard back"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Flip Button */}
              <button
                className="mt-4 text-2xl hover:rotate-90 transition-transform duration-300"
                onClick={() => setFlipped(!flipped)}
                title={flipped ? 'Show Front' : 'Show Back'}
              >
                🔄
              </button>
            </div>


            {/* Description Block */}
            <div className="w-full sm:w-1/2 text-justify">
                <h2 className="text-xl font-bold mb-2">{selected.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">
                {flipped ? selected.backDescription : selected.frontDescription}
                </p>
            </div>
            </div>
        </div>
        )}


      <style>{`
        .perspective {
          perspective: 1000px;
        }

        /* the 3D container */
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 700ms;
          position: relative;
          height: 60vh;        /* matches your max height */
        }

        /* a single face */
        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden; /* ✅ hide when flipped away */
          -webkit-backface-visibility: hidden; /* Safari */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* the back face */
        .card-back {
          transform: rotateY(180deg);
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
      `}</style>
    </>
  );
}