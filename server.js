const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/search', (req, res) => {
    const { brand, model, yearMin, yearMax, fuelType } = req.body;

    // Résultat simulé sans traduction
    const results = [
        {
            brand: brand || "Mercedes",
            model: model || "GLE",
            year: 2021,
            mileage: "35,000 km",
            fuelType: fuelType || "Diesel",
            price: "42,000 EUR",
            location: "Allemagne",
            description: "SUV très bien entretenu, première main",
            imageUrl: "https://example.com/image-gle.jpg"
        }
    ];

    res.json({
        success: true,
        data: results
    });
});

app.listen(port, () => {
    console.log(`API Drive2Africa simplifiée en ligne sur http://localhost:${port}`);
});