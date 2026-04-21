export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Keerthivasan R V</h1>
      <div className="space-x-4">
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
