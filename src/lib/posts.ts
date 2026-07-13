import { BUSINESS } from "@/lib/site";

// Local-SEO blog content for Tony Automotive.
// Hyper-local, service-aligned, honest. No invented prices, credentials, or review counts.
// Dates are STATIC strings (never generated with Date()).

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  city: string;
  date: string; // ISO "YYYY-MM-DD" — sorts lexicographically = chronologically
  body: string[];
  faqs?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "signs-you-need-brake-repair-gaithersburg",
    title: "Signs You Need Brake Repair",
    excerpt:
      "Squealing, grinding, or a soft pedal? Here are the warning signs Gaithersburg drivers should never ignore, and when to book brake repair.",
    keyword: "brake repair Gaithersburg MD",
    city: "Gaithersburg",
    date: "2026-02-12",
    body: [
      "The short answer: if your brakes squeal, grind, pulse, or your pedal feels soft or spongy, it is time for brake repair. Those symptoms mean worn pads, warped rotors, or a fluid problem, and none of them fix themselves. If you are driving around Gaithersburg and notice any of them, call Tony Automotive at " +
        BUSINESS.phone +
        " for a free brake inspection before the problem gets more expensive.",
      "A high-pitched squeal when you slow down is usually the built-in wear indicator on your pads telling you they are near the end of their life. A deeper grinding noise is worse — that is often metal-on-metal contact that can score your rotors and turn a routine pad job into a much bigger repair. The sooner you come in, the more you save.",
      "Other signs are easy to feel from the driver's seat. A brake pedal that sinks toward the floor, a steering wheel or pedal that shakes when you stop, or a car that pulls to one side under braking all point to something that needs attention. So does a longer stopping distance, which is easy to notice on the hills and stop-and-go traffic around Kentlands and Montgomery Village.",
      "At Tony Automotive we start every brake job with a free brake inspection. Our technicians check the pads, rotors, calipers, lines, and fluid, then show you exactly what needs work before we touch a bolt. Most pad-and-rotor jobs are finished the same day, so you are back on the road fast.",
      "Brakes are the one system on your car you never want to gamble with. If yours are talking to you, listen. Call " +
        BUSINESS.phone +
        " and we will get you in for an honest look, right off Queenair Drive here in Gaithersburg.",
    ],
    faqs: [
      {
        q: "How much does brake repair cost?",
        a: "It depends on your vehicle and whether you need pads, rotors, or both. We inspect first, then give you a clear written estimate before any work begins. Call " + BUSINESS.phone + " to get started.",
      },
      {
        q: "Is it safe to drive with squealing brakes?",
        a: "A light squeal usually means your pads are worn and should be replaced soon. Grinding means you should come in right away, since you may be damaging your rotors.",
      },
    ],
  },
  {
    slug: "oil-change-rockville-md",
    title: "Oil Change in Rockville, MD: What You Need to Know",
    excerpt:
      "Everything Rockville drivers should know about oil changes — how often, which oil, and why the free multi-point check matters.",
    keyword: "oil change Rockville MD",
    city: "Rockville",
    date: "2026-03-04",
    body: [
      "Most Rockville drivers need an oil change every 3,000 to 5,000 miles on conventional oil, or every 7,500 to 10,000 miles on full synthetic. Your owner's manual has the exact number, and we will confirm it for your specific vehicle. A fresh oil change is the single cheapest thing you can do to protect your engine.",
      "Rockville driving is tougher on oil than you might think. Short hops around King Farm and Twinbrook, stop-and-go on Rockville Pike, and cold winter starts all count as severe-duty driving, which shortens the interval between changes. If most of your miles are short local trips, lean toward the lower end of the mileage range.",
      "Every oil change at Tony Automotive includes a complimentary multi-point inspection. While your oil drains we check your other fluids, filters, belts, tires, and brakes. That is how small problems get caught early, before they leave you stranded or turn into a big bill. It is only about a 15-minute drive from Rockville to our Gaithersburg shop, and most cars are in and out in under an hour.",
      "Not sure whether you need conventional, synthetic-blend, or full-synthetic oil? We will recommend the right grade for your make, model, and mileage and explain why. Walk-ins are welcome, but calling ahead at " +
        BUSINESS.phone +
        " gets you in and out faster.",
    ],
    faqs: [
      {
        q: "Do I really need synthetic oil?",
        a: "Many newer engines are designed for it, and it holds up better in heat and cold. We will tell you honestly whether your vehicle needs it or whether a blend is fine.",
      },
      {
        q: "Can I just walk in for an oil change?",
        a: "Yes, walk-ins are welcome. Calling ahead at " + BUSINESS.phone + " just gets you in and out faster.",
      },
    ],
  },
  {
    slug: "get-your-car-ready-for-a-maryland-winter",
    title: "Get Your Car Ready for a Maryland Winter",
    excerpt:
      "A simple cold-weather checklist for Montgomery County drivers — battery, tires, and cooling system checks that prevent a roadside breakdown.",
    keyword: "winter car prep Montgomery County MD",
    city: "Montgomery County",
    date: "2026-01-09",
    body: [
      "The fastest way to avoid a winter breakdown in Montgomery County is to check three things before the cold really sets in: your battery, your tires, and your cooling system. Do those and you dramatically cut your odds of a no-start morning or a slide on an icy hill. Tony Automotive can check all three in one visit — call " +
        BUSINESS.phone +
        ".",
      "Cold weather is brutal on batteries. A battery that started fine in October can fail on the first hard freeze, because low temperatures reduce the power it can deliver right when your engine needs more of it to turn over. We offer a free battery test, so you can find out where yours stands before you are stuck in a parking lot with a dead battery.",
      "Tires matter more than people think in Maryland winters. Cold air drops your tire pressure, and worn tread means longer stops on wet and icy roads. Our tire services cover pressure checks, rotation, and tread inspection, and we will tell you honestly if you still have plenty of miles left or if it is time to shop.",
      "Finally, do not forget your cooling system. Your coolant is also your antifreeze, and the wrong mix or old, worn-out coolant can freeze or fail to protect your engine in a hard cold snap. A quick cooling system check confirms your coolant is at the right strength and level.",
      "Winter around Gaithersburg, Germantown, and Damascus can turn fast. A little prep now saves you a miserable morning later. Call " +
        BUSINESS.phone +
        " and we will get your car ready for the cold.",
    ],
    faqs: [
      {
        q: "When should I get my car winter-ready?",
        a: "Before the first hard freeze is ideal. A battery test, tire check, and cooling system check take one short visit and prevent most cold-weather breakdowns.",
      },
    ],
  },
  {
    slug: "how-often-should-you-rotate-your-tires",
    title: "How Often Should You Rotate Your Tires?",
    excerpt:
      "The simple answer for Germantown drivers, why rotation matters, and how it stretches the life of your tires and your budget.",
    keyword: "tire rotation Germantown MD",
    city: "Germantown",
    date: "2026-02-26",
    body: [
      "Rotate your tires every 5,000 to 7,500 miles — an easy rule to remember because it lines up neatly with most oil changes. Front and rear tires wear at different rates, so moving them around keeps the wear even, which means better grip, a smoother ride, and more miles out of a set of tires you paid good money for.",
      "Skipping rotations is one of the most common ways Germantown drivers waste money on tires. When the fronts wear out far ahead of the rears, you end up replacing tires sooner and sometimes two at a time instead of four evenly. Uneven wear can also make your car noisier and less stable on the highway.",
      "Rotation is also the perfect moment to catch other issues. While the tires are off, our technicians can spot uneven wear patterns that hint at an alignment or suspension problem, check your brakes, and confirm your tire pressure and tread depth are where they should be. Our tire services bundle all of that into one quick visit.",
      "The easiest approach is to rotate your tires every time you come in for an oil change. Bundle them and you rarely have to think about it again. Call Tony Automotive at " +
        BUSINESS.phone +
        " to book a rotation — we are just a short drive from Germantown here in Gaithersburg.",
    ],
    faqs: [
      {
        q: "Can I rotate tires with my oil change?",
        a: "Yes, and that is exactly what we recommend. Bundling the two means your tires get rotated on schedule without a separate trip.",
      },
      {
        q: "Does tire rotation help with uneven wear?",
        a: "It does. Moving tires around evens out the wear. If we still see an unusual pattern, it can point to an alignment or suspension issue we will check for you.",
      },
    ],
  },
  {
    slug: "what-the-check-engine-light-really-means",
    title: "What the Check Engine Light Really Means",
    excerpt:
      "That glowing light is not a mystery. Here is what it is actually telling Gaithersburg drivers, and why a code read is not the same as a diagnosis.",
    keyword: "check engine light diagnostics Gaithersburg",
    city: "Gaithersburg",
    date: "2026-03-18",
    body: [
      "A check engine light means your car's computer has detected something outside its normal range — and that could be anything from a loose gas cap to a failing sensor or a misfire. The light itself does not tell you the exact problem; it tells you it is time for real engine diagnostics. If your light is on around Gaithersburg, call Tony Automotive at " +
        BUSINESS.phone +
        " and we will find the actual cause.",
      "First, check whether the light is steady or flashing. A steady light usually means you can drive a short distance to get it looked at, though you should not ignore it. A flashing light is more serious — it often signals a misfire that can damage your catalytic converter, so you should stop driving and call us.",
      "Here is the part a lot of drivers do not realize: the free code read at a parts store is not a diagnosis. A trouble code points to a system, not the exact broken part. Proper diagnostics use that code as a starting point and then test the components to confirm the real fault, so you fix it once instead of throwing parts at it and hoping.",
      "At Tony Automotive we pull the codes and perform genuine root-cause diagnostics, then give you a clear written estimate with no guesswork. That approach also matters if you have Maryland emissions coming up, since an active check engine light will cause a failure. Call " +
        BUSINESS.phone +
        " and get a straight answer about what that light really means.",
    ],
    faqs: [
      {
        q: "Is a free code read the same as a diagnosis?",
        a: "No. A code points to a system, not the exact fault. Proper diagnostics confirm the real cause so you fix it once instead of guessing.",
      },
      {
        q: "Can I drive with the check engine light on?",
        a: "A steady light usually means a short trip to us is okay. A flashing light means stop driving and call " + BUSINESS.phone + ", since it can point to engine damage.",
      },
    ],
  },
  {
    slug: "why-is-my-car-overheating-potomac",
    title: "Why Is My Car Overheating?",
    excerpt:
      "Overheating can destroy an engine fast. Here is what Potomac drivers should do when the temperature gauge climbs, and how the cooling system fits in.",
    keyword: "overheating engine repair Potomac MD",
    city: "Potomac",
    date: "2026-06-24",
    body: [
      "If your temperature gauge climbs into the red, pull over safely, shut the engine off, and let it cool before you do anything else — then call Tony Automotive at " +
        BUSINESS.phone +
        ". Driving an overheating engine even a short distance can warp the head, blow a gasket, or ruin the engine entirely, and those repairs cost far more than the fix you started with.",
      "Overheating almost always traces back to the cooling system. The usual culprits are low coolant from a leak, a failing water pump, a stuck thermostat, or a clogged or damaged radiator. Any one of them stops your engine from shedding heat, and Potomac summer traffic on River Road makes it worse when you are crawling along with little airflow.",
      "The trap drivers fall into is topping off the coolant and hoping the problem goes away. If coolant is low, it went somewhere, and that means a leak that needs to be found and fixed. Our cooling system service pinpoints the real source instead of masking the symptom, so you are not stranded again next week.",
      "At Tony Automotive we test the whole system — radiator, water pump, thermostat, hoses, and coolant condition — and give you an honest diagnosis. If you are driving anywhere near Potomac and your car runs hot, do not push it. Call " +
        BUSINESS.phone +
        " and we will keep a small problem from becoming a new engine.",
    ],
    faqs: [
      {
        q: "What should I do if my car overheats?",
        a: "Pull over safely, turn the engine off, and let it cool. Do not keep driving. Then call " + BUSINESS.phone + " so we can diagnose the cause before it damages the engine.",
      },
      {
        q: "Is it safe to just add coolant?",
        a: "Only as a temporary measure. If coolant is low there is usually a leak, and topping off without finding it means you will overheat again.",
      },
    ],
  },
  {
    slug: "how-to-pass-maryland-inspection-and-emissions",
    title: "How to Pass Maryland Inspection and Emissions",
    excerpt:
      "A practical guide for Rockville drivers on what causes failures and how to get your vehicle ready to pass the first time.",
    keyword: "Maryland emissions inspection Rockville",
    city: "Rockville",
    date: "2026-04-08",
    body: [
      "The best way to pass Maryland inspection and emissions is to fix the common failure points before your test date — most often an active check engine light, worn safety components, or lighting problems. Tony Automotive can do a pre-inspection check that catches those issues early, so you avoid the runaround of a failed test and a retest. Call us at " +
        BUSINESS.phone +
        ".",
      "The number one reason vehicles fail emissions is a check engine light. If that light is on, the state's system will read the stored codes and fail the vehicle, no matter how well it seems to run. We diagnose the underlying cause and repair it, rather than just clearing the code, which is important because a freshly cleared computer can also cause a not-ready failure.",
      "Safety inspection failures are more mechanical. Worn brakes or tires, bad wipers, cracked glass, and burned-out lights are all common. These are quick to check and usually quick to fix, and it is far cheaper to handle them ahead of time than to fail, pay for a retest, and make a second trip.",
      "If you are near Rockville and have a test coming up, let us look the vehicle over first. We will tell you honestly what needs attention and what is fine. Our inspection and emissions help is designed to get you ready to pass with confidence — call " +
        BUSINESS.phone +
        " to set it up.",
    ],
    faqs: [
      {
        q: "My car failed emissions. Can you help?",
        a: "Yes. We diagnose the cause of the failure and make the repairs needed to pass a retest. Call " + BUSINESS.phone + " and we will explain the next steps.",
      },
      {
        q: "Will clearing the check engine light help me pass?",
        a: "No — clearing it right before a test can trigger a not-ready failure. The real fix is diagnosing and repairing the underlying cause.",
      },
    ],
  },
  {
    slug: "when-to-replace-your-timing-belt",
    title: "When to Replace Your Timing Belt",
    excerpt:
      "Miss this maintenance interval and you can ruin your engine. Here is what Olney drivers need to know about timing belt replacement.",
    keyword: "timing belt replacement Olney MD",
    city: "Olney",
    date: "2026-04-22",
    body: [
      "Most timing belts need to be replaced every 60,000 to 100,000 miles, depending on your vehicle — and this is one interval you do not want to miss. On many engines a snapped timing belt causes severe internal damage in an instant, turning a planned maintenance job into a very expensive repair. Not sure of your interval? Call Tony Automotive at " +
        BUSINESS.phone +
        " and we will confirm it for your car.",
      "The tricky part about a timing belt is that it usually gives no warning before it fails. Unlike brakes that squeal or a battery that cranks slowly, a belt near the end of its life often looks and sounds fine right up until it breaks. That is why replacement is based on mileage and time, not on symptoms.",
      "When we replace a timing belt, we will usually recommend doing the water pump at the same time on vehicles where the pump is driven by that belt. It is already exposed during the job, so replacing it together saves you a second round of labor down the road. We will tell you honestly whether that applies to your vehicle.",
      "If you are in Olney and your car is approaching that mileage window, do not wait for a problem — there often is not one until it is too late. Call " +
        BUSINESS.phone +
        " and we will check your interval and keep a routine job from becoming a new engine.",
    ],
    faqs: [
      {
        q: "What happens if my timing belt breaks?",
        a: "On many engines a broken timing belt causes severe internal damage. Replacing it on schedule avoids that risk entirely.",
      },
      {
        q: "Should I replace the water pump too?",
        a: "Often yes, when the pump is driven by the same belt. Doing both at once saves labor later. We will advise for your specific vehicle.",
      },
    ],
  },
  {
    slug: "why-is-my-ac-not-cold-north-potomac",
    title: "Why Is My Car AC Not Blowing Cold?",
    excerpt:
      "Weak or warm air when it is hot out is miserable — and the same system runs your heating. Here is what North Potomac drivers should look at before summer hits.",
    keyword: "AC repair North Potomac MD",
    city: "North Potomac",
    date: "2026-06-10",
    body: [
      "If your car's AC is blowing warm or weak air, the most common cause is low refrigerant from a leak, followed by a failing compressor. A recharge might get you cold air for a little while, but if there is a leak, that cold air will not last. For lasting AC repair around North Potomac, call Tony Automotive at " +
        BUSINESS.phone +
        " and we will find the leak instead of just masking it.",
      "Refrigerant does not get used up like fuel. If your system is low, it escaped through a leak somewhere — a hose, a seal, a fitting, or a component. That is why simply recharging it is a temporary fix. We test the whole system, locate the leak, and repair it so your air stays cold through the summer.",
      "There is more to comfort than the AC, too. The same system handles your heating, so it is worth thinking about year-round. Our AC repair and heating service covers compressors, blower motors, heater cores, and the diagnostics to figure out which part is actually failing, whether you are fighting Quince Orchard summer heat or a cold January morning.",
      "Do not sweat through a Maryland summer with weak air. Call " +
        BUSINESS.phone +
        " and we will get your AC diagnosed and blowing cold again, the right way.",
    ],
    faqs: [
      {
        q: "Why is my AC blowing warm?",
        a: "Usually low refrigerant from a leak, or a failing compressor. We test the system to pinpoint the exact cause rather than guessing.",
      },
      {
        q: "Is an AC recharge enough?",
        a: "If there is a leak, a recharge is only temporary. We find and fix the leak so your air stays cold for the long run.",
      },
    ],
  },
  {
    slug: "signs-your-car-needs-a-wheel-alignment",
    title: "Signs Your Car Needs a Wheel Alignment",
    excerpt:
      "Pulling to one side or chewing through tires? Here is how Clarksburg drivers can spot an alignment problem early.",
    keyword: "wheel alignment Clarksburg MD",
    city: "Clarksburg",
    date: "2026-05-06",
    body: [
      "The clearest signs you need a wheel alignment are a car that pulls to one side, a steering wheel that sits off-center when you are going straight, or tires wearing unevenly. Any of those means your alignment angles have drifted out of spec, and left alone they will quietly ruin a good set of tires. If you notice them around Clarksburg, call Tony Automotive at " +
        BUSINESS.phone +
        ".",
      "Alignment slips out for everyday reasons. The potholes that appear every spring, hitting a curb, or just normal miles on I-270 can all knock your angles off. You may not notice at first, but your tires will — misalignment scrubs the tread unevenly and can shave thousands of miles off their life.",
      "That tire connection is why an alignment is one of the highest-value services you can get. A relatively quick alignment protects a much more expensive set of tires, and it makes the car track straight and feel planted again. We use a computerized alignment to set your angles back to the manufacturer's specification.",
      "We also recommend an alignment whenever you install new tires, so they wear evenly from day one. If your Clarksburg commute has your car pulling or your tires wearing funny, call " +
        BUSINESS.phone +
        " and we will get you tracking straight.",
    ],
    faqs: [
      {
        q: "How often should I get a wheel alignment?",
        a: "Once a year is a good baseline, plus any time you hit a major pothole or install new tires.",
      },
      {
        q: "Does alignment affect my tires?",
        a: "Very much. Poor alignment causes uneven, premature tire wear. A quick alignment protects a much more expensive set of tires.",
      },
    ],
  },
  {
    slug: "is-your-car-battery-about-to-die",
    title: "Is Your Car Battery About to Die?",
    excerpt:
      "A slow crank on a cold Damascus morning is your battery's warning. Here is how to tell before it leaves you stranded.",
    keyword: "battery replacement Damascus MD",
    city: "Damascus",
    date: "2026-01-22",
    body: [
      "If your engine cranks slowly, your headlights dim at idle, or you see a battery warning on the dash, your battery is likely on its way out. Most car batteries last three to five years, and Maryland's temperature swings shorten that. The good news for Damascus drivers: Tony Automotive offers a free battery test, so you never have to guess. Call " +
        BUSINESS.phone +
        ".",
      "Cold is a battery's worst enemy. Low temperatures cut the power a battery can deliver at the same time your engine needs more of it to start, which is why so many batteries die on the first freezing morning up here in upper Montgomery County. A battery that felt fine in the fall can be the reason you are stuck in the driveway in January.",
      "Here is the catch: a weak battery is not always the whole story. A failing alternator or starter can cause the very same slow-crank and no-start symptoms. That is why we test the charging system too — so you replace the part that is actually bad instead of buying a new battery and having the problem come right back.",
      "Battery testing and replacement are usually done on the spot, so you are not stuck waiting. If your car is cranking slow or you just want peace of mind before the next cold snap, call " +
        BUSINESS.phone +
        " and we will check it in minutes.",
    ],
    faqs: [
      {
        q: "How long do car batteries last?",
        a: "Typically three to five years. Extreme heat and cold shorten that, so a quick test is the only way to know for sure.",
      },
      {
        q: "How do I know it is the battery and not the alternator?",
        a: "You often cannot tell from the symptoms alone, which is why we test the battery, alternator, and starter together so you fix the right part.",
      },
    ],
  },
  {
    slug: "should-you-get-a-pre-purchase-inspection",
    title: "Should You Get a Pre-Purchase Inspection Before Buying a Used Car?",
    excerpt:
      "Buying used near Montgomery Village? A pre-purchase inspection can save you from an expensive mistake. Here is why it is worth it.",
    keyword: "pre-purchase inspection Montgomery Village MD",
    city: "Montgomery Village",
    date: "2026-05-20",
    body: [
      "Yes — if you are buying a used car, a pre-purchase inspection is one of the smartest things you can do, and it is inexpensive relative to what it can save you. An independent look at the vehicle before you sign tells you what you are really getting, so a hidden problem does not become your problem the week after you drive it home. Montgomery Village buyers can bring the car to Tony Automotive first; call " +
        BUSINESS.phone +
        ".",
      "A listing and a quick test drive only show so much. A car can look clean and drive fine for ten minutes while hiding worn brakes, a tired transmission, suspension problems, fluid leaks, or evidence of prior collision repair. A pre-purchase inspection puts the vehicle on a lift and checks the things a buyer simply cannot see in a parking lot.",
      "When we finish, you get an honest written report of what we found. If the car checks out, you buy with confidence. If it does not, you have real leverage — either to negotiate the price down to cover the repairs or to walk away and keep looking. Either way you are making the decision with facts instead of hope.",
      "A used car is a big purchase, and a small inspection fee is cheap insurance against a costly mistake. Found a car you like near Montgomery Village? Call " +
        BUSINESS.phone +
        " and bring it by before you buy.",
    ],
    faqs: [
      {
        q: "What do you check in a pre-purchase inspection?",
        a: "Engine, transmission, brakes, suspension, tires, fluids, and signs of prior damage or major repairs, then we give you a written report.",
      },
      {
        q: "Is a pre-purchase inspection worth it?",
        a: "Almost always. A small fee can save you from a used car with expensive hidden problems, and it gives you negotiating leverage.",
      },
    ],
  },
  {
    slug: "why-does-my-car-shake-or-bounce",
    title: "Why Does My Car Shake, Bounce, or Clunk?",
    excerpt:
      "A rough, bouncy, or noisy ride usually points to worn suspension — and it can quietly be wearing your tires. Here is what Darnestown drivers should watch for.",
    keyword: "suspension repair Darnestown MD",
    city: "Darnestown",
    date: "2026-06-03",
    body: [
      "If your car bounces long after a bump, clunks over potholes, or feels loose and floaty on the highway, worn suspension components are the likely cause. Shocks, struts, ball joints, and bushings all wear out over time, and when they do your ride comfort, handling, and even your tires suffer. Darnestown drivers can get an honest check at Tony Automotive — call " +
        BUSINESS.phone +
        ".",
      "Your suspension does two jobs: it keeps the ride comfortable and it keeps your tires planted on the road. When shocks or struts wear out, the car keeps bouncing after bumps and takes longer to settle, which reduces control. That clunk you hear on Darnestown's country roads is often a worn ball joint or bushing that should be looked at sooner rather than later.",
      "Suspension problems also show up in your tires. Worn parts and poor alignment cause uneven, cupped tire wear, so a bouncy ride can quietly be costing you a set of tires. That is why our suspension repair always includes a look at your alignment and tire wear together, rather than treating them as separate issues.",
      "A worn suspension is not just uncomfortable — it lengthens your stopping distance and hurts control in an emergency. If your ride has gotten rough or noisy around Darnestown, call " +
        BUSINESS.phone +
        " and we will restore the comfort and the safety.",
    ],
    faqs: [
      {
        q: "What are the signs of bad suspension?",
        a: "Excessive bouncing after bumps, clunking noises, the car drifting or diving when braking, and uneven tire wear are the common signs.",
      },
      {
        q: "Does worn suspension affect my tires?",
        a: "Yes. Worn suspension and misalignment cause premature, uneven tire wear, so we check both together.",
      },
    ],
  },
  {
    slug: "transmission-trouble-warning-signs",
    title: "Transmission Trouble: 5 Warning Signs You Should Not Ignore",
    excerpt:
      "Slipping gears and rough shifts get worse and pricier the longer you wait. Here is what Poolesville drivers should catch early.",
    keyword: "transmission repair Poolesville MD",
    city: "Poolesville",
    date: "2026-07-01",
    body: [
      "The warning signs of transmission trouble are slipping gears, hard or delayed shifts, a whining or humming noise, a burning smell, and any transmission warning light. Catching these early is the difference between a manageable transmission service and a major repair, because transmission problems almost always get worse — and more expensive — the longer you drive on them. Poolesville drivers can get an honest diagnosis at Tony Automotive; call " +
        BUSINESS.phone +
        ".",
      "Slipping is the one drivers notice most. The engine revs but the car does not accelerate the way it should, as if the transmission cannot hold the gear. Delayed engagement — a pause after you shift into drive or reverse before the car actually moves — is another early red flag that something is not right.",
      "Your senses tell you a lot. A whining, buzzing, or clunking sound that changes with your speed, or a burning smell after a drive, both point to a transmission that needs attention. Low or burnt fluid is a frequent cause, which is why regular fluid service, typically every 30,000 to 60,000 miles, matters so much.",
      "The worst thing you can do is keep driving and hope it sorts itself out — it will not, and the repair only grows. We diagnose the real cause first and start with the least-invasive fix that actually solves it, then give you an honest repair-versus-replace recommendation. If your car is showing any of these signs near Poolesville, call " +
        BUSINESS.phone +
        ".",
    ],
    faqs: [
      {
        q: "What are the signs of transmission trouble?",
        a: "Slipping gears, hard or delayed shifts, whining or clunking noises, a burning smell, and warning lights. Get it checked early to avoid a bigger repair.",
      },
      {
        q: "How often should transmission fluid be changed?",
        a: "Typically every 30,000 to 60,000 miles depending on the vehicle and how you drive. We will check the condition of your fluid.",
      },
    ],
  },
  {
    slug: "spring-car-care-checklist-maryland",
    title: "Spring Car Care Checklist for Maryland Drivers",
    excerpt:
      "Winter is rough on cars. Here is the spring maintenance checklist — oil change, tire check, and wheel alignment — Boyds drivers should run to undo the damage.",
    keyword: "spring car maintenance Boyds MD",
    city: "Boyds",
    date: "2026-03-25",
    body: [
      "Once winter loosens its grip, the smartest spring move for Boyds drivers is a quick round of maintenance to undo the cold-weather wear: an oil change, a tire and brake check, and a wheel alignment to fix the damage from months of potholes. Handle those and your car is ready for road-trip season. Tony Automotive can do all of it in one visit — call " +
        BUSINESS.phone +
        ".",
      "Start with an oil change. Winter's short trips and cold starts are hard on oil, so spring is a natural time for fresh oil and our free multi-point inspection, which catches anything the cold weather stressed. It is the cheapest insurance your engine gets all year.",
      "Next, look down at your tires and brakes. Cold and salt are tough on both, and Maryland's freeze-thaw cycle produces a spring crop of potholes that punish your suspension and knock your alignment out. A wheel alignment now protects your tires through the warmer, higher-mileage months ahead, and our tire service can rotate and inspect them at the same time.",
      "Finally, think about comfort before you need it. Now is the time to make sure your AC repair happens before the first hot day, not during it, so you are not waiting for a fix in July heat. Ready for a spring tune-up in Boyds? Call " +
        BUSINESS.phone +
        " and we will get everything checked in one stop.",
    ],
    faqs: [
      {
        q: "What spring maintenance does my car need?",
        a: "An oil change, a tire and brake check, and a wheel alignment to undo winter pothole damage are the core items. We can do them all in one visit.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Format an ISO date string ("2026-01-15") to "January 15, 2026" without using Date().
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1] ?? "";
  return `${month} ${Number(d)}, ${y}`;
}
