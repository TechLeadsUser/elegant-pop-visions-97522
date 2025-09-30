import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormGradientMeshProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormGradientMesh = ({ open, onOpenChange }: FormGradientMeshProps) => {
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
      <DialogContent className="bg-card/80 backdrop-blur-2xl border border-primary/20 max-w-lg p-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(at 0% 0%, hsl(199, 89%, 48%) 0px, transparent 50%),
              radial-gradient(at 100% 0%, hsl(263, 70%, 60%) 0px, transparent 50%),
              radial-gradient(at 100% 100%, hsl(280, 100%, 70%) 0px, transparent 50%),
              radial-gradient(at 0% 100%, hsl(199, 89%, 48%) 0px, transparent 50%)
            `
          }}
        />
        
        <form onSubmit={handleSubmit} className="relative p-10 space-y-6">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="text-5xl font-black gradient-text">TechLeads</div>
            </div>
            <p className="text-foreground/80 text-lg">Shape the future with us</p>
          </div>

          <div className="space-y-5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative">
                <Label htmlFor="mesh-name" className="text-foreground font-semibold mb-2 block">Name</Label>
                <Input
                  id="mesh-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/90 border-primary/20"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative">
                <Label htmlFor="mesh-email" className="text-foreground font-semibold mb-2 block">Email</Label>
                <Input
                  id="mesh-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/90 border-primary/20"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative">
                <Label htmlFor="mesh-phone" className="text-foreground font-semibold mb-2 block">Phone</Label>
                <Input
                  id="mesh-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card/90 border-primary/20"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-foreground font-semibold mb-3 block">Your Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="grid grid-cols-3 gap-3"
              >
                {['student', 'professional', 'expert'].map((role, idx) => (
                  <div key={role} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
                    <RadioGroupItem value={role} id={`mesh-${role}`} className="peer sr-only" />
                    <Label
                      htmlFor={`mesh-${role}`}
                      className="relative flex items-center justify-center p-3 bg-card/90 border border-primary/20 cursor-pointer rounded-lg hover:bg-card peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-primary peer-data-[state=checked]:to-secondary transition-all font-semibold text-sm"
                    >
                      {role === 'student' ? 'Student' : role === 'professional' ? 'IT Pro' : 'Expert'}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative">
                <Label htmlFor="mesh-message" className="text-foreground font-semibold mb-2 block">Message</Label>
                <Textarea
                  id="mesh-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/90 border-primary/20 min-h-[100px]"
                  placeholder="Share your thoughts..."
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <Button type="submit" className="relative w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-6 text-lg">
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
