export function FooterMinimal() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="font-medium mb-2">Nexus Systems</div>
            <div className="text-sm text-muted-foreground">
              Autonomous defense systems • ITAR controlled technology
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>ISO 27001</span>
              <span>•</span>
              <span>CMMC Level 3</span>
              <span>•</span>
              <span>FedRAMP</span>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2025 Nexus Systems Inc. • Technology subject to U.S. export controls.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}