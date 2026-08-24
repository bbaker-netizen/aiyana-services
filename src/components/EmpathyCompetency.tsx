import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield } from "lucide-react";
import professionalsSupport from "@/assets/professionals-support.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const EmpathyCompetency = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" ref={elementRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">We Understand Your Challenges</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert care tailored to your family's needs
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With expert care tailored to your family's needs, you can breathe easier. 
              We know what it's like to feel overwhelmed, and we're here to provide the 
              compassionate support you've been searching for.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Care in Somali, Kiswahili and English</h3>
                  <p className="text-muted-foreground">Many of the families we serve are newcomers, and we work with them in their own language.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Screened and Trained Support Workers</h3>
                  <p className="text-muted-foreground">Every worker carries a current police check with vulnerable sector search and standard first aid with CPR, and is trained before a first visit.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img
              src={professionalsSupport}
              alt="A support worker helping a family at home in Edmonton"
              className="w-full h-96 object-cover rounded-2xl shadow-warm"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className={`bg-primary/5 border-primary/20 hover:shadow-warm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Safe & Secure Care</h3>
              <p className="text-muted-foreground">Your child's safety and wellbeing are our top priorities in every interaction.</p>
            </CardContent>
          </Card>
          
          <Card className={`bg-secondary/10 border-secondary/30 hover:shadow-warm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassionate Approach</h3>
              <p className="text-muted-foreground">We understand the emotional journey and provide care with genuine empathy.</p>
            </CardContent>
          </Card>
          
          <Card className={`bg-success/10 border-success/30 hover:shadow-warm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Plain, Practical Support</h3>
              <p className="text-muted-foreground">Practical help with the day to day, delivered by workers who know the household.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Request Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmpathyCompetency;
