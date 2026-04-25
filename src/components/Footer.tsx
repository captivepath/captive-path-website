export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-graphite-500">
          Captive Path is an independent venture platform led by Zach Warshawsky.
        </p>
        <p className="text-sm text-graphite-400">
          &copy; {year} Captive Path. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
