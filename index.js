// const http = require('http');
// const port = 8000;
// const fs = require('fs');

// function requestHandler(req,res)
// {
//     console.log(req.url);
//     res.writeHead(200,{'content-type':'text/html'});
    
//     fs.readFile('/Users/kennysebastian/Downloads/SettingUpOurFirstNodeJsServer/basichttpserver/index.html',
//      function(err,data )
//     {
//         if(err)
//         {
//             console.log('error',err);
//             return res.end('<h1>error aagya! </h1>');

//         }
//         return res.end(data);
//     });
for(var i=0;i<5;i++)
{console.log(i);
}
    //res.end('<h1>gotcha!</h1>');

// }
// const server = http.createServer(requestHandler);



// server.listen(port, function(err){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Server is up and running on port:", port);
// });