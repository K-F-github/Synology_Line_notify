import { serve } from "https://deno.land/std@0.100.0/http/server.ts";
const server = serve({ port: 3000 });
for await (const request of server) {
	if(request.headers.get("Authorization")){
		let ip = await Deno.resolveDns("notify-api.line.me","A",{nameServer:{ ipAddr: "8.8.8.8", port: 53 }}).then(res=> res[0])
		fetch(`https://${ip}/api/notify`, {
			headers: {
				"Authorization": request.headers.get("Authorization"),
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: 'POST',
			body:request.url.substring(2)
		}).then(response => response.json()).then(res => console.log(res))
		.catch(error => console.error('Error:', error))
	} else {
		console.log("No line key")
	}
}
