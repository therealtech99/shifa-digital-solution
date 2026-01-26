'use client'

import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useMemo } from 'react'

const libraries: ('places')[] = ['places']

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
}

export default function MapSection() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  const center = useMemo(() => defaultCenter, [])

  if (loadError) {
    return (
      <section className="h-96 bg-dark-surface flex items-center justify-center">
        <div className="text-white/60">Error loading map. Please check your API key.</div>
      </section>
    )
  }

  if (!isLoaded) {
    return (
      <section className="h-96 bg-dark-surface flex items-center justify-center">
        <div className="text-white/60">Loading map...</div>
      </section>
    )
  }

  // Fallback to iframe if API key is not set
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <section className="h-96 bg-dark-surface">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132239345!2d-74.00594168459399!3d40.71277597932678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a258c4c4b1b%3A0x8e8e8e8e8e8e8e8e!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all"
        />
      </section>
    )
  }

  return (
    <section className="h-96 bg-dark-surface">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={{
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#242f3e' }],
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#242f3e' }],
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#746855' }],
            },
          ],
          disableDefaultUI: false,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </section>
  )
}
