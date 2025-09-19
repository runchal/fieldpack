import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSectionMinimal() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-8">Get in touch</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We're looking for strategic partners, government customers, and 
                exceptional talent with security clearances.
              </p>
              <p>
                All inquiries are reviewed within 24 hours. For technical discussions, 
                NDAs and ITAR compliance are required.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div>
                <div className="font-medium mb-1">Email</div>
                <div className="text-muted-foreground">partnerships@nexus-systems.com</div>
              </div>
              <div>
                <div className="font-medium mb-1">Headquarters</div>
                <div className="text-muted-foreground">Palo Alto, CA • SCIF-enabled facility</div>
              </div>
              <div>
                <div className="font-medium mb-1">DC Operations</div>
                <div className="text-muted-foreground">Arlington, VA • Pentagon liaison office</div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block mb-2">Organization</label>
                  <Input placeholder="Company/Agency" />
                </div>
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input type="email" placeholder="your.email@company.com" />
              </div>
              <div>
                <label className="block mb-2">Clearance level</label>
                <Input placeholder="Secret, Top Secret, TS/SCI, etc." />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea 
                  placeholder="Describe your operational requirements or partnership interest..."
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button size="lg" className="w-full">
                Send secure message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}