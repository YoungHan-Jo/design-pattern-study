export const LogMessage = {
    FlyWithWings: "fly with wings",
    FlyNoWay: "fly no way",
    FlyRocketPowered: "fly rocket powered"
} as const

export type LogMessage = (typeof LogMessage)[keyof typeof LogMessage];
