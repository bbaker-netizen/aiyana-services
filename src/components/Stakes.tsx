import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Heart, HeadphonesIcon, Brain, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const stakes = [
  {
    icon: Clock,
    title: "Long waitlists for essential assessments",
    impact: "Delayed intervention during crucial development years",
  },
  {
    icon: HeadphonesIcon,
    title: "Limited respite options for caregivers", 
    impact: "Increased risk of caregiver burnout and family stress",
  },
  {
    icon: Heart,
    title: "Increased stress and burnout for families",
    impact: "Deteriorating family relationships and support systems",
  },
  {
    icon: Brain,
    title: "Worsening addiction struggles",
    impact: "Progressive health decline without timely intervention",
  },
  {
    icon: Users,
    title: "Lost opportunities during crucial development",
    impact: "Reduced potential for independence and future success",
  },
  {
    icon: AlertTriangle,
    title: "Confusion navigating fragmented care systems",
    impact: "Families falling through the cracks of disconnected services",
  },
];

const Stakes = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} className="py-20 bg-warm-gray-light/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="h-8 w-8 text-warning" />
            <span className="text-warning font-semibold text-lg">Don't Let Service Gaps Hurt Your Family</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What happens if your child doesn't get help?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Without timely, integrated support, families face mounting challenges that worsen over time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stakes.map((stake, index) => {
            const Icon = stake.icon;
            return (
              <Card 
                key={index} 
                className={`border-l-4 border-l-warning bg-card hover:shadow-card transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-warning/10 rounded-lg">
                      <Icon className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 leading-tight">
                        {stake.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stake.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-foreground mb-8 font-medium">
            Your family deserves better. Take action before it's too late.
          </p>
          <Link to="/services/respite-care">
            <Button variant="cta" size="xl">
              Reserve Respite Care Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stakes;