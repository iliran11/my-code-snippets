//example of temp1 you can see below.

let json = {}
temp1.forEach(amenity=>{
  json[`amenity-${amenity._id}`] = amenity.label
})

console.log(json)



// temp1 

[
  {
    "_id": "58a8bbcde7c00c0006b947e1",
    "label": "A/C",
    "__v": 0,
    "order": 0,
    "icon": {
      "className": "airConditioning",
      "cssClass": "icon-snow",
      "provider": "fontello-icons",
      "id": "1182"
    }
  },
  {
    "_id": "58a8bbf7b4869b00063b22d1",
    "label": "Wifi",
    "__v": 0,
    "order": 4,
    "icon": {
      "id": "89",
      "provider": "icon_set_1",
      "cssClass": "icon_set_1_icon-86",
      "className": "wifi"
    }
  },
  {
    "_id": "58a9dc535da64000063e3633",
    "label": "TV",
    "__v": 0,
    "order": 8,
    "icon": {
      "id": "214",
      "provider": "icon_set_2",
      "cssClass": "icon_set_2_icon-116",
      "className": "tv"
    }
  },
  {
    "_id": "58ac5f259c813c0006cfc38f",
    "label": "WC",
    "__v": 0,
    "order": 2,
    "icon": {
      "className": "toilets",
      "cssClass": "icon-toilet",
      "provider": "fontello-icons",
      "id": "1717"
    }
  },
  {
    "_id": "58acdcf7b626ad00060bcea4",
    "label": "Reclining Seats",
    "__v": 0,
    "order": 1,
    "icon": {
      "cssClass": "icon_set_2_icon-104",
      "provider": "icon_set_2",
      "id": "202",
      "className": "recliningSeat"
    }
  },
  {
    "_id": "58ae0437fcb5e90007b17267",
    "label": "English Speaking Staff",
    "__v": 0,
    "order": 6,
    "icon": {
      "id": "19",
      "provider": "icon_set_1",
      "cssClass": "icon_set_1_icon-16",
      "className": "englishGuide"
    }
  },
  {
    "_id": "593ff89e3332c40005ded102",
    "label": "Blanket",
    "__v": 0,
    "order": 5,
    "icon": {
      "className": "blanket",
      "cssClass": "icon-layers",
      "provider": "fontello-icons",
      "id": "1397"
    }
  },
  {
    "_id": "5a9d25d43d2ca800015d7e2a",
    "label": "Charger",
    "__v": 0,
    "order": 7,
    "icon": {
      "className": "chargerSocket",
      "cssClass": "icon-progress-3",
      "provider": "fontello-icons",
      "id": "835"
    }
  },
  {
    "_id": "5acf4ba98a7bba0001521995",
    "label": "Food",
    "__v": 0,
    "order": 3,
    "icon": {
      "id": "17",
      "provider": "icon_set_1",
      "cssClass": "icon_set_1_icon-14",
      "className": "foodIncluded"
    }
  }
]
