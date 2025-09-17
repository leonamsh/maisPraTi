const base =
  "animate-pulse bg-gradient-to-r from-black/0 via-black/10 to-black/0 dark:from-white/0 dark:via-white/15 dark:to-white/0";
export const SkeletonTitle = () => (
  <div className={`${base} h-[2.6em] rounded-md`} />
);
export const SkeletonPrice = () => (
  <div className={`${base} w-20 h-4 rounded`} />
);
export const SkeletonButton = () => (
  <div className={`${base} w-28 h-9 rounded-lg`} />
);
