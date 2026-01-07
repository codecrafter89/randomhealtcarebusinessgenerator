export default {
  async fetch(request) {
    const firstWords = [
  "Health", "Medi", "Pure", "Life", "Well", "Care", "Vital", "Trust", "Prime", "Heal",
  "Bio", "Apex", "Nova", "Elite", "Ultra", "Zen", "Optima", "Total", "Advance", "Sure",
  "Super", "True", "Max", "Excel", "Unity", "Pro", "Divine", "Secure","CarePlus", "WellCare", "LifeCare", "Medix", "Healix", "HealthPro", "MedCore",
  "CareOne", "LifePoint", "WellPrime", "HealthFirst", "MedSure", "CareTrust",
  "LifeBridge", "HealthLine", "MediPlus", "WellPath", "CareLine", "LifeSpan",
  "HealthWay", "MediCare", "CareForce", "HealthSpan", "LifeGuard"
];

const secondWords = [
  "Cure", "Sphere", "Bridge", "Nexus", "Point", "Zone", "Works", "Link", "Quest", "Unity",
  "Matrix", "Pulse", "Flow", "Guard", "Edge", "Source", "Vista", "Core", "Hub", "Prime",
  "Center", "Reach", "Rise", "Path", "Orbit", "Wave", "Fusion", "Peak","Connect", "Alliance", "Solutions", "Partners", "Services", "Network", "Collective",
  "Innovations", "Dynamics", "Systems", "Platform", "Support", "Careway",
  "HealthNet", "LifeNet", "MedLink", "CareSync", "WellConnect", "HealthBridge",
  "LifeSolutions", "CareWorks", "WellSystems"
];

const thirdWords = [
  "Clinic", "Pharma", "Care", "Wellness", "Solutions", "Health", "Labs", "Diagnostics",
  "Group", "Associates", "Center", "Services", "Systems", "Medical", "Therapies", "Partners",
  "Consultants", "Networks", "Institute", "Holdings", "Corporation", "Practice", "Experts",
  "Providers", "Specialists", "Team","Healthcare", "Health Services", "Medical Group", "Care Services",
  "Clinical Services", "Wellbeing", "Integrated Care", "Patient Care",
  "Health Solutions", "Medical Services", "Care Management",
  "Health Management", "Clinical Network", "Care Organization",
  "Medical Network", "Health Associates"
];

    const first = firstWords[Math.floor(Math.random() * firstWords.length)];
    const second = secondWords[Math.floor(Math.random() * secondWords.length)];
    const third = thirdWords[Math.floor(Math.random() * thirdWords.length)];

    const businessName = `${first}${second} ${third}`;

    return new Response(JSON.stringify({ name: businessName }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
