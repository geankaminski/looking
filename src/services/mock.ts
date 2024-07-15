const hotels = [
  {
    id: '1',
    name: 'Grand Riviera Suites',
    price: 490,
    rating: 4
  },
  {
    id: '2',
    name: 'Azure Bay Resort',
    price: 550,
    rating: 4
  },
  {
    id: '3',
    name: 'Silent Pines Lodge',
    price: 420,
    rating: 3
  },
  {
    id: '4',
    name: 'Moonlight Gardens Hotel',
    price: 600,
    rating: 4
  },
  {
    id: '5',
    name: 'Golden Sands Retreat',
    price: 380,
    rating: 5
  },
  {
    id: '6',
    name: 'Sunset View Resort',
    price: 480,
    rating: 4
  },
  {
    id: '7',
    name: 'Mountain Vista Lodge',
    price: 520,
    rating: 5
  },
  {
    id: '8',
    name: 'Seaside Serenity Inn',
    price: 450,
    rating: 3
  },
  {
    id: '9',
    name: 'Tranquil Oasis Hotel',
    price: 510,
    rating: 4
  },
  {
    id: '10',
    name: 'Harbor Lights Resort',
    price: 590,
    rating: 4
  },
  {
    id: '11',
    name: 'Ocean Breeze Resort',
    price: 480,
    rating: 4
  },
  {
    id: '12',
    name: 'Evergreen Valley Lodge',
    price: 550,
    rating: 4
  },
  {
    id: '13',
    name: 'Serenity Lake Retreat',
    price: 420,
    rating: 3
  },
  {
    id: '14',
    name: 'Whispering Pines Inn',
    price: 610,
    rating: 4
  },
  {
    id: '15',
    name: 'Sunset Horizon Hotel',
    price: 390,
    rating: 3
  },
  {
    id: '16',
    name: 'Misty Mountain Lodge',
    price: 500,
    rating: 4
  },
  {
    id: '17',
    name: 'Silver Sands Resort',
    price: 540,
    rating: 4
  },
  {
    id: '18',
    name: 'Golden Gate Inn',
    price: 460,
    rating: 3
  },
  {
    id: '19',
    name: 'Tranquil Waters Hotel',
    price: 530,
    rating: 4
  },
  {
    id: '20',
    name: 'Royal Crest Suites',
    price: 580,
    rating: 4
  }
]

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ hotels })
    }, 2000)
  })
}

export default fetchData
