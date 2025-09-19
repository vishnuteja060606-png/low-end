import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Globe, Wifi, Smartphone, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroLearning from "@/assets/hero-learning.jpg";
import appInterface from "@/assets/app-interface.jpg";

const Index = () => {
  const features = [
    {
      icon: Wifi,
      title: "Works Offline",
      description: "Access lessons even without internet connectivity"
    },
    {
      icon: Languages,
      title: "Local Languages",
      description: "Interactive content in your native language"
    },
    {
      icon: Smartphone,
      title: "Low-End Friendly",
      description: "Optimized for basic smartphones and tablets"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with learners and teachers worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Digital Learning for
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Everyone, Everywhere
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering rural communities with accessible digital literacy education. 
                Learn at your own pace, in your own language, even offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg">
                  <Link to="/student">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/teacher">I'm a Teacher</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroLearning} 
                  alt="Diverse students learning with tablets and books in a rural classroom setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Accessibility
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for rural and underserved communities with limited connectivity and resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={appInterface} 
                  alt="Digital tablet showing interactive educational content with colorful subject icons"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Interactive Learning Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Engage with multimedia content, interactive exercises, and progress tracking 
                designed to make digital literacy accessible and enjoyable for all skill levels.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Self-paced digital literacy modules</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Content in multiple local languages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Teacher dashboards and progress tracking</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent">
                <Link to="/student">
                  Try Demo Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of learners already improving their digital skills with EduAccess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link to="/student">Start as Student</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/teacher">Join as Teacher</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
