import { FC } from 'react';
import { IProjectSectionCardData } from '../utils/Data';
import MoreProjectsCards from '../ui/MoreProjectCards';
import TechStack from '../TechStack';
import Introduction from '../Introduction';

interface MoreProjectsProps {
  title: string;
  data: IProjectSectionCardData[];
}

const MoreProjects: FC<MoreProjectsProps> = ({ title, data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-5 md:p-0">
      <TechStack />
      
    </section>
  );
};

export default MoreProjects;
