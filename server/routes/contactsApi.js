// const contactsMocked = require("../mockContacts");
const mongoClient = require("../db");

const getContacts = (req, res) => {
  const dbConnect = mongoClient.getDb();
  dbConnect
    .collection("contacts")
    .find({}).limit(50)
    .toArray((err, result) => {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
  return null
}

const addContact = (req, res) => {
  const dbConnect = mongoClient.getDb();

  const contactInfo = {...req.body, last_modified: new Date()};
  console.log("contactInfo to create", contactInfo);

  dbConnect
    .collection("contacts")
    .insertOne(contactInfo, function (err, result) {
      if (err) {
        res.status(400).send({error: "Error inserting matches!"});
      } else {
        console.log(`Added a new contact with result ${result.insertedId}`);
        res.status(200).send(result);
      }
    });
  return null
}

const updateContact = (req, res) => {
  const dbConnect = mongoClient.getDb();

  const listingQuery = { _id: req.body._id };
  const updates = {
    $inc: {
      likes: 1
    }
  };

  const contactInfo = {...req.body, last_modified: new Date()};
  console.log("contactInfo to update", contactInfo);

  dbConnect
    .collection("contacts")
    .updateOne(listingQuery, updates, (err, _result) => {
      if (err) {
        res.status(400).send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log("1 document updated");
        res.status(200).send({success: true});
      }
    });
  return null
}

module.exports = {
  getContacts,
  addContact,
};
