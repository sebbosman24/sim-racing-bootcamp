// Quiz answer tags
export type DiscoveryTag = "dtv_convert" | "veteran" | "social" | "gamer_first";
export type DrawsTag = "strategy" | "speed" | "drama" | "circuits";
export type ExperienceTag = "zero" | "f1_controller" | "wheel_veteran" | "experienced";
export type ApproachTag = "instinctive" | "methodical" | "aggressive" | "patient";
export type GoalTag = "circuit_collector" | "competitive" | "analyst" | "experience";
export type DriverStyleTag = "max" | "lewis" | "charles" | "alonso" | "russell";
export type CircuitTag = "silverstone" | "monaco" | "spa" | "monza" | "suzuka" | "interlagos" | "singapore" | "bahrain";

export interface QuizAnswers {
  discovery: DiscoveryTag;
  draws: DrawsTag;
  driverStyle: DriverStyleTag;
  experience: ExperienceTag;
  approach: ApproachTag;
  goal: GoalTag;
  circuit: CircuitTag;
}

// Generated result structure (matches Claude JSON output)
export interface DriverDNA {
  archetype_name: string;
  archetype_tagline: string;
  prediction: string;
  traits: [string, string, string, string];
}

export interface GeneratedResult {
  driver_dna: DriverDNA;
  track_titan_hook: string;
}

// Quiz UI types
export interface QuizOption {
  label: string;
  sublabel?: string;
  tag: string;
}

export interface QuizQuestion {
  id: keyof QuizAnswers;
  question: string;
  options: QuizOption[];
}

// Quiz state machine
export interface QuizState {
  currentStep: number;
  answers: Partial<QuizAnswers>;
  totalSteps: number;
}

export type QuizAction =
  | { type: "ANSWER"; questionId: keyof QuizAnswers; tag: string }
  | { type: "BACK" };

// Share card data (subset encoded in URL)
export interface ShareCardData {
  archetype_name: string;
  archetype_tagline: string;
  prediction: string;
  traits: [string, string, string, string];
}
