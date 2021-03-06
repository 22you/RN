//寇重阳
// const serverUrl = 'http://172.16.10.219:8041/'
// const baseUrl = serverUrl + 'gd_chsy/'

// // //杨岳涛
// const serverUrl = 'http://172.16.10.222:8064/'
// const baseUrl = serverUrl + 'hurong_proj_gd_chsy2/'
//
 const serverUrl = 'http://112.93.116.168:8181/'
 const baseUrl = serverUrl + 'hurong_proj_gd_chsy/'

export default {
    imageUrl: baseUrl + '',
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
        changeBank:baseUrl+'api/updateEnterpriseBank.do?',//修改银行卡基本信息 传参：
        start:baseUrl+'api/startTurnoverCustomerFlow2ProcessActivity.do?',//理财购买流程启动
        loading:baseUrl+'api/getTurnoverInfoBpSpecialInterest.do?',//理财购买流程加载//传参：projectId  slTaskId
        customers:baseUrl+'api/listCsInvestmentperson.do?',//我的客户列表userIds
        bankInfo:baseUrl+'api/queryListEnterpriseBank.do?',//客户银行信息列表
        bankdetail:baseUrl+'api/findEnterpriseBank.do?',//客户银行详细信息
        department:baseUrl+'api/treeOrganization.do?',//所属团队/所属部门  传参：type=undefined   branchCompanyId=undefined
        orgTeam:baseUrl+'api/dialogAppUser.do?',//客户经理，团队经理  传参： start limit type=undefined orgId
        InvestorInfo:baseUrl+'api/getCsInvestmentperson.do?',//投资人信息 传参：investId
        investOrder:baseUrl+'api/saveOrderInfoPlManageMoneyPlanBuyinfo.do?',//客户信息和订单绑定  传参：plManageMoneyPlanBuyinfo.orderId（订单id）csInvestmentperson.investId（客户id）csInvestmentperson.investName（客户姓名）
        investBankOrder:baseUrl+'api/saveOrderInfoPlManageMoneyPlanBuyinfo.do?',//投资人账户和订单的绑定 传参：订单id  plManageMoneyPlanBuyinfo.orderId  银行账户id  enterpriseBank.id
        gift:baseUrl+'api/listAllPlActivityDetails.do?',//获取礼品名称 传参：start limit
        others:baseUrl+'api/savePlManageMoneyPlanOtherInfo.do?',//保存其他信息 
        companyBank:baseUrl+'api/list2SlBankAccount.do?',//转入我司开户行
        suggest:baseUrl+'api/saveCommentsProcessForm.do?',//保存意见与说明  传参：taskid  和commits
        chaoheList:baseUrl+'api/listByProIdPlActivityDetails.do?',//朝禾优品的列表 传参：
        saveChaohe:baseUrl+'api/savePlActivityDetails.do?',//保存朝禾优品  传参
        saveBuyinfo:baseUrl+'api/saveOrderInfoPlManageMoneyPlanBuyinfo.do?',//保存购买信息
        deleteChaohe:baseUrl+'api/multiDelPlActivityDetails.do?',//删除朝禾优品
        Progress:baseUrl+'/jbpmImage?',//流程示意图  传参：runid,
        checkIdcard:baseUrl+'api/seePersonCsInvestmentperson.do?',//查看客户的身份证信息  传参：investId
        submit:baseUrl+'api/nextProcessActivity.do?',//提交下一流程 传参：
        uploadFile:baseUrl+'api/uploadReportJSFileForm.do?',//上传材料 传参：
        fileList:baseUrl+'api/ajaxGetFilesListFileForm.do?',//查看上传的资料列表  传参：mark: dataUploads.6542   typeisfile: typeisonlyfile
        deleteFile:baseUrl+'api/DeleRsFileForm.do?',//删除已上传的资料
        common: {
            uploadFile: baseUrl + 'api/uploadPhotoProduceHelper.do',//chaohe 身份证上传 mark
            uploadMaterial: baseUrl + 'uploadMaterialFileFormApi.do',//上传材料
        }

    },
    
}
