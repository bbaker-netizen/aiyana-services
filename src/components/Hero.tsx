import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";
import professionalsSupport from "@/assets/professionals-support.jpg";
import youthCare from "@/assets/youth-care.jpg";
import { ArrowRight, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const experienceCount = useCountUp(15, 2000, '+');

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 8000, stopOnInteraction: true })]
    );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

            const onSelect = () => {
              setSelectedIndex(emblaApi.selectedScrollSnap());
            };

            emblaApi.on('select', onSelect);
    onSelect();

            return () => {
              emblaApi.off('select', onSelect);
            };
  }, [emblaApi]);

  const slides = [
    {
      image: heroFamily,
      width: 1600,
      height: 900,
      alt: "A loving family receiving support and care from professional healthcare providers",
      headline: "A New Experience in",
      headlineAccent: "Youth Care",
      subtitle: "Compassionate, integrated support for families navigating complex needs"
    },
    {
      image: professionalsSupport,
      width: 1200,
      height: 800,
      alt: "Professional healthcare providers supporting families with compassion",
      headline: "Guiding Families Toward",
      headlineAccent: "Recovery & Hope",
      subtitle: "Evidence-based care tailored to your child's unique journey"
    },
    {
      image: youthCare,
      width: 800,
      height: 600,
      alt: "Youth receiving specialized care and support",
      headline: "Heal With",
      headlineAccent: "Evidence-Based Therapies",
      subtitle: "Expert support for ADHD, Autism, addiction, and dual diagnoses"
    }
    ];

  return (
    <section className="relative overflow-hidden">
  {/* Trust Banner */}
  <div className="bg-primary/5 border-b border-primary/10 py-2">
  <div className="container mx-auto px-4">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
  <div className="flex items-center gap-2">
  <Shield className="h-4 w-4 text-primary" />
  <span className="font-semibold text-foreground">RCAC Licensed Provider</span>
  </div>
  <div className="hidden sm:block h-4 w-px bg-border" />
  <div className="flex items-center gap-2">
  <Clock className="h-4 w-4 text-primary" />
  <span className="font-medium text-muted-foreground">24/7 Emergency Support</span>
  </div>
  </div>
  </div>
  </div>

  {/* Carousel */}
  <div className="relative min-h-[700px] md:min-h-[800px]" ref={emblaRef}>
  <h1 className="sr-only">Aiyana Services — Respite Care and Youth Assessments in Edmonton</h1>
  <div className="flex transition-transform duration-700 ease-in-out will-change-transform">
  {slides.map((slide, index) => (
    <div key={index} className="flex-[0_0_100%] min-w-0 relative">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
    <img
    src={slide.image}
    alt={slide.alt}
    width={slide.width}
height={slide.height}
    className="w-full h-full object-cover"
loading={index === 0 ? "eager" : "lazy"}
  decoding={index === 0 ? "sync" : "async"}
  />
<div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
</div>

{/* Content */}
<div className="relative z-10 container mx-auto px-4 h-full min-h-[700px] md:min-h-[800px] flex items-center">
<div className="max-w-4xl animate-fade-in">
<p className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight">
{slide.headline}
<br />
<span className="text-primary italic">
{slide.headlineAccent}
</span>
</p>

<p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
{slide.subtitle}
</p>

<div className="flex flex-col sm:flex-row gap-4">
<Link to="/contact">
<Button variant="cta" size="xl" className="group w-full sm:w-auto">
Book Respite Care
<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
</Button>
</Link>
<Link to="/services">
<Button variant="cta-outline" size="xl" className="group w-full sm:w-auto">
Explore Services
<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
</Button>
</Link>
</div>
</div>
</div>
</div>
))}
</div>

{/* Navigation Arrows */}
<button
onClick={scrollPrev}
className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110 shadow-lg hidden md:flex items-center justify-center"
aria-label="Previous slide"
>
<ChevronLeft className="h-6 w-6 text-foreground" />
</button>
<button
onClick={scrollNext}
className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110 shadow-lg hidden md:flex items-center justify-center"
aria-label="Next slide"
>
<ChevronRight className="h-6 w-6 text-foreground" />
</button>

{/* Dots Indicator */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
{slides.map((_, index) => (
  <button
  key={index}
  onClick={() => emblaApi?.scrollTo(index)}
className={`h-2 rounded-full transition-all ${
  index === selectedIndex
  ? 'w-8 bg-primary'
  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
}`}
aria-label={`Go to slide ${index + 1}`}
/>
))}
</div>
</div>

{/* Statistics Section */}
<div className="bg-background py-12 border-t border-border">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-primary/10 text-primary">
<Clock className="h-6 w-6" />
</div>
<div>
<div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
<div className="text-sm text-muted-foreground font-medium">Emergency Support Available</div>
</div>
</div>
</div>

<div ref={experienceCount.ref} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-primary/10 text-primary">
<Shield className="h-6 w-6" />
</div>
<div>
<div className="text-3xl font-display font-bold text-primary mb-1">{experienceCount.count}</div>
<div className="text-sm text-muted-foreground font-medium">Years Combined Experience</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
};

export default Hero;
