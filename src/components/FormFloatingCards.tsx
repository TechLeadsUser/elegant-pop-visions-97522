import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormFloatingCardsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormFloatingCards = ({ open, onOpenChange }: FormFloatingCardsProps) => {
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
      <DialogContent className="bg-background border-border max-w-lg p-0 overflow-hidden">
        <div className="relative p-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-4 left-4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="text-center mb-8 floating">
              <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Transform Your Career</h2>
              <p className="text-muted-foreground">Let's build something amazing together</p>
            </div>

            <div className="space-y-5">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all transform hover:-translate-y-1">
                <Label htmlFor="float-name" className="text-foreground font-medium">Full Name</Label>
                <Input
                  id="float-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 bg-transparent border-0 focus-visible:ring-0 px-0"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all transform hover:-translate-y-1">
                <Label htmlFor="float-email" className="text-foreground font-medium">Email</Label>
                <Input
                  id="float-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-transparent border-0 focus-visible:ring-0 px-0"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all transform hover:-translate-y-1">
                <Label htmlFor="float-phone" className="text-foreground font-medium">Phone</Label>
                <Input
                  id="float-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 bg-transparent border-0 focus-visible:ring-0 px-0"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <Label className="text-foreground font-medium mb-3 block">I am a</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="float-student" />
                    <Label htmlFor="float-student" className="cursor-pointer">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="float-professional" />
                    <Label htmlFor="float-professional" className="cursor-pointer">IT Professional</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expert" id="float-expert" />
                    <Label htmlFor="float-expert" className="cursor-pointer">Domain Expert</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all">
                <Label htmlFor="float-message" className="text-foreground font-medium">Message</Label>
                <Textarea
                  id="float-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 bg-transparent border-0 focus-visible:ring-0 px-0 min-h-[80px]"
                  placeholder="What brings you here?"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-6 text-lg shadow-lg">
              Let's Go! →
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
