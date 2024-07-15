const hotels = [
  {
    id: '1',
    name: 'Grand Riviera Suites',
    price: 490,
    rating: 4,
    description:
      'Located on the bustling Riviera Avenue, Grand Riviera Suites offers luxurious accommodations with stunning views of the city skyline.',
    lat: 34.0522,
    lng: -118.2437
  },
  {
    id: '2',
    name: 'Azure Bay Resort',
    price: 550,
    rating: 4,
    description:
      'Nestled along the pristine Azure Bay, this resort boasts private beach access and world-class amenities.',
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: '3',
    name: 'Silent Pines Lodge',
    price: 420,
    rating: 3,
    description:
      'Set amidst the tranquil Silent Pines forest, this lodge offers a peaceful retreat with nature trails and cozy cabins.',
    lat: 47.6062,
    lng: -122.3321
  },
  {
    id: '4',
    name: 'Moonlight Gardens Hotel',
    price: 600,
    rating: 4,
    description:
      'Moonlight Gardens Hotel offers a blend of modern comfort and historic charm, surrounded by lush gardens and scenic pathways.',
    lat: 40.7128,
    lng: -74.006
  },
  {
    id: '5',
    name: 'Golden Sands Retreat',
    price: 380,
    rating: 5,
    description:
      'Enjoy unparalleled luxury and golden sunsets at Golden Sands Retreat, located right on the edge of a pristine beach.',
    lat: 25.7617,
    lng: -80.1918
  },
  {
    id: '6',
    name: 'Sunset View Resort',
    price: 480,
    rating: 4,
    description:
      'Perched on a cliff overlooking the ocean, Sunset View Resort offers breathtaking sunset views and serene surroundings.',
    lat: 21.3069,
    lng: -157.8583
  },
  {
    id: '7',
    name: 'Mountain Vista Lodge',
    price: 520,
    rating: 5,
    description:
      'Mountain Vista Lodge provides a luxurious mountain retreat with panoramic views, perfect for both relaxation and adventure.',
    lat: 39.7392,
    lng: -104.9903
  },
  {
    id: '8',
    name: 'Seaside Serenity Inn',
    price: 450,
    rating: 3,
    description:
      'Located just steps from the shore, Seaside Serenity Inn offers cozy accommodations with a laid-back seaside atmosphere.',
    lat: 32.7157,
    lng: -117.1611
  },
  {
    id: '9',
    name: 'Tranquil Oasis Hotel',
    price: 510,
    rating: 4,
    description:
      'Escape to Tranquil Oasis Hotel, a peaceful retreat nestled in lush gardens with a serene ambiance and modern amenities.',
    lat: 34.0522,
    lng: -118.2437
  },
  {
    id: '10',
    name: 'Harbor Lights Resort',
    price: 590,
    rating: 4,
    description:
      'Harbor Lights Resort offers stunning harbor views and luxurious accommodations, perfect for a relaxing waterfront getaway.',
    lat: 41.8781,
    lng: -87.6298
  },
  {
    id: '11',
    name: 'Ocean Breeze Resort',
    price: 480,
    rating: 4,
    description:
      'Experience the soothing Ocean Breeze Resort, where the gentle sea breeze and luxurious amenities create an idyllic beachside escape.',
    lat: 33.9416,
    lng: -118.4085
  },
  {
    id: '12',
    name: 'Evergreen Valley Lodge',
    price: 550,
    rating: 4,
    description:
      'Evergreen Valley Lodge offers rustic charm and modern comforts amidst the tranquil beauty of evergreen forests and mountain views.',
    lat: 47.6062,
    lng: -122.3321
  },
  {
    id: '13',
    name: 'Serenity Lake Retreat',
    price: 420,
    rating: 3,
    description:
      'Set beside a picturesque lake, Serenity Lake Retreat offers peaceful accommodations with scenic views and nature trails.',
    lat: 45.5122,
    lng: -122.6587
  },
  {
    id: '14',
    name: 'Whispering Pines Inn',
    price: 610,
    rating: 4,
    description:
      'Nestled among whispering pines, this inn offers a cozy retreat with rustic charm and serene woodland surroundings.',
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: '15',
    name: 'Sunset Horizon Hotel',
    price: 390,
    rating: 3,
    description:
      'Enjoy spectacular sunsets at Sunset Horizon Hotel, located on a hilltop with panoramic views of the horizon and tranquil surroundings.',
    lat: 34.0522,
    lng: -118.2437
  },
  {
    id: '16',
    name: 'Misty Mountain Lodge',
    price: 500,
    rating: 4,
    description:
      'Misty Mountain Lodge offers a cozy mountain retreat with misty mornings and scenic trails, perfect for nature enthusiasts.',
    lat: 39.7392,
    lng: -104.9903
  },
  {
    id: '17',
    name: 'Silver Sands Resort',
    price: 540,
    rating: 4,
    description:
      'Silver Sands Resort offers luxury accommodations with silver sandy beaches and crystal-clear waters, ideal for a beachside getaway.',
    lat: 25.7617,
    lng: -80.1918
  },
  {
    id: '18',
    name: 'Golden Gate Inn',
    price: 460,
    rating: 3,
    description:
      'Golden Gate Inn provides comfortable accommodations with easy access to city attractions and the iconic Golden Gate Bridge.',
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: '19',
    name: 'Tranquil Waters Hotel',
    price: 530,
    rating: 4,
    description:
      'Escape to Tranquil Waters Hotel, where peaceful waters and luxurious accommodations create the perfect retreat.',
    lat: 32.7157,
    lng: -117.1611
  },
  {
    id: '20',
    name: 'Royal Crest Suites',
    price: 580,
    rating: 4,
    description:
      'Royal Crest Suites offers regal accommodations with majestic views and luxurious amenities fit for royalty.',
    lat: 41.8781,
    lng: -87.6298
  }
]

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ hotels })
    }, 100)
  })
}

function submitReservation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Reservation successful!',
        status: 'success'
      })
    }, 5000)
  })
}

export { fetchData, submitReservation }
