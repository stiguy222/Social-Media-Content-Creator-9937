import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PLATFORM_LIMITS = {
  facebook: 3000,
  instagram: 2100,
  linkedin: 1200
};

const ContentEditor = () => {
  const [content, setContent] = useState({
    facebook: '',
    instagram: '',
    linkedin: ''
  });

  const getCharacterCount = (text) => text.length;
  const isValidLength = (platform, text) => getCharacterCount(text) >= PLATFORM_LIMITS[platform];

  const handleContentChange = (platform, value) => {
    setContent(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {Object.entries(PLATFORM_LIMITS).map(([platform, limit]) => (
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold capitalize">{platform}</h2>
            <div className={`text-sm ${isValidLength(platform, content[platform]) ? 'text-green-600' : 'text-red-600'}`}>
              {getCharacterCount(content[platform])} / {limit} characters
            </div>
          </div>
          <textarea
            className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={content[platform]}
            onChange={(e) => handleContentChange(platform, e.target.value)}
            placeholder={`Enter your ${platform} content here (minimum ${limit} characters)`}
          />
          <div className="mt-4">
            <div className={`text-sm ${isValidLength(platform, content[platform]) ? 'text-green-600' : 'text-red-600'}`}>
              {isValidLength(platform, content[platform]) 
                ? '✓ Content meets minimum length requirement'
                : `× Content needs ${limit - getCharacterCount(content[platform])} more characters`}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContentEditor;