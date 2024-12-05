import type { FC, ReactNode } from "react"

export const Container: FC<{children: ReactNode}> = ({children}) => {

    return <>
        {children}
        container
    </>
}