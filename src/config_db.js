var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Driver={ODBC Driver 13 for SQL Server};Server=tcp:chuck-norris-facts-srv.database.windows.net,1433;Database=chuck-norris-facts-db;Uid=chuck-norris-admin@chuck-norris-facts-srv;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 