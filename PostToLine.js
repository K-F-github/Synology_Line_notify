import { serve } from "https://deno.land/std@0.100.0/http/server.ts";
const server = serve({ port: 3000 });
for await (const request of server) {
	if(request.headers.get("Authorization")){
		fetch('https://notify-api.line.me/api/notify', {
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
