import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { sourceSansPro } from '../styles/caseStudyTheme.js';

const BASE = import.meta.env.BASE_URL || '/';
const PERSONAL_PHOTO = `${BASE}img/photo.png`;
const CERTIFICATE_IMAGES = [`${BASE}img/certificate.png`];

/** Filenames in `public/img/gallery/` (keep in sync with files on disk). */
const GALLERY_FILES = ['photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg', 'photo9.jpg'];

const PHOTO_GRID_ITEMS = [
  { src: PERSONAL_PHOTO, alt: 'Portrait', caption: 'Portrait' },
  ...GALLERY_FILES.map((file) => ({
    src: `${BASE}img/gallery/${file}`,
    alt: `Gallery — ${file.replace(/\.[^.]+$/, '')}`,
    caption: null,
  })),
];

/** Section titles on this page */
const sectionTitleClass =
  'text-xl font-medium tracking-tight text-black/85 mb-2 text-left';

/** Body copy spans the padded main column (grows/shrinks with viewport). */
const textColumn = 'w-full min-w-0 max-w-none';

const Badge = ({ children, className = '' }) => (
  <span
    className={`px-2.5 py-1 rounded-md bg-white/60 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-black/50 border border-gray-200 shadow-sm ${className}`}
  >
    {children}
  </span>
);

const REFLECTIONS = [
  {
    id: 'ai-ds',
    date: 'April 2026',
    badge: 'AI tools · Design systems',
    title: 'When the screen is easy, the hard part is everything around it.',
    preview:
      "Lately I've been using AI assistants for layout, copy drafts, and small UI tasks. They're genuinely good at speeding up the \"how do I build this?\" loop. What they don't replace is the slower work: naming the real problem, deciding what belongs in the product at all…",
    body: (
      <>
        <p className="text-black/85 leading-relaxed text-base font-normal mb-3">
          Lately I&apos;ve been using AI assistants for layout, copy drafts, and small UI tasks. They
          are genuinely good at speeding up the &quot;how do I build this?&quot; loop. What they do not
          replace is the slower work: naming the real problem, deciding what belongs in the product
          at all, and explaining why a pattern should exist for the next person who touches the
          code. If anything, that layer feels louder now because the baseline for shipping something
          that looks like a product has gotten lower for everyone.
        </p>
        <p className="text-black/85 leading-relaxed text-base font-normal mb-3">
          That shift is why I think about design systems differently than I did a year ago. A system
          is not only a component library. It is the shared layer where abstract intent (how we want
          the product to feel and behave) meets something engineers can implement without re-inventing
          the wheel each sprint. It keeps innovation and consistency from being opposites: you get a
          stable floor so teams can spend energy on the parts that actually differentiate the
          experience instead of re-litigating spacing and states every time.
        </p>
        <p className="text-black/70 leading-relaxed text-base font-normal mb-3 italic border-l-4 border-gray-200 pl-4">
          Industry talks often describe systems as the layer that turns design into something
          durable—abstractions that make &quot;real&quot; work repeatable, not just pretty slides.
        </p>
        <p className="text-black/85 leading-relaxed text-base font-normal">
          On a team, a good system works like a language: it translates fuzzy ideas into concrete
          patterns today, and it leaves enough structure that tomorrow&apos;s iteration does not erase
          yesterday&apos;s decisions by accident. The goal is not to cap creativity; it is to remove the
          repetitive eighty percent so attention can stay on the twenty percent where user value
          actually lives. Meaningful products were never only a speed problem and in an AI-assisted
          workflow, they still are not. They need alignment, ownership, and a place where intent
          survives handoffs. For me, that place is increasingly the design system conversation, not
          the corner of the canvas.
        </p>
      </>
    ),
  },
  {
    id: 'google-ux',
    date: 'January 2026',
    badge: 'UX Certificate',
    title: 'Empathy at Scale: What Google UX Taught Me.',
    preview:
      'In pursuing the Google UX certificate, what struck me most was its rigorous approach to User Research. Starting from Empathize, every step is backed by clear logic…',
    body: (
      <>
        <p className="text-black/85 leading-relaxed text-base font-normal mb-3">
          In pursuing the Google UX certificate, what struck me most was its rigorous approach to User
          Research. Starting from Empathize, every step is backed by clear logic. It made me see that design
          is never a flash of inspiration—it&apos;s the result of careful thought.
        </p>
        <p className="text-black/85 leading-relaxed text-base font-normal mb-3">
          The course also pushed me to get specific about how research turns into decisions: problem
          statements, personas as hypotheses (not stereotypes), and usability studies that actually change
          what gets built. I started carrying that discipline into my own projects—writing down what I
          assumed, what I needed to validate, and what would count as evidence either way.
        </p>
        <p className="text-black/85 leading-relaxed text-base font-normal mb-3">
          What I still practice today is the habit of slowing down before pixels: clarify the question,
          choose a method that fits the risk, and make the findings legible for teammates who were not in
          the room. That is the part that scales when a product grows—shared language for what &quot;good&quot;
          means for users, not just a polished deck.
        </p>
        <p className="text-black/85 leading-relaxed text-base font-normal">
          If I had to summarize the certificate in one line for my own work: empathy is a process you can
          repeat, not a mood you wait for. That mindset is what I try to bring when I move from research
          notes into structure, flows, and UI states.
        </p>
      </>
    ),
  },
  // {
  //   id: 'hillman',
  //   date: 'Note',
  //   badge: 'Quote',
  //   title: 'Hillman Curtis on what designers do',
  //   preview:
  //     '"The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to make the invisible visible."',
  //   body: (
  //     <>
  //       <div className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200 mb-6">
  //         <Quote className="text-blue-800/20 mb-4" size={40} />
  //         <p className="text-lg md:text-xl font-medium tracking-tight text-black/85 leading-snug">
  //           &quot;The goal of a designer is to listen, observe, understand, sympathize, empathize,
  //           synthesize, and glean insights that enable him or her to make the invisible visible.&quot;
  //         </p>
  //         <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-black/45">
  //           — Hillman Curtis
  //         </p>
  //       </div>
  //       <p className="text-black/85 leading-relaxed text-base font-normal mb-5">
  //         I keep returning to this quote because it names the whole pipeline—not only craft, but the
  //         translation work. Listening without synthesis becomes noise; synthesis without visibility becomes
  //         a private theory that never ships.
  //       </p>
  //       <p className="text-black/85 leading-relaxed text-base font-normal mb-5">
  //         In practice, &quot;making the invisible visible&quot; shows up as clear models: journeys that
  //         teammates can argue with, states that cover edge cases, and language that stays stable when the
  //         UI changes. Those artifacts are how intent survives handoffs—especially when the team is moving
  //         fast.
  //       </p>
  //       <p className="text-black/85 leading-relaxed text-base font-normal">
  //         For me, it is also a reminder that design is not only the visible layer. A lot of the value is in
  //         framing, sequencing, and deciding what should be obvious next—so people can trust the product
  //         without needing a map for every step.
  //       </p>
  //     </>
  //   ),
  // },
];

