import { MessageCircle, Users, Heart, Share, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "How to teach digital literacy in rural areas?",
      author: "Sarah Teacher",
      replies: 12,
      likes: 8,
      timeAgo: "2 hours ago",
      category: "Teaching Tips",
      isHot: true,
    },
    {
      id: 2,
      title: "Best offline learning resources",
      author: "John Educator",
      replies: 7,
      likes: 15,
      timeAgo: "4 hours ago",
      category: "Resources",
      isHot: false,
    },
    {
      id: 3,
      title: "Student motivation strategies",
      author: "Grace Mentor",
      replies: 23,
      likes: 31,
      timeAgo: "1 day ago",
      category: "Student Support",
      isHot: true,
    },
  ];

  const topContributors = [
    { name: "Alice Mutua", contributions: 47, role: "Teacher" },
    { name: "John Kimani", contributions: 32, role: "Student" },
    { name: "Grace Wanjiku", contributions: 28, role: "Mentor" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Learning Community
          </h1>
          <p className="text-muted-foreground">
            Connect, share knowledge, and support each other's learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Discussions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Discussions</CardTitle>
                  <Button>Start Discussion</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="border-b border-border pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {discussion.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-foreground hover:text-primary cursor-pointer">
                              {discussion.title}
                            </h3>
                            {discussion.isHot && (
                              <Badge className="bg-accent text-accent-foreground">Hot</Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <span>by {discussion.author}</span>
                            <Badge variant="outline">{discussion.category}</Badge>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                              <MessageCircle className="h-4 w-4" />
                              <span>{discussion.replies} replies</span>
                            </button>
                            <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                              <Heart className="h-4 w-4" />
                              <span>{discussion.likes} likes</span>
                            </button>
                            <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary">
                              <Share className="h-4 w-4" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Community Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Members</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discussions</span>
                    <span className="font-medium">389</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resources Shared</span>
                    <span className="font-medium">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="font-medium">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {contributor.contributions} contributions • {contributor.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask a Question
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share className="h-4 w-4 mr-2" />
                  Share Resource
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Study Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;