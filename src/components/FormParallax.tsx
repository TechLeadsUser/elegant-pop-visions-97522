import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormParallaxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormParallax = ({ open, onOpenChange }: FormParallaxProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "student",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gradient-to-br from-card via-card to-card/80 border border-primary/20 max-w-xl p-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full floating" />
          <div className="absolute top-20 right-20 w-16 h-16 bg-secondary/20 rounded-full floating" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-10 right-10 w-14 h-14 bg-primary/20 rounded-lg floating" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-secondary/20" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animation: 'floating 4s ease-in-out infinite', animationDelay: '0.8s' }} />
        </div>

        <form onSubmit={handleSubmit} className="relative p-12 space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <h2 className="text-4xl font-bold gradient-text">Let's Connect</h2>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-muted-foreground text-lg">Begin your journey with TechLeadsIT</p>
          </div>

          <div className="space-y-5">
            <div className="relative group">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary to-transparent group-focus-within:h-full transition-all duration-300" />
              <Label htmlFor="para-name" className="text-foreground font-semibold mb-2 block">Full Name</Label>
              <Input
                id="para-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-effect border-primary/20 transition-all duration-300 group-hover:translate-x-1"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-secondary to-transparent group-focus-within:h-full transition-all duration-300" />
              <Label htmlFor="para-email" className="text-foreground font-semibold mb-2 block">Email Address</Label>
              <Input
                id="para-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-effect border-primary/20 transition-all duration-300 group-hover:translate-x-1"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="relative group">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-accent to-transparent group-focus-within:h-full transition-all duration-300" />
              <Label htmlFor="para-phone" className="text-foreground font-semibold mb-2 block">Phone Number</Label>
              <Input
                id="para-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass-effect border-primary/20 transition-all duration-300 group-hover:translate-x-1"
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            <div>
              <Label className="text-foreground font-semibold mb-4 block">I am a</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="grid grid-cols-3 gap-3"
              >
                {['student', 'professional', 'expert'].map((role, idx) => (
                  <div key={role} className="group">
                    <RadioGroupItem value={role} id={`para-${role}`} className="peer sr-only" />
                    <Label
                      htmlFor={`para-${role}`}
                      className="flex items-center justify-center p-4 glass-effect border border-primary/20 cursor-pointer hover:border-primary/50 peer-data-[state=checked]:bg-gradient-to-br peer-data-[state=checked]:from-primary peer-data-[state=checked]:to-secondary peer-data-[state=checked]:text-white transition-all duration-300 hover:-translate-y-1 font-semibold text-sm"
                    >
                      {role === 'student' ? 'Student' : role === 'professional' ? 'IT Pro' : 'Expert'}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="relative group">
              <div className="absolute -left-2 top-8 w-1 h-0 bg-gradient-to-b from-primary via-secondary to-accent group-focus-within:h-full transition-all duration-500" />
              <Label htmlFor="para-message" className="text-foreground font-semibold mb-2 block">Your Message</Label>
              <Textarea
                id="para-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-effect border-primary/20 min-h-[120px] transition-all duration-300 group-hover:translate-x-1"
                placeholder="Tell us about your goals and aspirations..."
              />
            </div>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold py-7 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Application
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
