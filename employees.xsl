<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
    <title>Employee Table</title>
</head>
<body>
    <h2>Employee Information</h2>
    <table border="1">
        <tr bgcolor="lightblue">
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>

        <xsl:for-each select="employees/employee">
            <tr>
                <td><xsl:value-of select="emp_id"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="department"/></td>
                <td><xsl:value-of select="salary"/></td>
                <td><xsl:value-of select="email"/></td>
                <td><xsl:value-of select="phone"/></td>
            </tr>
        </xsl:for-each>

    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>