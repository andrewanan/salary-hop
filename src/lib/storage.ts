import type { SalaryScenario } from '../types/salaryScenarios.ts';

const KEY = 'thh_scenarios_v1';

export function loadScenarios(): SalaryScenario[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveScenarios(data: SalaryScenario[]) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
