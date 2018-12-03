import network from "@hyperswarm/network";
import crypto from "crypto";

const makeKey = () => {
	console.error("no key provided, generating one...");
	var possible = "abcdef123456789";

	return Array.from({ length: 64 })
		.map(() => possible.charAt(Math.floor(Math.random() * possible.length)))
		.join("");
};

const main = () => {
	const [_, __, keyInput] = process.argv;
	const net = network();

	const key = keyInput || makeKey();
	const topic = crypto
		.createHash("sha256")
		.update(key)
		.digest();

	net.join(topic, {
		lookup: true, // find & connect to peers
		announce: true, // optional- announce self as a connection target
	});

	console.error(`joined swarm for topic ${key},
to connect to this hyperpipe, run
$ hyperpipe ${key}
	`);

	net.on("connection", (socket, details) => {
		console.error("new connection");
		process.stdin.pipe(socket).pipe(process.stdout);
	});
};

main();
