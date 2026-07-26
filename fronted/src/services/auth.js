export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        const mockUser = {
          id: "farmer_101",
          name: "Gayatri Patel",
          email,
          role: "Lead Agri Practitioner 🌾",
          farmName: "Green Earth Agro Farms",
          acres: 12.5,
          location: "Gujarat Agro Zone 3",
          avatar: "👩‍🌾"
        };
        localStorage.setItem("agri_user", JSON.stringify(mockUser));
        resolve(mockUser);
      } else {
        reject(new Error("Invalid credentials provided"));
      }
    }, 900);
  });
};

export const registerUser = async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = {
        id: "farmer_" + Math.floor(Math.random() * 1000),
        ...userData,
        role: "Registered Farmer 👨‍🌾",
        avatar: "🌾"
      };
      localStorage.setItem("agri_user", JSON.stringify(newUser));
      resolve(newUser);
    }, 1000);
  });
};

export const getCurrentUser = () => {
  const saved = localStorage.getItem("agri_user");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return {
    id: "demo_farmer",
    name: "Farmer Gayatri 👩‍🌾",
    email: "gayatri@farm.ai",
    role: "Agri Visionary",
    farmName: "Sunrise Green Acres",
    acres: 15,
    location: "Maharashtra Cotton Belt",
    avatar: "👩‍🌾"
  };
};

export const logoutUser = async () => {
  localStorage.removeItem("agri_user");
  return true;
};
