import { Workflow as devops, Server, Activity } from "lucide-react";
const DataService = [
  {
    id: 1,
    title: "DevOps & Automation Consulting",
    description:
      "We design, build, and optimize Continuous Integration/Continuous Deployment (CI/CD) pipelines.",
    iconSrc: devops,
    aos: "fade-up",
    delay: 500,
  },
  {
    id: 2,
    title: "Server Configuration and Administration",
    description:
      "Handles configuration, troubleshooting , and maintenance of Linux-based systems and servers.",
    iconSrc: Server,
    aos: "fade-up",
    delay: 1200,
  },
  {
    id: 3,
    title: "Infrastructure Monitoring & Logging",
    description:
      "Set up monitoring systems using Grafana and Prometheus to track health and performance.",
    iconSrc: Activity,
    aos: "fade-up",
    delay: 1700,
  },
];

export default DataService;
