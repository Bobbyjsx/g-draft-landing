export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12 snap-start">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 font-bold text-sm">g</span>
            </div>
            <span className="font-bold text-zinc-100">g-draft</span>
          </div>

          <div className="flex gap-8 text-sm text-zinc-500">
            <a
              href="https://x.com/EzealaGodswill"
              className="hover:text-zinc-300 transition-colors"
            >
              X (formerly Twitter)
            </a>
            <a
              href="https://github.com/bobbyjsx/g-draft"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/g-draft"
              className="hover:text-zinc-300 transition-colors"
            >
              NPM
            </a>
          </div>

          <div className="text-sm text-zinc-600">
            © 2026 Godswill Ezeala. MIT Licensed.
          </div>
        </div>
      </div>
    </footer>
  );
};
