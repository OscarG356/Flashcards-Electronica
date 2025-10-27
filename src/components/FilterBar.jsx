import React from 'react';
import { motion } from 'framer-motion';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, totalCards, viewedCards, completedCards, flashcards }) => {
  const getCategoryCount = (category) => {
    if (category === 'Todas') return totalCards;
    return flashcards.filter(card => card.categoria === category).length;
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
      {/* Estadísticas */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Total: <span className="font-semibold">{totalCards}</span>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Vistas: <span className="font-semibold">{viewedCards}</span>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Dominadas: <span className="font-semibold">{completedCards}</span>
          </span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span>Progreso de estudio</span>
          <span>{Math.round((viewedCards / totalCards) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(viewedCards / totalCards) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Filtros de categorías */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Filtrar por categoría
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
              <span className="ml-2 text-xs opacity-75">
                ({getCategoryCount(category)})
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Botón de resetear progreso */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <motion.button
          className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            if (window.confirm('¿Estás seguro de que quieres resetear todo el progreso?')) {
              localStorage.removeItem('flashcards-progress');
              window.location.reload();
            }
          }}
        >
          🔄 Resetear progreso
        </motion.button>
      </div>
    </div>
  );
};

export default FilterBar;