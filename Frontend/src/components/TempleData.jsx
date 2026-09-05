// १. रत्नागिरी मधील मंदिरे
const ratnagiriTemples = [
  { name: "Ganpatipule Temple", reg: "Ratnagiri", img: "ganpatipule", desc: "A famous self-manifested monolith idol of Lord Ganesha situated right on the beach.", deity: "Lord Ganesha" },
  { name: "Jayvinayak Temple", reg: "Ratnagiri", img: "jayvinayak", desc: "A prominent temple known for its peaceful ambiance and gorgeous wood-and-stone architecture.", deity: "Lord Ganesha" },
  { name: "Kadyavarcha Ganpati", reg: "Anjarle", img: "Kadyavarcha Ganpati", desc: "A unique cliffside temple offering breathtaking views of the surrounding hills and sea.", deity: "Lord Ganesha" },
  { name: "Karneshwar Temple", reg: "Ratnagiri", img: "karneshwar", desc: "An ancient structural marvel showcasing traditional stone carving and architecture.", deity: "Lord Shiva" },
  { name: "Marleshwar Temple", reg: "Sangameshwar", img: "marleshwar", desc: "A cave temple nestled inside a mountain waterfall landscape surrounded by lush greenery.", deity: "Lord Shiva" },
  { name: "Sapteshwar Temple", reg: "Ratnagiri", img: "sapteshwar", desc: "A serene holy shrine featuring sacred water tanks and quiet heritage structures.", deity: "Lord Shiva" },
  { name: "Shardadevi Temple", reg: "Ratnagiri", img: "shardadevi", desc: "A vibrant cultural and religious temple known for its distinctive architectural design.", deity: "Goddess Sharda" },
  { name: "Tikleshwar Temple", reg: "Ratnagiri", img: "tikleshwar", desc: "A quiet hilltop shrine offering picturesque views of the valleys below.", deity: "Lord Shiva" },
  { name: "Vyaghreshwar Temple", reg: "Ratnagiri", img: "vyaghreshwar", desc: "An historic temple featuring grand architecture and rich spiritual significance.", deity: "Lord Shiva" }
];

// २. सिंधुदुर्ग मधील मंदिरे (तुमच्या फोल्डरमधील इमेज फाईल्सनुसार)
const sindhudurgTemples = [
  { name: "Bharadi Devi Temple", reg: "Sindhudurg", img: "bharadidevi", desc: "Famous for its vibrant Navratra Jatra and cultural heritage.", deity: "Goddess Bharadi" },
  { name: "Kankaleshwar Temple", reg: "Sindhudurg", img: "kankaleshwar", desc: "Unique stone architecture situated amidst serene surroundings.", deity: "Lord Shiva" },
  { name: "Rameshwar Temple", reg: "Sindhudurg", img: "rameshwar", desc: "Ancient and historic shrine known for its spiritual atmosphere.", deity: "Lord Shiva" },
  { name: "Kunkeshwar Temple", reg: "Sindhudurg", img: "kunkeshwar", desc: "A beautiful coastal temple dedicated to Lord Shiva right by the Arabian Sea.", deity: "Lord Shiva" },
  { name: "Narayan Temple", reg: "Sindhudurg", img: "narayan", desc: "A peaceful and sacred spiritual retreat in Sindhudurg.", deity: "Lord Vishnu" },
]
// 3. मुख्य Export (मर्च करून लहान फॉरमॅटमध्ये तयार करणे)
export const templeData = [
  ...ratnagiriTemples.map((t, index) => ({
    id: index + 1,
    name: t.name,
    region: t.reg,
    category: "Temple",
    image: `/temple/${t.img}.png`,
    description: t.desc,
    deity: t.deity
  })),
  ...sindhudurgTemples.map((t, index) => ({
    id: ratnagiriTemples.length + index + 1,
    name: t.name,
    region: t.reg,
    category: "Temple",
    image: `/temple/${t.img}.png`,
    description: t.desc,
    deity: t.deity
  }))
];