function move(obj, target, atrr, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, atrr));
    if (current > target) {
        speed = -speed;
    }

    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, atrr));

        var newValue = oldValue + speed;

        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }


        obj.style[atrr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);


}

function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}
