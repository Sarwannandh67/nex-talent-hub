
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Palette, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-creatorPurple/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-creatorBlue/20 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Where <span className="gradient-text">Creators</span> Meet <span className="gradient-text">Opportunity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              The digital media platform bridging content creators, influencers, and businesses. Get all your creative services under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-creator-gradient hover:opacity-90 transition-opacity text-white font-medium px-6 py-6">
                <span>For Creators</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary/10 transition-colors font-medium px-6 py-6">
                <span>For Brands</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main floating card */}
              <div className="glass-card p-6 md:p-8 w-80 md:w-96 animate-float">
                <h3 className="text-xl font-semibold mb-4">Creative Services Hub</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-creatorPurple/20 p-2 rounded-full mr-4">
                      <Video className="h-5 w-5 text-creatorPurple" />
                    </div>
                    <div>
                      <p className="font-medium">Video Editing</p>
                      <p className="text-sm text-muted-foreground">Professional cuts & effects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-creatorBlue/20 p-2 rounded-full mr-4">
                      <Palette className="h-5 w-5 text-creatorBlue" />
                    </div>
                    <div>
                      <p className="font-medium">Thumbnail Design</p>
                      <p className="text-sm text-muted-foreground">Engaging visual assets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-creatorPurple/20 p-2 rounded-full mr-4">
                      <Users className="h-5 w-5 text-creatorPurple" />
                    </div>
                    <div>
                      <p className="font-medium">Brand Partnerships</p>
                      <p className="text-sm text-muted-foreground">Connect with perfect matches</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className="glass-card p-4 absolute -bottom-6 -right-6 md:-right-10 w-44 animate-pulse-soft">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">Trusted Network</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">500+ Creators</p>
                  <p className="font-medium">200+ Brands</p>
                  <p className="font-medium">1000+ Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
