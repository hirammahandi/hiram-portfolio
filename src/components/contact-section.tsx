import { SendMessageButton } from "./send-message-button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-8"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
          <p className="text-muted-foreground">
            Get in touch with me for any inquiries or opportunities.
          </p>
        </div>
        <Card className="max-w-lg mx-auto w-full">
          <CardContent className="p-4">
            <form
              className="space-y-4"
              action={async (formData: FormData) => {
                "use server";

                const res = await fetch("http://localhost:3000/api/send", {
                  method: "POST",
                  body: JSON.stringify(Object.fromEntries(formData)),
                }).then((res) => res.json());

                console.log(res);
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  required
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex">
                <SendMessageButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
