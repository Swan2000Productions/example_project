<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" doctype-public="html" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:ng="http://
angularjs.org">

<html>
<head>
<title>angular XSLT test app</title>
</head>
<body ng:app="">
<div ng-controller="xsltTestCtrl">
<p>{{item}}</p>
</div>
<script src="http://code.angularjs.org/angular-0.10.6.js"
type="text/javascript" ng:autobind="1"/>
<script>
<![CDATA[
function xsltTestCtrl($window) {
this.item = "XSLT Angular initialized";
}
]]>
</script>
  <h2>teniszpalyak</h2>
  <table border="1">
  <thead>
    <tr bgcolor="#9acd32">
      <th>id</th>
      <th>Year</th>
	  <th>Month</th>
      <th>Day</th>
	  <th>TIME</th>
      <th>Day1</th>
	  <th>day01</th>
      <th>Day2</th>
	  <th>day02</th>
      <th>Day3</th>
	  <th>day03</th>
      <th>Day4</th>
	  <th>day04</th>
      <th>Day5</th>
	  <th>day05</th>
      <th>Day6</th>
	  <th>day06</th>
      <th>Day7</th>
	  <th>day07</th>
    </tr>
	</thead>
    <xsl:for-each select="Row/Cell">
	<tbody>
    <tr>
      <td><xsl:value-of select="id"/></td>
      <td><xsl:value-of select="Year"/></td>
	  <td><xsl:value-of select="Month"/></td>
      <td><xsl:value-of select="Day"/></td>
	  <td><xsl:value-of select="TIME"/></td>
      <td><xsl:value-of select="Day1"/></td>
	  <td><xsl:value-of select="day01"/></td>
      <td><xsl:value-of select="Day2"/></td>
	  <td><xsl:value-of select="day02"/></td>
      <td><xsl:value-of select="Day3"/></td>
	  <td><xsl:value-of select="day03"/></td>
      <td><xsl:value-of select="Day4"/></td>
	  <td><xsl:value-of select="day04"/></td>
      <td><xsl:value-of select="Day5"/></td>
	  <td><xsl:value-of select="day05"/></td>
      <td><xsl:value-of select="Day6"/></td>
	  <td><xsl:value-of select="day06"/></td>
      <td><xsl:value-of select="Day7"/></td>
	  <td><xsl:value-of select="day07"/></td>
    </tr>
	</tbody>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>

