import s from "./Skeleton.module.css";
export const SkeletonTitle = () => (
  <div className={s.skel} style={{ height: "2.6em", borderRadius: 6 }} />
);
export const SkeletonPrice = () => (
  <div className={s.skel} style={{ width: 80, height: 16, borderRadius: 4 }} />
);
export const SkeletonButton = () => (
  <div className={s.skel} style={{ width: 110, height: 36, borderRadius: 8 }} />
);
