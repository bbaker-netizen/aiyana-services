import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Heart, Users, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Clock,
    title: "Immediate access to safe respite care",
    description: "No more waiting lists. Get the support you need when you need it most.",
  },
  {
    icon: Users,
    title: "Holistic approach with integrated services",
    description: "Comprehensive care that addresses all aspects of your child's wellbeing.",
  },
  {
    icon: Heart,
    title: "Compassionate, evidence-based therapeutic support",
    description: "Professional care delivered with warmth, understanding, and proven methods.",
  },
  {
    icon: ArrowRight,
    title: "Seamless transition into adult services",
    description: "Smooth pathways to ensure continuity of care as your child grows.",
  },
];

const ValueProposition = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" ref={elementRef} className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="h-8 w-8 text-success" />
            <span className="text-success font-semibold text-lg">Find Relief and Support for Your Child</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Timely care that bridges the gaps between services
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We understand the urgency of your situation. That's why we've created an integrated 
            approach that eliminates barriers and delivers comprehensive support when you need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className={`bg-card hover:shadow-elegant transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className={`bg-card rounded-2xl p-8 md:p-12 text-center shadow-card border border-border transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Peace of Mind is Our Priority
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With Aiyana Services, you're not just getting care – you're gaining a partner 
            who understands your journey and is committed to your family's success.
          </p>
          <Button variant="cta" size="xl">
            Reserve Respite Care
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;