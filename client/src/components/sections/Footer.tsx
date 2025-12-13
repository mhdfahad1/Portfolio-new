export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Dev Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
           <a href="#" className="hover:text-primary transition-colors">Twitter</a>
           <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
