function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="font-mono">
          © {new Date().getFullYear()} Devansh Tyagi
        </div>
        <div className="font-mono">
          Designed & built with care · New Delhi, India
        </div>
      </div>
    </footer>
  );
}

export default Footer;
