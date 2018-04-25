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
        quota: {
            getPersonRelation: baseUrl + 'getPersonRelationCreditApi.do',//查看联系人
            savePersonRelation: baseUrl + 'savePersonRelationCreditApi.do',//保存联系人
            saveUnitInfo: baseUrl + 'saveUnitInfoCreditApi.do',//保存单位信息
            getCertificates: baseUrl + 'getCertificatesCreditApi.do',//额度激活认证项
            showMaterials: baseUrl + 'showMaterialsCreditApi.do',//额度激活上传材料
            submitReview: baseUrl + 'submitReviewOrderApi.do',//提交审核
            creditAdd: baseUrl + 'creditAddCreditApi.do',//信用认证

            checkUnitInfo: baseUrl + 'checkUnitInfoCreditApi.do',//信用认证


        },
        common: {
            uploadFile: baseUrl + 'uploadFilesFileFormApi.do',//上传图片
            uploadMaterial: baseUrl + 'uploadMaterialFileFormApi.do',//上传材料
            getNextCommon: baseUrl + 'getNextCommonApi.do',//获取省市区 node
            uploadImg: baseUrl + 'uploadImgFileFormApi.do',//上传身份证图片
            memberInfo: baseUrl + 'memberInfoCommonApi.do',//获取用户的信息
        },
        authentication: {
            getAuthentication: baseUrl + 'authenticationThirdApi.do',//认证
            graphicAnalysis: baseUrl + 'graphicAnalysisCreditApi.do',//信用解读
            getNewScore: baseUrl + 'getNewScoreCreditApi.do',//信用分
            getData: serverUrl + 'web/admin/process/proprocess/getData',//规则引擎数据
        },
        my: {
            list: baseUrl + 'listOrderApi.do',//申请记录，待签约
            manualClose: baseUrl + 'manualCloseOrderApi.do',//取消签约
            showDetail: baseUrl + 'showDetailOrderApi.do',//立即签约页面
            confirm: baseUrl + 'confirmOrderApi.do',//立即签约
            getMyBankCard: baseUrl + 'getMyBankCardCreditApi.do',//查看银行卡
            cancelApply: baseUrl + 'cancelApplyOrderApi.do',//撤销申请
            bankinfoSave: baseUrl + 'bankinfoSaveCreditApi.do',//绑定银行卡
            updateCreditBankInfo: baseUrl + 'updateCreditBankInfoCreditApi.do',//更换银行卡
            uploadImg: baseUrl + 'uploadImgFileFormApi.do',//上传银行卡图片
            continueApply: baseUrl + 'continueApplyOrderApi.do',//继续申请
            seeReason: baseUrl + 'seeReasonOrderApi.do',//查看原因
            getBankList: baseUrl + 'getBankListCommonApi.do',//查看支持的银行卡
            instalmentsBill: baseUrl + 'instalmentsBillApi.do',//借款记录
            getRecCodeByTokenBpMemberApi: baseUrl + 'getRecCodeByTokenBpMemberApi.do',//获取个人的推荐码
            getOaNews: baseUrl + 'getOaNewsByRecipientCommonApi.do',//站内信
            setOaNews: baseUrl + 'setOaNewsReadedByIdCommonApi.do',//站内信修改为已读
            getTotalNo: baseUrl + 'getTotalNoReadNewsByRecipientCommonApi.do',//站内信未读总数
            delOaNews: baseUrl + 'delOaNewsByIdCommonApi.do',//删除站内信
            getEnterpriseCommon: baseUrl + 'getEnterpriseCommonApi.do',//凭证上传列表
            refundApply: baseUrl + 'refundApplyOrderApi.do',//申请退款
            findContractByProjectIdOrderApi: baseUrl + 'findContractByProjectIdOrderApi.do',//获取合同

        },
        public: {
            preRepaymentMonth: baseUrl + 'preRepaymentMonthBillApi.do',//账单预支付 projectIds typeMonth bankId
            getMyBankCard: baseUrl + 'getMyBankCardCreditApi.do',//获取个人的银行卡列表
            confirmRepaymentMonth: baseUrl + 'confirmRepaymentMonthBillApi.do',
            preRepaymentAllBillApi: baseUrl + 'preRepaymentAllBillApi.do',//借款记录 --预支付
            confirmRepaymentAllBillApi: baseUrl + 'confirmRepaymentAllBillApi.do'//借款记录 --确认支付
        },
        cash: {
            showProductList: baseUrl + 'showProductListProductParaApi.do',  //查询现金贷分期方案列表 参数token
            applyDetail: baseUrl + 'applyDetailProductParaApi.do',       //申请详情参数token，productId
            create: baseUrl + 'createProductParaApi.do',//立即申请
            selectField: baseUrl + 'selectFieldProductParaApi.do',//步骤数基本信息
            selectByStepNo: baseUrl + 'selectByStepNoProductParaApi.do',//每一步步骤数据
            changePageFlowStep: baseUrl + 'changePageFlowStepProductParaApi.do',//改变步骤数
            selectPayMonth: baseUrl + 'selectPayMonthProductParaApi.do',//查看月供

        }

    }
}