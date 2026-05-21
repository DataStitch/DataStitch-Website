import { ConsultancyNav } from '@/components/consultancy/consultancy-nav';
import { ConsultancyHero } from '@/components/consultancy/consultancy-hero';
import { ConsultancyServicesTagline } from '@/components/consultancy/consultancy-services-tagline';
import { ConsultancyServiceSection } from '@/components/consultancy/consultancy-service-section';
import { QuickScanDemo } from '@/components/consultancy/quickscan-demo';
import { RetainerDemo } from '@/components/consultancy/retainer-demo';
import { ProjectsDemo } from '@/components/consultancy/projects-demo';
import { FractionalDemo } from '@/components/consultancy/fractional-demo';
import { VirtualMentorDemo } from '@/components/consultancy/virtual-mentor-demo';
import { ConsultancyServicesOverview } from '@/components/consultancy/consultancy-services-overview';
import { ConsultancyEngagementJourney } from '@/components/consultancy/consultancy-engagement-journey';
import { ConsultancyWhySuchure } from '@/components/consultancy/consultancy-why-suchure';
import { ConsultancyTestimonials } from '@/components/consultancy/consultancy-testimonials';
import { ConsultancyFooter } from '@/components/consultancy/consultancy-footer';

export default function ConsultancyPage() {
  return (
    <main>
      <ConsultancyNav />
      <ConsultancyHero />
      <ConsultancyServicesTagline />

      {/* 1. QuickScan Diagnostic */}
      <ConsultancyServiceSection
        label="QuickScan Diagnostic"
        headline="Know where your AI stands — in four days."
        description="A structured, fixed-price diagnostic that delivers a governance heatmap of your AI estate against UK GDPR, the NDPA 2023, the EU AI Act, and ISO/IEC 42001. You upload your architecture. We analyse. You receive a prioritised remediation roadmap on day four."
        features={[
          {
            title: '4-step secure intake',
            description: 'Organisation profile, AI tool inventory, architecture upload, governance questionnaire',
          },
          {
            title: 'Risk heatmap output',
            description: 'D3-rendered visualisation across data lineage, model versioning, explainability & bias',
          },
          {
            title: 'Prioritised remediation roadmap',
            description: 'Ranked by regulatory exposure, ready to brief your board',
          },
          {
            title: 'Audit Log PDF',
            description: 'Signed, encrypted, timestamped. Evidence you can hand to your regulator',
          },
        ]}
        ctaLabel="Start QuickScan"
        demoNode={<QuickScanDemo />}
        demoBg="#eef9f8"
        reversed={false}
      />

      {/* 2. AI Ethics Retainer */}
      <ConsultancyServiceSection
        label="AI Ethics Retainer"
        headline="Continuous governance. Measurable assurance."
        description="Our flagship monthly engagement. A senior Suchure reviewer is assigned to your organisation. We monitor your production models for bias drift, distribution shift, and wellbeing indicators — and deliver a board-grade Power BI dashboard your CDO and CIO can open in real time."
        features={[
          {
            title: 'Live Power BI retainer dashboard',
            description: 'Bias scores, PSI drift, wellbeing indicators — updated continuously',
          },
          {
            title: 'Threshold breach alerts',
            description: 'Non-dismissible critical alerts routed to your primary executive within minutes',
          },
          {
            title: 'Technical Assurance Vault',
            description: 'Encrypted document portal with customer-managed keys. Upload. Review. Audit trail.',
          },
          {
            title: 'Monthly board-ready PDF export',
            description: 'One click. A regulator-grade evidence file on your desktop.',
          },
        ]}
        ctaLabel="Request Proposal"
        demoNode={<RetainerDemo />}
        demoBg="#ecf5f4"
        reversed={true}
      />

      {/* 3. Consulting Projects */}
      <ConsultancyServiceSection
        label="Consulting Projects"
        headline="End-to-end programme delivery."
        description="For organisations undergoing a meaningful AI transformation: the build-out of a new governance framework, a Microsoft Fabric migration, an AI Risk Management function stood up from scratch. We deliver the programme — not a deck. Measurable outcomes tied to contractual milestones."
        features={[
          {
            title: 'Governance Framework Design',
            description: 'ISO 42001-aligned. Board-approved. Operationalised in your tooling.',
          },
          {
            title: 'Microsoft Fabric & Azure AI Migration',
            description: 'Data platform modernisation with governance baked in from day one',
          },
          {
            title: 'AI Risk Function Build-Out',
            description: 'Roles, responsibilities, tooling, and processes — ready to hand to your team',
          },
          {
            title: 'Regulator Readiness Programme',
            description: 'Pre-audit assurance engagement for FCA, ICO, or NDPA inspection',
          },
        ]}
        ctaLabel="Scope a Project"
        demoNode={<ProjectsDemo />}
        demoBg="#eef4f2"
        reversed={false}
      />

      {/* 4. Fractional Support */}
      <ConsultancyServiceSection
        label="Fractional Support"
        headline="Embedded expertise. Without the full-time overhead."
        description="A dedicated bank of hours from our senior practitioner roster — AI Risk Engineers, MLOps leads, Governance Architects, Data Platform specialists. They sit in your Slack, join your standups, ship real work. You control the priority. We control the quality."
        features={[
          {
            title: 'Named fractional leads',
            description: 'Same person every engagement — not a rotating resource pool',
          },
          {
            title: 'Bank of Hours model',
            description: '40 hours/month minimum. Draw down as needed across the month.',
          },
          {
            title: 'Full-stack capability',
            description: 'Power Platform, Azure AI, Copilot Studio, Dynamics 365, Microsoft Fabric',
          },
          {
            title: 'Knowledge transfer by default',
            description: 'Your team learns as we build. We leave you empowered, not dependent.',
          },
        ]}
        ctaLabel="Book Consultation Call"
        demoNode={<FractionalDemo />}
        demoBg="#edfaf8"
        reversed={true}
      />

      {/* 5. Virtual Mentor */}
      <ConsultancyServiceSection
        label="Virtual Mentor"
        headline="Senior expertise. On-demand. Within the week."
        description="When your team hits a wall and needs a senior voice in the room — fast. Book a 30 or 60-minute session with a Suchure practitioner. Come with a specific problem. Leave with a concrete answer. Every session is recorded, transcribed, and added to your internal knowledge base."
        features={[
          {
            title: 'Book in under 5 minutes',
            description: 'Availability window open daily. Microsoft Teams meeting auto-generated.',
          },
          {
            title: 'Matched to your problem',
            description: 'Topic tagging routes to the right practitioner — no generalist triage',
          },
          {
            title: 'Transcribed & indexed',
            description: 'Session becomes a searchable asset in your JIT Workshop Library',
          },
          {
            title: 'Bundle & save',
            description: 'Pre-purchase session packs for your whole team',
          },
        ]}
        ctaLabel="Book a Session"
        demoNode={<VirtualMentorDemo />}
        demoBg="#f0f9f8"
        reversed={false}
      />

      <ConsultancyServicesOverview />
      <ConsultancyEngagementJourney />
      <ConsultancyWhySuchure />
      <ConsultancyTestimonials />
      <ConsultancyFooter />
    </main>
  );
}
