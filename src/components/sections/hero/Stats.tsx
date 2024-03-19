import List from '@/components/ui/List';
import { Eye, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        
        <div className="flex md:flex-1 flex-col justify-center gap-4">
        <div className="flex justify-between items-center gap-5 pl-20">
        
            <Link
                className="hidden md:block"
                target="_blank"
                href="https://drive.google.com/file/d/125v0M6hDzzaMsTwlYLOTPcZiuOSqlK6A/view?usp=sharing"
            >
                <Button variant="primary" sizes={'small'}>
                   
                    <span className="hidden md:block">
                        Checkout My Resume
                    </span>
                </Button>
            </Link>
        </div>
    </div>
    );
};

export default Stats;