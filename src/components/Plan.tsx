import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Heart, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via phone or online to discuss your needs.",
    details: "Our compassionate intake team will listen to your situation and help determine the best path forward for your family.",
  },
  {
    number: "02", 
    icon: Calendar,
    title: "Book an Assessment",
    description: "Schedule a visit for an ADHD/Autism evaluation.",
    details: "Our experienced professionals will conduct comprehensive assessments in a comfortable, supportive environment.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Receive Care",
    description: "Start accessing holistic support tailored to your family.",
    details: "Begin your journey with integrated services designed to support both your child and your entire family system.",
  },
];

const Plan = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <ArrowRight className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold text-lg">Three Simple Steps to Support Your Family</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Getting help for your loved one is quick and easy
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've streamlined our process to eliminate barriers and get you the support you need as quickly as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className={`relative bg-card hover:shadow-warm transition-all duration-500 group overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/40">{step.number}</span>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg font-medium text-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
        
        <div className={`bg-card rounded-2xl p-8 md:p-12 text-center shadow-card border border-border transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for help to arrive. Take the first step towards comprehensive care for your family today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Request Service
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="cta-outline" size="xl">
                Schedule Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;