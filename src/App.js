import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Flashcard from './components/Flashcard';
import FilterBar from './components/FilterBar';
import { flashcardsData, categories } from './data/flashcards';

function App() {
  const [flashcards] = useState(flashcardsData);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [completedCards, setCompletedCards] = useState(new Set());
  const [viewedCards, setViewedCards] = useState(new Set());

  // Cargar progreso del localStorage al iniciar
  useEffect(() => {
    const savedProgress = localStorage.getItem('flashcards-progress');
    if (savedProgress) {
      const { completed, viewed } = JSON.parse(savedProgress);
      setCompletedCards(new Set(completed));
      setViewedCards(new Set(viewed));
    }
  }, []);

  // Guardar progreso en localStorage cuando cambie
  useEffect(() => {
    const progress = {
      completed: Array.from(completedCards),
      viewed: Array.from(viewedCards)
    };
    localStorage.setItem('flashcards-progress', JSON.stringify(progress));
  }, [completedCards, viewedCards]);

  // Filtrar flashcards por categoría
  const filteredFlashcards = selectedCategory === 'Todas' 
    ? flashcards 
    : flashcards.filter(card => card.categoria === selectedCategory);

  // Marcar/desmarcar tarjeta como completada
  const toggleCompleted = (cardId) => {
    setCompletedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // Marcar tarjeta como vista
  const markAsViewed = (cardId) => {
    setViewedCards(prev => new Set([...prev, cardId]));
  };

  // Exportar progreso
  const exportProgress = () => {
    const progress = {
      exportDate: new Date().toISOString(),
      totalCards: flashcards.length,
      completedCards: Array.from(completedCards),
      viewedCards: Array.from(viewedCards),
      completedDetails: flashcards.filter(card => completedCards.has(card.id))
    };

    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `flashcards-progreso-${new Date().toLocaleDateString()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            ⚡ Flashcards Electrónica
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Domina los conceptos fundamentales de electrónica con estas tarjetas interactivas
          </p>
          
          {/* Botón de exportar */}
          <motion.button
            onClick={exportProgress}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            📤 Exportar progreso
          </motion.button>
        </motion.header>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            totalCards={flashcards.length}
            viewedCards={viewedCards.size}
            completedCards={completedCards.size}
            flashcards={flashcards}
          />
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredFlashcards.map((flashcard, index) => (
              <motion.div
                key={flashcard.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05
                }}
              >
                <Flashcard
                  flashcard={flashcard}
                  isCompleted={completedCards.has(flashcard.id)}
                  onToggleCompleted={toggleCompleted}
                  onCardView={markAsViewed}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-16 text-center text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm">
            Creado con ❤️ para estudiantes de electrónica | 
            <span className="ml-2">Total de tarjetas: {flashcards.length}</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
