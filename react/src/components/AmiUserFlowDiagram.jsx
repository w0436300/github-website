import { ArrowDown, ArrowRight } from 'lucide-react';

const cx = (...parts) => parts.filter(Boolean).join(' ');

function LegendSwatch({ className, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-600">
      <span className={cx('h-3 w-4 shrink-0 rounded-sm border border-slate-300/80', className)} />
      {label}
    </span>
  );
}

function MainStep({ children, className }) {
  return (
    <div
      className={cx(
        'rounded-lg bg-slate-900 px-2 py-2 text-center text-[10px] font-semibold leading-snug text-white shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

function ActionPill({ children, className }) {
  return (
    <div
      className={cx(
        'rounded-md border border-sky-300/80 bg-sky-50 px-2 py-1.5 text-center text-[9px] font-medium leading-tight text-sky-950',
        className
      )}
    >
      {children}
    </div>
  );
}

function OptionalBox({ children }) {
  return (
    <div className="rounded-lg border border-orange-300/90 bg-orange-50 px-2 py-2 text-center text-[9px] font-semibold leading-tight text-orange-950">
      {children}
    </div>
  );
}

function AdaptiveBox({ children, optional }) {
  return (
    <div
      className={cx(
        'rounded-md px-2 py-1.5 text-center text-[9px] font-medium leading-tight',
        optional
          ? 'border border-orange-300/90 bg-orange-50 text-orange-950'
          : 'border border-slate-300/80 bg-slate-200 text-slate-900'
      )}
    >
      {children}
    </div>
  );
}

function AiCircle({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full bg-emerald-500 px-2 text-center shadow-md ring-2 ring-emerald-600/30">
        <span className="text-[10px] font-black uppercase tracking-wide text-white">{title}</span>
        {subtitle && <span className="mt-1 text-[8px] font-medium leading-tight text-emerald-50">{subtitle}</span>}
      </div>
    </div>
  );
}

function AiPill({ children, subtitle }) {
  return (
    <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 px-2 py-2 text-center shadow-sm">
      <div className="text-[10px] font-bold text-emerald-900">{children}</div>
      {subtitle && <p className="mt-1 text-[8px] leading-tight text-emerald-800">{subtitle}</p>}
    </div>
  );
}

function StageTitle({ children }) {
  return (
    <p className="mb-2 text-center text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">{children}</p>
  );
}

function FlowConnector() {
  return (
    <>
      <div className="flex justify-center py-2 text-slate-400 md:hidden" aria-hidden>
        <ArrowDown className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="hidden shrink-0 items-center self-center px-0.5 text-slate-400 md:flex md:px-1" aria-hidden>
        <ArrowRight className="h-5 w-5" strokeWidth={2} />
      </div>
    </>
  );
}

export default function AmiUserFlowDiagram() {
  return (
    <div
      className="overflow-x-auto rounded-2xl border border-slate-200/90 p-4 shadow-sm md:p-6"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 border-b border-slate-200/80 pb-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Legend</span>
        <LegendSwatch className="bg-slate-900" label="Main step" />
        <LegendSwatch className="bg-sky-50" label="Action / output" />
        <LegendSwatch className="bg-orange-50" label="Optional" />
        <LegendSwatch className="bg-emerald-500" label="AI" />
        <LegendSwatch className="bg-slate-200" label="Adaptive trigger" />
      </div>

      <p className="mb-4 text-center text-xs font-semibold text-slate-800 md:text-sm">
        User flow — the complete learner journey
      </p>

      <div className="min-w-0 pb-2">
        <div className="flex flex-col md:min-w-[56rem] md:flex-row md:items-start md:justify-between md:gap-0 lg:min-w-[64rem]">
          {/* 1 · Onboarding */}
          <div className="flex min-w-0 flex-1 flex-col md:max-w-[11rem]">
            <StageTitle>Onboarding</StageTitle>
            <div className="flex flex-col gap-2">
              <MainStep>1 · Enter goal</MainStep>
              <MainStep>2 · Choose learning style</MainStep>
              <div className="flex flex-wrap justify-center gap-1">
                <ActionPill className="flex-1 min-w-[4.5rem]">Interactive</ActionPill>
                <ActionPill className="flex-1 min-w-[4.5rem]">Textual</ActionPill>
                <ActionPill className="flex-1 min-w-[4.5rem]">Visual</ActionPill>
              </div>
              <div className="flex flex-wrap justify-center gap-1">
                <MainStep className="!py-1.5 text-[9px]">Balanced</MainStep>
                <MainStep className="!py-1.5 text-[9px]">Concise</MainStep>
              </div>
              <OptionalBox>3 · Upload résumé (optional)</OptionalBox>
            </div>
          </div>

          <FlowConnector />

          {/* 2 · AI agent */}
          <div className="flex min-w-0 flex-1 flex-col items-center md:max-w-[9.5rem]">
            <StageTitle>AI agent</StageTitle>
            <AiCircle title="Ami AI" subtitle="Identifies skill gaps + explains why" />
          </div>

          <FlowConnector />

          {/* 3 · Skill gap review */}
          <div className="flex min-w-0 flex-1 flex-col md:max-w-[11rem]">
            <StageTitle>Skill gap review</StageTitle>
            <div className="flex flex-col gap-2">
              <MainStep>Review AI skill inferences</MainStep>
              <div className="grid grid-cols-1 gap-1.5">
                <ActionPill>Adjust Current Level slider</ActionPill>
                <ActionPill>Toggle ignore / add to plan</ActionPill>
              </div>
              <MainStep>Generate learning path</MainStep>
            </div>
          </div>

          <FlowConnector />

          {/* 4 · Learn */}
          <div className="flex min-w-0 flex-1 flex-col md:max-w-[11rem]">
            <StageTitle>Learn</StageTitle>
            <div className="flex flex-col gap-2">
              <MainStep>Learning path</MainStep>
              <div className="grid grid-cols-1 gap-1.5">
                <ActionPill>Sequential (locked order)</ActionPill>
                <ActionPill>Global (open map)</ActionPill>
              </div>
              <MainStep>Session delivery</MainStep>
              <div className="flex flex-wrap justify-center gap-1">
                <ActionPill className="min-w-[3.25rem] flex-1">Text</ActionPill>
                <ActionPill className="min-w-[3.25rem] flex-1">Diagram</ActionPill>
                <ActionPill className="min-w-[3.25rem] flex-1">Video</ActionPill>
                <ActionPill className="min-w-[3.25rem] flex-1">Audio</ActionPill>
              </div>
              <MainStep>Quiz</MainStep>
            </div>
          </div>

          <FlowConnector />

          {/* 5 · Continuous adaptation */}
          <div className="flex min-w-0 flex-1 flex-col md:max-w-[11rem]">
            <StageTitle>Continuous adaptation</StageTitle>
            <div className="flex flex-col gap-2">
              <MainStep>Profile update</MainStep>
              <AdaptiveBox>Quiz result → cognitive level</AdaptiveBox>
              <AdaptiveBox>Chatbot query → style pref</AdaptiveBox>
              <AdaptiveBox optional>Manual → Profile page</AdaptiveBox>
              <div className="rounded-lg bg-emerald-500 px-2 py-2 text-center text-[9px] font-semibold text-white shadow-sm">
                Adapts next session
              </div>
            </div>
          </div>

          <FlowConnector />

          {/* 6 · Always accessible */}
          <div className="flex min-w-0 flex-1 flex-col md:max-w-[12rem]">
            <StageTitle>Always accessible</StageTitle>
            <div className="flex flex-col gap-2">
              <div>
                <MainStep>Profile</MainStep>
                <p className="mt-1 text-[8px] leading-snug text-slate-600">
                  Update learning style · new résumé
                </p>
              </div>
              <div>
                <MainStep>Analytics</MainStep>
                <p className="mt-1 text-[8px] leading-snug text-slate-600">
                  Skill radar · progress · history
                </p>
              </div>
              <AiPill subtitle="Bias audits · citations · data use">AI Transparency</AiPill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
