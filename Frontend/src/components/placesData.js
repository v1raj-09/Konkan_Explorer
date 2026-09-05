// एकाच जागी सोप्या पद्धतीने डेटा डिफाइन करणे
const ratnagiriBeaches = [
  { name: "Anjarle Beach", dist: "Ratnagiri District", imgs: ["anjarle", "anjarle1"] },
  { name: "Aare Ware Beach", dist: "15 km from Ratnagiri", imgs: ["arevare", "arevare1"] },
  { name: "Bhatye Beach", dist: "Ratnagiri", imgs: ["bhatye", "bhatye1"] },
  { name: "Devghali Beach", dist: "Ratnagiri District", imgs: ["devghali", "devghali1"] },
  { name: "Ganeshgule Beach", dist: "Ratnagiri District", imgs: ["Ganeshgule", "ganeshgule1"] },
  { name: "Ganpatipule Beach", dist: "20 km from Ratnagiri", imgs: ["ganpatiple1"] },
  { name: "Guhagar Beach", dist: "Ratnagiri District", imgs: ["guhagar", "guhagar1"] },
  { name: "Harnai Beach", dist: "Dapoli, Ratnagiri District", imgs: ["harnai", "harnai1"] },
  { name: "Hedvi Beach", dist: "Ratnagiri District", imgs: ["hedvi", "hedvi1"] },
  { name: "Karde Beach", dist: "Ratnagiri District", imgs: ["karde", "karde1"] },
  { name: "Kasheli Beach", dist: "Ratnagiri District", imgs: ["kasheli", "kasheli1"] },
  { name: "Ladghar Beach", dist: "Ratnagiri District", imgs: ["ladghar", "ladghar1"] },
  { name: "Mandvi Beach", dist: "2 km from Ratnagiri", imgs: ["mandavi", "mandavi1"] },
  { name: "Murud Beach", dist: "Ratnagiri District", imgs: ["murud", "murud1"] },
  { name: "Velneshwar Beach", dist: "Ratnagiri District", imgs: ["velneshwar", "velneshwar1"] }
];

const sindhudurgBeaches = [
  { name: "Bhogwe Beach", dist: "Sindhudurg District", imgs: ["bhogwe"] },
  { name: "Chivla Beach", dist: "Malvan, Sindhudurg", imgs: ["chivla"] },
  { name: "Devbagh Beach", dist: "Sindhudurg District", imgs: ["devbag"] },
  { name: "Khavane Beach", dist: "Sindhudurg District", imgs: ["khavane"] },
  { name: "Nivati Beach", dist: "Sindhudurg District", imgs: ["Nivati"] },
  { name: "Shiroda Beach", dist: "Sindhudurg District", imgs: ["shiroda"] },
  { name: "Tarkarli Beach", dist: "Malvan, Sindhudurg", imgs: ["tarkarli"] },
  { name: "Vengurla Beach", dist: "Vengurla, Sindhudurg", imgs: ["Vengurla"] }
];

// ऑटोमॅटिक मुख्य format मध्ये रूपांतर करणे
export const placesData = [
  ...ratnagiriBeaches.map((b, index) => ({
    id: index + 1,
    name: b.name,
    category: "Beach",
    region: "Ratnagiri",
    distance: b.dist,
    images: b.imgs.map(img => `/beaches/${img}.png`),
    mapLink: `https://maps.google.com/?q=${encodeURIComponent(b.name)}`
  })),
  ...sindhudurgBeaches.map((b, index) => ({
    id: ratnagiriBeaches.length + index + 1,
    name: b.name,
    category: "Beach",
    region: "Sindhudurg",
    distance: b.dist,
    images: b.imgs.map(img => `/beaches/${img}.png`),
    mapLink: `https://maps.google.com/?q=${encodeURIComponent(b.name)}`
  }))
];