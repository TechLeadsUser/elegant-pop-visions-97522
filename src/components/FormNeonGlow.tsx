import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormNeonGlowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormNeonGlow = ({ open, onOpenChange }: FormNeonGlowProps) => {
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
      <DialogContent className="bg-card/95 border-2 border-primary max-w-md p-0 overflow-hidden pulse-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(199,89%,48%/0.1),transparent_50%)] pointer-events-none" />
        <form onSubmit={handleSubmit} className="relative p-8 space-y-5">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-primary mb-2 tracking-tight">TECH LEADS</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Connect With Us</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="neon-name" className="text-xs uppercase tracking-wider text-primary font-semibold">Name</Label>
              <Input
                id="neon-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted/30 border-primary/40 focus:border-primary mt-1.5 font-medium"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <Label htmlFor="neon-email" className="text-xs uppercase tracking-wider text-primary font-semibold">Email</Label>
              <Input
                id="neon-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted/30 border-primary/40 focus:border-primary mt-1.5 font-medium"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="neon-phone" className="text-xs uppercase tracking-wider text-primary font-semibold">Phone</Label>
              <Input
                id="neon-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-muted/30 border-primary/40 focus:border-primary mt-1.5 font-medium"
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            <div>
              <Label className="text-xs uppercase tracking-wider text-primary font-semibold mb-3 block">Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="grid grid-cols-3 gap-2"
              >
                <div className="relative">
                  <RadioGroupItem value="student" id="neon-student" className="peer sr-only" />
                  <Label
                    htmlFor="neon-student"
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-muted/20 px-3 py-2 hover:bg-muted/40 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 cursor-pointer text-xs font-semibold transition-all"
                  >
                    Student
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="professional" id="neon-professional" className="peer sr-only" />
                  <Label
                    htmlFor="neon-professional"
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-muted/20 px-3 py-2 hover:bg-muted/40 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 cursor-pointer text-xs font-semibold transition-all"
                  >
                    IT Pro
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="expert" id="neon-expert" className="peer sr-only" />
                  <Label
                    htmlFor="neon-expert"
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-muted/20 px-3 py-2 hover:bg-muted/40 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 cursor-pointer text-xs font-semibold transition-all"
                  >
                    Expert
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="neon-message" className="text-xs uppercase tracking-wider text-primary font-semibold">Message</Label>
              <Textarea
                id="neon-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-muted/30 border-primary/40 focus:border-primary mt-1.5 min-h-[90px] font-medium"
                placeholder="Your message..."
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 uppercase tracking-wider text-sm glow-primary">
            Submit Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
