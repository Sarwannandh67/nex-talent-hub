
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2 } from 'lucide-react';

const ContactForms = () => {
  const { toast } = useToast();
  const [creatorFormState, setCreatorFormState] = useState({
    name: '',
    email: '',
    phone: '',
    socialPlatform: '',
    socialHandle: '',
    followers: '',
    niche: '',
    services: [],
    message: ''
  });

  const [brandFormState, setBrandFormState] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    marketingGoals: '',
    budget: '',
    timeframe: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you within 24-48 hours.",
        duration: 5000,
      });
      
      // Reset form
      setCreatorFormState({
        name: '',
        email: '',
        phone: '',
        socialPlatform: '',
        socialHandle: '',
        followers: '',
        niche: '',
        services: [],
        message: ''
      });
    }, 1500);
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Form submitted successfully!",
        description: "Our team will contact you shortly to discuss your needs.",
        duration: 5000,
      });
      
      // Reset form
      setBrandFormState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        marketingGoals: '',
        budget: '',
        timeframe: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join <span className="gradient-text">CreatorNex</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a creator looking for support or a brand seeking partnerships, we're here to help.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="creator" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="creator">For Creators</TabsTrigger>
              <TabsTrigger value="brand">For Brands</TabsTrigger>
            </TabsList>
            
            <TabsContent value="creator">
              <Card>
                <CardHeader>
                  <CardTitle>Creator Application</CardTitle>
                  <CardDescription>
                    Join our network of creators and get access to editing services, brand deals, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreatorSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="creator-name">Full Name</Label>
                        <Input 
                          id="creator-name" 
                          placeholder="Your name" 
                          value={creatorFormState.name}
                          onChange={(e) => setCreatorFormState({...creatorFormState, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-email">Email</Label>
                        <Input 
                          id="creator-email" 
                          type="email" 
                          placeholder="you@example.com" 
                          value={creatorFormState.email}
                          onChange={(e) => setCreatorFormState({...creatorFormState, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-phone">Phone Number</Label>
                        <Input 
                          id="creator-phone" 
                          placeholder="Your phone number" 
                          value={creatorFormState.phone}
                          onChange={(e) => setCreatorFormState({...creatorFormState, phone: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-platform">Primary Platform</Label>
                        <Select 
                          value={creatorFormState.socialPlatform}
                          onValueChange={(value) => setCreatorFormState({...creatorFormState, socialPlatform: value})}
                        >
                          <SelectTrigger id="creator-platform">
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                            <SelectItem value="twitch">Twitch</SelectItem>
                            <SelectItem value="twitter">Twitter/X</SelectItem>
                            <SelectItem value="podcast">Podcast</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-handle">Social Handle</Label>
                        <Input 
                          id="creator-handle" 
                          placeholder="@yourhandle" 
                          value={creatorFormState.socialHandle}
                          onChange={(e) => setCreatorFormState({...creatorFormState, socialHandle: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="creator-followers">Follower Count</Label>
                        <Select 
                          value={creatorFormState.followers}
                          onValueChange={(value) => setCreatorFormState({...creatorFormState, followers: value})}
                        >
                          <SelectTrigger id="creator-followers">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under5k">Under 5K</SelectItem>
                            <SelectItem value="5k-25k">5K - 25K</SelectItem>
                            <SelectItem value="25k-100k">25K - 100K</SelectItem>
                            <SelectItem value="100k-500k">100K - 500K</SelectItem>
                            <SelectItem value="500k-1m">500K - 1M</SelectItem>
                            <SelectItem value="over1m">Over 1M</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="creator-niche">Content Niche</Label>
                      <Select 
                        value={creatorFormState.niche}
                        onValueChange={(value) => setCreatorFormState({...creatorFormState, niche: value})}
                      >
                        <SelectTrigger id="creator-niche">
                          <SelectValue placeholder="Select your primary niche" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technology & Gadgets</SelectItem>
                          <SelectItem value="beauty">Beauty & Fashion</SelectItem>
                          <SelectItem value="fitness">Fitness & Health</SelectItem>
                          <SelectItem value="gaming">Gaming</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="food">Food & Cooking</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="business">Business & Finance</SelectItem>
                          <SelectItem value="lifestyle">Lifestyle</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Services You're Interested In</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <RadioGroup defaultValue={creatorFormState.services[0]}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="video-editing" id="service-video" />
                            <Label htmlFor="service-video">Video Editing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="thumbnail-design" id="service-thumbnail" />
                            <Label htmlFor="service-thumbnail">Thumbnail Design</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="social-marketing" id="service-social" />
                            <Label htmlFor="service-social">Social Media Marketing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="brand-deals" id="service-brand" />
                            <Label htmlFor="service-brand">Brand Partnerships</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="creator-message">Additional Information</Label>
                      <Textarea 
                        id="creator-message"
                        placeholder="Tell us more about your content and what you're looking for..."
                        value={creatorFormState.message}
                        onChange={(e) => setCreatorFormState({...creatorFormState, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-creator-gradient" disabled={submitting}>
                      {submitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2">⟳</span> Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="brand">
              <Card>
                <CardHeader>
                  <CardTitle>Brand Inquiry</CardTitle>
                  <CardDescription>
                    Connect with creators who align with your brand values and reach your target audience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBrandSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="brand-name">Contact Person</Label>
                        <Input 
                          id="brand-name" 
                          placeholder="Your name" 
                          value={brandFormState.name}
                          onChange={(e) => setBrandFormState({...brandFormState, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-email">Email</Label>
                        <Input 
                          id="brand-email" 
                          type="email" 
                          placeholder="you@company.com" 
                          value={brandFormState.email}
                          onChange={(e) => setBrandFormState({...brandFormState, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-phone">Phone Number</Label>
                        <Input 
                          id="brand-phone" 
                          placeholder="Your phone number" 
                          value={brandFormState.phone}
                          onChange={(e) => setBrandFormState({...brandFormState, phone: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-company">Company Name</Label>
                        <Input 
                          id="brand-company" 
                          placeholder="Your company" 
                          value={brandFormState.companyName}
                          onChange={(e) => setBrandFormState({...brandFormState, companyName: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-industry">Industry</Label>
                        <Select 
                          value={brandFormState.industry}
                          onValueChange={(value) => setBrandFormState({...brandFormState, industry: value})}
                        >
                          <SelectTrigger id="brand-industry">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                            <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
                            <SelectItem value="food">Food & Beverage</SelectItem>
                            <SelectItem value="health">Health & Wellness</SelectItem>
                            <SelectItem value="travel">Travel & Hospitality</SelectItem>
                            <SelectItem value="finance">Finance & Insurance</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="home">Home & Lifestyle</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-goals">Marketing Goals</Label>
                        <Select 
                          value={brandFormState.marketingGoals}
                          onValueChange={(value) => setBrandFormState({...brandFormState, marketingGoals: value})}
                        >
                          <SelectTrigger id="brand-goals">
                            <SelectValue placeholder="Primary goal" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="awareness">Brand Awareness</SelectItem>
                            <SelectItem value="engagement">Audience Engagement</SelectItem>
                            <SelectItem value="conversion">Conversions & Sales</SelectItem>
                            <SelectItem value="loyalty">Customer Loyalty</SelectItem>
                            <SelectItem value="launch">Product Launch</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="brand-budget">Budget Range</Label>
                        <Select 
                          value={brandFormState.budget}
                          onValueChange={(value) => setBrandFormState({...brandFormState, budget: value})}
                        >
                          <SelectTrigger id="brand-budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="over50k">Over $50,000</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand-timeframe">Timeframe</Label>
                        <Select 
                          value={brandFormState.timeframe}
                          onValueChange={(value) => setBrandFormState({...brandFormState, timeframe: value})}
                        >
                          <SelectTrigger id="brand-timeframe">
                            <SelectValue placeholder="Select timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (within 2 weeks)</SelectItem>
                            <SelectItem value="month">Within a month</SelectItem>
                            <SelectItem value="quarter">This quarter</SelectItem>
                            <SelectItem value="future">Future planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="brand-message">Campaign Details</Label>
                      <Textarea 
                        id="brand-message"
                        placeholder="Tell us about your campaign goals, target audience, and any specific requirements..."
                        value={brandFormState.message}
                        onChange={(e) => setBrandFormState({...brandFormState, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-gradient" disabled={submitting}>
                      {submitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2">⟳</span> Submitting...
                        </span>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <div className="mb-6 glass-card mx-auto max-w-md p-6 rounded-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-creatorPurple/10 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-creatorPurple" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Ready to elevate your digital presence?</h3>
              <p className="text-muted-foreground mb-4">
                Join CreatorNex today and become part of the next generation of digital media excellence.
              </p>
              
              <Button className="bg-creator-gradient hover:opacity-90 transition-opacity">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
