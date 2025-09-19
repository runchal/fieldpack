import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../content/site-content';

export function Navigation() {
  const location = useLocation();
  const { navigation } = siteContent;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-medium hover:text-muted-foreground transition-colors">
            {navigation.brand}
          </Link>
          <div className="flex items-center space-x-8">
            {navigation.links.map((link) => (
              <div key={link.label}>
                {link.href.startsWith('#') ? (
                  location.pathname === '/' ? (
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={`/${link.href}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  )
                ) : (
                  <Link 
                    to={link.href} 
                    className={`transition-colors ${
                      location.pathname === link.href 
                        ? 'text-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}