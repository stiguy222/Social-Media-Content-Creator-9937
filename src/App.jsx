import React from 'react';
import ContentEditor from './components/ContentEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Social Media Content Manager
          </h1>
        </div>
      </header>
      <main className="py-8">
        <ContentEditor />
      </main>
    </div>
  );
}

export default App;