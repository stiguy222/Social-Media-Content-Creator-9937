import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaSpinner } from 'react-icons/fa';
import { generateDailyContent } from '../utils/contentTopics';

const AIContentButton = ({ onContentGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const generatedContent = generateDailyContent();
      onContentGenerated(generatedContent);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={generateContent}
      disabled={isGenerating}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
    >
      {isGenerating ? (
        <>
          <FaSpinner className="animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <FaRobot />
          <span>Generate AI Content</span>
        </>
      )}
    </motion.button>
  );
};

export default AIContentButton;