export default {
  async fetch(request) {
    const firstWords = [
      "Health", "Medi", "Pure", "Life", "Well", "Care", "Vital", "Trust", "Prime", "Heal",
      "Bio", "Apex", "Nova", "Elite", "Ultra", "Zen", "Optima", "Total", "Advance", "Sure",
      "Super", "True", "Max", "Excel", "Unity", "Pro", "Divine", "Secure"
    ];

    const secondWords = [
      "Cure", "Sphere", "Bridge", "Nexus", "Point", "Zone", "Works", "Link", "Quest", "Unity",
      "Matrix", "Pulse", "Flow", "Guard", "Edge", "Source", "Vista", "Core", "Hub", "Prime",
      "Center", "Reach", "Rise", "Path", "Orbit", "Wave", "Fusion", "Peak"
    ];

    const thirdWords = [
      "Clinic", "Pharma", "Care", "Wellness", "Solutions", "Health", "Labs", "Diagnostics",
      "Group", "Associates", "Center", "Services", "Systems", "Medical", "Therapies", "Partners",
      "Consultants", "Networks", "Institute", "Holdings", "Corporation", "Practice", "Experts",
      "Providers", "Specialists", "Team"
    ];

    const first = firstWords[Math.floor(Math.random() * firstWords.length)];
    const second = secondWords[Math.floor(Math.random() * secondWords.length)];
    const third = thirdWords[Math.floor(Math.random() * thirdWords.length)];

    return Response.json({ company_name: `${first}${second} ${third}` });
  }
}
