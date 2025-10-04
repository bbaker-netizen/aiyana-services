import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageCircle, Heart, Quote } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Client Testimonials | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Read testimonials from families we\'ve helped at Aiyana Services. Real stories of transformation, support, and hope in Edmonton.');
  }, []);

  const testimonials = [
    {
      name: "Jennifer M.",
      situation: "Mother of child with ADHD and anxiety",
      rating: 5,
      text: "After years of struggling to find answers, Aiyana Services finally gave us the comprehensive assessment and support we needed. The team took time to understand our family, and the integrated approach meant we weren't juggling multiple providers. Our son is thriving now."
    },
    {
      name: "Robert & Sandra K.",
      situation: "Parents seeking autism evaluation",
      rating: 5,
      text: "The autism assessment process was thorough but never felt overwhelming. Dr. Mitchell explained everything clearly, and the feedback session gave us actionable strategies we could implement immediately. The school support consultation was invaluable."
    },
    {
      name: "Maria T.",
      situation: "Single mother using respite care",
      rating: 5,
      text: "Respite care gave me the break I desperately needed without the guilt. Knowing my daughter was with trained caregivers who understood her needs made all the difference. I came back refreshed and ready to be the mom she deserves."
    },
    {
      name: "David L.",
      situation: "Father of teen with addiction and ADHD",
      rating: 5,
      text: "Finding a place that could treat both my son's addiction and ADHD together was life-changing. James understood that these weren't separate issues and helped us address the root causes. We finally have hope again."
    },
    {
      name: "Amira S.",
      situation: "Mother of autistic daughter with OCD",
      rating: 5,
      text: "The dual diagnosis care was exactly what we needed. Instead of one therapist for autism and another for OCD, we had a coordinated team. Everyone was on the same page, and my daughter's progress has been remarkable."
    },
    {
      name: "Tom & Lisa H.",
      situation: "Parents of child with complex needs",
      rating: 5,
      text: "Aiyana Services became our family's anchor during the hardest time of our lives. The care coordination, the 24/7 crisis support, the genuine compassion—it all made us feel less alone. We're forever grateful."
    },
    {
      name: "Priya K.",
      situation: "Mother seeking ADHD assessment",
      rating: 5,
      text: "The assessment was incredibly detailed, and the report gave us exactly what we needed for school accommodations. Lisa helped us navigate the system and advocate for our son. He's finally getting the support he deserves."
    },
    {
      name: "Michael J.",
      situation: "Father of teen in addiction recovery",
      rating: 5,
      text: "The family therapy sessions saved our relationship with our daughter. We learned to communicate again, set boundaries with love, and understand the pain behind her addiction. She's 8 months sober now."
    },
    {
      name: "Elena R.",
      situation: "Grandmother and primary caregiver",
      rating: 5,
      text: "As a grandmother raising my grandson, I felt lost navigating his ADHD and behavioral challenges. Emily connected us with resources I didn't know existed and always made time for my questions. This team truly cares."
    }
  ];

  const stats = [
    { icon: Star, number: "4.9/5", label: "Average Rating" },
    { icon: Heart, number: "500+", label: "Families Served" },
    { icon: MessageCircle, number: "98%", label: "Would Recommend" },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="h-8 w-8 text-primary fill-primary" />
              <span className="text-primary font-semibold text-lg">Real Stories, Real Impact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              What Families Are Saying
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Don't just take our word for it—hear from families who've experienced the transformative power of integrated, compassionate care.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold">{stat.number}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">{stat.label}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section ref={testimonialsRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stories of hope, healing, and transformation from families across Edmonton
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm italic">{testimonial.situation}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Share Your Story</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Has Aiyana Services made a difference in your family's life? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Contact Us to Share
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of Edmonton families who've found hope, support, and transformation with Aiyana Services.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Testimonials;
