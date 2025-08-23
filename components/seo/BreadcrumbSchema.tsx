interface BreadcrumbListSchemaProps {
  items: {
    name: string
    item: string
  }[]
}

export function generateBreadcrumbSchema({ items }: BreadcrumbListSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://apexroofing.com${item.item}`
    }))
  }
}
