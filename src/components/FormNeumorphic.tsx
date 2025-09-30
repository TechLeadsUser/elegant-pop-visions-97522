import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormNeumorphicProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormNeumorphic = ({ open, onOpenChange }: FormNeumorphicProps) => {
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
      <DialogContent className="bg-[#1a1f35] border-0 max-w-md p-10" style={{ boxShadow: '20px 20px 60px #0d1018, -20px -20px 60px #272e52' }}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Connect With Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-5">
            <div>
              <Label htmlFor="neu-name" className="text-foreground font-semibold mb-2 block">Name</Label>
              <Input
                id="neu-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#1a1f35] border-0 focus-visible:ring-0"
                style={{ boxShadow: 'inset 5px 5px 10px #0d1018, inset -5px -5px 10px #272e52' }}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="neu-email" className="text-foreground font-semibold mb-2 block">Email</Label>
              <Input
                id="neu-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#1a1f35] border-0 focus-visible:ring-0"
                style={{ boxShadow: 'inset 5px 5px 10px #0d1018, inset -5px -5px 10px #272e52' }}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="neu-phone" className="text-foreground font-semibold mb-2 block">Phone</Label>
              <Input
                id="neu-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#1a1f35] border-0 focus-visible:ring-0"
                style={{ boxShadow: 'inset 5px 5px 10px #0d1018, inset -5px -5px 10px #272e52' }}
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            <div>
              <Label className="text-foreground font-semibold mb-3 block">Your Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="space-y-3"
              >
                {['student', 'professional', 'expert'].map((role) => (
                  <div key={role} className="relative">
                    <RadioGroupItem value={role} id={`neu-${role}`} className="peer sr-only" />
                    <Label
                      htmlFor={`neu-${role}`}
                      className="flex items-center justify-center p-4 bg-[#1a1f35] cursor-pointer rounded-lg peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-primary peer-data-[state=checked]:to-secondary transition-all font-semibold"
                      style={{ 
                        boxShadow: '5px 5px 10px #0d1018, -5px -5px 10px #272e52'
                      }}
                    >
                      {role === 'student' ? 'Student' : role === 'professional' ? 'IT Professional' : 'Domain Expert'}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="neu-message" className="text-foreground font-semibold mb-2 block">Message</Label>
              <Textarea
                id="neu-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#1a1f35] border-0 focus-visible:ring-0 min-h-[100px]"
                style={{ boxShadow: 'inset 5px 5px 10px #0d1018, inset -5px -5px 10px #272e52' }}
                placeholder="Tell us more..."
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-6 rounded-lg"
            style={{ boxShadow: '5px 5px 10px #0d1018, -5px -5px 10px #272e52' }}
          >
            Submit Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
