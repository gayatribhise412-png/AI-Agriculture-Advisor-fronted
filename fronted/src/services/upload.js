export const uploadPDFReport = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "pdf_" + Date.now(),
        fileName: file ? file.name : "Soil_Test_Report_2026.pdf",
        fileSize: file ? (file.size / 1024 / 1024).toFixed(2) + " MB" : "1.84 MB",
        phLevel: 6.8,
        phStatus: "Optimal (Slightly Acidic to Neutral) 🌱",
        organicCarbon: "0.62% (Medium Level)",
        nitrogenStatus: "Low (145 kg/ha) - Needs Supplementation 🚨",
        phosphorusStatus: "Medium (28 kg/ha)",
        potassiumStatus: "High (290 kg/ha)",
        micronutrients: {
          zinc: "Deficient (<0.6 ppm)",
          iron: "Sufficient (6.2 ppm)",
          boron: "Adequate (0.8 ppm)"
        },
        recommendedCrops: ["Wheat 🌾", "Soybean 🫘", "Maize 🌽", "Cotton 🧵"],
        actionPlan: [
          "Apply Zinc Sulphate 21% @ 10 kg/acre prior to sowing.",
          "Increase Bio-fertilizer Azotobacter seed treatment by 250g/acre.",
          "Split Nitrogen dosage into 3 separate split applications."
        ]
      });
    }, 1800);
  });
};
