export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  highlights: string[];
  stack: string[];
  role: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string; // Placeholder — replace with your repository URL
};

export const projects: Project[] = [
  {
    id: "heart-disease",
    title: "Heart Disease Risk Prediction & Monitoring",
    subtitle: "IoT sensing + machine learning + Flutter app",
    summary:
      "An intelligent health monitoring system that collects patient data through IoT sensors and surfaces heart-health analysis in a Flutter mobile app.",
    overview:
      "The system pairs sensor-based data acquisition with a Python classification pipeline that scores cardiovascular risk. Readings flow from the IoT layer into the model, and results are presented to the patient through a Flutter interface designed for non-technical readers.",
    highlights: [
      "IoT sensor layer for continuous patient vitals acquisition.",
      "Python classification pipeline scoring cardiovascular risk factors from clinical data.",
      "Flutter mobile client that visualises trends and flags elevated risk.",
      "End-to-end monitoring framework for real-time risk assessment.",
    ],
    stack: ["Python", "Scikit-Learn", "IoT Sensors", "Flutter", "Streamlit"],
    role: "Lead developer & researcher",
    year: "2025",
    liveUrl: "https://heart-disease-risk-predictor-by-nazmul-hosen.streamlit.app/",
    repoUrl: "",
  },
  {
    id: "campus-compass",
    title: "Campus Compass",
    subtitle: "Cross-platform campus wayfinding",
    summary:
      "A Flutter and Dart mobile application delivering interactive spatial mapping and real-time route guidance across a university campus.",
    overview:
      "Campus Compass helps new students, faculty, and visitors find departments, offices, and cafeterias without asking for directions. Locations are indexed in a structured dataset with category filtering, and routes are generated on demand.",
    highlights: [
      "Interactive spatial map of departments, offices, and cafeterias.",
      "Real-time route guidance between any two indexed points.",
      "Structured location indexing with category filtering.",
      "Built cross-platform from a single Flutter codebase.",
    ],
    stack: ["Flutter", "Dart", "Spatial Mapping", "Route Guidance"],
    role: "Mobile developer",
    year: "2024",
    repoUrl: "",
  },
  {
    id: "gold-price",
    title: "Gold Price Predictor",
    subtitle: "Regression forecasting on financial indicators",
    summary:
      "A machine learning regression model forecasting daily gold market prices from historical financial indicators.",
    overview:
      "Built end to end in Python: data ingestion and cleaning, feature engineering across historical indicators, model training with Scikit-Learn, and evaluation against held-out periods. Deployed as an interactive Streamlit application.",
    highlights: [
      "End-to-end data processing and feature engineering pipeline.",
      "Regression modelling with Scikit-Learn on historical market indicators.",
      "Performance evaluation for accurate predictive analytics.",
      "Interactive Streamlit deployment for live forecasting.",
    ],
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
    role: "Sole developer",
    year: "2025",
    liveUrl: "https://gold-price-predictor-by-nazmul-hosen.streamlit.app/",
    repoUrl: "",
  },
];
