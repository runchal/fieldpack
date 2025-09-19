import { websiteContent } from '../../../content/sections/website-content';

export function FooterMinimal() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="font-medium mb-2">{websiteContent.company.name}</div>
            <div className="text-sm text-muted-foreground">
              {websiteContent.company.tagline}
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Los Angeles</span>
              <span>•</span>
              <span>Fleet Software</span>
              <span>•</span>
              <span>Mobile Power</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {websiteContent.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}