export default function handler(req, res) {
    const firstWords = [
        "Health", "Medi", "Pure", "Life", "Well", "Care", "Vital", "Trust", "Prime", "Heal"
    ];
    const secondWords = [
        "Cure", "Sphere", "Bridge", "Nexus", "Point", "Zone", "Works", "Link", "Quest", "Unity"
    ];
    const thirdWords = [
        "Clinic", "Pharma", "Care", "Wellness", "Solutions", "Health", "Labs", "Diagnostics", "Group", "Associates"
    ];

    const first = firstWords[Math.floor(Math.random() * firstWords.length)];
    const second = secondWords[Math.floor(Math.random() * secondWords.length)];
    const third = thirdWords[Math.floor(Math.random() * thirdWords.length)];

    const businessName = `${first}${second} ${third}`;

    res.status(200).json({
        name: businessName
    });
}
