// nullish_coalescing_operator (??)

//it will retrun the lhs value if and only if the lhs is not null or undefined, else it will
//return rhs
const name = 0 ?? 'wribhu'
console.log(name)

//const value = null ??undefined ?? 20?? 10 ?? 15
const value = null ?? null
console.log(value)

