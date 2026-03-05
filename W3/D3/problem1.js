// 1 problem statement
function tagPassword(password) {
  if (typeof password !== "string") {
    return "INVALID";
  }
  let hasLetter = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    let ch = password[i];
    if (
      (ch >= 'A' && ch <= 'Z') ||
      (ch >= 'a' && ch <= 'z')
    ) {
      hasLetter = true;
    }
    if (ch >= '0' && ch <= '9') {
      hasNumber = true;
    }
  }
  if (password.length < 8) {
    return "WEAK";
  }

  if (password.length >= 12 && hasLetter && hasNumber) {
    return "STRONG";
  }

  if (password.length >= 8 && hasLetter && hasNumber) {
    return "MEDIUM";
  }

  return "WEAK";
}
console.log(tagPassword("ABC12"));      
console.log(tagPassword("abc12345"));   
console.log(tagPassword("abc123456789")); 
console.log(tagPassword(1010));       