// १. रत्नागिरी मधील किल्ले
const ratnagiriForts = [
  { name: "Ambolgad Fort", reg: "Ratnagiri", img: "Ambolgad", desc: "A small coastal fort situated on a rocky cliff overlooking the Arabian Sea.", builtBy: "Maratha Empire" },
  { name: "Fattegad Fort", reg: "Ratnagiri", img: "fattegad", desc: "A historic sea fortification known for its strategic coastal vantage point.", builtBy: "Maratha Empire" },
  { name: "Jaigad Fort", reg: "Ratnagiri", img: "jaygad", desc: "Perched on a cliff at the mouth of the Shastri river, offering panoramic views.", builtBy: "Bijapur Sultanate" },
  { name: "Mahipatgad", reg: "Sangameshwar", img: "mahipatgad", desc: "A massive hill fort featuring a vast plateau, dense vegetation, and old fortifications.", builtBy: "Adil Shahi Dynasty" },
  { name: "Purngad", reg: "Ratnagiri", img: "purngad", desc: "A small promontory fort built on a hillock overlooking a creek and the sea.", builtBy: "Maratha Empire" },
  { name: "Rasalgad", reg: "Ratnagiri / Khed", img: "rasalgad", desc: "An ancient hill fort offering a tactical vantage point and remnants of historical gateways.", builtBy: "Adil Shahi Dynasty" },
  { name: "Ratnadurg Fort", reg: "Ratnagiri", img: "ratnadurg", desc: "A horseshoe-shaped sea fort surrounded by water on three sides, housing the Bhagwati temple.", builtBy: "Bahamani Sultanate" },
  { name: "Suvarnadurg", reg: "Dapoli", img: "suvarngad", desc: "A formidable sea fort built on a small island off the coast, historically used as a naval base.", builtBy: "Adil Shahi Dynasty" }
];

// २. सिंधुदुर्ग मधील किल्ले (तुमच्या फोल्डरमधील इमेज फाईल्सनुसार)
const sindhudurgForts = [
  { name: "Padmadurg Fort", reg: "Sindhudurg", img: "padmdurg", desc: "Historic island fortification in Malvan region.", builtBy: "Maratha Empire" },
  { name: "Sindhudurg Fort", reg: "Sindhudurg", img: "sindudurg", desc: "Magnificent sea fort built by Chhatrapati Shivaji Maharaj on Kurte island.", builtBy: "Maratha Empire" },
  { name: "Vijaydurg Fort", reg: "Sindhudurg", img: "vijaydurg", desc: "The oldest and strongest sea fort on the Konkan coast, famous for naval history.", builtBy: "Shilahara Dynasty" },
  { name: "Yashwantgad Fort (Redi)", reg: "Sindhudurg", img: "yashwantgad", desc: "A historic coastal fort covered with dense greenery and nature near Redi.", builtBy: "Maratha Empire" }
];

// ३. मुख्य Export (मर्च करून लहान फॉरमॅटमध्ये तयार करणे)
export const fortsData = [
  ...ratnagiriForts.map((f, index) => ({
    id: index + 1,
    name: f.name,
    region: f.reg,
    category: "Fort",
    image: `/fort/${f.img}.png`,
    description: f.desc,
    builtBy: f.builtBy
  })),
  ...sindhudurgForts.map((f, index) => ({
    id: ratnagiriForts.length + index + 1,
    name: f.name,
    region: f.reg,
    category: "Fort",
    image: `/fort/${f.img}.png`,
    description: f.desc,
    builtBy: f.builtBy
  }))
];