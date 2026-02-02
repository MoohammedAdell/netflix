import logo from "../imgs/Netflix-nav.png";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)),
            url(${logo})
          `,
        }}
      />

      <div className="relative z-10">
        <header className="px-10 py-2">
          <img src={logo} alt="Netflix" className="w-40" />
        </header>

        <div className="flex justify-center mt-5 px-4">
          <div className="w-full max-w-md p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
