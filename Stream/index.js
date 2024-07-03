const fs=require('fs');
const http=require('http')

const server=http.createServer();
server.on('request',(req,res)=>{

    // 1st way  


    // fs.readFile('input.txt',(error,data)=>{
    //     if(error) return console.log(error)
    //         res.end(data.toString())
    // })


    // 2nd way 


    // const rstream=fs.createReadStream('input.txt');
    // rstream.on('data',(chunkData)=>{
    //     res.write(chunkData)
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(error)=>{
    //     res.end('file not found')
    // })

    // 3rd way

    // const rstream=fs.createReadStream('input.txt')
    // rstream.pipe(res)

})
server.listen(8000,'127.0.0.1')