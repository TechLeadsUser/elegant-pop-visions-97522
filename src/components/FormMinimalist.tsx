import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormMinimalistProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormMinimalist = ({ open, onOpenChange }: FormMinimalistProps) => {
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
      <DialogContent className="bg-card border-l-4 border-primary max-w-md p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-4xl font-light text-foreground mb-2">Hello.</h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-muted-foreground font-light">Let's connect and make things happen</p>
          </div>

          <div className="space-y-6">
            <div className="group">
              <Label htmlFor="min-name" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Name</Label>
              <Input
                id="min-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 border-0 border-b-2 border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent"
                placeholder="Your name"
                required
              />
            </div>

            <div className="group">
              <Label htmlFor="min-email" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</Label>
              <Input
                id="min-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 border-0 border-b-2 border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="group">
              <Label htmlFor="min-phone" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Phone</Label>
              <Input
                id="min-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 border-0 border-b-2 border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent"
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            <div>
              <Label className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4 block">Role</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="min-student" />
                  <Label htmlFor="min-student" className="cursor-pointer font-light">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="min-professional" />
                  <Label htmlFor="min-professional" className="cursor-pointer font-light">IT Pro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert" id="min-expert" />
                  <Label htmlFor="min-expert" className="cursor-pointer font-light">Expert</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="group">
              <Label htmlFor="min-message" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Message</Label>
              <Textarea
                id="min-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 border-0 border-b-2 border-muted rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors min-h-[80px] bg-transparent resize-none"
                placeholder="Your thoughts..."
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 font-light tracking-widest uppercase text-sm py-6">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
