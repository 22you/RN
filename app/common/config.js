//寇重阳电脑
// const serverUrl = 'http://172.16.10.219:8041/'
// const baseUrl = serverUrl + 'gd_chsy/'

//杨岳涛
const serverUrl = 'http://172.16.10.222:8064/'
const baseUrl = serverUrl + 'hurong_proj_gd_chsy2/'
//
// const serverUrl = 'http://47.94.226.224:8181/hurong_proj_bj_byph/'
// const baseUrl = serverUrl + 'mobileApi/'

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
        login: baseUrl + 'api/ajaxValidation.do?',//登录 userName,password
        prolist:baseUrl+'api/listPlManageMoneyPlan.do',//产品列表 start,limit
        userbase:baseUrl+'api/saveCsInvestmentperson.do?',//保存用户基本信息
        mytask:baseUrl+'api/getFinanceProject1PlManageMoneyPlanBuyinfo.do',//我的业务userIds
        mytodo:baseUrl+'api/userActivityAllTask.do',//我的待办?processName=ALL&start=0&limit=25&userIds=1
        probase:baseUrl+'/api/getPlManageMoneyPlan.do',//产品基本信息mmplanId
        dictionary:baseUrl+'api/loadItemByNodeKeyDictionary.do?', //单级数据字典 nodeKey
        bankList:baseUrl+'api/getAllBankListCsBank.do',//银行卡列表
        saveBank:baseUrl+'api/addEnterpriseBank.do?',//保存银行卡基本信息
        start:baseUrl+'api/startTurnoverCustomerFlow2ProcessActivity.do?',//理财购买流程启动
        loading:baseUrl+'api/getTurnoverInfoBpSpecialInterest.do?',//理财购买流程加载//传参：projectId  slTaskId
        customers:baseUrl+'api/listCsInvestmentperson.do?',//我的客户列表userIds
        bankInfo:baseUrl+'api/queryListEnterpriseBank.do?',//客户银行信息列表
        department:baseUrl+'api/treeOrganization.do?',//所属团队/所属部门  传参：type=undefined   branchCompanyId=undefined
        InvestorInfo:baseUrl+'api/getCsInvestmentperson.do?',//投资人信息 传参：investId
        investOrder:baseUrl+'api/saveOrderInfoPlManageMoneyPlanBuyinfo.do?',//客户信息和订单绑定  传参：plManageMoneyPlanBuyinfo.orderId（订单id）csInvestmentperson.investId（客户id）csInvestmentperson.investName（客户姓名）
        investBankOrder:baseUrl+'api/saveOrderInfoPlManageMoneyPlanBuyinfo.do?',//投资人账户和订单的绑定 传参：订单id  plManageMoneyPlanBuyinfo.orderId  银行账户id  enterpriseBank.id
        gift:baseUrl+'api/listAllPlActivityDetails.do?',//获取礼品名称 传参：start limit
        others:baseUrl+'api/savePlManageMoneyPlanOtherInfo.do?',//保存其他信息 
        companyBank:baseUrl+'api/list2SlBankAccount.do?',//转入我司开户行
        suggest:baseUrl+'api/saveCommentsProcessForm.do?',//保存意见与说明  传参：taskid  和commits
        common: {
            uploadFile: baseUrl + 'api/uploadPhotoProduceHelper.do',//chaohe 身份证上传 mark
            uploadMaterial: baseUrl + 'uploadMaterialFileFormApi.do',//上传材料
            getNextCommon: baseUrl + 'getNextCommonApi.do',//获取省市区 node
            memberInfo: baseUrl + 'memberInfoCommonApi.do',//获取用户的信息
        }

    },
    
}
