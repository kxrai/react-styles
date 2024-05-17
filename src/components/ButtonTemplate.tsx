// src/components/ButtonTemplates.tsx
import React from 'react';

const ButtonTemplates: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Button Templates</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Primary Button
      </button>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Success Button
      </button>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Danger Button
      </button>

      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Warning Button
      </button>

      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Neutral Button
      </button>

      <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
        Outline Button
      </button>

      <button className="bg-transparent text-blue-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Transparent Button
      </button>
    </div>
  );
};

export default ButtonTemplates;
