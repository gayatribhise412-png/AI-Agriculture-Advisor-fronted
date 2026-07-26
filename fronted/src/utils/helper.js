export const formatDate = (date = new Date()) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const calculateNPK = (crop, soilType, landAreaAcres) => {
  const baseNPK = {
    Wheat: { n: 120, p: 60, k: 40 },
    Rice: { n: 150, p: 50, k: 50 },
    Cotton: { n: 160, p: 80, k: 80 },
    Sugarcane: { n: 250, p: 110, k: 110 },
    Tomato: { n: 100, p: 80, k: 100 },
    Potato: { n: 180, p: 100, k: 120 },
    Corn: { n: 140, p: 65, k: 50 }
  };

  const selected = baseNPK[crop] || { n: 120, p: 60, k: 60 };
  const area = parseFloat(landAreaAcres) || 1;

  return {
    ureaKg: Math.round((selected.n * 2.17) * area),
    dapKg: Math.round((selected.p * 2.17) * area),
    mopKg: Math.round((selected.k * 1.66) * area),
    totalOrganicCompostBags: Math.round(5 * area),
    recommendation: `For ${area} acre(s) of ${crop} in ${soilType} soil, split Nitrogen applications into 3 split doses (at sowing, 30 days, and flowering).`
  };
};

export const generateId = () => {
  return 'id_' + Math.random().toString(36).substr(2, 9);
};
