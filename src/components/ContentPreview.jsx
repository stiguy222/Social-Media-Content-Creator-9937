import React from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaVideo, FaCheck, FaTimes } from 'react-icons/fa';

const ContentPreview = ({ platform, content, media, onApprove, onReject }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow p-4 mt-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-bold">{platform[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 className="font-semibold capitalize">{platform} Preview</h3>
          <p className="text-sm text-gray-500">Preview your post as it will appear</p>
        </div>
      </div>
      
      <div className="mb-4">
        {content && <p className="text-gray-800 whitespace-pre-wrap">{content}</p>}
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div className="flex justify-center gap-4 text-gray-400">
          <FaImage size={24} />
          <FaVideo size={24} />
        </div>
        <p className="mt-2 text-sm text-gray-500">Drag and drop media here or click to upload</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReject}
          className="px-4 py-2 rounded-full bg-red-100 text-red-600 flex items-center gap-2 hover:bg-red-200 transition-colors"
        >
          <FaTimes /> Revise
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onApprove}
          className="px-4 py-2 rounded-full bg-green-100 text-green-600 flex items-center gap-2 hover:bg-green-200 transition-colors"
        >
          <FaCheck /> Approve
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContentPreview;