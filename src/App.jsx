import React from 'react';
import ContentEditor from './components/ContentEditor';
import { FaPen } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-lg text-white">
              <FaPen />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Social Media Content Manager
            </h1>
          </div>
        </div>
      </header>
      <main className="py-8">
        <ContentEditor />
      </main>
    </div>
  );
}

export default App;