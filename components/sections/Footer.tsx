export default function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-serif font-bold text-white">MAMMA MIA</p>
          </div>
          <div className="flex items-center font-serif -mx-2 text-white">
            Discord: dominik.rsmn
          </div>
        </div>
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm font-serif font-bold text-white mb-2">
              © {new Date().getFullYear()} by MAMMA MIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
