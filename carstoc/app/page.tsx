export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Carstoc</h1>
            <nav className="flex gap-4">
              <a href="/catalog" className="text-gray-700 hover:text-blue-600">Каталог</a>
              <a href="/favorites" className="text-gray-700 hover:text-blue-600">Избранное</a>
              <a href="/profile" className="text-gray-700 hover:text-blue-600">Профиль</a>
            </nav>
          </div>
        </header>
        <section className="container mx-auto p-8">
          <h2 className="text-2xl font-semibold mb-4">Главная страница</h2>
          <p>Здесь будет контент...</p>
        </section>
      </main>
  );
}
