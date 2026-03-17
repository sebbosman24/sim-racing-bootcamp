import { QuizQuestion } from "./types";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "discovery",
    question: "How did you discover Formula 1?",
    options: [
      { label: "Drive to Survive on Netflix", sublabel: "The documentary that started it all", tag: "dtv_convert" },
      { label: "Always been a fan", sublabel: "Grew up watching, in my blood", tag: "veteran" },
      { label: "Friends or family got me into it", sublabel: "Someone made me watch one race...", tag: "social" },
      { label: "I play the F1 video games", sublabel: "Came for the game, stayed for the sport", tag: "gamer_first" },
    ],
  },
  {
    id: "draws",
    question: "What draws you to F1?",
    options: [
      { label: "The strategy", sublabel: "It's chess at 200mph", tag: "strategy" },
      { label: "The raw speed and engineering", sublabel: "Nothing on earth goes faster", tag: "speed" },
      { label: "The rivalries and human drama", sublabel: "The sport is really about people", tag: "drama" },
      { label: "The circuits", sublabel: "Cathedrals of motorsport", tag: "circuits" },
    ],
  },
  {
    id: "driverStyle",
    question: "Which F1 driver's style speaks to you?",
    options: [
      { label: "Max Verstappen", sublabel: "Aggressive, fearless, always attacks", tag: "max" },
      { label: "Lewis Hamilton", sublabel: "Smooth, consistent, chess-like control", tag: "lewis" },
      { label: "Charles Leclerc", sublabel: "Pure speed, wheel-to-wheel fighter", tag: "charles" },
      { label: "Fernando Alonso", sublabel: "Tactical, technical, never gives up", tag: "alonso" },
      { label: "George Russell", sublabel: "Analytical, meticulous, engineer's driver", tag: "russell" },
    ],
  },
  {
    id: "experience",
    question: "Have you tried sim racing before?",
    options: [
      { label: "Never — completely new to this", sublabel: "Fresh start", tag: "zero" },
      { label: "F1 games on a controller", sublabel: "EA Sports F1 series", tag: "f1_controller" },
      { label: "Played with a wheel setup", sublabel: "Some sim experience", tag: "wheel_veteran" },
      { label: "I sim race regularly", sublabel: "Already part of the community", tag: "experienced" },
    ],
  },
  {
    id: "approach",
    question: "How would you describe your approach?",
    options: [
      { label: "Instinctive", sublabel: "Feel first, think later", tag: "instinctive" },
      { label: "Methodical", sublabel: "I want to understand everything", tag: "methodical" },
      { label: "Aggressive", sublabel: "I'd rather spin than not try", tag: "aggressive" },
      { label: "Patient", sublabel: "Consistent beats spectacular", tag: "patient" },
    ],
  },
  {
    id: "goal",
    question: "What's the goal?",
    options: [
      { label: "Master a circuit until it feels like home", sublabel: "Own every corner", tag: "circuit_collector" },
      { label: "Beat people online", sublabel: "Lap times are everything", tag: "competitive" },
      { label: "Understand racing like a real driver", sublabel: "The technique, the data, the craft", tag: "analyst" },
      { label: "Just feel what it's like", sublabel: "Pure experience", tag: "experience" },
    ],
  },
  {
    id: "circuit",
    question: "Which circuit would you start on?",
    options: [
      { label: "Silverstone", sublabel: "Home of speed", tag: "silverstone" },
      { label: "Monaco", sublabel: "The jewel", tag: "monaco" },
      { label: "Spa-Francorchamps", sublabel: "The legend", tag: "spa" },
      { label: "Monza", sublabel: "Temple of speed", tag: "monza" },
      { label: "Suzuka", sublabel: "The figure of eight", tag: "suzuka" },
      { label: "Interlagos", sublabel: "Chaos and passion", tag: "interlagos" },
      { label: "Singapore", sublabel: "Night race under the lights", tag: "singapore" },
      { label: "Bahrain", sublabel: "Where the season begins", tag: "bahrain" },
    ],
  },
];

export const TOTAL_STEPS = QUIZ_QUESTIONS.length;
