import { ImageWithFallback } from './ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";


const UpcomingEventsComponent = () => {
    const upcomingEvents = [
        {
            title: 'Ugadi Celebrations 2025',
            date: 'March 30, 2025',
            time: '10:00 AM - 4:00 PM',
            location: 'BBA Community Hall, Jayanagar',
            category: 'Festival',
            images: [
                'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZXN0aXZhbCUyMGNlcmVtb255fGVufDF8fHx8MTc2MzM2MDAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1695922673093-7fe0b7b2d10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVZ2FkaSUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb24lMjBmb29kJTIwaW5kaWF8ZW58MXx8fHwxNzYzNjY5OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1639969267636-42f6cccd9477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVZ2FkaSUyMGRlY29yYXRpb25zJTIwcmFuZ29saXxlbnwxfHx8fDE3NjM2Njk5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            ],
            description: 'Join us for the traditional New Year celebration with cultural programs, prasadam, and community bonding.',
        },
        {
            title: 'Sanskrit Learning Workshop',
            date: 'December 5, 2024',
            time: '6:00 PM - 8:00 PM',
            location: 'BBA Learning Center, Indiranagar',
            category: 'Educational',
            images: [
                'https://images.unsplash.com/photo-1693473851032-36335b5a1335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGV2ZW50JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYzMzYwMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1657958135765-5236053e90d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW5za3JpdCUyMGFuY2llbnQlMjBzY3JpcHQlMjB3cml0aW5nfGVufDF8fHx8MTc2MzY2OTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZWFjaGVyJTIwdGVhY2hpbmclMjBzdHVkZW50cyUyMGluZGlhbiUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2MzY2OTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            ],
            description: 'Learn Sanskrit basics and explore our ancient language\'s beauty with expert instructors.',
        },
        {
            title: 'Annual General Meeting',
            date: 'December 15, 2024',
            time: '5:00 PM - 7:00 PM',
            location: 'BBA Headquarters, Malleshwaram',
            category: 'Meeting',
            images: [
                'https://images.unsplash.com/photo-1679841665700-2c962e7e652a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZW1wbGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjMzNjAwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1596116536355-3b37d55953bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGb3JtYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBjb25mZXJlbmNlJTIwaGFsbCUyMGluZGlhfGVufDF8fHx8MTc2MzY2OTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                'https://images.unsplash.com/photo-1763361728931-03fc3aeee1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb21tdW5pdHklMjBnYXRoZXJpbmclMjBpbmRpYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2MzY2OTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            ],
            description: 'Annual review of association activities, election of office bearers, and planning for 2025.',
        },
    ];

    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">                    
                    <h2 className="text-4xl md:text-5xl text-[#4A0404] mb-4">
                        Upcoming Events & Programs
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        description.
                    </p>
                </div>

                {/* Upcoming Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="relative h-48 overflow-hidden">
                                <Carousel className="w-full h-full">
                                    <CarouselContent>
                                        {event.images.map((image, imgIndex) => (
                                            <CarouselItem key={imgIndex}>
                                                <ImageWithFallback
                                                    src={image}
                                                    alt={`${event.title} - Image ${imgIndex + 1}`}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {event.images.length > 1 && (
                                        <>
                                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4A0404] border-none h-8 w-8" />
                                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4A0404] border-none h-8 w-8" />
                                        </>
                                    )}
                                </Carousel>
                                <Badge className="absolute top-4 right-4 bg-[#800000] hover:bg-[#800000] z-10 pointer-events-none">
                                    {event.category}
                                </Badge>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl text-[#4A0404] mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-700">
                                        <Calendar className="h-4 w-4 mr-2 text-[#F59E0B]" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Clock className="h-4 w-4 mr-2 text-[#F59E0B]" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <MapPin className="h-4 w-4 mr-2 text-[#F59E0B]" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <Button className="w-full bg-[#4A0404] hover:bg-[#4A0404]/90">
                                    View Details
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default UpcomingEventsComponent; 