export function SkeletonTitle() {
  return <div className="skel" style={{ height: "2.6em", borderRadius: 6 }} />;
}
export function SkeletonPrice() {
  return (
    <div className="skel" style={{ width: 80, height: 16, borderRadius: 4 }} />
  );
}
export function SkeletonButton() {
  return (
    <div className="skel" style={{ width: 110, height: 36, borderRadius: 8 }} />
  );
}
