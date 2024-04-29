// optimal thrust distance function | mass = mass of locking portion of ship, thrsutCount = amount of booster thrusters on locking portion of ship
function getDist (mass, thrustCount) {
    // declare acceleration variable
    let accel = (thrustCount * 9600) / mass

    // find velocity function and its inverse, where t = time
    function velFn (t) {
        return (accel * t) - ((accel * t / 75)^2 * 0.01333)
    }
    function invVelFn (v) {
        return 
    }

    // find position function, where t = time
    function posFn (t) {
        return (accel / 2) * (t^2)
    }

    // get the two clostest whole numbers to when the locking mass' velocity is 21m/s (req'd locking speed)
    let distA = Math.floor(posFn(invVelFn(21)))
    let distB = Math.ceil(posFn(invVelFn(21)))

    if (Math.abs(velFn(distA) - 21) > Math.abs(velFn(distB) - 21)) {
        console.log("Your optimal locking distance is " + distB + " meters")
    } else if (Math.abs(velFn(distA) - 21) > Math.abs(velFn(distB) - 21)) {
        console.log("Your optimal locking distance is " + distA + " meters")
    } else {
        console.log("Your optimal locking distance is either " + distB + " or " + distA + " meters")
    }
}