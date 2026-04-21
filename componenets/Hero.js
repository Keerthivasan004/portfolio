export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-6" />
      <h1 className="text-5xl font-bold">Keerthivasan R V</h1>
      <p className="mt-4 text-xl">Cloud & DevOps Engineer | SRE Aspirant</p>
      <a href="https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/"
         className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
        Connect on LinkedIn
      </a>
    </section>
  );
}
