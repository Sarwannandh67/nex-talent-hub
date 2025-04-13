
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former YouTube strategist with 10+ years in digital media. Passionate about empowering creators through technology and partnerships.",
    initials: "SJ",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@creatornex.com"
    }
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer specializing in AI and recommendation systems. Building tech that connects the right brands with the perfect creators.",
    initials: "MC",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "CMO & Co-Founder",
    bio: "Marketing veteran with experience at top agencies. Led influencer campaigns for Fortune 500 brands before joining CreatorNex.",
    initials: "PS",
    socialLinks: {
      linkedin: "#",
      email: "priya@creatornex.com"
    }
  },
  {
    name: "Alex Rodriguez",
    role: "Creative Director",
    bio: "Award-winning video editor and content strategist. Helps creators develop their unique visual language and brand identity.",
    initials: "AR",
    socialLinks: {
      twitter: "#",
      email: "alex@creatornex.com"
    }
  },
  {
    name: "Jordan Taylor",
    role: "Head of Creator Relations",
    bio: "Former talent manager who has worked with top YouTubers and Twitch streamers. Specializes in scaling creator careers sustainably.",
    initials: "JT",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Leila Hassan",
    role: "Head of Brand Partnerships",
    bio: "With 8+ years in digital advertising, Leila bridges the gap between innovative brands and influential creators.",
    initials: "LH",
    socialLinks: {
      linkedin: "#",
      email: "leila@creatornex.com"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-creatorPurple/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-creatorBlue/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our <span className="gradient-text">Leadership</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate visionaries behind CreatorNex who are revolutionizing the creator economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/30 transition-colors group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-creatorPurple to-creatorBlue text-white text-xl">
                      {member.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <h3 className="font-bold text-xl mt-2">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                {member.socialLinks && (
                  <div className="flex gap-3 mt-auto">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name}'s Twitter`}>
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a href={`mailto:${member.socialLinks.email}`} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Email ${member.name}`}>
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
