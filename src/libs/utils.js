import Cookies from "js-cookie";
import MD5 from "js-md5";
import config from "@/config";

export const TOKEN_KEY = "token";

/**
 * 保存token信息
 * @param {*} token
 */
export function setToken(token) {
  Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 });
}

/**
 * 获取token信息
 */
export function getToken() {
  const token = Cookies.get("token");
  if (token) return token;
  else return false;
}

/**
 * 本地读取
 * @param {*} key
 */
export function localRead(key) {
  let res = localStorage.getItem(key);
  return JSON.parse(res);
}

/**
 * 本地存储
 * @param {*} key
 * @param {*} value
 */
export function localSave(key, value) {
  let source = JSON.stringify(value);
  localStorage.setItem(key, source);
}

/**
 * 本地存储
 * @param {*} key
 */
export function localRemove(key) {
  localStorage.removeItem(key);
}

/**
 * 本地清空
 */
export function localClear() {
  localStorage.clear();
}

/**
 * MD5加密
 * @param {*} data
 */
export function enctyptData(data) {
  let res = MD5(data);
  return res;
}

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
    const keyValueArr = url.split('?')[1].split('&')
    let paramObj = {}
    keyValueArr.forEach(item => {
      const keyValue = item.split('=')
      paramObj[keyValue[0]] = keyValue[1]
    })
    return paramObj
  }
  