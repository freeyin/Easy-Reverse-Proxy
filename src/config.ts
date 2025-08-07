import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_SECRET = 'Easy-Reverse-Proxy'; // 代理密钥
// 代理
export let PROXIES: Proxy[] = [
    {
        domain: 'google.feijichang.me',
        url: 'https://www.google.com.hk/',
        enable: true
    }
];
