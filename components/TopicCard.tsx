
import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onSelect }) => {
  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between cursor-pointer
                 transform hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300 ease-in-out
                 border border-gray-700 hover:border-cyan-500"
      onClick={() => onSelect(topic)}
    >
      <div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-3">{topic.title}</h2>
        <p className="text-gray-400 text-base">{topic.description}</p>
      </div>
      <button 
        className="mt-6 self-start bg-cyan-600 text-white font-semibold py-2 px-5 rounded-lg
                   hover:bg-cyan-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
      >
        Start Practicing
      </button>
    </div>
  );
};

export default TopicCard;
