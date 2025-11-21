import { ImageWithFallback } from './ImageWithFallback';
import { Users, BookOpen, Heart, Award } from 'lucide-react';
import { Card } from '../ui/card';


const VisionAndMissionComponent = () => {
    const features = [
        {
            icon: Users,
            title: 'Community Building',
            description: 'Fostering strong bonds among members through regular gatherings and cultural programs.',
        },
        {
            icon: BookOpen,
            title: 'Cultural Heritage',
            description: 'Preserving and promoting our rich traditions, language, and spiritual practices.',
        },
        {
            icon: Heart,
            title: 'Social Welfare',
            description: 'Supporting members through educational scholarships, healthcare assistance, and community aid.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Recognizing and celebrating achievements of community members in various fields.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">                    
                    <h2 className="text-4xl md:text-5xl text-[#4A0404] mb-4">
                        Welcome to Chintamani Taluk Bramhana Mahasaba
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        description goes here
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h3 className="text-3xl text-[#4A0404] mb-6">
                            Building Bridges, Preserving Traditions
                        </h3>
                        <p className="text-gray-700 mb-4">
                            The Bangalore Brahmin Association (BBA) was established to create a vibrant platform for the Brahmin community in Bangalore. We are committed to upholding the values, traditions, and cultural practices that define our heritage.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our association serves as a bridge between generations, ensuring that traditional knowledge and values are passed down while embracing contemporary progress and education. We organize cultural events, educational programs, and social welfare initiatives throughout the year.
                        </p>
                        <p className="text-gray-700">
                            Through our various programs and initiatives, we strive to create opportunities for community members to connect, learn, and grow together. We believe in the power of unity and collective action to address the needs of our community.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#800000] to-[#F59E0B] rounded-lg"></div>
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1761933806608-87e8cae7c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjMzMjQ3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Community Gathering"
                            className="relative rounded-lg shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default VisionAndMissionComponent; 