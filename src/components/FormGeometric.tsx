import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormGeometricProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormGeometric = ({ open, onOpenChange }: FormGeometricProps) => {
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
      <DialogContent className="bg-card border-0 max-w-md p-0 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}>
        <div className="relative">
          {/* Geometric Background Shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 transform rotate-45" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-2 border-accent/10 rounded-full" />
          
          <form onSubmit={handleSubmit} className="relative p-10 space-y-6">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                <h2 className="text-3xl font-bold text-foreground">TechLeadsIT</h2>
              </div>
              <p className="text-muted-foreground pl-15">Your gateway to innovation</p>
            </div>

            <div className="space-y-5">
              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-primary before:to-transparent">
                <Label htmlFor="geo-name" className="text-foreground font-semibold mb-2 block">Name</Label>
                <Input
                  id="geo-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/30 border-l-4 border-l-primary border-y-0 border-r-0 rounded-none"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-secondary before:to-transparent">
                <Label htmlFor="geo-email" className="text-foreground font-semibold mb-2 block">Email</Label>
                <Input
                  id="geo-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/30 border-l-4 border-l-secondary border-y-0 border-r-0 rounded-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-accent before:to-transparent">
                <Label htmlFor="geo-phone" className="text-foreground font-semibold mb-2 block">Phone</Label>
                <Input
                  id="geo-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted/30 border-l-4 border-l-accent border-y-0 border-r-0 rounded-none"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div>
                <Label className="text-foreground font-semibold mb-3 block">Your Role</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                  className="space-y-2"
                >
                  {[
                    { value: 'student', label: 'Student', color: 'primary' },
                    { value: 'professional', label: 'IT Professional', color: 'secondary' },
                    { value: 'expert', label: 'Domain Expert', color: 'accent' }
                  ].map((role) => (
                    <div key={role.value} className="relative">
                      <RadioGroupItem value={role.value} id={`geo-${role.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`geo-${role.value}`}
                        className="flex items-center gap-3 p-3 bg-muted/20 border-l-4 border-l-transparent cursor-pointer hover:bg-muted/40 peer-data-[state=checked]:border-l-primary peer-data-[state=checked]:bg-primary/10 transition-all"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
                      >
                        <div className="w-4 h-4 bg-primary/50" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                        <span className="font-semibold">{role.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-primary before:via-secondary before:to-accent">
                <Label htmlFor="geo-message" className="text-foreground font-semibold mb-2 block">Message</Label>
                <Textarea
                  id="geo-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/30 border-l-4 border-l-primary border-y-0 border-r-0 rounded-none min-h-[100px]"
                  placeholder="Your message..."
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold py-6"
              style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
            >
              Submit Application
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
