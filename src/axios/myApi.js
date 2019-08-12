
const BOOKURL = "http://zhouxunwang.cn/data"
const BOOKURL2 = "http://123.56.195.82:9999/news"
const MYKEY = "UO7HqNE0Soz+hpOL8Yo2RGnCPQTgsJeZ/px06Q";

//登录的常量
const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = '/register'
const LOGIN_PATH = '/login'
const FIND_PATH = '/existUser'
const CORRCET_PATH = '/getInfo'
const PASSWORD_PATH='/updatePassword'

//书籍类别
const CATALOG_ID = {
    CHINA_CULTURE : 242
}

function urlencode (str) {  
    str = (str + '').toString();   

    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
}

 //get总方法
function myGet(vue,data) {
    data.key = urlencode(data.key);
    var arr = [];
    for (var x in data) {
        arr.push(`${x}=${data[x]}`);
    }
    var str = arr.join("&");
    return vue.$axios.get(BOOKURL2 + "?" + str)
}


// function myGet(vue,data,catalog_id) {
//     // data.id=64;
//     // data.key = MYKEY;

//     // var arr = [];
//     // for (var x in data) {
//     //     arr.push(`${x}=${data[x]}`);
//     // }
//     // var str = arr.join("&");

//     return vue.$axios.get(BOOKURL2 + "?" +catalog_id = catalog_id )
// }

//post请求
function register(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", 1);
    return vue.$axios.post(TLJYURL+REGISTER_PATH,param)
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", 1);
    return vue.$axios.post(TLJYURL+LOGIN_PATH,param)
}

function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", 1);
    return vue.$axios.post(TLJYURL+FIND_PATH,param)
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", 1);
    return vue.$axios.post(TLJYURL+CORRCET_PATH,param)
}

function updatePassword(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", 1);
    return vue.$axios.post(TLJYURL+PASSWORD_PATH,param)
}

//暴露方法
function getBookData(vue,data) {
    return myGet(vue,data);
}


export default {
    getBookData,register,login,find,correct,updatePassword
}

