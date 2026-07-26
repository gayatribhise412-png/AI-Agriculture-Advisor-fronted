export const sendChatMessage = async (prompt) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lower = prompt.toLowerCase();
      let responseText = "";
      let confidence = "98%";
      let actionCards = [];

      if (lower.includes("npk") || lower.includes("fertilizer") || lower.includes("soil")) {
        responseText = "🌱 **NPK Advice**: For high crop yields, maintain balanced soil Nitrogen-Phosphorus-Potassium levels. In clay loam soil, apply Urea in 3 split doses (at sowing, tiller stage, and panicle initiation). Supplement with 5 tons/acre organic vermicompost.";
        actionCards.push({ type: "fertilizer", title: "Recommended Fertilizer Plan", detail: "Urea 50kg + DAP 35kg + MOP 25kg / acre" });
      } else if (lower.includes("rust") || lower.includes("blight") || lower.includes("disease") || lower.includes("yellow")) {
        responseText = "🚨 **Crop Health Warning**: Your description points toward **Fungal Blight / Yellow Rust**. Apply Propiconazole 25% EC @ 1ml/Liter of water during early morning. Ensure proper spacing to reduce canopy humidity!";
        actionCards.push({ type: "disease", title: "Fungicide Spray Advisory", detail: "Propiconazole 25% EC (200ml in 200L water per acre)" });
      } else if (lower.includes("rain") || lower.includes("weather") || lower.includes("temperature")) {
        responseText = "⛅ **Agri Weather Advisory**: Expect light localized showers in 48 hours (30% probability). Postpone pesticide spraying until Friday when clear skies return.";
        actionCards.push({ type: "weather", title: "Ideal Spraying Window", detail: "Friday 8:00 AM - 11:30 AM" });
      } else {
        responseText = `🌾 **AI Farm Insights**: I analyzed your inquiry ("${prompt}"). Based on regional climate data and crop satellite telemetry, your field conditions are optimal for rotation with Nitrogen-fixing leguminous crops like Gram or Soybeans next season!`;
      }

      resolve({
        id: "msg_" + Date.now(),
        sender: "ai",
        text: responseText,
        confidence,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionCards
      });
    }, 1100);
  });
};
