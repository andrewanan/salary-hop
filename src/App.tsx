import ScenarioList from './components/scenariolist.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <header className="bg-emerald-600 text-white shadow py-4">
        <h1 className="text-center font-bold text-2xl">
          Take-Home Hop
        </h1>
        <p className="text-center text-xs opacity-80">
          Informational only — not tax advice
        </p>
      </header>

      <main className="flex-1 p-6">
        <ScenarioList />
      </main>

      <footer className="py-4 text-center text-xs text-slate-500">
        © 2025 Take-Home Hop
      </footer>
    </div>
  );
}
