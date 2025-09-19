import { Users, TrendingUp, Clock, Award, Eye, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import teacherDashboard from "@/assets/teacher-dashboard.jpg";

const Teacher = () => {
  const students = [
    { id: 1, name: "Alice Mutua", progress: 85, lessons: 12, status: "active" },
    { id: 2, name: "John Kimani", progress: 45, lessons: 8, status: "struggling" },
    { id: 3, name: "Grace Wanjiku", progress: 92, lessons: 15, status: "excellent" },
    { id: 4, name: "Peter Ochieng", progress: 67, lessons: 10, status: "active" },
    { id: 5, name: "Mary Akinyi", progress: 78, lessons: 11, status: "active" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-success text-success-foreground";
      case "struggling":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const totalStudents = students.length;
  const averageProgress = Math.round(
    students.reduce((sum, student) => sum + student.progress, 0) / totalStudents
  );
  const strugglingStudents = students.filter(s => s.status === "struggling").length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and support your students' learning journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">Active learners</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{averageProgress}%</div>
              <p className="text-xs text-muted-foreground">Class average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Need Help</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{strugglingStudents}</div>
              <p className="text-xs text-muted-foreground">Students struggling</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completions</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">23</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Student Progress List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Student Progress</span>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{student.name}</h3>
                        <Badge className={getStatusColor(student.status)}>
                          {student.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{student.lessons} lessons completed</span>
                        <span>{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analytics Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Learning Analytics</span>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-1" />
                  Configure
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={teacherDashboard} 
                  alt="Teacher dashboard analytics showing student progress charts and statistics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Most Popular Lesson:</span>
                  <p className="font-medium">Basic Computer Skills</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Average Session:</span>
                  <p className="font-medium">28 minutes</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Best Performing:</span>
                  <p className="font-medium">Digital Communication</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Needs Focus:</span>
                  <p className="font-medium">Internet Safety</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teacher;