function ExpandablePost({ post, expanded, onToggle, showHoverTip, moveHoverTip, hideHoverTip }) {
  const open = expanded === post.id;
  const handleToggle = () => onToggle(post.id);
  const tipMessage = open ? 'Show less' : 'Read more';

  return (
    <article className="w-full min-w-0 border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={handleToggle}
        onMouseEnter={(e) => showHoverTip(e, tipMessage)}
        onMouseMove={moveHoverTip}
        onMouseLeave={hideHoverTip}
        className="group flex w-full min-w-0 max-w-none flex-col items-stretch py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 cursor-none md:py-5"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-black/45">{post.date}</span>
          <Badge className="bg-transparent text-blue-800 border-gray-200/80 shadow-none">{post.badge}</Badge>
        </div>
        <div className="flex w-full min-w-0 items-start gap-4">
          <h3 className="min-w-0 flex-1 text-lg md:text-xl font-semibold tracking-tight text-black/85 group-hover:text-blue-800 transition-colors leading-snug">
            {post.title}
          </h3>
          <ChevronDown
            size={20}
            className={`mt-0.5 shrink-0 text-black/35 transition-transform ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </div>
        {!open && (
          <p className="mt-2 block w-full min-w-0 max-w-none whitespace-normal break-words text-sm text-black/70 leading-relaxed [max-width:none]">
            {post.preview}
          </p>
        )}
        <span className="mt-2.5 inline-flex self-start text-xs font-semibold text-blue-800 uppercase tracking-wider">
          {open ? 'Show less' : 'Read more'}
        </span>
      </button>
      {open && (
        <div className={`${textColumn} border-t border-gray-100 pb-5 pt-4`}>{post.body}</div>
      )}
    </article>
  );
}

export default function BlogPage() {
  const [expandedId, setExpandedId] = useState(null);
  const [certIndex, setCertIndex] = useState(0);
  const [hoverTip, setHoverTip] = useState({ show: false, x: 0, y: 0, message: '' });
  const certImages = CERTIFICATE_IMAGES;
  const hasMultipleCerts = certImages.length > 1;

  const showHoverTip = (e, message) => {
    setHoverTip({ show: true, x: e.clientX, y: e.clientY, message });
  };
  const moveHoverTip = (e) => {
    setHoverTip((prev) => (prev.show ? { ...prev, x: e.clientX, y: e.clientY } : prev));
  };
  const hideHoverTip = () => setHoverTip((prev) => ({ ...prev, show: false }));

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  /** Horizontal inset: tighter on large screens so content uses main width (sidebar layout). */
  const pageX = 'px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14';

  return (
    <div
      className="blog-page-root flex min-h-screen w-full min-w-0 flex-col bg-white text-black/85"
      style={sourceSansPro}
    >
      {hoverTip.show && (
        <div
          className="fixed z-[60] pointer-events-none"
          style={{ left: hoverTip.x + 14, top: hoverTip.y + 14 }}
          aria-hidden
        >
          <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-gray-200 bg-white text-gray-700 shadow-sm">
            {hoverTip.message}
          </span>
        </div>
      )}
      {hoverTip.show && (
        <div
          className="fixed z-[60] pointer-events-none"
          style={{ left: hoverTip.x - 7, top: hoverTip.y - 7 }}
          aria-hidden
        >
          <span className="block h-[14px] w-[14px] rounded-full bg-[#FFCC00] shadow-[0_0_0_3px_rgba(255,204,0,0.25)]" />
        </div>
      )}
      <header className={`w-full min-w-0 shrink-0 pt-8 pb-4 md:pt-10 md:pb-5 ${pageX}`}>
        <h1 className="sr-only">About</h1>
        <Link
          to="/"
          onMouseEnter={(e) => showHoverTip(e, 'Back to portfolio')}
          onMouseMove={moveHoverTip}
          onMouseLeave={hideHoverTip}
          className="group flex w-fit cursor-none items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/45 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </header>

      <div className={`flex w-full min-w-0 flex-1 flex-col py-2 ${pageX} space-y-7 md:space-y-8 lg:space-y-9`}>
        {/* Intro — plain copy at top, no card */}
        <section className={`${textColumn} space-y-1`}>
          <h2 className="text-base md:text-lg text-black/85 leading-relaxed">
            I&apos;m a designer, engineer, and surfer with a lifelong curiosity for learning and exploring.
          </h2>
          <p className="text-sm md:text-base text-black/80 leading-relaxed">
            I&apos;m focused on designing digital products that are clear, well-structured, and genuinely useful
            to the people who use them.
          </p>
          <p className="text-sm md:text-base text-black/80 leading-relaxed">
            Outside of work, I love surfing, snowboarding, and spending time outdoors by the sea or in the
            mountains.
          </p>
          <p className="text-sm md:text-base font-semibold text-blue-800 leading-relaxed">
            I&apos;m currently open to work and freelance projects.
          </p>
        </section>

        {/* Reflections — full-width rows within main */}
        <section className="w-full min-w-0">
          <h2 className={sectionTitleClass}>Learning Reflections</h2>
          <div className={`${textColumn} `}>
            {REFLECTIONS.map((post) => (
              <ExpandablePost
                key={post.id}
                post={post}
                expanded={expandedId}
                onToggle={toggle}
                showHoverTip={showHoverTip}
                moveHoverTip={moveHoverTip}
                hideHoverTip={hideHoverTip}
              />
            ))}
          </div>
        </section>

        {/* Photos — flex wrap, full main width */}
        <section className="w-full min-w-0 pb-2">
          <h2 className={sectionTitleClass}>Photos</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {PHOTO_GRID_ITEMS.map((item) => (
              <figure
                key={item.src}
                className="min-w-0 flex-1 basis-36 sm:basis-40 md:basis-44 max-w-[220px]"
              >
                <div className="h-44 md:h-52 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {item.caption && (
                  <figcaption className="mt-1.5 text-[9px] uppercase tracking-wider text-black/40 text-center">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* Recognition — below photos */}
        <section>
          <h2 className={sectionTitleClass}>Certificate</h2>
          <div className="max-w-md">
            <div className="group relative">
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden relative border border-gray-200">
                <img
                  key={certIndex}
                  src={certImages[certIndex]}
                  alt="Certificate"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Award
                    className="text-yellow-400 opacity-20 group-hover:opacity-100 transition-opacity"
                    size={48}
                  />
                </div>
                {hasMultipleCerts && (
                  <>
                    <button
                      type="button"
                      onClick={() => setCertIndex((i) => (i - 1 + certImages.length) % certImages.length)}
                      onMouseEnter={(e) => showHoverTip(e, 'Previous')}
                      onMouseMove={moveHoverTip}
                      onMouseLeave={hideHoverTip}
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-none items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg transition-colors hover:bg-white"
                      aria-label="Previous certificate"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertIndex((i) => (i + 1) % certImages.length)}
                      onMouseEnter={(e) => showHoverTip(e, 'Next')}
                      onMouseMove={moveHoverTip}
                      onMouseLeave={hideHoverTip}
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-none items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg transition-colors hover:bg-white"
                      aria-label="Next certificate"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mt-2 mb-0.5 text-black/85">
                Google UX Professional
              </h4>
              <p className="text-[10px] text-black/45 uppercase tracking-widest font-semibold">
                Completed • Coursera
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className={`w-full min-w-0 shrink-0 border-t border-gray-200 py-8 text-center md:py-10 ${pageX}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40">
          Designed + Engineered by Xinping(Claire) - 2026
        </p>
      </footer>
    </div>
  );
}
