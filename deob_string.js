function e(e) {

    for (var i = cg(e), a = "zUP6yS7", c = "", u = 0; u < i.length; ++u) {
        var g = a.charCodeAt(u % 7);
        c += String.fromCharCode(g ^ i.charCodeAt(u));
    }

    return c
}

cg = function() {
    function t(t) {
        this.message = t
    }
    try {
        if (atob && "test" === atob("dGVzdA==")) return atob
    } catch (t) {}
    return t.prototype = new Error, t.prototype.name = "InvalidCharacterError",
        function(n) {
            var e = String(n).replace(/[=]+$/, "");
            if (e.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, o, i = 0, a = 0, c = ""; o = e.charAt(a++); ~o && (r = i % 4 ? 64 * r + o : o, i++ % 4) ? c += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
            return c
        }
}()

module.exports.deob_string = e;