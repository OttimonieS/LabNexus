import { Brain, Code, Smartphone, Lock, Database, TrendingUp } from "lucide-react";

export const skills = [
  {
    id: 1,
    icon: Code,
    title: "Full Stack Development",
    description:
      "Shipping production web apps with modern frontend and backend stacks.",
    tags: ["React", "Tailwind", "Laravel", "Firebase"],
    metric: "5+ production projects",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Engineering",
    description:
      "Native Android and iOS apps with a focus on UX, performance, and reliability.",
    tags: ["Kotlin", "Swift", "Android Studio", "Xcode"],
    metric: "iOS & Android releases",
  },
  {
    id: 3,
    icon: Brain,
    title: "Applied ML",
    description:
      "Practical ML pipelines and model fine tuning for real world tasks.",
    tags: ["TensorFlow", "Pandas", "Hugging Face", "ONNX"],
    metric: "End-to-end ML prototypes",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Web3 & FinTech",
    description:
      "Integrating wallets, exchanges, and trading data into user facing products.",
    tags: ["Phantom", "Binance APIs", "DexScreener", "Wallet integrations"],
    metric: "Deployed trading integrations",
  },
  {
    id: 5,
    icon: Lock,
    title: "Decentralized Identity",
    description:
      "Privacy first authentication and identity flows using modern primitives.",
    tags: ["Polygon ID", "Passkeys", "Ceramic", "zk proofs"],
    metric: "Zero data leaks",
  },
  {
    id: 6,
    icon: Database,
    title: "Data Engineering",
    description:
      "Scalable ingestion and processing pipelines with attention to accessibility.",
    tags: ["SQL", "TimescaleDB", "Apache Beam", "Google Sheets"],
    metric: "4.2M records / hour",
  },
];
