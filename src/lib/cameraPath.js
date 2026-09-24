import * as THREE from 'three';

// One waypoint per section, in the same order as SECTION_IDS in
// data/portfolio.js (hero, about, skills, journey, certificates, contact).
// Position is where the camera sits; target is what it looks at. Values are
// hand-placed to frame each section's 3D content.
const WAYPOINTS = [
  { position: [0, 0.4, 6], target: [0, 0.2, 0] }, // hero — centred on the core
  { position: [2.4, 0.6, 5.2], target: [0.6, 0.1, 0] }, // about — drifts right
  { position: [0, 1.2, 7.6], target: [0, 0, -0.5] }, // skills — pulls back for the cluster
  { position: [-2.6, 0.4, 4.4], target: [1.2, -0.3, 2] }, // journey — favours the timeline spine
  { position: [2.4, 0.5, 4.8], target: [0, 0.1, -1.2] }, // certificates — faces the plate arc
  { position: [0, 0.6, 6.4], target: [0, 0.1, 0] }, // contact — returns toward centre
];

export const WAYPOINT_COUNT = WAYPOINTS.length;

const fromPos = new THREE.Vector3();
const toPos = new THREE.Vector3();
const fromTarget = new THREE.Vector3();
const toTarget = new THREE.Vector3();

/**
 * Fills outPosition/outTarget with the camera transform for a fractional
 * stage value (e.g. 2.35 = 35% of the way from waypoint 2 to waypoint 3).
 * Callers pass in reusable THREE.Vector3 instances to avoid allocating on
 * every animation frame.
 */
export function getCameraTransform(stage, outPosition, outTarget) {
  const max = WAYPOINT_COUNT - 1;
  const clamped = THREE.MathUtils.clamp(stage, 0, max);
  const i = Math.min(Math.floor(clamped), Math.max(max - 1, 0));
  const t = max === 0 ? 0 : THREE.MathUtils.clamp(clamped - i, 0, 1);

  const a = WAYPOINTS[i];
  const b = WAYPOINTS[Math.min(i + 1, max)];

  fromPos.set(a.position[0], a.position[1], a.position[2]);
  toPos.set(b.position[0], b.position[1], b.position[2]);
  outPosition.lerpVectors(fromPos, toPos, t);

  fromTarget.set(a.target[0], a.target[1], a.target[2]);
  toTarget.set(b.target[0], b.target[1], b.target[2]);
  outTarget.lerpVectors(fromTarget, toTarget, t);

  return { position: outPosition, target: outTarget };
}
