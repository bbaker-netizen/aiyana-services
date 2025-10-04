import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import youthCare from "@/assets/youth-care.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExplanatoryParagraph = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold text-lg">You Don't Have to Struggle Alone</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              We understand how isolating it can feel
            </h2>
            
            <div className="prose prose-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Navigating the complexities of care for your child can be overwhelming. At Aiyana Services, 
                we recognize the challenges faced by families, from long waitlists for assessments to a lack 
                of suitable respite options.
              </p>
              
              <p>
                We offer immediate access to compassionate, coordinated care that includes everything from 
                assessments to counseling. By bridging the gaps in the system, we ensure your child receives 
                the crucial support they need, allowing you as a caregiver to focus on what truly matters—your 
                family's well-being.
              </p>
              
              <p className="font-medium text-foreground">
                Experience the relief of having a dedicated team on your side, providing tailored solutions 
                every step of the way.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Immediate Support</h4>
                  <p className="text-sm text-muted-foreground">No more waiting lists or barriers to care</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-secondary/30">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-secondary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Coordinated Care</h4>
                  <p className="text-sm text-muted-foreground">Integrated services that work together</p>
                </CardContent>
              </Card>
            </div>
            
            <Button variant="cta" size="xl">
              Reserve Respite Care
            </Button>
          </div>
          
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img
              src={youthCare}
              alt="Youth receiving personalized therapeutic care in a supportive environment"
              className="w-full h-96 object-cover rounded-2xl shadow-warm"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-card border max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success">Available Now</span>
              </div>
              <p className="text-sm text-foreground font-medium mb-1">Immediate Respite Care</p>
              <p className="text-xs text-muted-foreground">Professional support when you need it most</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplanatoryParagraph;