
const serverUrl = 'http://47.94.226.224:8181/hurong_proj_bj_byph/'
const baseUrl = serverUrl + 'mobileApi/'

export default {
    imageUrl: serverUrl + '',
    serverURL: 'http://erp.xiaojinqb.com/mobile/indexmobile.html?recommendCode=',


    environmental: {
        environmental: 'test',//本地测试test，正式formal
        channel: 'SH003',
        //apiKey: 'bc6bad217b67409294f7107a083b5b59',//魔蝎sdk
        apiKey: '76c41c1c6c9c446387a1fd3428334a93',//魔蝎sdk
        codeTime: 120,//短信验证码倒计时 秒
        enterpriseId: '20000003',//商户Ida
        authentication: true, //流程认证项是否开启
    },

    header: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    },


    api: {
        banner:'https://cnodejs.org/api/v1/topics',//首页的banner图
        login: baseUrl + 'loginBpMemberApi.do?',//登录 userName,password
        loginOut: baseUrl + 'loginOutBpMemberApi.do?',//退出登录    token
        changePass: baseUrl + 'changePassBpMemberApi.do?',//修改密码    mobile  newPassword
        checkGesture: baseUrl + 'checkGestureBpMemberApi.do?',//查看手势密码  token
        saveGesture: baseUrl + 'saveGestureBpMemberApi.do?',//保存手势密码    gestureNum
        updateGestureState: baseUrl + 'updateGestureStateBpMemberApi.do?',//修改手势密码开启状态 gestureState
        registerBpMemberApi: baseUrl + 'registerBpMemberApi.do?',//注册
        sendCodeBpMemberApi: baseUrl + 'sendNoteBpMemberApi.do?',//注册发送短信验证码
        sendCodeMember: baseUrl + 'sendNoteBpMemberApi.do?',//找回密码发送短信验证码
        checkCodeBpMemberApi: baseUrl + 'checkCodeBpMemberApi.do?',//确认短信验证码
        getAddressList: baseUrl + 'getAddressListBpMemberApi.do',//保存通讯录
        getProtocol: baseUrl + 'getProtocolCommonApi.do',//注册协议code=pro_register
        getThirdOpenid: baseUrl + 'getThirdOpenidBpMemberApi.do',//查看第三方标识是否存在
        addThirdOpenid: baseUrl + 'addThirdOpenidBpMemberApi.do',//绑定第三方标识
        getMobileInfo: baseUrl + 'getMobileInfoBpMemberApi.do',//保存设备登录日志

    },
    common: {
        uploadFile: baseUrl + 'uploadFilesFileFormApi.do',//上传图片
        uploadMaterial: baseUrl + 'uploadMaterialFileFormApi.do',//上传材料
        getNextCommon: baseUrl + 'getNextCommonApi.do',//获取省市区 node
        uploadImg: baseUrl + 'uploadImgFileFormApi.do',//上传身份证图片
        memberInfo: baseUrl + 'memberInfoCommonApi.do',//获取用户的信息
    }
}
