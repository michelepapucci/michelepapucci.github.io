import { useState } from 'react';

const postcards = [
  {
    id: 1,
    title: 'Lipari Summer School July 2025',
    front: '/pictures/postcards/lipari2025_front.jpg',
    back: '/pictures/postcards/lipari2025_back.png',
    frontDescription: 'Sent from Lipari, during my Lipari Summer School in July 2025.\n On the lower part it says "Lipari\'s Castle - Eolie Islands".',
    backDescription: 'The message reads: "Greetings from Lipari, Summer School Lipari 2025. From Michele Papucci". Address redacted for privacy. \nThe stamp shows Lecce\s Theather and was issued in Rome 2024.'
  },
  {
    id: 2,
    title: 'Test with Random Photos',
    front: '/pictures/acl2025_poster.jpeg',
    back: '/pictures/acl2025_table.png',
    frontDescription: 'Lorem ipsum dolor sit amet.',
    backDescription: 'Lorem ipsum dolor sit amet, 2025.'
  },
  // Add more postcards here
];

export default function PostcardGallery() {
  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
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
            onClick={() => setSelected(null)} // closes when clicking the overlay
        >
            <div
            className="bg-base-200 rounded-xl p-6 w-[90vw] max-w-[1200px] flex gap-8 relative"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside the modal
            >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="w-[100%] max-w-[1280px] perspective">
            <div
                className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
                    flipped ? 'rotate-y-180' : ''
                }`}
                style={{ maxHeight: '80vh', maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {/* Front of card */}
                <img
                src={selected.front}
                alt="Postcard front"
                className="max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-md"
                style={{ transform: 'rotateY(0deg)' }}
                />

                {/* Back of card */}
                <img
                src={selected.back}
                alt="Postcard back"
                className="absolute w-full h-full object-cover backface-hidden rounded-xl shadow-md"
                style={{ transform: 'rotateY(180deg)' }}
                />
            </div>

            <button
                className="mt-2 text-2xl hover:rotate-90 transition-transform duration-300"
                onClick={() => setFlipped(!flipped)}
                title={flipped ? 'Show Front' : 'Show Back'}
                >
                🔄
            </button>
            </div>

            <div className="w-1/2">
              <h2 className="text-xl font-bold mb-2">{selected.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {flipped
                  ? selected.backDescription
                  : selected.frontDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .perspective {
            perspective: 1000px;
        }

        .transform-style-preserve-3d {
            transform-style: preserve-3d;
        }

        .rotate-y-180 {
            transform: rotateY(180deg);
        }

        .backface-hidden {
            backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}