// src/components/LineEquationForm.tsx
import { useState, useEffect, FormEvent } from 'react';
import VectorInput from './utils/VectorInput';
import PointInput from './utils/PointInput';
import ResultLabel from './utils/ResultLabel';
import { Vector3, LineEquationFormProps } from '../types';

const defaultValues = {
  P0: { x: 1, y: 2, z: 3 },
  V: { x: 1, y: 0, z: 0 },
  P: { x: 2, y: 2, z: 3 }
};

function LineEquationForm({ onFormSubmit }: LineEquationFormProps) {
  const [P0, setP0] = useState(defaultValues.P0);
  const [V, setV] = useState(defaultValues.V);
  const [P, setP] = useState(defaultValues.P);
  const [result, setResult] = useState<string>('');

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    const validateVector = (vector: Vector3) =>
      !isNaN(vector.x) && !isNaN(vector.y) && !isNaN(vector.z);
    if (validateVector(P0) && validateVector(V) && validateVector(P)) {
      const isPointOnLine = (P0: Vector3, V: Vector3, P: Vector3): boolean => {
        const epsilon = 1e-6;
        if (V.x === 0 && V.y === 0 && V.z === 0) return false;
        if (P0.x === P.x && P0.y === P.y && P0.z === P.z) return true;
        if (V.x === 0 && P.x !== P0.x) return false;
        if (V.y === 0 && P.y !== P0.y) return false;
        if (V.z === 0 && P.z !== P0.z) return false;
        const tX = V.x !== 0 ? (P.x - P0.x) / V.x : NaN;
        const tY = V.y !== 0 ? (P.y - P0.y) / V.y : NaN;
        const tZ = V.z !== 0 ? (P.z - P0.z) / V.z : NaN;
        return (
          (isNaN(tX) || isNaN(tY) || Math.abs(tX - tY) < epsilon) &&
          (isNaN(tY) || isNaN(tZ) || Math.abs(tY - tZ) < epsilon) &&
          (isNaN(tX) || isNaN(tZ) || Math.abs(tX - tZ) < epsilon)
        );
      };
      if (isPointOnLine(P0, V, P)) {
        setResult('O ponto está na linha.');
      } else {
        setResult('O ponto não está na linha.');
      }
      onFormSubmit(P0, V, P);
    } else {
      setResult('Os valores devem ser números válidos.');
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-slate-950 border border-slate-900 rounded-lg shadow-lg w-full max-w-md p-6 sm:p-8"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Equação paramétrica da reta</h1>
        <VectorInput label="Ponto Inicial" vector={P0} onChange={setP0} />
        <VectorInput label="Vetor Diretor" vector={V} onChange={setV} />
        <PointInput label="Ponto" point={P} onChange={setP} />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-lg py-2 font-semibold hover:bg-indigo-700 transition-colors duration-300 w-full"
        >
          Verificar
        </button>
        <ResultLabel result={result} />
      </form>
    </div>
  );
}

export default LineEquationForm;