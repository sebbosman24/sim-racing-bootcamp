import { QuizAnswers } from "./types";

const DISCOVERY_CONTEXT: Record<string, string> = {
  dtv_convert: "Came through Drive to Survive — storytelling and driver personalities matter to them; they connect with racing through human drama, not lap times",
  veteran: "Long-time fan with deep F1 knowledge — knows the history, the circuits, the team politics; expects to be treated as knowledgeable",
  social: "Introduced by friends or family — motivated by shared experience and belonging to a community",
  gamer_first: "Already plays F1 video games — has some racing intuition and understands the circuits; naturally competitive",
};

const DRAWS_CONTEXT: Record<string, string> = {
  strategy: "Drawn to F1 as a strategic chess match — will connect deeply with the idea that the fastest lap isn't always the fastest race; their archetype should reflect tactical intelligence",
  speed: "Drawn to the pure physics of F1 — the engineering, the G-forces, the sensation of speed; their archetype should reflect someone who wants to feel the limit",
  drama: "Drawn to F1 for the human stories — rivalries, pressure moments, character; their archetype should feel personal and emotionally resonant",
  circuits: "Drawn to the circuits themselves as places — the history, the character, the corners that define careers; their archetype should feel tied to place and legacy",
};

const EXPERIENCE_CONTEXT: Record<string, string> = {
  zero: "Completely new — no sim racing background at all; start from first principles",
  f1_controller: "Has F1 game experience on controller — knows the tracks and race format but has controller muscle memory to unlearn on a wheel",
  wheel_veteran: "Has used a wheel before — understands sim racing basics, ready to go deeper",
  experienced: "Already sim races regularly — this is about deepening and focusing their existing practice",
};

const APPROACH_CONTEXT: Record<string, string> = {
  instinctive: "Driven by feel and instinct — learns by doing rather than studying; archetype should celebrate natural talent and raw intuition",
  methodical: "Process-driven and analytical — wants to understand the why behind everything; archetype should celebrate systematic thinking and depth",
  aggressive: "Risk-taking and attack-minded — would rather push the limit and crash than be conservative; archetype should celebrate commitment and edge",
  patient: "Values consistency over spectacle — understands that smooth is fast; archetype should celebrate precision and long-game thinking",
};

const GOAL_CONTEXT: Record<string, string> = {
  circuit_collector: "Wants to master and own specific circuits — the idea of truly knowing every corner of a track drives them",
  competitive: "Motivated by competition and beating others — lap times and online results matter",
  analyst: "Wants to understand racing from the inside — the telemetry, the technique, how real drivers actually do it",
  experience: "Just wants to feel what it's like — the sensation and experience of driving on track matters more than results",
};

const DRIVER_CONTEXT: Record<string, string> = {
  max: "Instinctive risk-taker who attacks corners aggressively — archetype should emphasise controlled aggression and raw pace",
  lewis: "Values consistency and racecraft over raw speed — archetype should emphasise precision, intelligence, and smooth technique",
  charles: "Wants to feel the car at the limit — attracted to pure sensation and commitment; archetype should celebrate feeling and commitment",
  alonso: "Strategic thinker who wants to understand everything — archetype should emphasise tactical depth and technical mastery",
  russell: "Process-driven, wants to do things correctly — archetype should emphasise systematic improvement and engineering mindset",
};

const CIRCUIT_CONTEXT: Record<string, string> = {
  silverstone: "Chose Silverstone — high-speed flowing corners, classic British racing character; suggests someone drawn to technical rhythm and momentum",
  monaco: "Chose Monaco — the jewel, slowest circuit but highest prestige; suggests someone drawn to precision, history, and the symbolic over the purely fast",
  spa: "Chose Spa-Francorchamps — the legend, weather-changing and technically demanding; suggests someone drawn to the unpredictable and the challenge of mastery",
  monza: "Chose Monza — temple of speed, minimal downforce, flat-out bravery; suggests someone drawn to pure speed and the gladiatorial",
  suzuka: "Chose Suzuka — the figure of eight, technically the most complete circuit on the calendar; suggests someone who respects craft and wants to master complexity",
  interlagos: "Chose Interlagos — chaotic, passionate, anticlockwise and unpredictable; suggests someone drawn to the raw emotion and unpredictability of racing",
  singapore: "Chose Singapore — night race through city streets, all walls and barriers; suggests someone drawn to atmosphere, pressure, and the theatrical side of F1",
  bahrain: "Chose Bahrain — where the season begins, smooth and technical under the floodlights; suggests someone methodical who likes a clean starting point",
};

export const SYSTEM_PROMPT = `You are the Track Titan coach — an expert in sim racing, driver psychology, and F1 culture with the energy of a race engineer and the directness of a team principal.

Your job is to create a highly personalised Driver DNA profile for an F1 fan based on their answers to 7 identity questions.

Rules:
- Be specific. Make the archetype feel uncannily accurate — like it was written just for them.
- The archetype_name must be evocative and F1-coded (e.g. "The Monaco Specialist", "The Overcut Artist", "The Apex Hunter", "The Data Whisperer", "The Tifosi Racer").
- The tagline must make them feel seen — one punchy sentence that captures their specific personality.
- traits must be exactly 4 single words (e.g. "Precise", "Aggressive", "Strategic", "Composed") — no compound words, no hyphens, no phrases.
- The prediction should be bold, specific, and slightly audacious — not generic.
- The track_titan_hook connects their DNA to how Track Titan's telemetry coaching would accelerate their natural style. Make it feel personal and inevitable, not like an ad.
- Write like you're talking to an intelligent adult who loves F1, not a child.
- The track_titan_hook must feel like the natural next step after discovering their DNA — personalised to who they are.

You MUST respond with ONLY valid JSON — no markdown, no preamble, no explanation. Just the JSON object.

Required JSON structure:
{
  "driver_dna": {
    "archetype_name": "The [Title]",
    "archetype_tagline": "One punchy sentence that makes them feel seen",
    "prediction": "One bold sentence predicting their sim racing future — specific and slightly audacious",
    "traits": ["Word", "Word", "Word", "Word"]
  },
  "track_titan_hook": "One sentence connecting their specific Driver DNA to how Track Titan's telemetry will show them exactly where their natural style wins and where the tenths are hiding"
}`;

export function buildUserPrompt(answers: QuizAnswers): string {
  return `Build the Driver DNA for this F1 fan. They answered 7 identity questions — use every signal.

HOW THEY FOUND F1: ${answers.discovery}
Context: ${DISCOVERY_CONTEXT[answers.discovery]}

WHAT DRAWS THEM TO F1: ${answers.draws}
Context: ${DRAWS_CONTEXT[answers.draws]}

DRIVER INSPIRATION: ${answers.driverStyle}
Context: ${DRIVER_CONTEXT[answers.driverStyle]}

SIM RACING EXPERIENCE: ${answers.experience}
Context: ${EXPERIENCE_CONTEXT[answers.experience]}

THEIR APPROACH: ${answers.approach}
Context: ${APPROACH_CONTEXT[answers.approach]}

THEIR GOAL: ${answers.goal}
Context: ${GOAL_CONTEXT[answers.goal]}

FIRST CIRCUIT CHOICE: ${answers.circuit}
Context: ${CIRCUIT_CONTEXT[answers.circuit]}

Generate their Driver DNA now. Remember: only valid JSON, no markdown, no preamble.`;
}
