
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, ArrowUpRight, Target, Users, BarChart } from 'lucide-react';

const ForBrands = () => {
  return (
    <section id="brands" className="py-16 md:py-24 relative">
      {/* Background effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-brand-gradient opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image/Visual */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image container */}
              <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Business meeting with brand strategy"
                  className="rounded-lg w-full h-auto"
                />
                
                {/* ROI overlay */}
                <div className="absolute top-10 left-10 glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Campaign ROI</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Avg. Conversion</span>
                      <span className="font-medium text-creatorBlue">3.8x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brand Awareness</span>
                      <span className="font-medium text-creatorBlue">+187%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost per Acquisition</span>
                      <span className="font-medium text-creatorBlue">-42%</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial bubble */}
                <div className="absolute bottom-10 right-10 glass-card p-4 rounded-lg max-w-[250px] animate-pulse-soft">
                  <p className="text-sm italic">"Our influencer campaign with CreatorNex delivered 4x the ROI compared to our traditional marketing channels."</p>
                  <p className="text-sm font-medium mt-2">- Mark R., Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-creatorBlue/10 text-creatorBlue mb-6">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">For Brands & Businesses</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect With The Right <span style={{ background: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Audience</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Find authentic creators who genuinely connect with your target audience. From local businesses to global brands, we help you implement effective influencer marketing strategies.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorBlue/20 p-1.5 rounded-full">
                  <Target className="h-4 w-4 text-creatorBlue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Targeted Campaigns</h3>
                  <p className="text-muted-foreground">Reach specific demographics and niche audiences through carefully selected creators.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorPurple/20 p-1.5 rounded-full">
                  <Users className="h-4 w-4 text-creatorPurple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Creator Matching</h3>
                  <p className="text-muted-foreground">Our algorithm identifies creators whose audience and values align with your brand.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorBlue/20 p-1.5 rounded-full">
                  <BarChart className="h-4 w-4 text-creatorBlue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Campaign Analytics</h3>
                  <p className="text-muted-foreground">Transparent reporting on impressions, engagement, conversions, and ROI.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-brand-gradient hover:opacity-90 transition-opacity">
              <span>Partner with Us</span>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;
