


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="textDark py-12 pt-0 relative">
      <div className="decorative-divider"></div>
      <div className="container mx-auto px-4">
        <div className="pt-6 text-center text-sm textDark">
          <p>© {currentYear} Rajon Dey. All rights reserved.</p>
          <p className="mt-1">
            Made with ❤️ by <span className="text-accent">Rajon Dey</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
