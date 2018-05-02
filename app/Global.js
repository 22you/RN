//用户登录数据  
global.user = {  
    loginState:'',//登录状态  
    userData:'',//用户数据  
};  
//刷新的时候重新获得用户数据    
storage.load({  
    key: 'loginState',  
}).then(ret => {  
    global.user.loginState = true;  
    global.user.userData = ret; 
    // console.log(ret) 
}).catch(err => {  
    global.user.loginState = false;  
    global.user.userData = '';  
})  
