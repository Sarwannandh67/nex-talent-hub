
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowUpRight, TrendingUp, Edit, ShieldCheck } from 'lucide-react';

const ForCreators = () => {
  return (
    <section id="creators" className="py-16 md:py-24 relative">
      {/* Background effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-creator-gradient opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-creatorPurple/10 text-creatorPurple mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">For Content Creators</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Your <span className="gradient-text">Digital Presence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Focus on creating while we handle everything else. From professional editing to brand deals, CreatorNex provides the tools and connections you need to grow your influence and income.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorPurple/20 p-1.5 rounded-full">
                  <TrendingUp className="h-4 w-4 text-creatorPurple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Audience Growth</h3>
                  <p className="text-muted-foreground">Strategic content planning and optimization to increase your followers across platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorBlue/20 p-1.5 rounded-full">
                  <Edit className="h-4 w-4 text-creatorBlue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Professional Editing</h3>
                  <p className="text-muted-foreground">Top-tier video editing, graphics, and thumbnails that captivate your audience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-creatorPurple/20 p-1.5 rounded-full">
                  <ShieldCheck className="h-4 w-4 text-creatorPurple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Verified Partnerships</h3>
                  <p className="text-muted-foreground">Connect with pre-vetted brands that align with your niche and values.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-creator-gradient hover:opacity-90 transition-opacity">
              <span>Join as Creator</span>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Image/Visual */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image container */}
              <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Content creator working on laptop"
                  className="rounded-lg w-full h-auto"
                />
                
                {/* Stats overlay */}
                <div className="absolute top-10 right-10 glass-card p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Creator Success</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Growth Rate</span>
                      <span className="font-medium text-creatorPurple">↑ 137%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Engagement</span>
                      <span className="font-medium text-creatorPurple">↑ 64%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brand Deals</span>
                      <span className="font-medium text-creatorPurple">↑ 84%</span>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial bubble */}
                <div className="absolute bottom-10 left-10 glass-card p-4 rounded-lg max-w-[250px] animate-pulse-soft">
                  <p className="text-sm italic">"CreatorNex helped me grow from 10K to 500K followers in just 8 months. Their editing team is amazing!"</p>
                  <p className="text-sm font-medium mt-2">- Sarah J., Lifestyle Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCreators;
