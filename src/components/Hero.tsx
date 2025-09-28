import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFamily}
          alt="A loving family receiving support and care from professional healthcare providers"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Edmonton's Trusted Care Provider</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive Care for{" "}
            <span className="text-primary">Youth with Complex Needs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Are you struggling to find support for your child? We provide compassionate, 
            integrated care for families navigating ADHD, Autism, IDD, addiction, and dual diagnoses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cta" size="xl" className="group">
              Reserve Respite Care
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cta-outline" size="xl">
              Book Assessment
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support Available</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Families Supported</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;