function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#040410] py-12 border-t border-gray-200 dark:border-white/[5%] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              SM.
            </a>
            <p className="mt-2 text-gray-600 dark:text-[#9AA0BE]">
              © {new Date().getFullYear()} Shreya Maurya. All Rights Reserved
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="nav-link text-gray-700 dark:text-gray-200">
              Home
            </a>
            <a href="#about" className="nav-link text-gray-700 dark:text-gray-200">
              About
            </a>
            <a href="#projects" className="nav-link text-gray-700 dark:text-gray-200">
              Projects
            </a>
            <a href="#experience" className="nav-link text-gray-700 dark:text-gray-200">
              Experience
            </a>
            <a href="#skills" className="nav-link text-gray-700 dark:text-gray-200">
              Skills
            </a>
            <a href="#contact" className="nav-link text-gray-700 dark:text-gray-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer