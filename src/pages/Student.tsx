import { Play, Lock, CheckCircle, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Student = () => {
  const lessons = [
    {
      id: 1,
      title: "Basic Computer Skills",
      language: "English",
      progress: 100,
      status: "completed",
      duration: "45 min",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Internet Safety",
      language: "Swahili",
      progress: 65,
      status: "in-progress",
      duration: "30 min",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Digital Communication",
      language: "English",
      progress: 0,
      status: "locked",
      duration: "35 min",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Online Research Skills",
      language: "French",
      progress: 0,
      status: "available",
      duration: "40 min",
      rating: 4.6,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "in-progress":
        return <Play className="h-5 w-5 text-accent" />;
      case "locked":
        return <Lock className="h-5 w-5 text-muted-foreground" />;
      default:
        return <Play className="h-5 w-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "in-progress":
        return "bg-accent text-accent-foreground";
      case "locked":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Student!
          </h1>
          <p className="text-muted-foreground">
            Continue your digital literacy journey
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-accent" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">25%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
            </div>
            <Progress value={25} className="mt-4" />
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`transition-all duration-200 hover:shadow-md ${
                lesson.status === "locked" ? "opacity-60" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{lesson.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-accent" />
                        <span>{lesson.rating}</span>
                      </div>
                    </div>
                  </div>
                  {getStatusIcon(lesson.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{lesson.language}</Badge>
                    <Badge className={getStatusColor(lesson.status)}>
                      {lesson.status.replace("-", " ")}
                    </Badge>
                  </div>

                  {lesson.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <Progress value={lesson.progress} />
                    </div>
                  )}

                  <Button
                    className="w-full"
                    disabled={lesson.status === "locked"}
                    variant={lesson.status === "in-progress" ? "default" : "outline"}
                  >
                    {lesson.status === "completed" ? "Review" : 
                     lesson.status === "in-progress" ? "Continue" :
                     lesson.status === "locked" ? "Locked" : "Start"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;