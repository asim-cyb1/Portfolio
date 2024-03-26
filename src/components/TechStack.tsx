import { FC } from 'react';
import TechCard from './Card/TechCard';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          title="Programming Languages"
          className="bg-[#4f91f2]"
          tech={['Java', 'Python', 'C++', 'C']}
        />
        <TechCard
          title="Frontend"
          className="bg-[#f37c36]"
          tech={['HTML', 'CSS', 'JavaScript', 'React.js','Next.js']}
        />
        <TechCard
          title="Backend"
          className="bg-[#e0558a]"
          tech={['Node.js', 'Express.js', 'Spring', 'Spring Boot']}
        />
        <TechCard
          title="Databases"
          className="bg-[#f37c36]"
          tech={['MySQL', 'SQL', 'MongoDB']}
        />
        <TechCard
          title="Cloud & DevOps"
          className="bg-[#4f91f2]"
          tech={['GCP', 'Apache Spark', 'Kafka', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Jenkins']}
        />
       
        <TechCard
          title="Machine Learning & Data Science"
          className="bg-[#e0558a]"
          tech={['Keras', 'TensorFlow', 'PyTorch', 'NLTK', 'SpaCy', 'Pandas', 'NumPy', 'Tableau']}
        />
        <TechCard
          title="Platform-as-a-Service (PaaS)"
          className="bg-[#f37c36]"
          tech={['Oracle VBCS', 'Oracle OIC']}
        />
        <TechCard
          title="APIs"
          className="bg-[#4f91f2]"
          tech={['SOAP', 'REST']}
        />
      </div>
    </div>
  );
};

export default TechStack;