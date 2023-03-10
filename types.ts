export type Item = {
    title: string,
    category: string,
    price: number,
    description: string,
    index: null | number
}

export type Error = {
    title: boolean,
    category: boolean,
    price: boolean,
    description: boolean
}

export type ActionsType = {
    [key: string]: (i: number) => void
}