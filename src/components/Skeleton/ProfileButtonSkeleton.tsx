function ProfileButtonSkeleton() {
  return (
    <div className="flex max-w-full animate-pulse items-center gap-2 rounded-xl p-1 sm:gap-3 sm:p-2">
      {/* Profile image skeleton */}
      <div className="h-9 w-9 shrink-0 rounded-lg bg-gray-200 sm:h-11 sm:w-11" />

      {/* Username skeleton */}
      <div className="h-4 w-20 max-w-28 rounded bg-gray-200 sm:h-5 sm:w-32 sm:max-w-40 md:max-w-52" />

      {/* Dropdown arrow skeleton */}
      <div className="h-3 w-3 shrink-0 rounded-sm bg-gray-200 sm:h-4 sm:w-4" />
    </div>
  );
}

export default ProfileButtonSkeleton;
