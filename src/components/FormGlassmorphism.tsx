import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormGlassmorphismProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormGlassmorphism = ({ open, onOpenChange }: FormGlassmorphismProps) => {
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
      <DialogContent className="glass-effect border-2 border-primary/30 max-w-md p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-2">Join TechLeadsIT</h2>
            <p className="text-muted-foreground">Start your tech journey with us</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-effect border-primary/20 mt-1.5"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-effect border-primary/20 mt-1.5"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass-effect border-primary/20 mt-1.5"
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            <div>
              <Label className="text-foreground font-medium mb-3 block">I am a</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student" className="cursor-pointer">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional" className="cursor-pointer">IT Professional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert" id="expert" />
                  <Label htmlFor="expert" className="cursor-pointer">Domain Expert</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-effect border-primary/20 mt-1.5 min-h-[100px]"
                placeholder="Tell us about your interests..."
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold py-6 glow-primary">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
