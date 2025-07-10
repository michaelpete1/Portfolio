import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white py-8 mt-16 shadow-inner animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-semibold">&copy; {new Date().getFullYear()} OnyekwereC. All rights reserved.</p>
          <p className="text-xs md:text-sm text-teal-300 mt-1">Keep shining and building your dreams!</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/michaelpete1" target="_blank" className="hover:text-teal-400 transition-colors" aria-label="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </Link>
          <Link href="https://www.linkedin.com/in/chidiebere-onyekwere-3743b222b" target="_blank" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </Link>
          <Link href="mailto:michaelpet40@gmail.com" className="hover:text-pink-400 transition-colors" aria-label="Email">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z"/></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
} 