import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        <div className="flex items-center gap-4">
          <SocialIcon href="#" name="Spotify">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zm1.268-2.847c-.226.368-.71.482-1.08.254-2.684-1.648-6.78-2.124-9.965-1.16-.41.125-.845-.106-.97-.517-.125-.41.106-.844.516-.97 3.65-1.106 8.19-.576 11.246 1.306.37.226.48.71.253 1.087zm.106-2.98c-3.21-1.905-8.5-2.08-11.56-1.15-.494.15-1.01-.13-1.16-.624-.15-.495.13-1.01.624-1.16 3.55-.985 9.4-.785 13.13 1.43.44.26.58.84.32 1.28-.26.44-.84.58-1.28.32z" />
          </SocialIcon>
          <SocialIcon href="#" name="Facebook">
            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14-2.893 0-4.893 1.766-4.893 5.09V9.5H7.5v4h2.25v9.5h4.25v-9.5z" />
          </SocialIcon>
          <SocialIcon href="#" name="Pinterest">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.35 9.31-.09-.79-.17-2.01.04-2.88.19-.8.19-.8 1.25-4.75 0 0-.32-.64-.32-1.58 0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.5 0 .92-.58 2.29-.89 3.56-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.35-2 3.35-4.89 0-2.56-1.84-4.35-4.5-4.35-3.08 0-4.89 2.31-4.89 4.69 0 .92.35 1.91.79 2.45.09.11.1.2.07.31-.09.38-.3 1.24-.34 1.42-.05.23-.18.28-.42.17-1.55-.72-2.52-3-2.52-4.83 0-3.93 2.86-7.55 8.24-7.55 4.32 0 7.68 3.08 7.68 7.19 0 4.3-2.7 7.76-6.46 7.76-1.26 0-2.45-.66-2.85-1.43l-.78 2.97c-.28 1.08-1.04 2.42-1.55 3.24A9.975 9.975 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </SocialIcon>
          <SocialIcon href="#" name="Instagram">
            <path fillRule="evenodd" d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM12 15a3 3 0 110-6 3 3 0 010 6zm4.8-8.25a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM11.998 2.21c-3.195 0-3.593.013-4.846.07-1.164.053-1.956.24-2.651.51-.722.28-1.334.653-1.944 1.264-.61.61-.983 1.222-1.263 1.943-.27.695-.457 1.488-.51 2.651-.057 1.253-.07 1.651-.07 4.846s.013 3.593.07 4.846c.053 1.164.24 1.956.51 2.651.28.722.653 1.334 1.263 1.944.61.61 1.222.983 1.944 1.263.695.27 1.488.457 2.651.51 1.253.057 1.651.07 4.846.07s3.593-.013 4.846-.07c1.164-.053 1.956-.24 2.651-.51.722-.28 1.334-.653 1.944-1.263.61-.61.983-1.222 1.263-1.944.27-.695.457-1.488.51-2.651.057-1.253.07-1.651.07-4.846s-.013-3.593-.07-4.846c-.053-1.164-.24-1.956-.51-2.651-.28-.722-.653-1.334-1.263-1.944-.61-.61-1.222-.983-1.944-1.263-.695-.27-1.488-.457-2.651-.51-1.253-.057-1.651-.07-4.846-.07zm-4.935 1.516c1.222-.056 1.583-.067 4.935-.067 3.353 0 3.714.01 4.935.067 1.127.051 1.74.238 2.148.397.538.209.923.46 1.325.862.401.402.652.787.862 1.325.158.408.346 1.021.397 2.148.056 1.221.067 1.582.067 4.934 0 3.353-.01 3.714-.067 4.935-.051 1.127-.238 1.74-.397 2.148-.209.538-.46.923-.862 1.325-.402.401-.787.652-1.325.862-.408.158-1.021.346-2.148.397-1.221.056-1.582.067-4.935.067-3.352 0-3.713-.01-4.935-.067-1.127-.051-1.74-.238-2.148-.397-.538-.209-.923-.46-1.325-.862-.401-.402-.652-.787-.862-1.325-.158-.408-.346-1.021-.397-2.148-.056-1.221-.067-1.582-.067-4.935 0-3.352.01-3.713.067-4.935.051-1.127.238-1.74.397-2.148.209-.538.46-.923.862-1.325.402-.401.787-.652 1.325-.862.408-.158 1.021-.346 2.148-.397z" clipRule="evenodd" />
          </SocialIcon>
          <SocialIcon href="#" name="YouTube">
            <path d="M21.58 6.58A2.69 2.69 0 0019.68 4.7C18 4.25 12 4.25 12 4.25s-6 0-7.68.45A2.69 2.69 0 002.42 6.58C1.96 8.27 1.96 12 1.96 12s0 3.73.46 5.42a2.69 2.69 0 001.9 1.88C6 19.75 12 19.75 12 19.75s6 0 7.68-.45a2.69 2.69 0 001.9-1.88c.46-1.69.46-5.42.46-5.42s0-3.73-.46-5.42zM9.98 15.34V8.66L15.75 12l-5.77 3.34z" />
          </SocialIcon>
          <SocialIcon href="#" name="X">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </SocialIcon>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          
          <div className="flex flex-col gap-4">
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Privacy Notice</a>
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Consumer Health Privacy Notice</a>
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Terms of Use</a>
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Do Not Sell or Share My Personal Information</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Starbucks Transparency in Supply Chains Statement</a>
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Accessibility</a>
            <a href="#" className="text-[#1e3932] hover:underline font-medium">Cookie Preferences</a>
          </div>
          
        </div>

        <div className="pt-5">
          <p className="text-gray-500 text-sm">
            © 2026 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

// Komponen kecil pembantu (helper component) agar penulisan Ikon Sosial Media lebih rapi
function SocialIcon({ href, children, name }: { href: string; children: React.ReactNode; name: string }) {
  return (
    <a 
      href={href} 
      aria-label={name}
      className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5"
      >
        {children}
      </svg>
    </a>
  );
}