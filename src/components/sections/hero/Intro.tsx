import { FC } from 'react';
import 'animate.css';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    const handleRedirect = () => {
        // Implement redirection logic here
        // For example, window.location.href = 'your_resume_url';
    };

    return (
        <div className="parallax">
            <div className="flex flex-1 flex-col md:flex-row gap-7">
                <div></div>
                <div className="flex flex-col flex-1 p-5 md:p-0">
                    <div className="flex flex-col gap-4 animate__animated animate__fadeInUp">
                        <div className="text-4xl md:text-5xl text-white font-bold">
                            INTRODUCTION
                        </div>
                    </div>
                    <section className="grid gap-8 p-5 mt-5 md:p-0 animate__animated animate__fadeInUp">
                        <div className="text-lg md:text-xl text-white max-w-[1200px] text-justify">
                            Welcome to the portfolio of Asim Mahroos Mohammed, a skilled Full Stack Developer and AI enthusiast dedicated to crafting innovative solutions at the intersection of technology and creativity. With a Master's in Computer Science, specialized in Artificial Intelligence, and a rich background in software engineering, Asim brings a wealth of knowledge and hands-on experience to every project.
                            Asim's journey traverses the realms of both frontend and backend development, with mastery in Java, Spring Boot, HTML, CSS (Tailwind), JavaScript (React.js, Next.js), and more. His adeptness in crafting seamless user experiences and robust backend systems is evident in his prior experience and projects like the Indeed-Clone, where he demonstrates prowess in full-stack development and database management.
                        </div>
                       
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Intro;