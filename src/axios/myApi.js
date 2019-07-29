
const BOOKURL = "/api/data"
const MYKEY = "XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q";
const RN = 20;

//书籍类别
const CATALOG_ID = {
    CHINA_CULTURE : 242,
    A:243,
    B:244,
    C:245,
    D:246
}

 //get总方法
function myGet(vue,data) {
    data.id=64;
    data.key = MYKEY;
    data.rn = RN;

    var arr = [];
    for (var x in data) {
        arr.push(`${x}=${data[x]}`);
    }
    var str = arr.join("&");

    return vue.axios.get(BOOKURL + "?" + str)
}

//暴露方法
function getBookData(vue,data) {
    return myGet(vue,data);
}


export default {
    getBookData
}

