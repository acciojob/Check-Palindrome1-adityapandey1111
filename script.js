// complete the given function

function palindrome(s){
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	return s === s.split('').reverse().join('');
}
module.exports = palindrome

