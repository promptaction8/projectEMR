function dfs_xy_conv(code: string, v1: number, v2: number) {
    const DEGRAD: number = Math.PI / 180.0
    const RADDEG: number = 180.0 / Math.PI

    const RE: number = 6371.00877 // 지구 반경(km)
    const GRID: number = 5.0 // 격자 간격(km)
    const SLAT1: number = 30.0 // 투영 위도1(degree)
    const SLAT2: number = 60.0 // 투영 위도2(degree)
    const OLON: number = 126.0 // 기준점 경도(degree)
    const OLAT: number = 38.0 // 기준점 위도(degree)
    const XO: number = 43 // 기준점 X좌표(GRID)
    const YO: number = 136 // 기준점 Y좌표(GRID)

    const re: number = RE / GRID
    const slat1: number = SLAT1 * DEGRAD
    const slat2: number = SLAT2 * DEGRAD
    const olon: number = OLON * DEGRAD
    const olat: number = OLAT * DEGRAD

    let sn: number =
        Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
        Math.tan(Math.PI * 0.25 + slat1 * 0.5)
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn)
    let sf: number = Math.tan(Math.PI * 0.25 + slat1 * 0.5)
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn
    let ro: number = Math.tan(Math.PI * 0.25 + olat * 0.5)
    ro = (re * sf) / Math.pow(ro, sn)

    const rs: { [key: string]: number } = {}

    if (code === 'toXY') {
        rs.lat = v1
        rs.lng = v2
        let ra: number = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5)
        ra = (re * sf) / Math.pow(ra, sn)
        let theta: number = v2 * DEGRAD - olon
        if (theta > Math.PI) theta -= 2.0 * Math.PI
        if (theta < -Math.PI) theta += 2.0 * Math.PI
        theta *= sn
        rs.x = Math.floor(ra * Math.sin(theta) + XO + 0.5)
        rs.y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5)
    } else {
        rs.x = v1
        rs.y = v2
        const xn: number = v1 - XO
        const yn: number = ro - v2 + YO
        let ra: number = Math.sqrt(xn * xn + yn * yn)
        if (sn < 0.0) ra = -ra
        let alat: number = Math.pow((re * sf) / ra, 1.0 / sn)
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5

        let theta: number
        if (Math.abs(xn) <= 0.0) {
            theta = 0.0
        } else {
            if (Math.abs(yn) <= 0.0) {
                theta = Math.PI * 0.5
                if (xn < 0.0) theta = -theta
            } else {
                theta = Math.atan2(xn, yn)
            }
        }

        const alon: number = theta / sn + olon
        rs.lat = alat * RADDEG
        rs.lng = alon * RADDEG
    }
    return rs
}

export default dfs_xy_conv
