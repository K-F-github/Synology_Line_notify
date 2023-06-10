async function handleHttp(conn) {
	for await (const e of Deno.serveHttp(conn)) {
		console.log("get")
		if(e.request.headers.get("Authorization")){
			for(var i = 0; i<3;i++){
				try{
					// network check 
					// send to line notify api ok , not care line notify api return 200 or more
					if(await send(e.request) === "200"){ 
						break;
					} else {
						console.log("resend")
					}
				} catch(ex){
					console.log(ex)
					continue
				}
			}
		} else {
			console.log("No line key")
		}
		e.respondWith(new Response("",{status:200}));
	}
}

for await (const conn of Deno.listen({ port: 3000 })) {
	handleHttp(conn);
}
async function send(request){
	const url = new URLPattern(request.url);
	const param = new URLSearchParams(url.search);
	return await fetch(`https://notify-api.line.me/api/notify`, {
		headers: {
			"Authorization": request.headers.get("Authorization"),
		    "Content-Type": "application/x-www-form-urlencoded"
		},
	   method: 'POST',
	   body:param
	}).then(response => response.text()).then((res) => {console.log(res);return "200"})
	.catch((error) => {console.error('Error:', error);return "404"})
}
