import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Target, Heart, Users, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

const Mission = () => {
  const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { elementRef: impactRef, isVisible: impactVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Our Mission | Aiyana Services";
    const meta = document.querySelector('meta[name="description"]') || (() => { const m = document.createElement('meta'); m.setAttribute('name','description'); document.head.appendChild(m); return m; })();
    meta.setAttribute('content','Aiyana Services mission: Providing integrated, compassionate care for families navigating complex developmental and mental health needs in Edmonton.');
  }, []);

  const values = [
    { icon: Heart, title: "Empathy First", description: "We lead with compassion, understanding the unique challenges each family faces." },
    { icon: Sparkles, title: "Excellence in Care", description: "Evidence-based practices combined with clinical expertise for the best outcomes." },
    { icon: Users, title: "Accessibility", description: "Making quality care available to all families, regardless of background or resources." },
    { icon: Target, title: "Collaboration", description: "Working together with families, schools, and providers as a unified team." },
  ];

  const stats = [
    { number: "500+", label: "Families Served" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Crisis Support" },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Mission", url: "/about/mission" }]} />
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/about">About</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Mission</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold text-lg">Our Purpose</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Mission & Values
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transforming lives through integrated, compassionate care for families navigating complex developmental and mental health needs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground text-center">
                  At Aiyana Services, our mission is to provide <strong className="text-foreground">integrated, family-centered care</strong> that addresses the complex intersection of developmental differences, mental health challenges, and addiction.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  We believe every child deserves access to <strong className="text-foreground">comprehensive, coordinated support</strong> that treats them as a whole person—not a collection of diagnoses.
                </p>
                <p className="text-lg text-muted-foreground text-center">
                  Through evidence-based assessment, therapeutic intervention, and ongoing family support, we empower families to navigate challenges with <strong className="text-foreground">confidence, clarity, and hope</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values Section */}
        <section ref={valuesRef} className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Vision for the Future</h2>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg text-muted-foreground">
                  We envision a future where <strong className="text-foreground">every family in Edmonton</strong> has access to seamless, integrated care that addresses the full spectrum of their child's needs.
                </p>
                <p className="text-lg text-muted-foreground">
                  A future where:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>No family has to navigate multiple disconnected systems alone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Every child with complex needs receives coordinated, comprehensive support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Stigma surrounding developmental differences and mental health is replaced with understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Families have the knowledge, resources, and support to help their children thrive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Impact Section */}
        <section ref={impactRef} className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Community Impact</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Making a difference in Edmonton, one family at a time
              </p>
            </div>
            <div className={`grid md:grid-cols-4 gap-8 transition-all duration-700 ${impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Mission;
