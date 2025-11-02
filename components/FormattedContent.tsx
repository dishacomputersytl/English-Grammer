import React from 'react';

interface FormattedContentProps {
  content: string;
}

const FormattedContent: React.FC<FormattedContentProps> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="prose prose-invert max-w-none text-gray-300 space-y-2">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        if (trimmedLine.startsWith('---') || trimmedLine === '') {
          return <hr key={index} className="border-gray-700 my-4" />;
        }
        
        if (trimmedLine.startsWith('#')) {
          const level = trimmedLine.match(/^#+/)![0].length;
          const text = trimmedLine.replace(/^#+\s*/, '');
          // FIX: Replaced dynamic tag creation with a type-safe switch statement to resolve JSX compilation errors.
          const headingLevel = level + 1;
          const props = {
            key: index,
            className: "text-cyan-400 font-bold !mt-6 !mb-3"
          };

          switch (headingLevel) {
            case 2: return <h2 {...props}>{text}</h2>;
            case 3: return <h3 {...props}>{text}</h3>;
            case 4: return <h4 {...props}>{text}</h4>;
            case 5: return <h5 {...props}>{text}</h5>;
            default: return <h6 {...props}>{text}</h6>;
          }
        }

        if (/^\d+\./.test(trimmedLine)) {
            const parts = trimmedLine.split('(');
            const englishPart = parts[0];
            const hindiPart = parts.length > 1 ? `(${parts.slice(1).join('(')}` : '';

            return (
                <p key={index} className="p-3 bg-gray-800/60 rounded-md">
                    <span>{englishPart}</span>
                    {hindiPart && <span className="block text-cyan-300/80 mt-1">{hindiPart}</span>}
                </p>
            );
        }

        if (trimmedLine.includes('Would you like to continue?')) {
            return <p key={index} className="text-yellow-400 font-semibold text-center mt-6 text-lg">{trimmedLine}</p>;
        }
        
        // Handle bolding with **
        const boldedLine = line.split('**').map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="text-cyan-300">{part}</strong> : part
        );

        return <p key={index}>{boldedLine}</p>;
      })}
    </div>
  );
};

export default FormattedContent;
