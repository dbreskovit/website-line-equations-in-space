// src/components/ResultLabel.tsx
import React from 'react';

interface ResultLabelProps {
  result: string;
}

const ResultLabel: React.FC<ResultLabelProps> = ({ result }) => {
  return (
    <label className={`font-bold text-lg ${result.includes('não') ? 'text-red-500' : 'text-green-500'} text-center`}>
      {result}
    </label>
  );
};

export default ResultLabel;