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
        <div className="absolute inset-0 bg-background" />
      </div>
      
      {/* Decorative gradient blobs */}
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-card border border-primary/20">
            <Shield className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Edmonton's Trusted Care Provider • RCAC Licensed
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Comprehensive Care for{" "}
            <span className="text-primary">
              Youth with Complex Needs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-light">
            Are you struggling to find support for your child? We provide compassionate, 
            integrated care for families navigating ADHD, Autism, IDD, addiction, and dual diagnoses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="cta" size="xl" className="group">
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
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Emergency Support Available</div>
                </div>
              </div>
            </div>
            
            <div ref={familiesCount.ref} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">{familiesCount.count}</div>
                  <div className="text-sm text-muted-foreground font-medium">Families Supported</div>
                </div>
              </div>
            </div>
            
            <div ref={experienceCount.ref} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">{experienceCount.count}</div>
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