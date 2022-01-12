export const noSpaces = /^\S*$/
export const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

// At least 1 uppercase, 1 lowercase, 1 digit number, min 8 characters total
export const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

export const onlyNumbers = /^(0|[1-9][0-9]*)$/
export const onlySpaces = /^\s+$/
