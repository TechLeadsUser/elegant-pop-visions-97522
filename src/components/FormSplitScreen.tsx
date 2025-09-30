import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormSplitScreenProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormSplitScreen = ({ open, onOpenChange }: FormSplitScreenProps) => {
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
      <DialogContent className="bg-card border-0 max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Branding */}
          <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-12 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl font-black text-white mb-4">Welcome to TechLeads</h2>
              <p className="text-white/90 text-lg mb-8">Join our community of innovators and tech enthusiasts</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span className="text-white">Expert mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span className="text-white">Industry projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span className="text-white">Career guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">Get Started</h3>
              <p className="text-muted-foreground text-sm">Fill in your details below</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="split-name" className="text-foreground font-medium">Name</Label>
                <Input
                  id="split-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="split-email" className="text-foreground font-medium">Email</Label>
                <Input
                  id="split-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="split-phone" className="text-foreground font-medium">Phone</Label>
                <Input
                  id="split-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1.5"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div>
                <Label className="text-foreground font-medium mb-3 block">Your Role</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="split-student" />
                    <Label htmlFor="split-student" className="cursor-pointer">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="split-professional" />
                    <Label htmlFor="split-professional" className="cursor-pointer">IT Professional</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expert" id="split-expert" />
                    <Label htmlFor="split-expert" className="cursor-pointer">Domain Expert</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="split-message" className="text-foreground font-medium">Message</Label>
                <Textarea
                  id="split-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 min-h-[80px]"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
              Submit Application
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
