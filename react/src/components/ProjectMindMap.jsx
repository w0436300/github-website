import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';

function BranchBlock({ block, listStyle, color }) {
  const hasMarker = Boolean(block.marker);

  return (
    <div className="mindmap-block">
      <div className="mindmap-block__head">
        {hasMarker ? (
          <span className="mindmap-block__marker" style={{ color, borderColor: `${color}55` }}>
            {block.marker}
          </span>
        ) : null}
        <p className="mindmap-block__title">{block.title}</p>
      </div>
      {block.items?.length ? (
        <ul className={`mindmap-block__list ${listStyle === 'alpha' ? 'mindmap-block__list--alpha' : ''}`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function BranchCard({ branch, onAnchor }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const report = () => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      onAnchor(branch.id, {
        x: rect.left + (branch.side === 'left' ? rect.width : 0),
        y: rect.top + rect.height / 2,
      });
    };
    report();
    const observer = new ResizeObserver(report);
    observer.observe(ref.current);
    window.addEventListener('resize', report);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', report);
    };
  }, [branch.id, branch.side, onAnchor]);

  const listStyle = branch.listStyle || 'bullet';

  return (
    <article ref={ref} className={`mindmap-branch mindmap-branch--${branch.side}`} data-branch={branch.id}>
      <header className="mindmap-branch__header">
        <span className="mindmap-branch__index" style={{ color: branch.color }}>
          {branch.index}
        </span>
        <div>
          <h3 className="mindmap-branch__title">{branch.title}</h3>
          <p className="mindmap-branch__subtitle">{branch.subtitle}</p>
        </div>
      </header>
      <div className="mindmap-branch__body">
        {branch.blocks.map((block) => (
          <BranchBlock key={`${branch.id}-${block.title}`} block={block} listStyle={listStyle} color={branch.color} />
        ))}
      </div>
    </article>
  );
}

function MindMapLines({ branches, center, anchors }) {
  if (!center) return null;

  return (
    <svg className="mindmap-lines" aria-hidden>
      {branches.map((branch) => {
        const anchor = anchors[branch.id];
        if (!anchor) return null;

        const startX = center.x;
        const startY = center.y;
        const endX = anchor.x;
        const endY = anchor.y;
        const curve = branch.side === 'left' ? 0.42 : 0.58;
        const cx1 = startX + (endX - startX) * curve;
        const cy1 = startY;
        const cx2 = endX - (endX - startX) * (1 - curve);
        const cy2 = endY;

        return (
          <path
            key={branch.id}
            d={`M ${startX} ${startY} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${endX} ${endY}`}
            stroke={branch.color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.82"
          />
        );
      })}
    </svg>
  );
}

function isNear(point, x, y, epsilon = 1) {
  return Math.abs(point.x - x) < epsilon && Math.abs(point.y - y) < epsilon;
}

export default function ProjectMindMap({ title, centerLabel, branches }) {
  const canvasId = useId();
  const canvasRef = useRef(null);
  const centerRef = useRef(null);
  const [center, setCenter] = useState(null);
  const [anchors, setAnchors] = useState({});

  const leftBranches = branches.filter((branch) => branch.side === 'left');
  const rightBranches = branches.filter((branch) => branch.side === 'right');

  const updateCenter = useCallback(() => {
    if (!canvasRef.current || !centerRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();
    const next = {
      x: centerRect.left + centerRect.width / 2 - canvasRect.left,
      y: centerRect.top + centerRect.height / 2 - canvasRect.top,
    };
    setCenter((prev) => (prev && isNear(prev, next.x, next.y) ? prev : next));
  }, []);

  useLayoutEffect(() => {
    updateCenter();
    const observer = new ResizeObserver(updateCenter);
    if (canvasRef.current) observer.observe(canvasRef.current);
    if (centerRef.current) observer.observe(centerRef.current);
    window.addEventListener('resize', updateCenter);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateCenter);
    };
  }, [updateCenter]);

  const handleAnchor = useCallback((id, point) => {
    if (!canvasRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = point.x - canvasRect.left;
    const y = point.y - canvasRect.top;

    setAnchors((prev) => {
      const current = prev[id];
      if (current && isNear(current, x, y)) return prev;
      return { ...prev, [id]: { x, y } };
    });
  }, []);

  return (
    <div className="mindmap-shell">
      <div ref={canvasRef} className="mindmap-canvas" id={canvasId}>
        <MindMapLines branches={branches} center={center} anchors={anchors} />

        <div className="mindmap-layout">
          <div className="mindmap-column mindmap-column--left">
            {leftBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} onAnchor={handleAnchor} />
            ))}
          </div>

          <div className="mindmap-column mindmap-column--center">
            <div ref={centerRef} className="mindmap-center">
              <span className="mindmap-center__label">{centerLabel || 'Product root'}</span>
              <strong className="mindmap-center__title">{title}</strong>
            </div>
          </div>

          <div className="mindmap-column mindmap-column--right">
            {rightBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} onAnchor={handleAnchor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
