export const APP_NAME = "AgriSmart AI Advisor";
export const TAGLINE = "Empowering Farmers with Next-Gen AI Agricultural Intelligence";

export const CROP_CATEGORIES = [
  { id: "cereals", name: "Cereals & Grains", icon: "🌾", count: "12 Crops" },
  { id: "vegetables", name: "Vegetables & Greens", icon: "🥦", count: "18 Crops" },
  { id: "fruits", name: "Orchards & Fruits", icon: "🍎", count: "15 Crops" },
  { id: "cash", name: "Cash & Fiber Crops", icon: "🌱", count: "8 Crops" },
  { id: "pulses", name: "Pulses & Legumes", icon: "🫘", count: "10 Crops" }
];

export const COMMON_DISEASES = [
  {
    id: "d1",
    crop: "Tomato",
    name: "Early Blight (Alternaria solani)",
    symptoms: "Concentric rings on lower leaves, yellow halo surrounding dark spots",
    treatment: "Apply Copper Fungicide or Mancozeb every 7-10 days. Ensure crop rotation.",
    severity: "Medium ⚠️",
    image: "🍅"
  },
  {
    id: "d2",
    crop: "Wheat",
    name: "Yellow Rust (Puccinia striiformis)",
    symptoms: "Yellow streaks of pustules running parallel along leaf veins",
    treatment: "Spray Propiconazole 25% EC @ 1ml/L water immediately upon detection.",
    severity: "High 🚨",
    image: "🌾"
  },
  {
    id: "d3",
    crop: "Rice",
    name: "Bacterial Leaf Blight",
    symptoms: "Water-soaked lesions on leaf margins turning yellow to white stripes",
    treatment: "Spray Streptocycline @ 6g + Copper Oxychloride @ 500g per acre.",
    severity: "High 🚨",
    image: "🍚"
  },
  {
    id: "d4",
    crop: "Corn / Maize",
    name: "Northern Corn Leaf Blight",
    symptoms: "Long elliptical grayish-green or tan lesions on lower leaves",
    treatment: "Foliar application of Azoxystrobin or Chlorothalonil.",
    severity: "Low 🌿",
    image: "🌽"
  }
];

export const MOCK_WEATHER_DATA = {
  location: "Green Valley Agri-Zone (District 4)",
  temperature: 28,
  condition: "Partly Cloudy ⛅",
  humidity: 65,
  windSpeed: "14 km/h 💨",
  rainfallProbability: "30%",
  soilMoisture: "42% (Optimal)",
  uvIndex: "6 (Moderate)",
  forecast: [
    { day: "Today", temp: "28°C", icon: "⛅", desc: "Optimal for Irrigation" },
    { day: "Tomorrow", temp: "30°C", icon: "☀️", desc: "Warm & Sunny" },
    { day: "Thu", temp: "26°C", icon: "🌧️", desc: "Light Rain Expected" },
    { day: "Fri", temp: "27°C", icon: "🌦️", desc: "Scattered Showers" },
    { day: "Sat", temp: "29°C", icon: "🌤️", desc: "Fair Spraying Conditions" }
  ]
};

export const QUICK_PROMPTS = [
  "🌾 What is the ideal N-P-K fertilizer ratio for Wheat in clay soil?",
  "🐛 How do I organically treat Yellow Rust in my tomato plant?",
  "🌧️ Is rain expected in my region during harvest this week?",
  "🧪 Analyze my soil PDF report to recommend high-yield cash crops."
];
