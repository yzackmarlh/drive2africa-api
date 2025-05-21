const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const cars = [
  {"brand": "Mercedes", "model": "GLE", "year": 2021, "mileage": "35,000 km", "fuelType": "Diesel", "price": "42,000 EUR", "location": "Allemagne", "description": "SUV très bien entretenu, première main", "imageUrl": "https://example.com/image-gle.jpg"},
  {"brand": "Toyota", "model": "Hilux", "year": 2022, "mileage": "20,000 km", "fuelType": "Essence", "price": "28,000 EUR", "location": "Dubaï", "description": "Pickup robuste idéal pour tout terrain", "imageUrl": "https://example.com/image-hilux.jpg"},
  {"brand": "BMW", "model": "X5", "year": 2020, "mileage": "40,000 km", "fuelType": "Diesel", "price": "39,000 EUR", "location": "Allemagne", "description": "SUV premium, confort et performance", "imageUrl": "https://example.com/image-x5.jpg"},
  {"brand": "Toyota", "model": "Land Cruiser", "year": 2021, "mileage": "30,000 km", "fuelType": "Diesel", "price": "48,000 EUR", "location": "Dubaï", "description": "SUV 4x4 ultra résistant, idéal pour conditions difficiles", "imageUrl": "https://example.com/image-landcruiser.jpg"},
  {"brand": "Hyundai", "model": "Tucson", "year": 2022, "mileage": "15,000 km", "fuelType": "Essence", "price": "25,000 EUR", "location": "Corée", "description": "SUV compact, économique et fiable", "imageUrl": "https://example.com/image-tucson.jpg"},
  {"brand": "Kia", "model": "Sorento", "year": 2021, "mileage": "25,000 km", "fuelType": "Diesel", "price": "30,000 EUR", "location": "Corée", "description": "SUV familial spacieux", "imageUrl": "https://example.com/image-sorento.jpg"},
  {"brand": "Nissan", "model": "Navara", "year": 2022, "mileage": "10,000 km", "fuelType": "Diesel", "price": "26,000 EUR", "location": "Afrique du Sud", "description": "Pick-up polyvalent, robuste", "imageUrl": "https://example.com/image-navara.jpg"},
  {"brand": "Ford", "model": "Ranger", "year": 2023, "mileage": "5,000 km", "fuelType": "Diesel", "price": "31,000 EUR", "location": "Dubaï", "description": "Pick-up moderne, très prisé en Afrique", "imageUrl": "https://example.com/image-ranger.jpg"},
  {"brand": "Peugeot", "model": "3008", "year": 2021, "mileage": "22,000 km", "fuelType": "Essence", "price": "23,000 EUR", "location": "France", "description": "SUV français stylé et fiable", "imageUrl": "https://example.com/image-3008.jpg"},
  {"brand": "Renault", "model": "Duster", "year": 2020, "mileage": "28,000 km", "fuelType": "Essence", "price": "18,000 EUR", "location": "Maroc", "description": "SUV économique adapté à tous terrains", "imageUrl": "https://example.com/image-duster.jpg"}
];

app.get('/vehicle', (req, res) => {
  const { brand, model } = req.query;

  const found = cars.filter(
    car =>
      car.brand.toLowerCase() === brand?.toLowerCase() &&
      car.model.toLowerCase() === model?.toLowerCase()
  );

  if (found.length > 0) {
    res.json({ success: true, data: found });
  } else {
    res.json({ success: false, message: "Aucun véhicule trouvé." });
  }
});

app.listen(port, () => {
  console.log(`API Drive2Africa enrichie en ligne sur http://localhost:${port}`);
});