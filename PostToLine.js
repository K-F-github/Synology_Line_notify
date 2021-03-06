import { serve } from "https://deno.land/std@0.100.0/http/server.ts";
const server = serve({ port: 3000 });
for await (const request of server) {
	if(request.headers.get("Authorization")){
		Deno.resolveDns("notify-api.line.me","A",{nameServer:{ ipAddr: "8.8.8.8", port: 53 }}).then(async ()=>{
			for(var i = 0; i<3;i++){
				try{
					if(await send(request) === "200"){
						break;
					} else {
						console.log("resend")
					}
				} catch(ex){
					console.log(ex)
					continue
				}
			}
		})
	} else {
		console.log("No line key")
	}
}
async function send(request){
	return await fetch(`https://notify-api.line.me/api/notify`, {
		headers: {
			"Authorization": request.headers.get("Authorization"),
		  "Content-Type": "application/x-www-form-urlencoded"
		},
	   method: 'POST',
	   body:request.url.substring(2)
	}).then(response => response.text()).then((res) => {console.log(res);return "200"})
	.catch((error) => {console.error('Error:', error);return "404"})
}
