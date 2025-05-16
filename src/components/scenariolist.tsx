import { useEffect, useState } from 'react';
import type { SalaryScenario } from '../types/salaryScenarios.ts';
import { loadScenarios } from '../lib/storage';

export default function ScenarioList() {
  const [scenarios, setScenarios] = useState<SalaryScenario[]>([]);

  useEffect(() => setScenarios(loadScenarios()), []);

  if (!scenarios.length) {
    return (
      <p className="text-center text-lg text-slate-600">
        No scenarios yet — start by creating one!
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {scenarios.map((s) => (
        <li
          key={s.id}
          className="bg-white shadow rounded-lg p-4 flex flex-col gap-1"
        >
          <span className="font-semibold">{s.scenarioName}</span>
          <span className="text-sm text-slate-600">
            {s.startYear} • {s.residentState} resident, works in {s.workState}
          </span>
        </li>
      ))}
    </ul>
  );
}
