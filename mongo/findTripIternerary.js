db.getCollection("lines").find({ tripInfo: { $exists: true } });
db.getCollection("lines").find(
  { _id: ObjectId("5eca87682972e644f4df08f8") },
  { tripInfo: 1 }
);
