// src/types.ts
// Define a type for a 3D vector
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

// Define the props for the LineEquationForm component
export interface LineEquationFormProps {
  onFormSubmit: (P0: Vector3, V: Vector3, P: Vector3) => void;
}
