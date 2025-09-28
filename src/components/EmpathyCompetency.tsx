import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Award, Users, Heart, Shield } from "lucide-react";
import professionalsSupport from "@/assets/professionals-support.jpg";

const EmpathyCompetency = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
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
                  <h3 className="font-semibold text-foreground mb-2">Trusted by Families Across Edmonton</h3>
                  <p className="text-muted-foreground">Over 500 families have found relief through our comprehensive care approach.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Experienced Team of Healthcare Professionals</h3>
                  <p className="text-muted-foreground">Our staff combines deep expertise with a compassionate approach, focused on creating integrated, practical care solutions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={professionalsSupport}
              alt="Healthcare professionals providing compassionate support to families in Edmonton"
              className="w-full h-96 object-cover rounded-2xl shadow-warm"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card border max-w-xs">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic mb-2">
                "Aiyana Services changed our lives—finally, we have the support we need."
              </p>
              <p className="text-sm font-medium text-foreground">Sara T., Parent</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-primary/5 border-primary/20 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Safe & Secure Care</h3>
              <p className="text-muted-foreground">Your child's safety and wellbeing are our top priorities in every interaction.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-secondary/30 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassionate Approach</h3>
              <p className="text-muted-foreground">We understand the emotional journey and provide care with genuine empathy.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-success/10 border-success/30 hover:shadow-warm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Evidence-Based Methods</h3>
              <p className="text-muted-foreground">Our interventions are grounded in research and proven therapeutic practices.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cta" size="xl">
            Reserve Respite Care
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpathyCompetency;