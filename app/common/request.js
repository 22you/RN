/**
 * Created by fandongyang on 2017/1/11.
 */
'user strict'


import queryString from 'query-string'
import _ from 'lodash'
import {
    Alert
} from 'react-native' ;
import {NavigationActions} from 'react-navigation'
import config from './config';
import store from 'react-native-simple-store';

var request = {}


request.get = async function (url, params) {
    let urlparams = await joinParams(url, params);
    //console.log("请求 get==" + urlparams);
    return fetch(urlparams, {credentials: 'include'})
        .then((response) => {
            console.log('到底结果是什么', response)
            return response.json()
        }).then(response => {
                console.info("response====", response);
                console.log('%c请求地址(GET)=====>' + urlparams, 'color:blue')

                console.log("账号不存在'==", (response.msg === '账号不存在'))
                if (response.msg === '账号不存在') {
                    return '10'
                } else {
                    
                    return response
                }

            }
        )
    // .then((response) => Mock.mock(response))
}

joinParams = async function (url, params) {
    let token = await  store.get('member').then(member => member && member.token);
    console.log('%c请求地址(GET)用的token====>' + token, 'color:blue')

    if (token) {
        if (url.split("?").length > 1) {
            if (params) {
                url += '&token=' + token + "&" + queryString.stringify(params);
            } else {
                url += '&token=' + token;

            }
        } else {
            if (params) {
                url += '?token=' + token + "&" + queryString.stringify(params);
            } else {
                url += '?token=' + token;

            }
        }
    }

    console.log("url==" + url);
    return url;

}


request.fetchData = async function (url, params) {
    let urlparams = await joinParams(url, params);
    console.log("request.get==" + urlparams);

    return new Promise((resolve, reject) => {
        fetch(urlparams).then((response) => {
            if (resolve) return response.json()
            return reject
        }).then(responseData => {
            // console.log('请求到的数据是--->', responseData)
            if (responseData) {
                resolve(responseData)
            } else {
                reject('请求出错')
            }
        }).catch(error => {
            console.log(`Fetch category error :${error}`)
            reject('请求出错')
        })
    })
}
joinParamsPost = async function (params) {
    let token = await  store.get('member').then(member => member && member.token);

    if (token) {
        if (params) {
            params = 'token=' + token + "&" + params;
        } else {
            params = 'token=' + token;

        }
    }


    console.log("params==" + params);
    return params;

}
request.post = async function (url, body) {
    body = await  joinParamsPost(body);

    let options = _.extend(config.header, {
        body: JSON.stringify(body)
    })

    return fetch(url, {credentials: 'include'}, options)
        .then((response) => response.json()).then(response => {
                console.info("url====", url);
                console.info("response====", response);
                console.log("账号不存在'==", (response.msg == '账号不存在'))
                if (response.msg == '账号不存在') {
                    return '10'
                } else {
                    return response
                }

            }
        )
}

request.setPost = async function (url, body) {
    body = await  joinParamsPost(body);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body
    })
        .then((response) => response.json()).then(response => {
                console.info("url====", url);
                console.info("response====", response);
                console.log("账号不存在'==", (response.msg == '账号不存在'))
                if (response.msg == '账号不存在') {
                    return '10'
                } else {
                    return response
                }

            }
        )
}

request.upImage = async function (url, formData) {

    url = await  joinParamImage(url);
    console.log('上传图片的地址===>>',url)
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData
    })
        .then((response) => response.json())
}

joinParamImage = async function (url) {
    let token = await  store.get('member').then(member => member && member.token);

    if (token) {
        url += '&token=' + token;
    }


    console.log("params==" + url);
    return url;

}

request.manyLogin = function (props, responseText) {


    if (responseText === "10") {


        store.get('member').then((member) => {
            if (member) {

                Alert.alert('温馨提示', '账号已经在异地登陆，请重新登陆');
                //   const {dispatch} = props;
                //     dispatch(memberExitLogin())
                store.delete('member');
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'Login'})
                    ]
                })
                props.navigation.dispatch(resetAction)
            }
            /* else {

                            alert(2)
                            Alert.alert('温馨提示', '是否前往登录',
                                [{text: '取消', onPress: () => console.log('...')},
                                    {
                                        text: '确定',
                                        onPress: () => props.navigation.navigate('Login')
                                    }])
                        }*/
        });


    }


}
export default request;





