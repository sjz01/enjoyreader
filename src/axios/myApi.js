
const BOOKURL = "/api/data"
const MYKEY = "XOjC/NViS4/+ipyL84oxT2zBOQTgsJeZ/px06Q";
const RN = 20;

<<<<<<< HEAD
//登录的常量
const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = 'bole/register'
const LOGIN_PATH = 'bole/login'
const FIND_PATH = 'bole/existUser'
const CORRCET_PATH = 'bole/getInfo'
const PASSWORD_PATH='bole/updatePassword'
=======

//登录注册常量
const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = '/register'
const LOGIN_PATH = '/login'
const FIND_PATH = '/existUser'
const CORRCET_PATH = '/getInfo'
const PASSWORD_PATH='/updatePassword'
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0

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

<<<<<<< HEAD
//post请求
=======
//post 登录注册方法
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0
function register(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
<<<<<<< HEAD
    param.append("favorite", 1);
    return vue.$axios.post(REGISTER_PATH,param)
=======
    return vue.$axios.post(TLJYURL+REGISTER_PATH,param)
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
<<<<<<< HEAD
    param.append("favorite", 1);
    return vue.$axios.post(LOGIN_PATH,param)
}

function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", 1);
    return vue.$axios.post(FIND_PATH,param)
=======
    return vue.$axios.post(TLJYURL+LOGIN_PATH,param)
}


function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    return vue.$axios.post(TLJYURL+FIND_PATH,param) 
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
<<<<<<< HEAD
    param.append("favorite", 1);
    return vue.$axios.post(CORRCET_PATH,param)
=======
    return vue.$axios.post(TLJYURL+CORRCET_PATH,param)
}

function update(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    return vue.$axios.post(TLJYURL+PASSWORD_PATH,param)
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0
}

//暴露方法
function getBookData(vue,data) {
    return myGet(vue,data);
}


export default {
<<<<<<< HEAD
    getBookData,register,login,find,correct
=======
    getBookData,register,login,find,correct,update
>>>>>>> 5dfa120481ce7b14394f8113ae0cb919198b54e0
}

