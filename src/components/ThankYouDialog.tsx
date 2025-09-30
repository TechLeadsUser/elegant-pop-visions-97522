import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThankYouDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ThankYouDialog = ({ open, onOpenChange }: ThankYouDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] glass-effect border-primary/30 glow-primary">
        <DialogHeader className="text-center space-y-6">
          <div className="mx-auto">
            <CheckCircle2 className="w-20 h-20 text-primary animate-scale-in glow-primary" strokeWidth={1.5} />
          </div>
          
          <DialogTitle className="text-3xl font-bold gradient-text animate-fade-in">
            Thank You for Reaching Out!
          </DialogTitle>
          
          <DialogDescription className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            We've received your message and will get back to you shortly. 
            Explore our blog or connect on LinkedIn while you wait.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 animate-fade-in">
          <Button 
            variant="default" 
            className="flex-1 glow-primary hover:scale-105 transition-transform"
            onClick={() => window.open('https://techleadsit.com/blog', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Blog
          </Button>
          
          <Button 
            variant="secondary" 
            className="flex-1 glow-purple hover:scale-105 transition-transform"
            onClick={() => window.open('https://linkedin.com/company/techleadsit', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
