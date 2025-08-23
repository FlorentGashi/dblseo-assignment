interface ServiceSchemaProps {
  name: string
  description: string
  provider: string
  areaServed: string
  image?: string
}

export function generateServiceSchema({
  name,
  description,
  provider,
  areaServed,
  image,
}: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': name,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': provider
    },
    'areaServed': {
      '@type': 'City',
      'name': areaServed
    },
    ...(image && { 'image': image })
  }
}
