
const BOOKURL = "/api/data"
const MYKEY = "XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q";
const RN = 20;

//登录的常量
const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = 'bole/register'
const LOGIN_PATH = 'bole/login'
const FIND_PATH = 'bole/existUser'
const CORRCET_PATH = 'bole/getInfo'
const PASSWORD_PATH='bole/updatePassword'

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

//post请求
function register(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", 1);
    return vue.$axios.post(REGISTER_PATH,param)
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", 1);
    return vue.$axios.post(LOGIN_PATH,param)
}

function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", 1);
    return vue.$axios.post(FIND_PATH,param)
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", 1);
    return vue.$axios.post(CORRCET_PATH,param)
}

//暴露方法
function getBookData(vue,data) {
    return myGet(vue,data);
}


export default {
    getBookData,register,login,find,correct
}

