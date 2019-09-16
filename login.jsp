<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="./styles/login.css">
</head>
<body>
<!-- /login?error=true -->
     <c:if test="${param.error == 'true'}">
         <div style="color:red;margin:10px 0px;">
          
                Login Failed!!!<br />
                Reason :  ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}
                 
         </div>
    </c:if>
<section>
<header class="header">
<figure>
<img src="./images/logo.png" class="logo">
</figure>

</header>
</section> 
<hr/>
<section class="login">

<form class="form" action="${pageContext.request.contextPath}/j_spring_security_check" method="post">
<fieldset>
<legend>Login</legend>
<input type="text" id="username" name="username" placeholder="Name">
<input type="password" id="password"  name="password" placeholder="Password">
<button type="submit">Login</button>
</fieldset>
</form>


</section>
</body>
</html>