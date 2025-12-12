export function sum(a, b) {

	if ( a <0 || b < 0 ){
		throw new Error("sum ne fonctionne pas avec les chiffre negatifs")
	}
  return a + b;
}

export function isPrime(number){
	if ( number < 0 ) return false;
	if ( number == 1 ) return false;
	if ( number == 2 ) return true;

	for(let i = 2 ; i < number / 2 ; i ++ ){
		if ( number % i == 0 )
			return false;
	}

	return true;
}

