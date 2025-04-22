const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const newSchool = await prisma.school.create({
      data: { name, address, latitude: parseFloat(latitude), longitude: parseFloat(longitude) },
    });

    res.status(201).json(newSchool);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);
    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({ error: "Invalid coordinates" });
    }

    const schools = await prisma.school.findMany();

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: getDistance(userLat, userLon, school.latitude, school.longitude),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { addSchool, listSchools };
