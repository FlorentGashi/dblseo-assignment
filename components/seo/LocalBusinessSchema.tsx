interface LocalBusinessSchemaProps {
  name: string
  description: string
  imageUrl: string
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  telephone: string
  priceRange: string
  sameAs: string[]
  openingHours: {
    days: string[]
    opens: string
    closes: string
  }
}

export function generateLocalBusinessSchema({
  name,
  description,
  imageUrl,
  address,
  geo,
  telephone,
  priceRange,
  sameAs,
  openingHours,
}: LocalBusinessSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    'name': name,
    'description': description,
    'image': imageUrl,
    '@id': 'https://apexroofing.com',
    'url': 'https://apexroofing.com',
    'telephone': telephone,
    'priceRange': priceRange,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address.street,
      'addressLocality': address.city,
      'addressRegion': address.state,
      'postalCode': address.postalCode,
      'addressCountry': address.country
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': geo.latitude,
      'longitude': geo.longitude
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': openingHours.days,
      'opens': openingHours.opens,
      'closes': openingHours.closes
    },
    'sameAs': sameAs
  }
}
