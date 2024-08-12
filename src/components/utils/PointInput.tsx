// src/components/PointInput.tsx
import React from 'react';
import Input from './Input';

interface PointInputProps {
  label: string;
  point: { x: number; y: number; z: number };
  onChange: (point: { x: number; y: number; z: number }) => void;
}

const PointInput: React.FC<PointInputProps> = ({ label, point, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white font-semibold">{label}:</label>
      <div className="flex flex-wrap gap-2">
        <Input
          type="number"
          placeholder="x"
          value={point.x}
          onChange={(x) => onChange({ ...point, x })}
        />
        <Input
          type="number"
          placeholder="y"
          value={point.y}
          onChange={(y) => onChange({ ...point, y })}
        />
        <Input
          type="number"
          placeholder="z"
          value={point.z}
          onChange={(z) => onChange({ ...point, z })}
        />
      </div>
    </div>
  );
};

export default PointInput;