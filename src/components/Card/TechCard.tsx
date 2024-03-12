import { FC } from 'react';
import { cn } from '../utils/utils';
import Button from '../ui/Button';

interface TechCardProps {
  title: string;
  className: string; // Corrected typo in the property name
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, className, tech }) => {
  return (
    <div className={`flex-1 flex flex-col gap-4 ${className} p-4 rounded-md shadow-lg`}>
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary p-2',
              item === 'Java' && 'border border-blue-500/60',
              item === 'Python' && 'border border-yellow-500/60',
              item === 'C++' && 'border border-purple-500/60',
              item === 'Ruby' && 'border border-red-500/60',
              item === 'Shell' && 'border border-green-500/60',
              item === 'HTML' && 'border border-blue-500/60',
              item === 'CSS' && 'border border-emerald-500/60',
              item === 'JavaScript' && 'border border-yellow-500/60',
              item === 'React.js' && 'border border-blue-500/60',
              item === 'Angular' && 'border border-black/60',
              item === 'MySQL' && 'border border-green-500/60',
              item === 'SQL' && 'border border-gray-500/60',
              item === 'MongoDB' && 'border border-blue-500/60',
              item === 'Spring' && 'border border-yellow-500/60',
              item === 'Spring Boot' && 'border border-blue-500/60',
              item === 'AWS' && 'border border-blue-500/60',
              item === 'Azure' && 'border border-yellow-500/60',
              item === 'GCP' && 'border border-orange-500/60',
              item === 'Apache Spark' && 'border border-blue-500/60',
              item === 'Kafka' && 'border border-purple-500/60',
              item === 'Docker' && 'border border-blue-500/60',
              item === 'Kubernetes' && 'border border-yellow-500/60',
              item === 'Git' && 'border border-orange-500/60',
              item === 'GitLab' && 'border border-red-500/60',
              item === 'Linux' && 'border border-emerald-500/60',
              item === 'Unix' && 'border border-blue-500/60',
              item === 'Apache' && 'border border-orange-500/60',
              item === 'Keras' && 'border border-black/60',
              item === 'TensorFlow' && 'border border-yellow-500/60',
              item === 'PyTorch' && 'border border-purple-500/60',
              item === 'NLTK' && 'border border-red-500/60',
              item === 'SpaCy' && 'border border-green-500/60',
              item === 'Pandas' && 'border border-gray-500/60',
              item === 'NumPy' && 'border border-blue-500/60',
              item === 'Tableau' && 'border border-blue-500/60',
              item === 'Oracle VBCS' && 'border border-orange-500/60',
              item === 'Oracle OIC' && 'border border-purple-500/60',
              item === 'CUDA' && 'border border-green-500/60',
              item === 'GPU' && 'border border-red-500/60',
              item === 'Elasticsearch' && 'border border-yellow-500/60',
              item === 'Kafka' && 'border border-blue-500/60',
              item === 'Kibana' && 'border border-purple-500/60',
              item === 'REST' && 'border border-orange-500/60',
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;