function shortcut(s1, s2) {
	if (s1 === "" || s2 === "") {
    return "";
  }
  
  // Return the first character of both strings concatenated
  return s1[0] + s2[0];
	
	
	
  // your code here
}

// // Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
