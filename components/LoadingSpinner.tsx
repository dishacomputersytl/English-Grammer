
import React from 'react';

interface LoadingSpinnerProps {
  small?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ small = false }) => {
  const sizeClasses = small ? 'h-5 w-5' : 'h-12 w-12';
  const borderClasses = small ? 'border-2' : 'border-4';

  return (
    <div className={`animate-spin rounded-full ${sizeClasses} ${borderClasses} border-t-cyan-400 border-r-cyan-400 border-gray-600`}></div>
  );
};

export default LoadingSpinner;
