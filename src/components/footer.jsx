import { footerItems } from "../../public/files";

export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to-yellow-100 px-2 pt-2">
        <div className="p-3 rounded-tl-lg rounded-tr-lg bg-[#191519] text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {footerItems.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <hr className=" text-neutral-800"/>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
