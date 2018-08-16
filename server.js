var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/



  if(path === '/tttt'){
	response.setHeader('Content-Type','text/html;charset=utf-8')
	response.statusCode = 200
  	response.write('哈哈')
	response.end()
  }else if(path === '/xxx' && method === 'GET'){
  	console.log(1)
	response.setHeader('Content-Type','text/json','http://frank.com:8889')
	response.statusCode = 200
	  var products = [{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}];
	response.write(JSON.stringify(products))
	response.end()
  }else if(path === '/yyy' && method === 'GET'){
  	console.log(2)
	response.setHeader('Content-Type','text/json','http://frank.com:8889')
	response.statusCode = 200
	  var products = [{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}];
	  // let len = parsedUrl.query.len
	  // let data = []
	  // for(let i = 0; i < len; i++){
	  	// data.push(products)
	  // }
	
	response.write(JSON.stringify(products))

	response.end()
  }else if(path === '/'){
 	let string = fs.readFileSync('./index.html','utf8')
	response.setHeader('Content-Type','text/html;charset=utf-8')
	response.statusCode = 200
	response.write(string)
	response.end()
  }else if(path === '/css/style.css'){
  	let string = fs.readFileSync('./css/style.css','utf-8')
	response.setHeader('Content-Type','text/css;charset=utf-8')
	response.statusCode = 200
	response.write(string)
	response.end()
  }else if(path === '/js/main.js'){
  	let string = fs.readFileSync('./js/main.js','utf8')
	response.setHeader('Content-Type','text/js;charset=utf-8')
	response.statusCode = 200
	response.write(string)
	response.end()
  }else{
	response.statusCode = 404
  	response.write('请访问正确路径')
	response.end()
  }







  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


