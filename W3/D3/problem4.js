// problem 4
const getRoute = function(role, isLoggedIn) {
  // 1. Initial Access Check (if-else)
  if (!isLoggedIn) {
    return "/login";
  }

  // 2. Role-Based Routing (switch)
  switch (role) {
    case "admin":
      return "/admin";
    
    case "student":
      return "/student";
    
    case "college":
      return "/college";
    
    case "proctor":
      return "/proctor";

    // 3. Fallback for unrecognized roles
    default:
      return "/denied";
  }
};
console.log(getRoute("admin", true));    
console.log(getRoute("student", true));   
console.log(getRoute("college", true));  
console.log(getRoute("proctor", true));   
console.log(getRoute("guest", true));     
console.log(getRoute("admin", false));