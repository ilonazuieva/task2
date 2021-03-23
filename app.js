function calculateYears(p, i, t, d) {
    let years = 0
    while (p < d){
        p = p + (p * i) - (p * i * t) //not the i p but only for year's accued i
        years++
    }
    return years
}
//https://www.codewars.com/kata/563f037412e5ada593000114