interface SchemaOrgProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'BreadcrumbList';
  data: any;
}

const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Apex Roofing',
          url: 'https://apexroofing.com',
          logo: 'https://apexroofing.com/images/logo.png',
          sameAs: [
            'https://facebook.com/apexroofing',
            'https://twitter.com/apexroofing',
            'https://instagram.com/apexroofing',
            'https://linkedin.com/company/apexroofing'
          ],
          ...data
        };
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'RoofingContractor',
          name: 'Apex Roofing',
          image: 'https://apexroofing.com/images/storefront.jpg',
          '@id': 'https://apexroofing.com',
          url: 'https://apexroofing.com',
          telephone: '(214) 555-0123',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1234 Roofing Way',
            addressLocality: 'Dallas',
            addressRegion: 'TX',
            postalCode: '75201',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 32.7767,
            longitude: -96.7970
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '08:00',
            closes: '17:00'
          },
          ...data
        };
      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Roofing Service',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Apex Roofing'
          },
          areaServed: {
            '@type': 'City',
            name: 'Dallas'
          },
          ...data
        };
      case 'BreadcrumbList':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': item.url,
              name: item.name
            }
          }))
        };
      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
};

export default SchemaOrg;
