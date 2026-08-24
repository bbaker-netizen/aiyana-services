import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Heart, Users, ArrowRight, Brain, Puzzle, HeartHandshake, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Clock,
    title: "Respite Care",
    description: "Planned and short-notice respite, with a worker matched to your household.",
    href: "/services/respite-care",
  },
  {
    icon: HeartHandshake,
    title: "Community Supports",
    description:
      "FSCD and PDD funded community access, behaviour support, life skills, caregiver relief, and transition planning.",
    href: "/contact",
  },
  {
    icon: Layers,
    title: "Funding Navigation",
    description: "Help understanding what your FSCD or PDD approval covers, and getting the paperwork done.",
    href: "/contact",
  },
  {
    icon: Brain,
    title: "ADHD Assessment",
    description: "In development. We are building this with qualified Alberta clinicians and it is not yet available.",
    comingSoon: true,
  },
  {
    icon: Puzzle,
    title: "Autism Evaluation",
    description: "In development. We are building this with qualified Alberta clinicians and it is not yet available.",
    comingSoon: true,
  },
  {
    icon: Users,
    title: "Counselling and Addiction Support",
    description: "In development. We are building this with qualified Alberta clinicians and it is not yet available.",
    comingSoon: true,
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
            <span className="text-success font-semibold text-lg">Find Relief and Support for Your Loved One</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Timely care that bridges the gaps between services
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We understand the urgency of your situation. That's why we've created an integrated 
            approach that eliminates barriers and delivers comprehensive support when you need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const wrapperClassName = `group transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`;
            const wrapperStyle = { transitionDelay: `${index * 100}ms` };
            const card = (
              <Card
                className={`h-full bg-card transition-all duration-300 ${
                  service.comingSoon
                    ? 'border-dashed'
                    : 'hover:shadow-elegant hover:border-primary/30 cursor-pointer group-hover:-translate-y-1'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 p-4 rounded-xl transition-colors ${
                        service.comingSoon ? 'bg-muted' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}
                    >
                      <Icon className={`h-8 w-8 ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3
                          className={`text-xl font-semibold leading-tight transition-colors ${
                            service.comingSoon ? 'text-muted-foreground' : 'text-foreground group-hover:text-primary'
                          }`}
                        >
                          {service.title}
                        </h3>
                        {service.comingSoon && (
                          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Coming soon
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );

            if (service.comingSoon) {
              return (
                <div key={index} className={wrapperClassName} style={wrapperStyle}>
                  {card}
                </div>
              );
            }

            return (
              <Link to={service.href} key={index} className={wrapperClassName} style={wrapperStyle}>
                {card}
              </Link>
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

export default ValueProposition;