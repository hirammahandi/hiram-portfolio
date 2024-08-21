import { portfolioData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const WorkSection = () => {
  return (
    <section
      id="work"
      className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-muted-foreground">
            Check out my work history and responsibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.workExperience.map((work) => (
            <Card key={work.company} className="hover:bg-muted transition-all">
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>{work.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
