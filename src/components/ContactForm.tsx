'use client';
import { FC, FormEvent, MouseEvent, useState } from 'react';
import Label from './ContactForm/Label';
import Button from './ui/Button';
import { useContact } from './Provider';
import { X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
    const { showForm, setFormVisibility } = useContact();
    const [loader, setLoader] = useState(false);
    const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
        // Prevent the click event from bubbling up to the outer div
        e.stopPropagation();
    };


  

    
    return (
        <>
            {showForm && (
                <div
                    className="h-screen bg-blur backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.9)] w-screen fixed z-40 flex items-center justify-center"
                    onClick={() => setFormVisibility()}
                >
                    <X className="text-primary absolute right-5 top-5 cursor-pointer" />
                    <form
                        
                        
                        onClick={handleFormClick}
                        className="grid gap-5 w-96 p-5 bg-cardPrimary rounded-lg text-info shadow-lg relative"
                    > 
                        <div className="mb-3">
                        <strong>Name:</strong> Asim Mahroos Mohammed
                    </div>
                    <div className="mb-3">
                        <strong>Email:</strong> asimcyb@gmail.com
                    </div>
                    <div className="mb-3">
                        <strong>Phone:</strong> +1 945-257-9044
                    </div>
                    
                      
                    </form>
                </div>
            )}
        </>
    );
};

export default ContactForm;
