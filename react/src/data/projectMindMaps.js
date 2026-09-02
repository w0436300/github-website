/**
 * Mind-map content for case study pages (XMind-style radial layout).
 * Fieldwork — Banshan Design Engineering studio delivery platform.
 */

export const fieldworkMindMap = {
  title: 'Fieldwork',
  centerLabel: 'Banshan Design Engineering',
  branches: [
    {
      id: 'problem',
      index: '01',
      title: 'Problem & context',
      subtitle: 'Why the studio needed a system',
      color: '#ef4444',
      side: 'left',
      blocks: [
        {
          title: 'Unstructured intake',
          items: [
            'Enquiries arrived with uneven briefs and attachments',
            'Commercial context scattered across chat and spreadsheets',
            'Scoping slow and inconsistent before a lead was appointed',
          ],
        },
        {
          title: 'Implicit delivery rules',
          items: [
            'Cinema fit-out vs. medical imaging: different gates, same confusion',
            'Sector sequences lived in senior memory—not in the product',
            'No shared answer for what “done” means at each phase',
          ],
        },
        {
          title: 'Siloed reporting',
          items: [
            'Weekly status lived outside the project record',
            'Directors could not connect progress to portfolio risk',
            'Reporting detached from milestones and delivery work',
          ],
        },
      ],
    },
    {
      id: 'architecture',
      index: '04',
      title: 'Information architecture',
      subtitle: 'Navigation & shared model',
      color: '#22c55e',
      side: 'left',
      blocks: [
        {
          title: 'Projects',
          items: [
            'Phase summary counts on the dashboard',
            'Filterable table: client, lead, issues, due dates',
            'Project record: Delivery · Brief · Activity',
          ],
        },
        {
          title: 'Enquiries · Milestones',
          items: [
            'Enquiry queue with triage status and wait time',
            'Convert to project without re-entering context',
            'Cross-project timeline: due this week, sector gates, owner & phase',
          ],
        },
        {
          title: 'Company · prototype',
          items: [
            'Weekly reports and delivery standards',
            'Responsive HTML/CSS/JS high-fidelity prototype',
            'Workspace switcher: Fieldwork ↔ Knowledge Hub',
          ],
        },
      ],
    },
    {
      id: 'dataflow',
      index: '05',
      title: 'Data flow',
      subtitle: 'Enquiry to Closed',
      color: '#3b82f6',
      side: 'left',
      listStyle: 'alpha',
      blocks: [
        {
          marker: 'A',
          title: 'Brief capture',
          items: ['Service type and scope narrative', 'File drop and parent-project link', 'New enquiry wizard · Step 1'],
        },
        {
          marker: 'B',
          title: 'Client & site',
          items: ['Client identity and site context', 'Structured capture on one enquiry record', 'New enquiry wizard · Step 2'],
        },
        {
          marker: 'C',
          title: 'Qualification',
          items: ['Commercial fit assessment', 'Sector assignment (cinema, pet hospital, imaging, etc.)', 'New enquiry wizard · Step 3'],
        },
        {
          marker: 'D',
          title: 'Project record',
          items: ['Enquiry converts to project in one action', 'Project lead appointed', 'Sector template applied · milestones initialized'],
        },
        {
          marker: 'E',
          title: 'Delivery loop',
          items: [
            'Delivery tab: phase position + sector gates',
            'Structured brief stays visible beside delivery work',
            'Peek preview ↔ full record for deep work',
          ],
        },
        {
          marker: 'F',
          title: 'Portfolio output',
          items: ['Weekly reports attached to the work', 'Cross-project milestone timeline', 'Handover → Closed archive'],
        },
      ],
    },
    {
      id: 'journey',
      index: '02',
      title: 'User journey',
      subtitle: 'How roles complete delivery',
      color: '#f97316',
      side: 'right',
      listStyle: 'number',
      blocks: [
        {
          marker: '1',
          title: 'Project lead',
          items: [
            'Review pipeline · filter portfolio by phase',
            'Scope enquiry · qualify and convert',
            'Assign team · track milestones · close and report',
          ],
        },
        {
          marker: '2',
          title: 'Contributor',
          items: [
            'See assigned work · accept brief',
            'Update progress · flag blockers',
            'Follow sector gates on the Delivery tab',
          ],
        },
        {
          marker: '3',
          title: 'Director',
          items: [
            'Scan portfolio health',
            'Approve sector gates · read weekly reports',
            'Intervene on risk · read delivery standards',
          ],
        },
        {
          marker: '4',
          title: 'Six-phase lifecycle',
          items: [
            'Scoping → Design → Construction',
            'Acceptance → Handover → Closed',
            'Dashboard, table, and milestones share one lifecycle language',
          ],
        },
      ],
    },
    {
      id: 'capabilities',
      index: '03',
      title: 'Core capabilities',
      subtitle: 'What the system does',
      color: '#eab308',
      side: 'right',
      blocks: [
        {
          title: 'Portfolio scanning',
          items: [
            'Phase boxes for fast filtering on the dashboard',
            'Issue signals upfront: overdue, on hold',
            'Client and sector views across building types',
          ],
        },
        {
          title: 'Peek preview',
          items: [
            'Row selection opens a side peek—the table stays visible',
            'Next milestone and phase stepper lead the hierarchy',
            '“Open full project” is an explicit deep-work entry',
          ],
        },
        {
          title: 'Structured brief',
          items: [
            'Client · Site · Scope · Commercial · Files',
            'Kept adjacent to delivery so scope stays aligned',
          ],
        },
        {
          title: 'Cross-project rhythm',
          items: [
            'Milestones timeline across projects',
            'Weekly reports: sources, done, next week',
            'Lightweight portfolio pulse for directors',
          ],
        },
      ],
    },
    {
      id: 'standards',
      index: '06',
      title: 'Delivery & assurance',
      subtitle: 'How standards land in practice',
      color: '#8b5cf6',
      side: 'right',
      blocks: [
        {
          title: 'Delivery standards',
          items: [
            'Exit criteria documented for every lifecycle phase',
            'Sector gate sequences live in the product—not oral tradition',
            'Owner · Contributor · Director authority boundaries explicit',
          ],
        },
        {
          title: 'Sector templates',
          items: [
            'Cinema fit-out gate sequence',
            'Pet hospital checkpoints',
            'Medical imaging equipment and acceptance nodes',
          ],
        },
        {
          title: 'Governance & audit',
          items: [
            'Enquiry conversion retains context—no duplicate entry',
            'Activity logs comments, assignments, and system events',
            'Decisions traceable when leads change or phases move',
          ],
        },
      ],
    },
  ],
};

export const projectMindMaps = {
  'project-request-collaboration': fieldworkMindMap,
};
