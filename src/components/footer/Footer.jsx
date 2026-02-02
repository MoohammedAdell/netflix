import Langs from "../Langs";

function Footer() {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Center", "Terms of Use", "Contact Us"],
  ];

  return (
    <footer className="bg-black text-gray-400 px-6 lg:px-36 py-16">
      {/* Contact */}
      <p className="mb-8">
        Questions?{" "}
        <a href="#" className="underline">
          Contact us.
        </a>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
        {footerLinks.map((column, index) => (
          <ul key={index} className="space-y-3">
            {column.map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:underline text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Language */}
      <div className="mt-8 relative inline-block">
        <Langs />
      </div>

      {/* Country */}
      <p className="mt-6 text-sm">Netflix Egypt</p>
    </footer>
  );
}

export default Footer;
