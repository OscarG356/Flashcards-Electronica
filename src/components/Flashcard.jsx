import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({ flashcard, isCompleted, onToggleCompleted, onCardView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      onCardView(flashcard.id);
    }
  };

  const handleMarkCompleted = (e) => {
    e.stopPropagation();
    onToggleCompleted(flashcard.id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Leyes': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Circuitos': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Resistencias': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Componentes': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Teoremas': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Potencia': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'AC': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer perspective-1000"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d duration-300"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(flashcard.categoria)}`}>
                {flashcard.categoria}
              </span>
              <button
                onClick={handleMarkCompleted}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isCompleted 
                    ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300' 
                    : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900'
                }`}
                title={isCompleted ? 'Marcar como no dominada' : 'Marcar como dominada'}
              >
                {isCompleted ? '✅' : '☐'}
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
              {flashcard.pregunta}
            </h3>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Haz clic para ver la respuesta
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(flashcard.categoria)}`}>
                {flashcard.categoria}
              </span>
              <button
                onClick={handleMarkCompleted}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isCompleted 
                    ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300' 
                    : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900'
                }`}
                title={isCompleted ? 'Marcar como no dominada' : 'Marcar como dominada'}
              >
                {isCompleted ? '✅' : '☐'}
              </button>
            </div>
            <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">
              {flashcard.respuesta}
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Haz clic para volver a la pregunta
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Flashcard;