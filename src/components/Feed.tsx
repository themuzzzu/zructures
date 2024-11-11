import React, { useState } from 'react';
import LocationFilter from './LocationFilter';
import ZructCard from './ZructCard';
import { sampleZructs } from '../data/sampleData';

export default function Feed() {
  const [activeLocation, setActiveLocation] = useState('Local');

  return (
    <div className="space-y-6">
      <LocationFilter
        activeLocation={activeLocation}
        onLocationChange={setActiveLocation}
      />
      
      {/* Zructs Feed */}
      <div className="space-y-6">
        {sampleZructs.map((zruct) => (
          <ZructCard key={zruct.id} zruct={zruct} />
        ))}
      </div>
    </div>
  );
}