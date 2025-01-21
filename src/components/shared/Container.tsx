import React from "react";

export default function Container({ children }: { children: React.ReactNode[] | React.ReactNode  }) {
    return (
        <div className=" max-w-[1400px] w-full mx-auto">
            {children}
        </div>
    )
}