const fibonacci = (n) => {
	if (n === 2) { return 1 }
	else if (n === 1) { return 0 }
	else { return fibonacci(n - 2) + fibonacci(n - 1) }
}

console.log(fibonacci(4))