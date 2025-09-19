import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { siteContent } from '../content/site-content';

export function ContactSectionMinimal() {
  const { contact } = siteContent;
  
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-8">{contact.title}</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {contact.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <div>
                <div className="font-medium mb-1">Email</div>
                <div className="text-muted-foreground">{contact.email}</div>
              </div>
              {contact.locations.map((location, index) => (
                <div key={index}>
                  <div className="font-medium mb-1">{index === 0 ? 'Headquarters' : 'DC Operations'}</div>
                  <div className="text-muted-foreground">{location}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">{contact.form.nameLabel}</label>
                  <Input placeholder={contact.form.namePlaceholder} />
                </div>
                <div>
                  <label className="block mb-2">{contact.form.organizationLabel}</label>
                  <Input placeholder={contact.form.organizationPlaceholder} />
                </div>
              </div>
              <div>
                <label className="block mb-2">{contact.form.emailLabel}</label>
                <Input type="email" placeholder={contact.form.emailPlaceholder} />
              </div>
              <div>
                <label className="block mb-2">{contact.form.messageLabel}</label>
                <Textarea 
                  placeholder={contact.form.messagePlaceholder}
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button size="lg" className="w-full">
                {contact.form.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}