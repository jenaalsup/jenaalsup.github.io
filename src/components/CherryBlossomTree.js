import React from 'react';
import './CherryBlossomTree.css';

const PETALS = [
  { left: '18%', delay: '8.4s', duration: '12s', size: 6 },
  { left: '38%', delay: '10s', duration: '14s', size: 5 },
  { left: '58%', delay: '9.2s', duration: '13s', size: 7 },
  { left: '78%', delay: '11.5s', duration: '15s', size: 5 },
];

const BLOSSOM_SITES = [
  [54, 154, 1.05, '3.2s'], [65, 163, 0.95, '3.48s'], [75, 143, 1.12, '3.76s'],
  [45, 143, 0.86, '3.62s'], [53, 126, 1.05, '4.18s'], [65, 112, 1.1, '4.54s'],
  [72, 104, 0.88, '4.36s'], [78, 122, 1.2, '4.02s'], [91, 139, 0.9, '4.36s'],
  [94, 113, 1.08, '4.68s'], [88, 92, 1.08, '4.92s'], [99, 74, 0.9, '4.76s'],
  [104, 84, 1.28, '5.18s'], [111, 105, 1.1, '4.58s'], [120, 119, 0.9, '5.04s'],
  [119, 78, 0.84, '5.02s'], [130, 92, 1.08, '5.34s'], [138, 76, 1.28, '5.48s'],
  [151, 78, 1.04, '5.14s'], [158, 105, 1.18, '4.84s'], [170, 116, 0.98, '5.26s'],
  [166, 87, 0.9, '5.36s'], [181, 98, 1.2, '5.52s'], [194, 93, 1.02, '5.72s'],
  [202, 113, 0.82, '5.46s'], [177, 130, 1.15, '5.06s'], [190, 145, 1.05, '5.8s'],
  [166, 151, 0.92, '4.7s'], [149, 152, 0.86, '4.42s'], [108, 158, 0.82, '4.08s'],
];

const BLOOM_JITTER = [0.04, -0.07, 0.08, -0.03, 0.02, -0.09, 0.06];

const PETAL_CLUSTERS = [
  [
    [-7, -4, -28, 0.92], [-2, -8, 8, 1.08], [4, -7, 31, 0.85],
    [8, -2, 67, 1], [5, 4, 106, 0.8], [0, 7, 152, 1.05],
    [-6, 5, 205, 0.9], [-9, 0, 246, 1.1], [-3, 0, 286, 0.75],
  ],
  [
    [-8, -1, -50, 1.05], [-4, -7, -10, 0.82], [2, -9, 22, 1.1],
    [7, -5, 54, 0.92], [9, 1, 93, 0.78], [4, 6, 135, 1.08],
    [-2, 7, 173, 0.88], [-7, 4, 222, 1], [-4, 0, 268, 0.78],
    [1, 1, 314, 0.72],
  ],
  [
    [-6, -6, -22, 0.86], [0, -9, 6, 1.02], [6, -6, 42, 0.8],
    [9, 0, 76, 1.1], [6, 5, 121, 0.9], [1, 8, 154, 1.06],
    [-5, 6, 198, 0.78], [-9, 1, 235, 1.02], [-4, 1, 282, 0.82],
    [2, -2, 326, 0.72], [-1, 3, 175, 0.7],
  ],
];

function Blossom({ x, y, size = 1, delay, variant = 0 }) {
  const petals = PETAL_CLUSTERS[variant % PETAL_CLUSTERS.length];

  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <g className="blossom-cluster" style={{ animationDelay: delay }}>
        {petals.map(([petalX, petalY, rotation, petalSize], index) => (
          <path
            key={index}
            className={`blossom-petal petal-${index % 3}`}
            d="M0 0 C-2.6 -2 -3.3 -6.5 -0.6 -8.5 C1.3 -9.9 2.7 -7.3 3.5 -5.8 C5.1 -2.7 3.3 -0.4 0 0Z"
            transform={`translate(${petalX} ${petalY}) rotate(${rotation}) scale(${petalSize})`}
          />
        ))}
      </g>
    </g>
  );
}

function CherryBlossomTree() {
  return (
    <div className="cherry-tree" aria-hidden="true">
      <svg className="cherry-tree-svg" viewBox="0 0 240 260" role="presentation">
        <path className="tree-trunk" d="M120 250 C118 218 121 190 120 158" />
        <path className="tree-branch branch-1" d="M120 214 C101 199 83 185 61 166" />
        <path className="tree-branch branch-2" d="M120 202 C144 186 161 169 181 145" />
        <path className="tree-branch branch-3" d="M120 186 C99 164 80 144 61 116" />
        <path className="tree-branch branch-4" d="M120 177 C145 151 165 126 181 96" />
        <path className="tree-branch branch-5" d="M120 164 C111 140 104 117 105 82" />
        <path className="tree-branch branch-6" d="M120 160 C131 136 140 111 138 76" />
        <path className="tree-twig twig-1" d="M83 185 C75 173 65 164 51 154" />
        <path className="tree-twig twig-2" d="M80 144 C69 139 57 130 47 118" />
        <path className="tree-twig twig-3" d="M161 169 C170 159 185 153 198 146" />
        <path className="tree-twig twig-4" d="M165 126 C176 119 190 107 199 92" />
        <path className="tree-twig twig-5" d="M105 116 C95 103 89 91 87 77" />
        <path className="tree-twig twig-6" d="M139 110 C150 96 156 84 157 67" />

        {BLOSSOM_SITES.map(([x, y, size], index) => {
          const delay = `${(3.05 + ((190 - y) * 0.02) + BLOOM_JITTER[index % BLOOM_JITTER.length]).toFixed(2)}s`;

          return <Blossom key={`blossom-${index}`} x={x} y={y} size={size} delay={delay} variant={index} />;
        })}
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
