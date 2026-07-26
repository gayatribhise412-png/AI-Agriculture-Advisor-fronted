export const analyzeDiseaseImage = async (imageFile) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "scan_" + Date.now(),
        fileName: imageFile ? imageFile.name : "leaf_sample_scan.jpg",
        cropName: "Tomato (Solanum lycopersicum) 🍅",
        diseaseName: "Early Blight (Alternaria Solani)",
        confidence: 96.4,
        severity: "Moderate Alert ⚠️",
        symptoms: [
          "Dark brown concentric rings on mature lower foliage",
          "Yellowing chlorotic halo expanding around leaf spots",
          "Partial leaf wilting near lower stem bases"
        ],
        organicControl: "Spray Neem Oil (10,000 PPM) @ 3ml/L or Trichoderma viride bio-fungicide.",
        chemicalControl: "Foliar spray of Mancozeb 75% WP @ 2.5g/L or Azoxystrobin 23% SC @ 1ml/L.",
        preventiveSteps: [
          "Prune lower infected leaves and burn/destroy away from field.",
          "Avoid overhead sprinkler irrigation to keep foliage dry.",
          "Mulch soil around plants to prevent fungal soil-splash."
        ]
      });
    }, 1500);
  });
};
