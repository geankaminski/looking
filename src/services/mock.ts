const hotels = [
  {
    id: '1',
    name: 'Grand Riviera Suites',
    price: 490,
    rating: 4,
    description:
      'Located on the bustling Riviera Avenue, Grand Riviera Suites offers luxurious accommodations with stunning views of the city skyline.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '2',
    name: 'Azure Bay Resort',
    price: 550,
    rating: 4,
    description:
      'Nestled along the pristine Azure Bay, this resort boasts private beach access and world-class amenities.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '3',
    name: 'Silent Pines Lodge',
    price: 420,
    rating: 3,
    description:
      'Set amidst the tranquil Silent Pines forest, this lodge offers a peaceful retreat with nature trails and cozy cabins.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '4',
    name: 'Moonlight Gardens Hotel',
    price: 600,
    rating: 4,
    description:
      'Moonlight Gardens Hotel offers a blend of modern comfort and historic charm, surrounded by lush gardens and scenic pathways.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '5',
    name: 'Golden Sands Retreat',
    price: 380,
    rating: 5,
    description:
      'Enjoy unparalleled luxury and golden sunsets at Golden Sands Retreat, located right on the edge of a pristine beach.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '6',
    name: 'Sunset View Resort',
    price: 480,
    rating: 4,
    description:
      'Perched on a cliff overlooking the ocean, Sunset View Resort offers breathtaking sunset views and serene surroundings.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '7',
    name: 'Mountain Vista Lodge',
    price: 520,
    rating: 5,
    description:
      'Mountain Vista Lodge provides a luxurious mountain retreat with panoramic views, perfect for both relaxation and adventure.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '8',
    name: 'Seaside Serenity Inn',
    price: 450,
    rating: 3,
    description:
      'Located just steps from the shore, Seaside Serenity Inn offers cozy accommodations with a laid-back seaside atmosphere.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '9',
    name: 'Tranquil Oasis Hotel',
    price: 510,
    rating: 4,
    description:
      'Escape to Tranquil Oasis Hotel, a peaceful retreat nestled in lush gardens with a serene ambiance and modern amenities.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '10',
    name: 'Harbor Lights Resort',
    price: 590,
    rating: 4,
    description:
      'Harbor Lights Resort offers stunning harbor views and luxurious accommodations, perfect for a relaxing waterfront getaway.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '11',
    name: 'Ocean Breeze Resort',
    price: 480,
    rating: 4,
    description:
      'Experience the soothing Ocean Breeze Resort, where the gentle sea breeze and luxurious amenities create an idyllic beachside escape.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '12',
    name: 'Evergreen Valley Lodge',
    price: 550,
    rating: 4,
    description:
      'Evergreen Valley Lodge offers rustic charm and modern comforts amidst the tranquil beauty of evergreen forests and mountain views.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '13',
    name: 'Serenity Lake Retreat',
    price: 420,
    rating: 3,
    description:
      'Set beside a picturesque lake, Serenity Lake Retreat offers peaceful accommodations with scenic views and nature trails.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '14',
    name: 'Whispering Pines Inn',
    price: 610,
    rating: 4,
    description:
      'Nestled among whispering pines, this inn offers a cozy retreat with rustic charm and serene woodland surroundings.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '15',
    name: 'Sunset Horizon Hotel',
    price: 390,
    rating: 3,
    description:
      'Enjoy spectacular sunsets at Sunset Horizon Hotel, located on a hilltop with panoramic views of the horizon and tranquil surroundings.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '16',
    name: 'Misty Mountain Lodge',
    price: 500,
    rating: 4,
    description:
      'Misty Mountain Lodge offers a cozy mountain retreat with misty mornings and scenic trails, perfect for nature enthusiasts.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '17',
    name: 'Silver Sands Resort',
    price: 540,
    rating: 4,
    description:
      'Silver Sands Resort offers luxury accommodations with silver sandy beaches and crystal-clear waters, ideal for a beachside getaway.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '18',
    name: 'Golden Gate Inn',
    price: 460,
    rating: 3,
    description:
      'Golden Gate Inn provides comfortable accommodations with easy access to city attractions and the iconic Golden Gate Bridge.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '19',
    name: 'Tranquil Waters Hotel',
    price: 530,
    rating: 4,
    description:
      'Escape to Tranquil Waters Hotel, where peaceful waters and luxurious accommodations create the perfect retreat.',
    image: 'https://picsum.photos/500/300'
  },
  {
    id: '20',
    name: 'Royal Crest Suites',
    price: 580,
    rating: 4,
    description:
      'Royal Crest Suites offers regal accommodations with majestic views and luxurious amenities fit for royalty.',
    image: 'https://picsum.photos/500/300'
  }
]

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ hotels })
    }, 100)
  })
}

function submitReservation(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Reservation successful!',
        status: 'success',
        id
      })
    }, 5000)
  })
}

export { fetchData, submitReservation }
