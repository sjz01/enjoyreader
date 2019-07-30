
const BOOKURL = "/api/data"
const MYKEY = "XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q";
const RN = 20;


//登录注册常量
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

//post 登录注册方法
function register(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    return vue.$axios.post(TLJYURL+REGISTER_PATH,param)
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    return vue.$axios.post(TLJYURL+LOGIN_PATH,param)
}


function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    return vue.$axios.post(TLJYURL+FIND_PATH,param) 
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    return vue.$axios.post(TLJYURL+CORRCET_PATH,param)
}

function update(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    return vue.$axios.post(TLJYURL+PASSWORD_PATH,param)
}

//暴露方法
function getBookData(vue,data) {
    return myGet(vue,data);
}


export default {
    getBookData,register,login,find,correct,update
}

