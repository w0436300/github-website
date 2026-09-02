/**
 * Product blueprint mind maps (XMind-style radial layout).
 * Fieldwork — studio delivery platform for Banshan Design Engineering.
 *
 * Reading order: 01 → 06 mirrors a product design narrative:
 * problem → journeys → capabilities → structure → flow → governance.
 */

export const fieldworkMindMap = {
  title: 'Fieldwork',
  centerLabel: 'Product blueprint',
  centerSubtitle: 'Governed delivery for interior design–engineering studios',
  legend: [
    { index: '01', label: 'Problem', color: '#ef4444' },
    { index: '02', label: 'Journeys', color: '#f97316' },
    { index: '03', label: 'Capabilities', color: '#ca8a04' },
    { index: '04', label: 'Structure', color: '#22c55e' },
    { index: '05', label: 'Flow', color: '#3b82f6' },
    { index: '06', label: 'Governance', color: '#8b5cf6' },
  ],
  branches: [
    {
      id: 'problem',
      index: '01',
      lens: 'Strategic frame',
      title: 'Problem framing',
      subtitle: 'Why delivery needed a system—not just a tracker',
      color: '#ef4444',
      side: 'left',
      blocks: [
        {
          title: 'Studio context',
          items: [
            'Banshan Design Engineering: interior fit-out across sectors',
            'Cinema, pet hospital, and medical imaging share a lifecycle—not the same gates',
            'Leads need portfolio visibility before they open any single record',
          ],
        },
        {
          title: 'Three design gaps',
          items: [
            'Intake: uneven briefs, attachments, and commercial context',
            'Rules: sector gate sequences lived in memory, not in software',
            'Reporting: weekly status detached from milestones and project work',
          ],
        },
        {
          title: 'Product intent',
          items: [
            'Connect enquiries, phased delivery, templates, milestones, and reporting',
            'Make “what done means” inspectable at every phase',
            'Give directors portfolio risk without re-entering data',
          ],
        },
      ],
    },
    {
      id: 'architecture',
      index: '04',
      lens: 'Information design',
      title: 'Product structure',
      subtitle: 'Navigation, objects, and shared vocabulary',
      color: '#22c55e',
      side: 'left',
      blocks: [
        {
          title: 'Operational surfaces',
          items: [
            'Projects — portfolio dashboard, filterable table, project record',
            'Enquiries — triage queue separate from in-flight work',
            'Milestones — cross-project timeline and due-this-week view',
          ],
        },
        {
          title: 'Studio standards',
          items: [
            'Company — weekly reports and delivery standards',
            'Delivery standards encode lifecycle and sector gate templates',
            'Role authority: owner, contributor, director',
          ],
        },
        {
          title: 'Core record model',
          items: [
            'One durable project record: Delivery · Brief · Activity',
            'Enquiry converts into the same record—no duplicate entry',
            'Shared systems: phase model, sector templates, ownership, audit',
          ],
        },
      ],
    },
    {
      id: 'dataflow',
      index: '05',
      lens: 'End-to-end flow',
      title: 'Value stream',
      subtitle: 'How work moves from enquiry to archive',
      color: '#3b82f6',
      side: 'left',
      listStyle: 'alpha',
      blocks: [
        {
          marker: 'A',
          title: 'Capture',
          items: ['Brief, attachments, and service scope', 'Wizard step 1 — narrative before complexity'],
        },
        {
          marker: 'B',
          title: 'Context',
          items: ['Client identity and site information', 'Wizard step 2 — one enquiry record'],
        },
        {
          marker: 'C',
          title: 'Qualify',
          items: ['Commercial fit and sector assignment', 'Wizard step 3 — appoint before pipeline entry'],
        },
        {
          marker: 'D',
          title: 'Activate',
          items: ['Enquiry → project conversion', 'Lead appointed · sector template · milestones seeded'],
        },
        {
          marker: 'E',
          title: 'Execute',
          items: ['Phase position and sector gates on Delivery tab', 'Peek for triage · full record for deep work'],
        },
        {
          marker: 'F',
          title: 'Close',
          items: ['Weekly report stays on the work', 'Handover → Closed · portfolio learns forward'],
        },
      ],
    },
    {
      id: 'journey',
      index: '02',
      lens: 'Experience model',
      title: 'User journeys',
      subtitle: 'Roles across Discover → Scope → Deliver → Assure → Close',
      color: '#f97316',
      side: 'right',
      listStyle: 'number',
      blocks: [
        {
          marker: '1',
          title: 'Project lead',
          items: [
            'Discover: review pipeline · filter by phase, client, sector',
            'Scope: qualify enquiry · convert · assign delivery team',
            'Deliver & assure: track gates · peek or open full record',
            'Close: weekly report · move to Handover / Closed',
          ],
        },
        {
          marker: '2',
          title: 'Contributor',
          items: [
            'See assigned work and accept structured brief',
            'Update progress on Delivery tab · flag blockers',
            'Complete sector gate milestones · hand over deliverables',
          ],
        },
        {
          marker: '3',
          title: 'Director',
          items: [
            'Scan portfolio health without opening every record',
            'Approve sector gates · read weekly rollup',
            'Intervene on risk · reference delivery standards',
          ],
        },
        {
          marker: '4',
          title: 'Lifecycle backbone',
          items: [
            'Scoping → Design → Construction → Acceptance → Handover → Closed',
            'Same phase language on dashboard, table, milestones, and detail',
          ],
        },
      ],
    },
    {
      id: 'capabilities',
      index: '03',
      lens: 'Product surface',
      title: 'Core capabilities',
      subtitle: 'What Fieldwork enables—not a feature laundry list',
      color: '#ca8a04',
      side: 'right',
      blocks: [
        {
          title: 'Portfolio intelligence',
          items: [
            'Phase boxes as a portfolio lens—not decorative counts',
            'Issue signals (overdue, on hold) before a record opens',
            'Client and sector filters for multi-building-type portfolios',
          ],
        },
        {
          title: 'Progressive disclosure',
          items: [
            'Row peek: compare projects without losing the table',
            'Action-first hierarchy: next milestone and phase stepper up top',
            'Explicit “open full project” for deliberate deep work',
          ],
        },
        {
          title: 'Scope integrity',
          items: [
            'Structured brief: client, site, scope, commercial, files',
            'Brief adjacent to delivery—alignment checks stay lightweight',
          ],
        },
        {
          title: 'Portfolio rhythm',
          items: [
            'Cross-project milestone timeline',
            'Weekly reports: sources, done, next week',
            'Director pulse without a separate reporting tool',
          ],
        },
      ],
    },
    {
      id: 'standards',
      index: '06',
      lens: 'Operating model',
      title: 'Governance & standards',
      subtitle: 'What makes delivery governed—not ad hoc',
      color: '#8b5cf6',
      side: 'right',
      blocks: [
        {
          title: 'Lifecycle standards',
          items: [
            'Exit criteria documented for every phase',
            'Phase defines what “done” means at each gate',
            'Standards page as inspectable studio operating model',
          ],
        },
        {
          title: 'Sector playbooks',
          items: [
            'Template-driven gates per building type',
            'Cinema fit-out · pet hospital · medical imaging sequences',
            'Same lifecycle language, different checkpoint paths',
          ],
        },
        {
          title: 'Accountability',
          items: [
            'Activity stream: comments, assignments, system events',
            'Context preserved when leads change or phases move',
            'Conversion and decisions traceable on the project record',
          ],
        },
      ],
    },
  ],
};

export const projectMindMaps = {
  'project-request-collaboration': fieldworkMindMap,
};
