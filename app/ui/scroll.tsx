import { ReactNode } from "react";

export function ScrollArea({ children }: { children: ReactNode }) {
  return <div className="overflow-y-auto h-full pr-2">{children}</div>;
}
