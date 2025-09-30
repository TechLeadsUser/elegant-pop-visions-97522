import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormGlassmorphism } from "@/components/FormGlassmorphism";
import { FormNeonGlow } from "@/components/FormNeonGlow";
import { FormSplitScreen } from "@/components/FormSplitScreen";
import { FormFloatingCards } from "@/components/FormFloatingCards";
import { FormMinimalist } from "@/components/FormMinimalist";
import { FormCyberpunk } from "@/components/FormCyberpunk";
import { FormNeumorphic } from "@/components/FormNeumorphic";
import { FormGradientMesh } from "@/components/FormGradientMesh";
import { FormGeometric } from "@/components/FormGeometric";
import { FormParallax } from "@/components/FormParallax";
import { ThankYouDialog } from "@/components/ThankYouDialog";

const Index = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    { id: "glassmorphism", name: "Glassmorphism", component: FormGlassmorphism, desc: "Frosted glass with blur effects" },
    { id: "neon", name: "Neon Glow", component: FormNeonGlow, desc: "Electric neon borders & pulse effects" },
    { id: "split", name: "Split Screen", component: FormSplitScreen, desc: "Branded side panel with gradient" },
    { id: "floating", name: "Floating Cards", component: FormFloatingCards, desc: "3D cards with floating elements" },
    { id: "minimalist", name: "Minimalist Lines", component: FormMinimalist, desc: "Clean animated underlines" },
    { id: "cyberpunk", name: "Cyberpunk", component: FormCyberpunk, desc: "Grid patterns with terminal aesthetics" },
    { id: "neumorphic", name: "Neumorphic Dark", component: FormNeumorphic, desc: "Soft shadows in dark mode" },
    { id: "mesh", name: "Gradient Mesh", component: FormGradientMesh, desc: "Multi-color radial gradients" },
    { id: "geometric", name: "Geometric Shapes", component: FormGeometric, desc: "Angular designs with polygons" },
    { id: "parallax", name: "Floating Parallax", component: FormParallax, desc: "Animated floating elements" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={() => setShowThankYou(true)}
          className="glow-primary hover:scale-105 transition-transform"
        >
          Preview Thank You Dialog
        </Button>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black gradient-text mb-6 tracking-tight">
              TechLeadsIT
            </h1>
            <p className="text-2xl text-foreground/80 mb-4 font-light">Premium CTA Form Collection</p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              10 stunning, never-before-seen popup form designs crafted for modern tech websites. 
              Each form is optimized for conversions and built with professional aesthetics.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="text-center p-6 glass-effect rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Unique Designs</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-xl">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Dark Mode</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-xl">
              <div className="text-4xl font-bold text-accent mb-2">∞</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Possibilities</div>
            </div>
          </div>
        </div>
      </header>

      {/* Forms Grid */}
      <main className="container mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, idx) => {
            const FormComponent = form.component;
            return (
              <div key={form.id}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{form.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{form.desc}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => setActiveForm(form.id)}
                      className="w-full mt-6 bg-muted hover:bg-primary hover:text-white transition-all font-semibold"
                    >
                      Preview Form →
                    </Button>
                  </div>
                </div>

                <FormComponent 
                  open={activeForm === form.id} 
                  onOpenChange={(open) => !open && setActiveForm(null)} 
                />
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-muted-foreground mb-4">
            Designed with <span className="text-primary">♥</span> for TechLeadsIT
          </p>
          <p className="text-sm text-muted-foreground/70">
          All forms use Montserrat font • SEO optimized • Dark mode ready • Fully responsive
        </p>
      </div>
    </footer>

    <ThankYouDialog open={showThankYou} onOpenChange={setShowThankYou} />
  </div>
  );
};

export default Index;
