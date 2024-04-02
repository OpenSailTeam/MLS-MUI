// src/data/mockProperties.ts

export interface Property {
    id: number;
    title: string;
    price: string;
    address: string;
    imageUrl: string;
    coordinates: [number, number]; // Latitude, Longitude
  }
  
  export const mockProperties: Property[] = [
    {
      id: 1,
      title: 'Cozy Downtown Apartment',
      price: '$1,200/mo',
      address: '123 Main St, Anytown, USA',
      imageUrl: 'https://via.placeholder.com/150',
      coordinates: [51.505, -0.09], // Example coordinates
    },
    // Add more properties as needed
  ];
  