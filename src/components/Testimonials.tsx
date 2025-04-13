
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Travel Vlogger",
    content: "Since joining CreatorNex, my channel has grown from 50K to 500K subscribers in just 8 months. Their video editing team is top-notch, and the brand deals they've secured for me are always aligned with my content.",
    avatar: "/placeholder.svg",
    type: "creator",
    rating: 5
  },
  {
    name: "Smart Home Tech",
    role: "D2C Brand",
    content: "CreatorNex helped us launch our product through a network of tech influencers. The campaign generated 3x more sales than our previous marketing efforts and created authentic content we could repurpose.",
    avatar: "/placeholder.svg",
    type: "brand",
    rating: 5
  },
  {
    name: "Jamie Smith",
    role: "Podcast Host",
    content: "I was struggling with post-production and marketing my podcast. CreatorNex took over editing, created amazing audiograms, and helped me grow my listener base by 220% in six months.",
    avatar: "/placeholder.svg",
    type: "creator",
    rating: 5
  },
  {
    name: "EcoFriendly",
    role: "Sustainable Products Brand",
    content: "Working with CreatorNex to find environmentally conscious influencers was seamless. They understood our mission and connected us with authentic voices who genuinely care about sustainability.",
    avatar: "/placeholder.svg",
    type: "brand",
    rating: 5
  },
  {
    name: "Maya Patel",
    role: "Fitness Influencer",
    content: "The thumbnail designs and video edits from CreatorNex have doubled my click-through rates. Their team understands the fitness niche and delivers content that resonates with my audience.",
    avatar: "/placeholder.svg",
    type: "creator",
    rating: 5
  },
  {
    name: "Local Bistro",
    role: "Restaurant Chain",
    content: "As a local business, we didn't know how to approach influencer marketing. CreatorNex made it simple by connecting us with food bloggers in our city, resulting in a noticeable increase in foot traffic.",
    avatar: "/placeholder.svg",
    type: "brand",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our <span className="gradient-text">Community</span> Says</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from creators and brands who have grown with CreatorNex.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`overflow-hidden ${testimonial.type === 'creator' ? 'border-creatorPurple/20' : 'border-creatorBlue/20'} hover:shadow-md transition-shadow`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                
                <div className="mt-4 text-xs font-medium px-2 py-1 rounded-full inline-block bg-muted">
                  {testimonial.type === 'creator' ? 'Creator Testimonial' : 'Brand Testimonial'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
