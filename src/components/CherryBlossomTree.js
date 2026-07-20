import React from 'react';
import './CherryBlossomTree.css';

const PETALS = [
  { left: '18%', delay: '0s', duration: '7s', size: 7 },
  { left: '32%', delay: '1.2s', duration: '9s', size: 6 },
  { left: '48%', delay: '0.4s', duration: '8s', size: 8 },
  { left: '62%', delay: '2s', duration: '10s', size: 5 },
  { left: '76%', delay: '0.8s', duration: '7.5s', size: 7 },
  { left: '88%', delay: '1.6s', duration: '9.5s', size: 6 },
  { left: '42%', delay: '2.4s', duration: '8.5s', size: 5 },
  { left: '55%', delay: '3s', duration: '11s', size: 6 },
];

function CherryBlossomTree() {
  return (
    <div className="cherry-tree" aria-hidden="true">
      <svg className="cherry-tree-svg" viewBox="0 0 240 260" role="presentation">
        <path className="tree-trunk" d="M120 250 L120 168" />
        <path className="tree-branch branch-1" d="M120 205 Q95 190 72 168" />
        <path className="tree-branch branch-2" d="M120 198 Q145 182 168 158" />
        <path className="tree-branch branch-3" d="M120 182 Q88 158 58 132" />
        <path className="tree-branch branch-4" d="M120 176 Q152 150 182 118" />
        <path className="tree-branch branch-5" d="M120 165 Q108 138 98 108" />
        <path className="tree-branch branch-6" d="M120 160 Q132 132 142 102" />

        <g className="blossom-cluster cluster-1" transform="translate(72 168)">
          <circle r="7" />
          <circle r="3" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-2" transform="translate(168 158)">
          <circle r="7" />
          <circle r="3" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-3" transform="translate(58 132)">
          <circle r="8" />
          <circle r="3" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-4" transform="translate(182 118)">
          <circle r="8" />
          <circle r="3" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-5" transform="translate(98 108)">
          <circle r="6" />
          <circle r="2.5" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-6" transform="translate(142 102)">
          <circle r="6" />
          <circle r="2.5" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-7" transform="translate(120 88)">
          <circle r="9" />
          <circle r="3.5" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-8" transform="translate(104 122)">
          <circle r="5" />
          <circle r="2" className="blossom-center" />
        </g>
        <g className="blossom-cluster cluster-9" transform="translate(136 115)">
          <circle r="5" />
          <circle r="2" className="blossom-center" />
        </g>
      </svg>

      <div className="falling-petals">
        {PETALS.map((petal, index) => (
          <span
            key={index}
            className="falling-petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: petal.size,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CherryBlossomTree;
