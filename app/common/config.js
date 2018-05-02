//鑫鑫电脑
//const serverUrl = 'http://173c97n523.iok.la:35703/'
//const baseUrl = 'http://173c97n523.iok.la:35703/hurong_proj_bj_byph/mobileApi/'

//外网
const serverUrl = 'http://47.94.226.224:8181/hurong_proj_bj_byph/'
const baseUrl = serverUrl + 'mobileApi/'

//正式环境地址
// const serverUrl = 'http://erp.xiaojinqb.com/'
// const baseUrl = 'http://erp.xiaojinqb.com/mobileApi/'


// const serverUrl = 'http://172.16.100.111:8001/hurong_bj_byph/'
// const baseUrl = 'http://172.16.100.111:8001/hurong_bj_byph/mobileApi/'

//曾志燕电脑
//const serverUrl = 'http://18295xc281.imwork.net:10796/byph/'
//const baseUrl = serverUrl + 'mobileApi/'

//新人
//const serverUrl = 'http://1887868l2o.iok.la:36801/byph/'
//const baseUrl = serverUrl + 'mobileApi/'

// const serverUrl = 'http://18295xc281.imwork.net:18478/'
// const baseUrl = 'http://18295xc281.imwork.net:18478/hurong_bj_byph/mobileApi/'


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

    backup: {
        avatar: 'http://res.cloudinary.com/gougou/image/upload/gougou.png'
    },
    qiniu: {
        video: 'http://video.iblack7.com/',
        thumb: 'http://video.iblack7.com/',
        avatar: 'http://o9spjqu1b.bkt.clouddn.com/',
        upload: 'http://upload.qiniu.com'
    },
    cloudinary: {
        cloud_name: 'gougou',
        api_key: '852224485571877',
        base: 'http://res.cloudinary.com/gougou',
        image: 'https://api.cloudinary.com/v1_1/gougou/image/upload',
        video: 'https://api.cloudinary.com/v1_1/gougou/video/upload',
        audio: 'https://api.cloudinary.com/v1_1/gougou/raw/upload',
    },
    thirdpartyLogin: {
        urlWeChat: 'https://api.weixin.qq.com/sns/oauth2/access_token',//获取微信账号唯一标识
        appID: 'wxdf96d3a0bc97c62a', //微信开发id
        secret: '75b7c5f8d1d03928e7a91d8a306100e6', //微信开发应用密钥AppSecret
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

        byStages: {
            getBusinessCategorysProjectConfigApi: baseUrl + 'getBusinessCategorysProjectConfigApi.do',//获取业务列表
            chooseIntentProjectConfigApi: baseUrl + 'chooseIntentProjectConfigApi.do',//选择意向项目
            getPeriodDetails: baseUrl + 'getPeriodDetailsProductParaApi.do',//获取分期子方案
            get: baseUrl + 'getProductParaApi.do',//获取分期方案
            getByBusinessCategoryId: baseUrl + 'getByBusinessCategoryIdEnterpriseApi.do',//获取家装门店
            getChoosed: baseUrl + 'getChoosedProjectConfigApi.do',//选择装修平方面积
            createOrderApi: baseUrl + 'createOrderApi.do',//保存额度申请
            personInfo: baseUrl + 'personInfoCreditApi.do',
            create: baseUrl + 'createOrderApi.do',//提交订单
            savePersonInfo: baseUrl + 'savePersonInfoCreditApi.do',//额度申请 保存第一步 name cardNumber sex
            commonInfo: baseUrl + 'commonInfoCreditApi.do',//额度申请 第二部 projectId
            applySave: baseUrl + 'applySaveCreditApi.do',//保存基本信息
            turnApply: baseUrl + 'turnApplyCreditApi.do',//额度申请跳转 projectId
            uploadFaceImgFileFormApi: baseUrl + 'uploadFaceImgFileFormApi.do',
            getWeChatByUrlCommonApi: baseUrl + 'getWeChatByUrlCommonApi.do',
            showHomeMaterialsCreditApi: baseUrl + 'showHomeMaterialsCreditApi.do',//获取家装贷款申请所需资料目录
            showMaterials: baseUrl + 'showMaterialsCreditApi.do',//获取家装贷款申请所需资料目录
            queryAreaDicCreditApi: baseUrl + 'queryAreaDicCreditApi.do',//家装完善信息页面获取地区列表
            saveHouseCreditApi: baseUrl + 'saveHouseCreditApi.do',//家装完善信息的页面数据存储
            getIsOrderOrderApi: baseUrl + 'getIsOrderOrderApi.do',//获取是否已经存在订单
        },
        account: {
            myBill: baseUrl + 'myBillBillApi.do',//我的账单(本月,下月,全部的金额和笔数)
            allBill: baseUrl + 'allBillBillApi.do',//我的所有账单

        },

    }
}