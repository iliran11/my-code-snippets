// find city
db.getCollection("cities").find({ slug: "san-fernando-la-union" });
db.getCollection("stations").find({ city: ObjectId("5ea19f497c0b2650be2bc2bf") });

// find a line with specific city in station a or b
db.getCollection("lines").find({
  $or: [
    { stationA: ObjectId("5ea19f63c72caaaf837265c5") },
    { stationB: ObjectId("5ea19f63c72caaaf837265c5") },
  ],
});
