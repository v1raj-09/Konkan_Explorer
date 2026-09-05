// १. रत्नागिरी मधील धबधबे
const ratnagiriWaterfalls = [
  { name: "Marleshwar Waterfall", reg: "Sangameshwar", img: "marleshwar", desc: "A stunning waterfall cascading down near the famous cave temple amidst lush greenery.", type: "Mountain Waterfall" },
  { name: "Nivli Waterfall", reg: "Ratnagiri", img: "nivli", desc: "A scenic and peaceful natural waterfall flowing through dense forest hills.", type: "Forest Waterfall" },
  { name: "Panval Waterfall", reg: "Ratnagiri", img: "panval", desc: "A gorgeous seasonal waterfall known for its powerful flow and rocky surroundings.", type: "Cascade" },
  { name: "Sawatsada Waterfall", reg: "Chiplun", img: "sawatsada1", desc: "A popular roadside waterfall that attracts many travelers during the monsoon season.", type: "Roadside Waterfall" },
  { name: "Ukshi Waterfall", reg: "Ratnagiri", img: "ukshi", desc: "A breathtaking hidden waterfall tucked deep within the Konkan valley ranges.", type: "Valley Waterfall" },
  { name: "Konkan Cascade", reg: "Ratnagiri", img: "waterfall", desc: "A picturesque drop surrounded by vibrant green hills characteristic of the region.", type: "Scenic Waterfall" }
];

// २. सिंधुदुर्ग मधील धबधबे (तुमच्या फोल्डरमधील इमेज फाईल्सनुसार)
const sindhudurgWaterfalls = [
  { name: "Amboli Waterfall", reg: "Sindhudurg", img: "Amboli", desc: "Famous misty mountain waterfall located in the scenic Amboli ghat region.", type: "Ghat Waterfall" },
  { name: "Napne Waterfall", reg: "Sindhudurg", img: "napne", desc: "A beautiful hidden multi-tier waterfall nestled in the Vaibhavwadi taluka of Sindhudurg.", type: "Nature Waterfall" },
  { name: "Savdav Waterfall", reg: "Sindhudurg", img: "savdak", desc: "A magnificent roaring monsoon waterfall surrounded by lush green landscapes.", type: "Monsoon Waterfall" }
];

// ३. मुख्य Export (मर्च करून लहान फॉरमॅटमध्ये तयार करणे)
export const WaterfallData = [
  ...ratnagiriWaterfalls.map((w, index) => ({
    id: index + 1,
    name: w.name,
    region: w.reg,
    category: "Waterfall",
    image: `/waterfall/${w.img}.png`,
    description: w.desc,
    type: w.type
  })),
  ...sindhudurgWaterfalls.map((w, index) => ({
    id: ratnagiriWaterfalls.length + index + 1,
    name: w.name,
    region: w.reg,
    category: "Waterfall",
    image: `/waterfall/${w.img}.png`,
    description: w.desc,
    type: w.type
  }))
];