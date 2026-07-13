// Central site data for Tony Automotive. Drives all programmatic SEO pages.
// Business facts are REAL (from client files); do not invent hours/prices.

export const BUSINESS = {
  name: "Tony Automotive",
  legalName: "Tony Automotive",
  phone: "301-401-6669",
  phoneHref: "tel:+13014016669",
  email: "service@tony-automotive.com",
  address: "8041 Queenair Drive Suite 2",
  city: "Gaithersburg",
  state: "MD",
  stateFull: "Maryland",
  zip: "20879",
  county: "Montgomery County",
  url: "https://tony-automotive.vercel.app",
  // Hours were NOT in the client files — shown as "Call to confirm" in UI. Kept here for schema only.
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
  geo: { lat: 39.1699, lng: -77.2075 },
  tagline: "Honest, dealer-quality auto repair in Gaithersburg, MD",
} as const;

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;      // "Brake Repair"
  noun: string;      // used in copy, lower case: "brake repair"
  short: string;     // one-line summary for cards/meta
  description: string;
  bullets: string[];
  faqs: Faq[];
};

export type Location = {
  slug: string;
  name: string;      // "Rockville"
  blurb: string;
  neighborhoods: string[];
  drive: string;     // context relative to the shop
};

export const services: Service[] = [
  {
    slug: "brake-repair",
    name: "Brake Repair",
    noun: "brake repair",
    short: "Pads, rotors, calipers, and brake fluid service with a free brake inspection.",
    description:
      "Grinding, squealing, or a soft pedal means it is time to have your brakes checked. Our ASE-style technicians inspect pads, rotors, calipers, lines, and fluid, then show you exactly what needs attention before any work begins — no surprises.",
    bullets: ["Free brake inspection", "Pads, rotors & calipers", "Brake fluid flush", "Same-day service on most vehicles"],
    faqs: [
      { q: "How do I know if I need new brakes?", a: "Squealing, grinding, a soft or pulsing pedal, or a longer stopping distance are the common signs. We offer a free brake inspection so you know for sure." },
      { q: "How long does brake service take?", a: "Most pad-and-rotor jobs are done the same day. We confirm timing when you drop off." },
      { q: "Do you use quality parts?", a: "Yes — we install premium pads and rotors and stand behind the work with a warranty." },
    ],
  },
  {
    slug: "oil-change",
    name: "Oil Change",
    noun: "oil change",
    short: "Conventional, synthetic-blend, and full-synthetic oil changes with a multi-point check.",
    description:
      "A quick, affordable oil change protects your engine and is the best time to catch small problems early. Every oil change includes a complimentary multi-point inspection of fluids, filters, belts, and tires.",
    bullets: ["Conventional & full-synthetic", "New oil filter", "Free multi-point inspection", "Most cars in under an hour"],
    faqs: [
      { q: "How often should I change my oil?", a: "Every 3,000–5,000 miles for conventional oil and 7,500–10,000 for full-synthetic. Check your owner's manual and we'll confirm for your vehicle." },
      { q: "What kind of oil do I need?", a: "It depends on your make, model, and mileage. We'll recommend the right grade and explain the options." },
      { q: "Do I need an appointment?", a: "Walk-ins are welcome, but calling ahead at 301-401-6669 gets you in and out faster." },
    ],
  },
  {
    slug: "tire-services",
    name: "Tire Services",
    noun: "tire service",
    short: "Tire sales, mounting, balancing, rotation, and flat repair for all makes.",
    description:
      "From new tires to rotations and flat repairs, we keep you rolling safely. We help you choose the right tires for your vehicle and driving, then mount and balance them precisely.",
    bullets: ["New tire sales & install", "Mounting & balancing", "Rotation & flat repair", "TPMS service"],
    faqs: [
      { q: "How often should tires be rotated?", a: "Every 5,000–7,500 miles, usually with your oil change, to even out wear and extend tire life." },
      { q: "Can you repair a flat?", a: "Most punctures in the tread area can be safely patched. Sidewall damage requires replacement — we'll inspect and advise." },
      { q: "Do you price-match tires?", a: "Call us with a quote and we'll do our best to match or beat it on comparable tires." },
    ],
  },
  {
    slug: "engine-repair",
    name: "Engine Repair",
    noun: "engine repair",
    short: "Diagnostics and repair for knocks, misfires, leaks, and performance issues.",
    description:
      "Engine trouble is stressful. We run a full diagnostic to pinpoint the real cause — not just the symptom — and give you a clear, prioritized estimate before we touch a bolt.",
    bullets: ["Full engine diagnostics", "Misfire & knock repair", "Leak & gasket repair", "Honest, prioritized estimates"],
    faqs: [
      { q: "My engine light is on — is it safe to drive?", a: "A steady light is usually okay to drive to us; a flashing light means stop and call. We can diagnose the code quickly." },
      { q: "Do you work on my make?", a: "We service virtually all domestic and import makes. Call us with your year, make, and model." },
      { q: "Will you explain the repair?", a: "Always. We show you what we found and why it matters before you approve anything." },
    ],
  },
  {
    slug: "transmission-repair",
    name: "Transmission Repair",
    noun: "transmission service",
    short: "Fluid service, diagnostics, and repair for automatic and manual transmissions.",
    description:
      "Slipping gears, rough shifts, or delayed engagement point to transmission issues. We diagnose accurately and start with the least-invasive fix that solves the problem.",
    bullets: ["Transmission fluid service", "Shift & slipping diagnosis", "Automatic & manual", "Clear repair-vs-replace guidance"],
    faqs: [
      { q: "How often should transmission fluid be changed?", a: "Typically every 30,000–60,000 miles depending on the vehicle and driving. We'll check your fluid condition." },
      { q: "What are signs of transmission trouble?", a: "Slipping, hard or delayed shifts, whining, or a burning smell. Get it checked early to avoid bigger repairs." },
      { q: "Is it worth repairing?", a: "Often yes. We'll give you an honest repair-versus-replace recommendation based on your vehicle." },
    ],
  },
  {
    slug: "suspension-repair",
    name: "Suspension Repair",
    noun: "suspension repair",
    short: "Shocks, struts, ball joints, and steering components for a smooth, safe ride.",
    description:
      "A bumpy ride, clunks over potholes, or uneven tire wear usually means worn suspension parts. We restore ride comfort and handling with quality shocks, struts, and steering components.",
    bullets: ["Shocks & struts", "Ball joints & bushings", "Steering components", "Ride & handling restored"],
    faqs: [
      { q: "What are signs of bad suspension?", a: "Excessive bouncing, clunking noises, drifting when braking, or uneven tire wear are common signs." },
      { q: "Does suspension affect tire wear?", a: "Yes — worn suspension and misalignment cause premature, uneven tire wear. We check both together." },
      { q: "How long does the repair take?", a: "Most shock/strut jobs are completed the same day. We'll confirm at drop-off." },
    ],
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    noun: "wheel alignment",
    short: "Precision alignments that stop pulling and uneven tire wear.",
    description:
      "If your car pulls to one side or your steering wheel is off-center, an alignment protects your tires and improves handling. We set your angles to manufacturer spec.",
    bullets: ["Computerized alignment", "Stops pulling & drift", "Extends tire life", "Recommended with new tires"],
    faqs: [
      { q: "How do I know I need an alignment?", a: "Pulling to one side, an off-center steering wheel, or uneven tire wear are the telltale signs." },
      { q: "How often should I get one?", a: "Once a year, after hitting a major pothole, or whenever you install new tires." },
      { q: "Is it a quick service?", a: "Yes — most alignments are completed the same day." },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC & Heating Repair",
    noun: "AC repair",
    short: "AC recharge, diagnostics, and heating system repair to keep you comfortable.",
    description:
      "Weak cold air or a heater that won't warm up? We diagnose your AC and heating systems, check for leaks, and recharge or repair so you're comfortable in every season.",
    bullets: ["AC recharge & leak check", "Heater core & blower", "Diagnostics", "Year-round comfort"],
    faqs: [
      { q: "Why is my AC blowing warm?", a: "Usually low refrigerant from a leak, or a failing compressor. We test the system and pinpoint the cause." },
      { q: "Can you fix my heater?", a: "Yes — we service blower motors, heater cores, thermostats, and coolant issues that affect heat." },
      { q: "Is a recharge enough?", a: "If there's a leak, a recharge is temporary. We find and fix the leak for a lasting repair." },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    noun: "battery service",
    short: "Free battery testing plus fast replacement and charging-system checks.",
    description:
      "A slow crank or dashboard warning often means a weak battery. We test your battery, alternator, and starter for free and install a quality replacement if needed.",
    bullets: ["Free battery test", "Quality replacement batteries", "Alternator & starter check", "Fast install"],
    faqs: [
      { q: "How long do car batteries last?", a: "Typically 3–5 years. Extreme heat and cold shorten that — we can test yours in minutes." },
      { q: "Is it just the battery?", a: "Not always. We also check the alternator and starter so you don't replace the wrong part." },
      { q: "Can you do it same day?", a: "Yes, battery testing and replacement are usually done on the spot." },
    ],
  },
  {
    slug: "check-engine-diagnostics",
    name: "Check Engine Light Diagnostics",
    noun: "engine diagnostics",
    short: "Accurate computer diagnostics to find the real cause behind your warning light.",
    description:
      "A check engine light can mean anything from a loose gas cap to a failing sensor. We pull the codes and perform real diagnostics to find the actual problem before recommending repairs.",
    bullets: ["Full code scan", "Root-cause diagnostics", "Clear written estimate", "No guesswork"],
    faqs: [
      { q: "Is a free code read the same as a diagnosis?", a: "No. A code points to a system, not the exact fault. Proper diagnostics confirm the real cause so you fix it once." },
      { q: "Can I still drive with the light on?", a: "A steady light is usually okay for a short trip to us; a flashing light means stop driving and call." },
      { q: "How much does diagnostics cost?", a: "Call us at 301-401-6669 — we'll explain the diagnostic fee and apply it toward the repair." },
    ],
  },
  {
    slug: "exhaust-muffler",
    name: "Exhaust & Muffler Repair",
    noun: "exhaust repair",
    short: "Muffler, catalytic converter, and exhaust leak repair.",
    description:
      "A loud rumble or rotten-egg smell usually points to exhaust trouble. We repair or replace mufflers, pipes, and catalytic converters to keep your car quiet, safe, and emissions-ready.",
    bullets: ["Muffler & pipe repair", "Catalytic converter", "Leak detection", "Quieter, cleaner running"],
    faqs: [
      { q: "Why is my car so loud?", a: "A hole or leak in the exhaust or a failing muffler is the usual cause. We'll locate and fix it." },
      { q: "Do exhaust leaks matter?", a: "Yes — they can affect performance, emissions, and let fumes into the cabin. Get them repaired promptly." },
      { q: "Can you fix a bad catalytic converter?", a: "We diagnose the cause first, since a converter often fails because of another underlying issue." },
    ],
  },
  {
    slug: "radiator-cooling",
    name: "Radiator & Cooling System",
    noun: "cooling system service",
    short: "Coolant flush, radiator, water pump, and overheating repair.",
    description:
      "Overheating can destroy an engine fast. We service radiators, water pumps, thermostats, and hoses, and perform coolant flushes to keep your engine at a safe temperature.",
    bullets: ["Coolant flush", "Radiator & hoses", "Water pump & thermostat", "Overheating diagnosis"],
    faqs: [
      { q: "My temp gauge is high — what now?", a: "Pull over safely, let it cool, and call us. Driving hot can cause serious engine damage." },
      { q: "How often should coolant be flushed?", a: "Typically every 30,000–50,000 miles. We'll check your coolant's condition." },
      { q: "What causes overheating?", a: "Low coolant, a failing water pump, a stuck thermostat, or a bad radiator. We diagnose the exact cause." },
    ],
  },
  {
    slug: "pre-purchase-inspection",
    name: "Pre-Purchase Inspection",
    noun: "pre-purchase inspection",
    short: "A thorough used-car inspection before you buy — know what you're getting.",
    description:
      "Buying a used car? Let us inspect it first. We check the engine, brakes, suspension, tires, fluids, and more, then give you an honest report so you can negotiate or walk away with confidence.",
    bullets: ["Full mechanical inspection", "Written report", "Peace of mind before you buy", "Negotiating leverage"],
    faqs: [
      { q: "What do you check?", a: "Engine, transmission, brakes, suspension, tires, fluids, and signs of prior damage or major repairs." },
      { q: "How long does it take?", a: "Usually about an hour. Call ahead so we can fit you and the seller in." },
      { q: "Is it worth it?", a: "Absolutely — a small inspection fee can save you from a costly used-car mistake." },
    ],
  },
  {
    slug: "state-inspection-emissions",
    name: "Maryland Inspection & Emissions Help",
    noun: "inspection & emissions service",
    short: "Get your vehicle ready to pass Maryland inspection and emissions.",
    description:
      "We help you get inspection- and emissions-ready by diagnosing and fixing the issues that cause failures — from check engine codes to worn safety components — so you pass without the runaround.",
    bullets: ["Pre-inspection check", "Emissions failure repair", "Safety component repair", "Pass with confidence"],
    faqs: [
      { q: "My car failed emissions — can you help?", a: "Yes. We diagnose the cause of the failure and make the repairs needed to pass a retest." },
      { q: "What makes a car fail inspection?", a: "Common causes include check engine codes, worn brakes or tires, and lighting or safety issues. We'll check it over." },
      { q: "Do you do the state inspection on-site?", a: "Call us at 301-401-6669 and we'll explain exactly how we can help you pass." },
    ],
  },
  {
    slug: "timing-belt",
    name: "Timing Belt Replacement",
    noun: "timing belt service",
    short: "Timing belt and water pump replacement at the recommended interval.",
    description:
      "A snapped timing belt can ruin an engine. We replace timing belts (and the water pump while we're in there, when recommended) at the correct interval so you avoid catastrophic damage.",
    bullets: ["Timing belt replacement", "Water pump combo service", "Interval guidance", "Prevents major engine damage"],
    faqs: [
      { q: "When should the timing belt be replaced?", a: "Usually every 60,000–100,000 miles depending on your vehicle. We'll confirm your interval." },
      { q: "Should I replace the water pump too?", a: "Often yes — it's driven by the same belt, so doing both saves labor later. We'll advise for your car." },
      { q: "What happens if it breaks?", a: "On many engines a broken timing belt causes severe internal damage. Replacing on schedule avoids that risk." },
    ],
  },
  {
    slug: "electrical-repair",
    name: "Auto Electrical Repair",
    noun: "electrical repair",
    short: "Diagnosis and repair of starting, charging, lighting, and wiring issues.",
    description:
      "Electrical gremlins are frustrating. We track down starting, charging, lighting, and wiring problems with proper diagnostics and fix them right the first time.",
    bullets: ["Starting & charging", "Lights & wiring", "Sensor & module diagnosis", "Proper, lasting repairs"],
    faqs: [
      { q: "My car won't start — is it electrical?", a: "It could be the battery, starter, alternator, or wiring. We diagnose the exact cause so you fix the right thing." },
      { q: "Can you fix warning lights?", a: "Yes — we diagnose the underlying sensor or system issue behind the light, not just reset it." },
      { q: "Do you handle wiring problems?", a: "We do. Intermittent electrical faults take proper diagnostics, which is exactly what we provide." },
    ],
  },
];

export const locations: Location[] = [
  { slug: "gaithersburg", name: "Gaithersburg", blurb: "Our home base. Fast, friendly service for Gaithersburg drivers right off Queenair Drive.", neighborhoods: ["Kentlands", "Washingtonian", "Montgomery Village", "Olde Towne"], drive: "in our backyard" },
  { slug: "rockville", name: "Rockville", blurb: "Trusted auto repair for Rockville drivers, a short drive down the road from our Gaithersburg shop.", neighborhoods: ["King Farm", "Twinbrook", "Fallsgrove", "Rockville Town Center"], drive: "about 15 minutes away" },
  { slug: "germantown", name: "Germantown", blurb: "Honest repairs and maintenance for Germantown families and commuters.", neighborhoods: ["Milestone", "Kingsview", "Churchill", "Clopper Mill"], drive: "about 10 minutes away" },
  { slug: "montgomery-village", name: "Montgomery Village", blurb: "Your neighborhood auto shop for Montgomery Village, just minutes from home.", neighborhoods: ["Whetstone", "Stedwick", "Watkins Mill"], drive: "just minutes away" },
  { slug: "potomac", name: "Potomac", blurb: "Dealer-quality service without the dealer markup for Potomac drivers.", neighborhoods: ["Potomac Village", "Avenel", "River Falls"], drive: "a short drive away" },
  { slug: "north-potomac", name: "North Potomac", blurb: "Reliable maintenance and repair for North Potomac and the Quince Orchard area.", neighborhoods: ["Quince Orchard", "Dufief", "Fields Road"], drive: "just minutes away" },
  { slug: "darnestown", name: "Darnestown", blurb: "Convenient, honest auto care for Darnestown drivers.", neighborhoods: ["Darnestown Village", "Turkey Foot"], drive: "a short drive away" },
  { slug: "olney", name: "Olney", blurb: "Quality repairs and maintenance for the Olney community.", neighborhoods: ["Olney Town Center", "Norbeck", "Brookeville"], drive: "a short drive away" },
  { slug: "damascus", name: "Damascus", blurb: "Dependable auto repair for Damascus and upper Montgomery County.", neighborhoods: ["Damascus Town Center", "Woodfield"], drive: "a scenic drive away" },
  { slug: "clarksburg", name: "Clarksburg", blurb: "Modern service for Clarksburg's growing community, close to home.", neighborhoods: ["Clarksburg Village", "Cabin Branch", "Town Center"], drive: "about 15 minutes away" },
  { slug: "poolesville", name: "Poolesville", blurb: "Trusted, no-nonsense auto care for Poolesville drivers.", neighborhoods: ["Poolesville Town", "Beallsville"], drive: "a country drive away" },
  { slug: "boyds", name: "Boyds", blurb: "Friendly, honest repairs for Boyds and the surrounding area.", neighborhoods: ["Boyds", "Hoyles Mill"], drive: "just minutes away" },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
export function serviceLocationPairs(): { service: string; location: string }[] {
  const out: { service: string; location: string }[] = [];
  for (const s of services) for (const l of locations) out.push({ service: s.slug, location: l.slug });
  return out;
}
