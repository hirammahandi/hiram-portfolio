import { Resend } from "resend";
import { SendMessageButton } from "./send-message-button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { EmailTemplate } from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

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
                const body = Object.fromEntries(formData.entries()) as Record<
                  "name" | "email" | "message",
                  string
                >;

                const { data, error } = await resend.emails.send({
                  from: `${body.name} <onboarding@resend.dev>`,
                  to: ["hiramhernandezpena@gmail.com"],
                  subject: "Portfolio Contact Form",
                  react: EmailTemplate({
                    firstName: body.name,
                    message: body.message,
                  }),
                });

                console.log({ data, error });
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
