import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const Hero = () => {
  const familiesCount = useCountUp(500, 2500, '+');
  const experienceCount = useCountUp(15, 2000, '+');
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with sophisticated gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFamily}
          alt="A loving family receiving support and care from professional healthcare providers"
          className="w-full h-full object-cover opacity-15 scale-105"
          style={{ objectPosition: '50% 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5" />
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-primary/20 shadow-card">
            <Shield className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Edmonton's Trusted Care Provider • RCAC Licensed
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Comprehensive Care for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Youth with Complex Needs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-light">
            Are you struggling to find support for your child? We provide compassionate, 
            integrated care for families navigating ADHD, Autism, IDD, addiction, and dual diagnoses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="cta" size="xl" className="group shadow-elegant hover:shadow-hover">
              Reserve Respite Care
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cta-outline" size="xl" className="group">
              Book Assessment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
            </Button>
          </div>
          
          {/* Animated statistics cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-strong rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-hero shadow-glow">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Emergency Support Available</div>
                </div>
              </div>
            </div>
            
            <div ref={familiesCount.ref} className="glass-strong rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-hero shadow-glow">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent mb-1">
                    {familiesCount.count}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Families Supported</div>
                </div>
              </div>
            </div>
            
            <div ref={experienceCount.ref} className="glass-strong rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-hero shadow-glow">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent mb-1">
                    {experienceCount.count}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Years Combined Experience</div>
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