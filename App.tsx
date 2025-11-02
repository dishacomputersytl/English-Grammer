
import React, { useState } from 'react';
import { TOPICS } from './constants';
import type { Topic } from './types';
import Header from './components/Header';
import TopicCard from './components/TopicCard';
import PracticeView from './components/PracticeView';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  const handleBack = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {selectedTopic ? (
          <PracticeView topic={selectedTopic} onBack={handleBack} />
        ) : (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-cyan-400">Welcome to Grammar Guru!</h1>
            <p className="text-center text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
              Select a topic below to start your personalized practice session. Our AI tutor will guide you from basic concepts to advanced usage, step-by-step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {TOPICS.map((topic) => (
                <TopicCard key={topic.id} topic={topic} onSelect={handleTopicSelect} />
              ))}
            </div>
          </div>
        )}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; 2024 English Grammar Guru. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
