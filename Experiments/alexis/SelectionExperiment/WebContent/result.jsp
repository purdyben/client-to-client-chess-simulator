<%@ page import ="java.util.*" %>
<!DOCTYPE html>
<html>
<body>
<div style="text-align:center; width:100%; margin:auto;">
<h1>
    Rabbit Breed's Origin
</h1>
<%
String result= (String)request.getAttribute("origin");
out.println("<br>The breed originates from: <br><br>");
out.println(result+"<br>");
%>
</div>
</body>
</html>