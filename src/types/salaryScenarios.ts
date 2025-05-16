export interface JobHop {
  /** 0 = first year, 1 = second … (max 9) */
  yearIndex: number;
  /** e.g. 0.12 = +12 % raise */
  raisePct: number;
}

export interface DeductionToggles {
  pretax401k: boolean;
  pretaxHSA:  boolean;
  pretaxFSA:  boolean;
  afterTaxPremiums: boolean;
}

export interface SalaryScenario {
  id:            string;   // uuid v4
  scenarioName:  string;
  startYear:     number;   // e.g. 2025
  filingStatus:  'single' | 'mfj' | 'mfs' | 'hoh' | 'qw';
  residentState: string;   // e.g. 'NJ'
  workState:     string;   // e.g. 'NY'
  annualSalary:  number;   // starting gross $
  defaultRaise:  number;   // 0.03 = 3 %
  jobHops:       JobHop[]; // max 5
  deductions:    DeductionToggles;
  createdAt:     string;   // ISO timestamp
}
