import { PropsWithChildren } from "react";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-background flex min-h-svh items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="border-border md:bg-card md:shadow-foreground/5 flex flex-col gap-8 rounded-2xl p-8 md:border md:shadow-xl">
          {children}
        </div>
      </div>
    </main>
  );
};
