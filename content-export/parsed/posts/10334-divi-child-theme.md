---
title: "divi-child-theme"
date: Mon, 05 Jun 2023 06:27:23 +0000
link: https://adventist.org.au/uncategorized/divi-child-theme/
categories: []
tags: []
---

ol.more-bible-teachings li:before {
	color: #dd6925;
}

.more-bible-teachings li a {
	color: #646262!important;
}

#tocDiv ul {
	list-style: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBzdHlsZT0iZmlsbDpyZ2IoMjUyLCAxMzIsIDQzKTsiIGQ9Ik04LjI4MSAxLjVMMTAuNjI4IDRMOC4yODEgNi41SDIuMzIxNUw0LjY4NDUgNEwyLjMyMTUgMS41SDguMjgxWk04LjcxNCAwLjVIMEwzLjMwOCA0TDAgNy41SDguNzE0TDEyIDRMOC43MTQgMC41WiIgLz48L3N2Zz4=');
}

.et_pb_section.et_pb_section_0_tb_header.pa_fullscreen_menu.et_section_regular.et_pb_section--with-menu {
	background: rgb(0,0,0);
	background: linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%);
}

/*place button modules next to each other in the same column*/
.pa-inline-buttons .et_pb_button_module_wrapper {
    display: inline-block;
}
/*collpse and set the height of the toggle text*/

.pa-toggle-text .et_pb_text_inner {
	max-height: 100px;
	transition: max-height 0.3s ease-out;
	overflow: hidden;
}


/*add gradient to the collapsed text*/

.pa-toggle-text .et_pb_text_inner:after {
	content: "";
	display: inline-block;
	position: absolute;
	pointer-events: none;
	height: 50px;
	width: 100%;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: linear-gradient(0deg, #fff 10%, transparent);
}


/*style the expand text link*/

.pa-toggle-text .pa-text-expand-button {
	padding: 0.5em;
	text-align: center;
	color: #ff8200!important;
}


/*change the curor to a pointed when hovering over the expand text link*/

.pa-toggle-text .pa-text-expand-button span {
	cursor: pointer;
}


/*define the font family for the toggle icon*/

.pa-toggle-text .pa-text-expand-button .pa-text-toggle-icon {
	font-family: ETMODULES, "sans-serif";
}


/*set the max height and transition of the expanded toggle*/

.pa-toggle-text .pa-text-toggle-expanded {
	max-height: 2000px;
	transition: max-height 0.3s ease-in;
}


/*hide the gradient when the toggle is expanded*/

.pa-toggle-text .pa-text-toggle-expanded.et_pb_text_inner:after {
	background: none;
}

/*Keep Menu columns*/
@media only screen and (max-width: 980px) { 
	.header-menu-with-logo .et_pb_column {
	width: 20%!important;
}
}

/*Change Hamburger Icons*/
@media (max-width: 980px) {
.et_pb_menu .et_mobile_nav_menu {
display: none !important;
}
.et_pb_menu .et_pb_menu__menu {
display: flex !important;
}
.et_pb_menu li a {
line-height: 0;
color: transparent;
font-size: 0 !important;
width: 0;
}
.et_pb_menu li a::before {
font-size: 25px;
font-family: ETmodules !important;
color: #ffffff;
position: absolute;
top: 20px;
}
li#menu-item-9000 a::before {
content: "e08b";
}
li#menu-item-8999 a::before {
content: "e086";
}
li#menu-item-9002 a::before {
content: "e081";
}
}

/*** Table of Contents Icon***/
ol.table-of-contents li:before {
	color: #dd6925;
}

.more-bible-teachings li a {
	color: #646262!important;
}

#tocDiv ul {
	list-style: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBzdHlsZT0iZmlsbDpyZ2IoMjUyLCAxMzIsIDQzKTsiIGQ9Ik04LjI4MSAxLjVMMTAuNjI4IDRMOC4yODEgNi41SDIuMzIxNUw0LjY4NDUgNEwyLjMyMTUgMS41SDguMjgxWk04LjcxNCAwLjVIMEwzLjMwOCA0TDAgNy41SDguNzE0TDEyIDRMOC43MTQgMC41WiIgLz48L3N2Zz4=');
}

/*** wrap row in a flex box ***/
.custom_row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
-webkit-flex-wrap: wrap; /* Safari 6.1+ */
flex-wrap: wrap;
}
 
/*** custom classes that will designate the order of columns in the flex box row ***/
.first-on-mobile {
-webkit-order: 1;
order: 1;
}
 
.second-on-mobile {
-webkit-order: 2;
order: 2;
}
 
.third-on-mobile {
-webkit-order: 3;
order: 3;
}
 
.fourth-on-mobile {
-webkit-order: 4;
order: 4;
}
/*** add margin to last column ***/
.custom_row:last-child .et_pb_column:last-child {
margin-bottom: 30px;
}
