function err(msg,data) {

    return {
        code: 1,
        msg,
        err:data || null
    }
}

function suc(msg,data) {


    return {
        code: 0,
        msg:msg || "服务器出错",
        data:data || null
    }
}

module.exports = {
    suc,
    err
}
