export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

export type CartItem = Guitar & {
    quantity: number
}

// export type GuitarID = Guitar['id'] 

// export type GuitarID = Pick<Guitar, 'id'> 


// //utility types
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'description'> & {
//     quantity: number
// } 