import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Our Website</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is your starting point. Explore the various sections of our website to learn more.</p>
          <Link to="/china" className="text-blue-500 hover:underline">Learn more about China</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
