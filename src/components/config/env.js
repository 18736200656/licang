let baseUrl ='';
let routerMode = 'hash';
let imgBaseUrl = '';

if(process.env.NODE_ENV =='development'){
  imgBaseUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513597941184&di=8ac33345fd23932bc66c6872400896d3&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F53%2F58%2F08358PICSbi_1024.jpg'
}else if(process.env.NODE_ENV == 'production'){
  imgBaseUrl = '../../assets/logo.png'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
