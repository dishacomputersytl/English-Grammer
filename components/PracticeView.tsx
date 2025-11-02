
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Topic } from '../types';
import { generateContent } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import FormattedContent from './FormattedContent';

interface PracticeViewProps {
  topic: Topic;
  onBack: () => void;
}

const PracticeView: React.FC<PracticeViewProps> = ({ topic, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const conversationHistory = useRef<string>('');

  const fetchContent = useCallback(async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    const response = await generateContent(prompt);
    
    if (response.startsWith('An error occurred')) {
      setError(response);
      setContent('');
    } else {
      setContent(response);
      conversationHistory.current = `${prompt}\n\nAI Response:\n${response}`;
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchContent(topic.initialPrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic.initialPrompt]);

  const handleNextSet = () => {
    if (conversationHistory.current) {
      const nextPrompt = `${conversationHistory.current}\n\nUser Question: Yes`;
      fetchContent(nextPrompt);
    }
  };

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg
                   hover:bg-gray-600 transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Topics
      </button>

      <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">{topic.title}</h1>
        <p className="text-gray-400 mb-8">{topic.description}</p>

        <div className="min-h-[400px] bg-gray-900/50 p-4 rounded-lg relative">
          {isLoading && !content && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          {error && <p className="text-red-400">{error}</p>}
          {content && <FormattedContent content={content} />}
        </div>
        
        {!isLoading && content && (
          <div className="mt-8 text-center">
            <button
              onClick={handleNextSet}
              disabled={isLoading}
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg
                         hover:bg-cyan-500 transition-colors duration-200 text-lg
                         disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner small />
                  <span className="ml-2">Generating...</span>
                </>
              ) : (
                "Yes, give me the next set!"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeView;
