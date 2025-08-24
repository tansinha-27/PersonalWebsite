import { MetricCard } from "@/components/dash/MetricCard";
import { ChartCard } from "@/components/dash/ChartCard";
import { FeatureComparison } from "@/components/dash/FeatureComparison";
import { TechStack } from "@/components/dash/TechStack";
import { RecentUpdates } from "@/components/dash/RecentUpdates";
import { Activity, Users, TrendingUp, Code2, Zap, Database } from "lucide-react";
import '../app/globals.css'

const Dashboard = () => {
  // Sample data for charts
  const performanceData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 61 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 67 },
    { month: 'Jul', value: 73 },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 120 },
    { month: 'Feb', users: 145 },
    { month: 'Mar', users: 135 },
    { month: 'Apr', users: 180 },
    { month: 'May', users: 165 },
    { month: 'Jun', users: 200 },
    { month: 'Jul', users: 225 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 15000 },
    { month: 'Feb', revenue: 18000 },
    { month: 'Mar', revenue: 16500 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 19800 },
    { month: 'Jun', revenue: 25000 },
    { month: 'Jul', revenue: 28500 },
  ];

  const techStackItems = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'DevOps' },
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
    <div className="dark">
    <div className="min-h-screen bg-background">
      <div className="w-full space-y-8 p-6">
        {/* Header */}
        <div className="text-center space-y-4">
        {/* <div className="space-y-4 p-4"> */}
  {/* <div className="bg-success text-success-foreground p-4 rounded">Success!</div>
  <div className="bg-primary text-primary-foreground p-4 rounded">Primary Color</div>
</div> */}
          <h1 className="text-4xl font-bold text-foreground">
            Professional <span className="text-cyan-300">Dashboard</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modern, data-driven dashboard providing comprehensive insights and analytics 
            for enhanced decision-making and performance monitoring.
          </p>
        </div>

        {/* KPI Metrics */}
        <div>
          {/* <h2 className="text-xl font-semibold text-cyan-300 mb-4">KPI Dashboard</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Users"
              value="1,247"
              subtitle="Active Users"
              icon={Users}
              trend={{ value: 12.5, isPositive: true }}
            />
            <MetricCard
              title="Performance Score"
              value="94"
              subtitle="System Health"
              icon={Activity}
              trend={{ value: 5.2, isPositive: true }}
            />
            <MetricCard
              title="Revenue"
              value="$28.5K"
              subtitle="Monthly"
              icon={TrendingUp}
              trend={{ value: 8.1, isPositive: true }}
            />
            <MetricCard
              title="API Calls"
              value="156K"
              subtitle="This Month"
              icon={Database}
              trend={{ value: 3.2, isPositive: false }}
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Performance Trends"
            data={performanceData}
            type="area"
            dataKey="value"
            xAxisKey="month"
            height={300}
          />
          <ChartCard
            title="User Growth"
            data={userGrowthData}
            type="line"
            dataKey="users"
            xAxisKey="month"
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
            currentLabel="Our Platform"
            competitorLabel="Competitors"
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
