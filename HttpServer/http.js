// const http=require('http');

// const server=http.createServer((req,res)=>{
//     res.end('hello from the other side');

// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listining to the port no 8000')
// });

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hello from home')
    }else if(req.url==='/infoObject') {
        res.end('hello from infoObject')
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('<h1>404 not found</h1>')
    }
    
})
server.listen(5000,'127.0.0.1',()=>{
    console.log('server is listen at 5000')
})