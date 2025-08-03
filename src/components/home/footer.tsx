function Footer() {
  return (
    <footer className=" sm:footer-horizontal px-4 md:px-40 lg:px-40 2xl:px-[30rem] bg-accent py-16 flex flex-col items-center justify-center space-y-8 text-center lg:flex-row lg:justify-between lg:items-start">
      <nav>
        <div className="">
            <img
                src="/logos/logo-white-text.png"
                alt="ZiwaPay Logo"
                className="h-10 w-auto mb-4"
            />
        </div>
        
      </nav>
      <nav className="flex space-x-3 text-primary">
        
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Terms</a>
        <a className="link link-hover">Contact</a>
       
      </nav>
      <nav>
        <p className="text-primary">© 2025 ZiwaPay. All rights reserved.</p>
      </nav>
    </footer>
  );
}

export default Footer;
