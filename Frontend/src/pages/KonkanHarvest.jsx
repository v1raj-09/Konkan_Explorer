import React, { useState } from 'react';
import HarvestModal from '../components/HarvestModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function KonkanHarvest() {
  const harvestItems = [
    {
       id: 'prawns',
      name: 'Konkan Prawns Masala',
      region: 'Coastal Fishing Villages',
      description: 'Fresh catch cooked in an authentic fiery red Malvani coconut gravy infused with traditional spices.',
      image: '/Kokanharvest/prauns.png',
      badge: 'Seafood'
    },
    {
      id: 'ghavane',
      name: 'Lacy Rice Crepes (Ghavane)',
      region: 'Sindhudurg & Ratnagiri',
      description: 'Soft, paper-thin, lace-like rice batter crepes traditionally served hot with coconut milk or spicy curry.',
      image: '/Kokanharvest/ghavane.png',
      badge: 'Breakfast Special'
    },
    {
      id: 'jackfruit',
      name: 'Raw & Ripe Jackfruit (Fanas)',
      region: 'Across Ratnagiri',
      description: 'An integral part of Konkan cuisine, used both as a savory vegetable curry (Kachha Fanas) and enjoyed as sweet, pulpy ripe fruit.',
      image: '/Kokanharvest/jackfruit.png',
      badge: 'Traditional'
    },
    {
       id: 'chickenpopti',
      name: 'Authentic Popti',
      region: 'Raigad & Konkan Farms',
      description: 'A traditional winter delicacy slow-baked in earthen pots sealed with leaves, using farm-fresh chicken and country beans.',
      image: '/Kokanharvest/chickenpopti.png',
      badge: 'Seasonal Feast'
    },
    {
      id: 'rice',
      name: 'Konkan Red & Kolam Rice',
      region: 'Alluvial River Valleys',
      description: 'Naturally grown aromatic rice varieties nourished by heavy seasonal monsoons and mineral-rich river basins.',
      image: '/Kokanharvest/rice.png',
      badge: 'Staple Crop'
    },
    {
      id: 'aluwadi',
      name: 'Traditional Patra (Aluwadi)',
      region: 'Coastal Kitchens',
      description: 'Colocasia leaves layered with spiced tamarind and jaggery paste, rolled, steamed, and shallow-fried to crispy perfection.',
      image: '/Kokanharvest/aluwadi.png',
      badge: 'Delicacy'
    },
    {
       id: 'mango',
      name: 'Alphonso Mango (Hapus)',
      region: 'Ratnagiri & Sindhudurg',
      description: 'The King of Mangoes, world-renowned for its rich, creamy texture, vibrant saffron color, and exquisite aroma unique to the Konkan soil.',
      image: '/Kokanharvest/mango.png',
      badge: 'GI Tagged'
    },
    {
       id: 'kokum',
      name: 'Wild Kokum (Aamsul)',
      region: 'Dense Konkan Groves',
      description: 'Harvested for its tangy purple rind, essential for making cooling Solkadhi and authentic coastal curries.',
      image: '/Kokanharvest/kokum.png',
      badge: 'Organic'
    },
    {
      id: 'chickenpopti-2',
      name: 'Authentic Popti',
      region: 'Raigad & Konkan Farms',
      description: 'A traditional winter delicacy slow-baked in earthen pots sealed with leaves, using farm-fresh chicken and country beans.',
      image: '/Kokanharvest/chickenpopti.png',
      badge: 'Seasonal Feast'
    },
    {
      id: 'kairi',
      name: 'Raw Mango (Kairi)',
      region: 'Konkan Orchards',
      description: 'Tart and crisp raw mangoes widely used for traditional pickles, refreshing panha, and adding tanginess to local dishes.',
      image: '/Kokanharvest/kairi.png',
      badge: 'Seasonal'
    },
    {
      id: 'kandabhaji',
      name: 'Crispy Kanda Bhaji',
      region: 'Monsoon Tea Stalls',
      description: 'Golden-brown crispy onion fritters deeply embedded in Konkan rainy day culture, best paired with hot tea.',
      image: '/Kokanharvest/kandabhaji.png',
      badge: 'Street Snack'
    },
    {
      id: 'maka',
      name: 'Konkan Sweet Corn (Maka)',
      region: 'Local Hillside Farms',
      description: 'Freshly harvested sweet corn cobs roasted over open coals, brushed with lime, salt, and chili powder.',
      image: '/Kokanharvest/maka.png',
      badge: 'Farm Fresh'
    },
     {
      id: 'modak',
      name: 'Traditional Ukadiche Modak',
      region: 'Festive Konkan Households',
      description: 'Steamed rice flour dumplings stuffed with sweet freshly grated coconut and jaggery, delicately drizzled with pure ghee.',
      image: '/Kokanharvest/modak.png',
      badge: 'Festive Sweet'
    },
    {
      id: 'rice1',
      name: 'Chulivarchi Bhaat (Traditional Pot Rice)',
      region: 'Rural Konkan Kitchens',
      description: 'Authentic local rice slowly cooked in traditional earthenware pots over open firewood flames, capturing the rustic essence of coastal cooking.',
      image: '/Kokanharvest/rice1.png',
      badge: 'Traditional Meal'
    },
    {
      id: 'blackpepper',
      name: 'Malvani Black Pepper',
      region: 'Western Ghat Slopes',
      description: 'Spicy and aromatic black peppercorns cultivated organically in the wet tropical forests and spice plantations of Konkan.',
      image: '/Kokanharvest/Black Pepper.png',
      badge: 'Spice'
    },
    {
       id: 'kaju',
      name: 'Konkan Cashew (Kaju)',
      region: 'Vengurla & Coastal Belt',
      description: 'Handcrafted raw and roasted cashews harvested from the hilly laterite terrain of Konkan, famous for superior quality and crunch.',
      image: '/Kokanharvest/kaju.png',
      badge: 'Local Produce'
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f0d] via-[#111814] to-[#050806] text-white font-sans flex flex-col justify-between relative overflow-hidden pt-16 selection:bg-amber-500 selection:text-black">
      
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber-500/5 blur-[130px]" />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow relative z-10 w-full">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">
                Agricultural Heritage & Cuisine
              </p>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white font-serif">
              Konkan <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Harvest</span>
            </h1>
          </div>
          <p className="text-gray-300 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Explore authentic organic fruits, traditional coastal delicacies, and indigenous crops cultivated across the fertile laterite soils of the Konkan belt.
          </p>
        </div>

        {/* Harvest Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {harvestItems.map((item, i) => (
            <div
              key={item.id + i}
              onClick={() => setSelectedItem(item)}
              style={{ animationDelay: `${Math.min(i, 12) * 50}ms` }}
              className="group relative bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-500/40 transition-all duration-500 shadow-xl hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-black/40 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <span className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-amber-500/30 shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-white font-serif text-xl tracking-wide group-hover:text-amber-300 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono text-gray-400 truncate max-w-[180px]">{item.region}</span>
                  <span className="text-amber-300 font-medium group-hover:translate-x-1.5 transition-transform flex items-center gap-1 font-bold">
                    Explore <span className="text-base">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />

      {/* Render the Separate Modal Component */}
      <HarvestModal selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />

    </div>
  );
}

export default KonkanHarvest;