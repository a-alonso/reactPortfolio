export const groupBy = (n, arr) => {
    return arr.reduce((groups, next) => {
        if( groups[groups.length - 1].length < n ){
            groups[groups.length - 1].push(next)
        } else {
            groups.push([ next ])
        }
        return groups
    },[[]])
}