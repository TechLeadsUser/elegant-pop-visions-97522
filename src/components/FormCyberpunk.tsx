import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormCyberpunkProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const FormCyberpunk = ({ open, onOpenChange }: FormCyberpunkProps) => {
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
      <DialogContent className="bg-[#0a0e27] border-2 border-primary/50 max-w-md p-0 overflow-hidden shadow-[0_0_50px_rgba(0,168,255,0.3)]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,168,255,.05)_25%,rgba(0,168,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,168,255,.05)_75%,rgba(0,168,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>
        
        <form onSubmit={handleSubmit} className="relative p-8 space-y-5">
          <div className="text-center mb-6">
            <div className="inline-block mb-4 relative">
              <h2 className="text-3xl font-black text-primary tracking-wider" style={{ textShadow: '0 0 20px rgba(0,168,255,0.5)' }}>
                TECHLEADS.IT
              </h2>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <p className="text-xs text-accent uppercase tracking-[0.3em] font-bold">Access Terminal</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="cyber-name" className="text-xs text-primary uppercase tracking-wider font-bold mb-2 block">{'> '}Name</Label>
              <Input
                id="cyber-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black/50 border-primary/30 focus:border-primary text-foreground font-mono placeholder:text-muted-foreground/50"
                placeholder="Enter_Name..."
                required
              />
            </div>

            <div className="relative">
              <Label htmlFor="cyber-email" className="text-xs text-primary uppercase tracking-wider font-bold mb-2 block">{'> '}Email</Label>
              <Input
                id="cyber-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black/50 border-primary/30 focus:border-primary text-foreground font-mono placeholder:text-muted-foreground/50"
                placeholder="Enter_Email..."
                required
              />
            </div>

            <div className="relative">
              <Label htmlFor="cyber-phone" className="text-xs text-primary uppercase tracking-wider font-bold mb-2 block">{'> '}Phone</Label>
              <Input
                id="cyber-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-black/50 border-primary/30 focus:border-primary text-foreground font-mono placeholder:text-muted-foreground/50"
                placeholder="Enter_Phone..."
                required
              />
            </div>

            <div>
              <Label className="text-xs text-primary uppercase tracking-wider font-bold mb-3 block">{'> '}Access_Level</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="space-y-2"
              >
                {['student', 'professional', 'expert'].map((role) => (
                  <div key={role} className="relative">
                    <RadioGroupItem value={role} id={`cyber-${role}`} className="peer sr-only" />
                    <Label
                      htmlFor={`cyber-${role}`}
                      className="flex items-center gap-3 p-3 bg-black/30 border border-primary/30 cursor-pointer hover:bg-black/50 hover:border-primary/50 peer-data-[state=checked]:bg-primary/20 peer-data-[state=checked]:border-primary transition-all"
                    >
                      <span className="text-primary font-mono text-xs">[ ]</span>
                      <span className="text-foreground uppercase text-xs tracking-wider font-semibold">
                        {role === 'student' ? 'Student' : role === 'professional' ? 'IT_Professional' : 'Domain_Expert'}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="relative">
              <Label htmlFor="cyber-message" className="text-xs text-primary uppercase tracking-wider font-bold mb-2 block">{'> '}Message</Label>
              <Textarea
                id="cyber-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/50 border-primary/30 focus:border-primary text-foreground font-mono min-h-[80px] placeholder:text-muted-foreground/50"
                placeholder="Enter_Message..."
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 uppercase tracking-[0.2em] text-sm relative overflow-hidden group"
            style={{ boxShadow: '0 0 20px rgba(0,168,255,0.4)' }}
          >
            <span className="relative z-10">Initialize_Connection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
