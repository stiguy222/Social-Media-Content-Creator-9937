import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContentPreview from './ContentPreview';
import AIContentButton from './AIContentButton';
import { FaSave, FaCheck, FaShare } from 'react-icons/fa';

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
  
  const [approvedContent, setApprovedContent] = useState({
    facebook: false,
    instagram: false,
    linkedin: false
  });
  
  const [selectedPlatform, setSelectedPlatform] = useState('facebook');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('socialMediaContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const getCharacterCount = (text) => text.length;
  const isValidLength = (platform, text) => getCharacterCount(text) >= PLATFORM_LIMITS[platform];

  const handleContentChange = (platform, value) => {
    setContent(prev => ({
      ...prev,
      [platform]: value
    }));
    setApprovedContent(prev => ({
      ...prev,
      [platform]: false
    }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('socialMediaContent', JSON.stringify(content));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAIContent = (generatedContent) => {
    setContent(generatedContent);
    setApprovedContent({
      facebook: false,
      instagram: false,
      linkedin: false
    });
    setSaved(false);
  };

  const handleApprove = () => {
    setApprovedContent(prev => ({
      ...prev,
      [selectedPlatform]: true
    }));
  };

  const handleReject = () => {
    setApprovedContent(prev => ({
      ...prev,
      [selectedPlatform]: false
    }));
  };

  const handlePost = () => {
    if (approvedContent[selectedPlatform]) {
      // Here you would integrate with social media APIs
      alert(`Content approved and ready to post on ${selectedPlatform}!`);
    } else {
      alert('Please approve the content before posting.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex gap-2 mb-6">
              {Object.keys(PLATFORM_LIMITS).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedPlatform === platform
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  {approvedContent[platform] && (
                    <span className="ml-2 text-green-500">✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={content[selectedPlatform]}
                onChange={(e) => handleContentChange(selectedPlatform, e.target.value)}
                placeholder={`Enter your ${selectedPlatform} content here (minimum ${PLATFORM_LIMITS[selectedPlatform]} characters)`}
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <span className={`text-sm ${
                  isValidLength(selectedPlatform, content[selectedPlatform])
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {getCharacterCount(content[selectedPlatform])} / {PLATFORM_LIMITS[selectedPlatform]}
                </span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {saved ? <FaCheck /> : <FaSave />}
                </motion.button>
              </div>
            </div>

            {approvedContent[selectedPlatform] && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handlePost}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <FaShare /> Post to {selectedPlatform}
              </motion.button>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <ContentPreview
            platform={selectedPlatform}
            content={content[selectedPlatform]}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </div>
      </div>
      <AIContentButton onContentGenerated={handleAIContent} />
    </div>
  );
};

export default ContentEditor;