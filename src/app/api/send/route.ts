import { EmailTemplate } from "@/components/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${body.name} <onboarding@resend.dev>`,
      to: ["hiramhernandezpena@gmail.com"],
      subject: "Portfolio Contact Form",
      react: EmailTemplate({ firstName: body.name, message: body.message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
