import { MetricCard } from "@/components/dash/MetricCard";
import { ChartCard } from "@/components/dash/ChartCard";
import { FeatureComparison } from "@/components/dash/FeatureComparison";
import { TechStack } from "@/components/dash/TechStack";
import { RecentUpdates } from "@/components/dash/RecentUpdates";
import { Activity, Users, TrendingUp, Database } from "lucide-react";
import '../app/globals.css'
import { Montserrat} from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300'], // Specify desired weights
  subsets: ['latin'],
  display: 'swap', // Optimizes font loading
  
});


const Dashboard = () => {
  // Sample data for charts
  // const performanceData = [
  //   { month: 'Jan', value: 45 },
  //   { month: 'Feb', value: 52 },
  //   { month: 'Mar', value: 48 },
  //   { month: 'Apr', value: 61 },
  //   { month: 'May', value: 55 },
  //   { month: 'Jun', value: 67 },
  //   { month: 'Jul', value: 73 },
  // ];

  // const userGrowthData = [
  //   { month: 'Jan', users: 120 },
  //   { month: 'Feb', users: 145 },
  //   { month: 'Mar', users: 135 },
  //   { month: 'Apr', users: 180 },
  //   { month: 'May', users: 165 },
  //   { month: 'Jun', users: 200 },
  //   { month: 'Jul', users: 225 },
  // ];

  const performanceData = [
    { month: 'Jan', value: 45 },  // baseline
    { month: 'Feb', value: 49 },  // small gain
    { month: 'Mar', value: 47 },  // dip (struggled with new concepts)
    { month: 'Apr', value: 54 },  // project-driven boost
    { month: 'May', value: 55 },  // plateau
    { month: 'Jun', value: 59 },  // steady gain
    { month: 'Jul', value: 63 },  // applied new skills
    { month: 'Aug', value: 61 },  // small dip (burnout/revision)
    { month: 'Sep', value: 67 },  // recovery & growth
    { month: 'Oct', value: 70 },  // consistent practice
    { month: 'Nov', value: 68 },  // dip (harder material)
    { month: 'Dec', value: 75 },  // year-end push, peak
  ];
  const projectsPerQuarterData = [
    { quarter: 'Q1', projects: 2 },
    { quarter: 'Q2', projects: 1 },
    { quarter: 'Q3', projects: 3 },
    { quarter: 'Q4', projects: 1 },
  ];

  // const revenueData = [
  //   { month: 'Jan', revenue: 15000 },
  //   { month: 'Feb', revenue: 18000 },
  //   { month: 'Mar', revenue: 16500 },
  //   { month: 'Apr', revenue: 22000 },
  //   { month: 'May', revenue: 19800 },
  //   { month: 'Jun', revenue: 25000 },
  //   { month: 'Jul', revenue: 28500 },
  // ];

  const techStackItems = [
    { name: 'Python', category: 'Programming Languages' },
    { name: 'C++', category: 'Programming Languages' },
    { name: 'C#', category: 'Programming Languages' },
    { name: 'Java', category: 'Programming Languages' },
    { name: 'SQL', category: 'Programming Languages' },
    { name: 'Node.js', category: 'Frameworks & Libraries' },
    { name: 'React', category: 'Frameworks & Libraries' },
    { name: 'Next.js', category: 'Frameworks & Libraries' },
    { name: '.NET', category: 'Frameworks & Libraries' },
    { name: 'Playwright', category: 'Frameworks & Libraries' },
    { name: 'Langchain', category: 'Frameworks & Libraries' },
    { name: 'GitLab', category: 'Tools/Platforms' },
    { name: 'Docker', category: 'Tools/Platforms' },
    { name: 'Kubernetes/ KOB ', category: 'Tools/Platforms' },
    { name: 'Postman', category: 'Tools/Platforms' },
    { name: 'PowerBI', category: 'Tools/Platforms' },
    { name: 'Automation', category: 'Domains' },
    { name: 'Data Analysis', category: 'Domains' },
    { name: 'Full Stack Development', category: 'Domains' },
    { name: 'API testing', category: 'Domains' },
    { name: 'CI/CD', category: 'Domains' },
    { name: 'Agentic AI workflows', category: 'Domains' },
  ];

  const featureComparisonData = [
    { name: 'Real-time Analytics', current: 'full' as const, competitor: 'partial' as const },
    { name: 'Custom Dashboards', current: 'full' as const, competitor: 'none' as const },
    { name: 'API Integration', current: 'full' as const, competitor: 'full' as const },
    { name: 'Advanced Reporting', current: 'partial' as const, competitor: 'none' as const },
    { name: 'Team Collaboration', current: 'full' as const, competitor: 'partial' as const },
  ];

  const recentUpdates = [
    {
      type: 'improvement' as const,
      title: 'Enhanced Performance Metrics',
      description: 'Improved dashboard loading times by 40% and added real-time data streaming.',
      date: '2 days ago',
      projectLink: 'https://github.com/username/performance-optimization',
      blogLink: 'https://blog.example.com/performance-improvements'
    },
    {
      type: 'feature' as const,
      title: 'New Analytics Dashboard',
      description: 'Launched comprehensive analytics with custom visualization options.',
      date: '1 week ago',
      projectLink: 'https://github.com/username/analytics-dashboard'
    },
    {
      type: 'bug' as const,
      title: 'Fixed Data Synchronization',
      description: 'Resolved issues with data sync delays affecting real-time updates.',
      date: '1 week ago',
      projectLink: 'https://github.com/username/data-sync-fix',
      blogLink: 'https://blog.example.com/fixing-data-sync'
    },
  ];

  return (
<div className={`dark ${montserrat.className}`}>
    <div className="min-h-screen bg-background">
      <div className="w-full space-y-8 p-6">
        {/* Header */}
        <div className="text-center space-y-4">
        {/* <div className="space-y-4 p-4"> */}
  {/* <div className="bg-success text-success-foreground p-4 rounded">Success!</div>
  <div className="bg-primary text-primary-foreground p-4 rounded">Primary Color</div>
</div> */}
          <h1 className="text-4xl font-bold text-foreground">
            track wins. <span className="text-cyan-300">measure progress. </span><span className="text-cyan-400">showcase value.</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PS: metrics might or might not be totally biased
          </p>
        </div>

        {/* KPI Metrics */}
        <div>
          {/* <h2 className="text-xl font-semibold text-cyan-300 mb-4">KPI Dashboard</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Skill Proficiency Index"
              value="74%"
              subtitle="Tech/Non-Tech"
              icon={Users}
              trend={{ value: 12.5, isPositive: true }}
            />
            <MetricCard
              title="Impact Score"
              value="56"
              subtitle="Projects & Blogs delivered"
              icon={Activity}
              trend={{ value: 5.2, isPositive: true }}
            />
            <MetricCard
              title="Recognition Count"
              value="12"
              subtitle="Awards/Recognitions earned"
              icon={TrendingUp}
              trend={{ value: 8.1, isPositive: true }}
            />
            <MetricCard
              title="Procastination Downtime"
              value="3 hrs"
              subtitle="This Month"
              icon={Database}
              trend={{ value: 3.2, isPositive: false }}
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Skill Acquisition Score"
            data={performanceData}
            type="area"
            dataKey="value"
            xAxisKey="month"
            height={300}
          />
          <ChartCard
            title="Projects v/s Quarter"
            data={projectsPerQuarterData}
            type="line"
            dataKey="projects"
            xAxisKey="quarter"
            height={300}
          />
        </div>


        {/* Tech Stack and Feature Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TechStack
            title="Technology Stack"
            items={techStackItems}
          />
          <FeatureComparison
            title="Feature Comparison"
            features={featureComparisonData}
            currentLabel="Me"
            competitorLabel="Benchmark"
          />
        </div>

        {/* Recent Updates */}
        <RecentUpdates
          title="Recent Updates & Improvements"
          updates={recentUpdates}
        />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
