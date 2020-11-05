var https=require('http')


 
  const options={
    hostname: 'awseb-awseb-59l45lz7u2cm-21912660.us-east-2.elb.amazonaws.com',
    port: 80,
    method: 'GET'
}

const req=https.request(options,res=>{
    try {
        console.log(`status code: ${res.statusCode}`)
    if(res.statusCode==200)
       console.log("Service is up")
    else
       console.log("Service is down")
    } catch (error) {
      //  console.log(error.statusCode)
        
    }
    
    
})


req.on('error',error=>{
    console.log("Service is down")
    console.error(error)
})

req.end()

