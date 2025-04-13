
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, Camera, Radio, ShoppingBag, Globe } from 'lucide-react';

const portfolioItems = {
  'video-editing': [
    {
      title: "Travel Vlog Series",
      client: "Backpack Adventures",
      description: "A series of cinematic travel vlogs with advanced color grading and motion graphics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Video Editing"
    },
    {
      title: "Product Review Compilation",
      client: "TechReviewer",
      description: "Sharp, engaging product reviews with custom animations and transitions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Video Editing"
    },
    {
      title: "Fitness Tutorial Series",
      client: "FitLife Channel",
      description: "Professional editing for workout tutorials with multi-camera setups",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Video Editing"
    },
  ],
  'thumbnail-design': [
    {
      title: "Gaming Channel Rebrand",
      client: "NextLevel Gaming",
      description: "Consistent thumbnail template design with eye-catching elements",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Thumbnail Design"
    },
    {
      title: "Cooking Show Thumbnails",
      client: "Gourmet at Home",
      description: "Mouth-watering food photography optimized for YouTube thumbnails",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Thumbnail Design"
    },
    {
      title: "Educational Course Previews",
      client: "Learn Everyday",
      description: "Informative and attractive thumbnails for online courses",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Thumbnail Design"
    }
  ],
  'marketing-campaigns': [
    {
      title: "Eco-Friendly Product Launch",
      client: "GreenLife",
      description: "Multi-platform campaign with 15 influencers featuring sustainable products",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Marketing Campaign"
    },
    {
      title: "Fashion Collection Promotion",
      client: "Urban Styles",
      description: "Coordinated launch across Instagram, TikTok and YouTube with fashion creators",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Marketing Campaign"
    },
    {
      title: "Mobile App User Acquisition",
      client: "FitTrack App",
      description: "Targeted campaign with fitness influencers driving app downloads",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Marketing Campaign"
    }
  ],
  'brand-partnerships': [
    {
      title: "Travel Gear Sponsorship",
      client: "Explorer Essentials & World Traveler",
      description: "Long-term partnership between travel gear brand and adventure vlogger",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Brand Partnership"
    },
    {
      title: "Local Restaurant Series",
      client: "City Flavors & Food Enthusiasts",
      description: "Local food bloggers partnered with restaurants for authentic promotions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Brand Partnership"
    },
    {
      title: "Tech Review Program",
      client: "NextGen Electronics & Tech Channel",
      description: "Honest review partnership between tech brand and dedicated reviewer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      category: "Brand Partnership"
    }
  ]
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-creatorPurple/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-creatorBlue/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="gradient-text">Work</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects and collaborations across different services.
          </p>
        </div>
        
        <Tabs defaultValue="video-editing" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
            <TabsTrigger value="video-editing" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Video Editing</span>
            </TabsTrigger>
            <TabsTrigger value="thumbnail-design" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>Thumbnail Design</span>
            </TabsTrigger>
            <TabsTrigger value="marketing-campaigns" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Marketing Campaigns</span>
            </TabsTrigger>
            <TabsTrigger value="brand-partnerships" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Brand Partnerships</span>
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(portfolioItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={item.image}
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-xs px-2 py-1 rounded bg-primary/80 inline-block">{item.category}</p>
                        <h3 className="text-white font-medium mt-2">{item.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Client: {item.client}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
