export const dashboardData = {
  user: {
    name: "Ava Chen",
    email: "ava@healthtwin.ai",
    role: "Wellness Focus",
  },
  welcome: {
    headline: "Welcome back, Ava",
    subtext: "Your wellness trends look steady this week and your recovery plan is on track.",
    score: 92,
  },
  healthScore: {
    score: 92,
    trend: "+6% since last month",
    focus: "Recovery & sleep",
  },
  trendData: [
    { day: "Mon", score: 78 },
    { day: "Tue", score: 82 },
    { day: "Wed", score: 84 },
    { day: "Thu", score: 86 },
    { day: "Fri", score: 88 },
    { day: "Sat", score: 90 },
    { day: "Sun", score: 92 },
  ],
  reports: [
    { title: "Annual Checkup", date: "2 hrs ago", status: "Stable" },
    { title: "Sleep Study", date: "Yesterday", status: "Improved" },
    { title: "Lab Results", date: "3 days ago", status: "Needs follow-up" },
  ],
  recommendations: [
    {
      title: "Hydration boost",
      detail: "Aim for a glass of water before lunch to preserve energy.",
    },
    {
      title: "Light movement",
      detail: "A 20-minute walk after dinner will support recovery.",
    },
  ],
  medicineReminders: [
    { name: "Vitamin D", time: "08:00 AM", status: "Taken" },
    { name: "Omega 3", time: "08:00 PM", status: "Upcoming" },
  ],
  quickActions: [
    {
      title: "Upload report",
      description: "Share a new lab, scan, or prescription summary.",
      path: "/reports",
    },
    {
      title: "Start AI chat",
      description: "Ask Dr. Twin about your latest health trends.",
      path: "/chat",
    },
    {
      title: "Review health twin",
      description: "Inspect the body systems that need attention.",
      path: "/health-twin",
    },
  ],
};

export const reportsData = {
  uploadCard: {
    title: "Upload latest report",
    description: "Add labs, imaging, or prescriptions to keep your records current.",
  },
  history: [
    {
      id: "R-204",
      title: "Cardiology Report",
      date: "Jun 29, 2026",
      type: "Lab",
      summary: "Cholesterol improved by 7% compared to April.",
    },
    {
      id: "R-203",
      title: "Sleep Analysis",
      date: "Jun 22, 2026",
      type: "Sleep",
      summary: "Sleep consistency improved by 18%.",
    },
    {
      id: "R-202",
      title: "Radiology Scan",
      date: "Jun 14, 2026",
      type: "Imaging",
      summary: "No new abnormalities detected in the scan.",
    },
  ],
  summary: {
    title: "AI Summary",
    text: "Recent insights show stronger sleep quality and a stable heart rate trend over the last two weeks.",
    highlights: [
      "Heart rate variance down 4%",
      "Hydration average up 12%",
      "Recovery score trending positive",
    ],
  },
};

export const chatData = {
  initialMessages: [
    {
      id: 1,
      role: "assistant",
      text: "Hi Ava, I’m reviewing your latest wellness data. Want a quick summary of your current recovery plan?",
    },
    {
      id: 2,
      role: "user",
      text: "Give me a short wellness update.",
    },
  ],
  suggestedQuestions: [
    "What should I improve this week?",
    "How is my sleep affecting recovery?",
    "Show me the most important trend.",
  ],
  typingLabel: "Dr. Twin is thinking...",
};

export const healthTwinData = {
  healthScore: 87,
  bodyMetrics: [
    { label: "Heart Rate", value: "72 bpm", change: "+1.4%" },
    { label: "Respiration", value: "16/min", change: "Stable" },
    { label: "Sleep", value: "7.8 hrs", change: "+12%" },
  ],
  organs: [
    { name: "Heart", status: "Strong", detail: "Recovery trend is improving", score: 92 },
    { name: "Lungs", status: "Balanced", detail: "Breath support remains steady", score: 88 },
    { name: "Brain", status: "Focused", detail: "Cognitive pace is healthy", score: 90 },
  ],
};

export const settingsData = {
  profile: {
    name: "Ava Chen",
    email: "ava@healthtwin.ai",
    phone: "+1 (415) 555-0147",
  },
  notifications: [
    { label: "Medication reminders", enabled: true },
    { label: "Weekly wellness summaries", enabled: true },
    { label: "Report upload alerts", enabled: false },
  ],
  themeOptions: [
    { name: "Ocean Blue", value: "blue", active: true },
    { name: "Midnight", value: "midnight", active: false },
  ],
  passwordRules: [
    "Use at least 8 characters",
    "Add one number and one symbol",
    "Avoid reusing a previous password",
  ],
};
