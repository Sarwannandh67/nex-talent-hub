
import React from 'react';
import { Video, Palette, LineChart, Users, Globe, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Video className="h-10 w-10 text-creatorPurple" />,
    title: "Video Editing",
    description: "Professional editing, color grading, special effects, and motion graphics to elevate your content.",
  },
  {
    icon: <Palette className="h-10 w-10 text-creatorBlue" />,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails and graphics that drive clicks and engagement for your videos and posts.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-creatorPurple" />,
    title: "Social Media Marketing",
    description: "Strategic promotion, content planning, and audience growth strategies across platforms.",
  },
  {
    icon: <Users className="h-10 w-10 text-creatorBlue" />,
    title: "Brand Partnerships",
    description: "Connect with relevant brands for sponsorships, collaborations, and long-term partnerships.",
  },
  {
    icon: <Globe className="h-10 w-10 text-creatorPurple" />,
    title: "Channel Management",
    description: "End-to-end management of your digital presence, from content strategy to community engagement.",
  },
  {
    icon: <Gift className="h-10 w-10 text-creatorBlue" />,
    title: "Merch & Monetization",
    description: "Create revenue streams through merchandise, digital products, and strategic monetization.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-creatorBlue/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-creatorPurple/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CreatorNex offers end-to-end creative and strategic services to help creators and brands thrive in the digital ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-2">
                <div className="mb-4 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
