import * as React from "react";
import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 lg:py-32", className)}
            {...props}
        >
            {children}
        </section>
    );
}
