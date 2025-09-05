🌦 weather-app

A simple, responsive weather application built to quickly check current weather conditions for any city.

📌 Project Purpose


It helps users search for a city and instantly view the **current weather details** such as temperature, wind speed, humidity, and other conditions.

 🛠 Tech Stack

* **Framework**: React (Vite + TypeScript)
* **Styling**: Tailwind CSS
* **API**: [Open-Meteo API](https://open-meteo.com/) (No authentication required)
* **Deployment**: GitHub Pages & Vercel

✨ Features

* 🔍 Search weather by city name
* 🌡 Shows temperature, wind speed, humidity, pressure, UV index, and visibility
* 📊 Visualizations using charts (Recharts)
* 🎨 Clean, mobile-responsive UI with Tailwind CSS
* ⚡ Fast performance with Vite
* 🚨 Error handling for invalid city names or API issues

📂 Project Structure


/weather-app
│── public/          # Static assets (videos, images, icons)  
│── src/  
│   ├── components/  # Reusable UI components  
│   ├── App.tsx      # Main app logic  
│   ├── index.tsx    # Entry point  
│   └── index.css    # Tailwind styles  
│── package.json  
│── vite.config.ts  
│── README.md  




1️⃣ Clone the repo

`bash
git clone https://github.com/nikhita22032003/weather-app.git
cd weather-app


2️⃣ Install dependencies

bash
npm install


3️⃣ Run the app locally

bash
npm run dev



🌍 Live Demo

* **GitHub Pages**: [Weather App](https://nikhita22032003.github.io/weather-app/)
https://nikhita22032003.github.io/weather-app/

 🧑‍💻 Code Notes

* `App.tsx` → Handles state management & API calls.
* `SearchBar.tsx` → City input & search logic.
* `WeatherCard.tsx` → Displays current weather info.
* `WeatherCharts.tsx` → Shows weather insights visually.
* Each component has inline comments explaining logic.

📜 License

This project is open-source and free to use.


⚡ Built with ❤️ using **React + Tailwind + Open-Meteo API**




