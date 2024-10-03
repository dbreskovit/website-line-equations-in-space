// src/components/VectorInput.tsx
import React from 'react';
import Input from './Input';

interface VectorInputProps {
  label: string;
  vector: { x: number; y: number; z: number };
  onChange: (vector: { x: number; y: number; z: number }) => void;
}

const VectorInput: React.FC<VectorInputProps> = ({ label, vector, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white font-semibold">{label}:</label>
      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="x"
          value={vector.x}
          onChange={(x) => onChange({ ...vector, x })}
        />
        <Input
          type="number"
          placeholder="y"
          value={vector.y}
          onChange={(y) => onChange({ ...vector, y })}
        />
        <Input
          type="number"
          placeholder="z"
          value={vector.z}
          onChange={(z) => onChange({ ...vector, z })}
        />
      </div>
    </div>
  );
};

export default VectorInput;