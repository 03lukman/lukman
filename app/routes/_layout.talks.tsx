import type { MetaFunction } from "@vercel/remix";
import { Card } from "~/components/Card";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import type { Talk } from "~/models/talks";
import { conferences, meetups, podcasts } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Certificates - Lukman Nurhakim",
  },
  {
    name: "description",
    content: "A collection of certificates earned by Lukman Nurhakim.",
  },
];

function CertificatesSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  id,
  title,
  description,
  event,
  cta,
  href,
}: {
  id: string;
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article" id={id}>
      <Card.Title as="h3" to={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

function mapCertificateToAppearance(talk: Talk) {
  // TODO: Render more resources if available
  return (
    <Appearance
      key={talk.slug}
      id={talk.slug}
      href={talk.resources[0].href}
      title={talk.title}
      description={talk.description}
      cta={talk.resources[0].label}
      event={`${talk.event}, ${new Date(talk.date).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`}
    />
  );
}

export default function Certificates() {
  return (
    <SimpleLayout
      title="My Certificates"
      intro="Here are some of the certificates I have earned throughout my career."
    >
      <div className="space-y-20">
        <CertificatesSection title="Conferences">
          {conferences.map(mapCertificateToAppearance)}
        </CertificatesSection>
        <CertificatesSection title="Podcasts">
          {podcasts.map(mapCertificateToAppearance)}
        </CertificatesSection>
        <CertificatesSection title="Meetups">
          {meetups.map(mapCertificateToAppearance)}
        </CertificatesSection>
      </div>
    </SimpleLayout>
  );
}
