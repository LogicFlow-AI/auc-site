---
title: "Divi"
date: Mon, 01 Aug 2022 00:04:44 +0000
link: https://adventist.org.au/uncategorized/divi/
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
/*Add MENU text to mobile menu*/
.mobile_menu_bar:after {
    content: "MENU";
    position: relative;
    color: #ffffff!important;
    cursor: pointer;
    font-size: 16px;
    vertical-align: text-top;
}
/*Hide Hamburger on mobile menu*/
.mobile_menu_bar:before {
    opacity: 0;
}
/*Add CLOSE when mobile menu is open*/
.opened .mobile_menu_bar:after {
    content: "CLOSE";
	color: #ff8200!important;
}
.et_mobile_menu {
    background-color: #000!important; /* Sets the background to black */
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
/*** EVENTS MODULES HOMEPAGE ***/

.ect-list-wrapper {
	margin: 0 !important
}
.ect-list-post.style-2 {
	background: #ffffff !important;
}
.ect-list-post-right {
	background: #ffffff !important;
}
#ect-events-list-content .ect-list-post.style-2 {
	border-top: 1px solid #ff8200;
}
/* Padding */
.ect-list-description {
	padding: 30px 40px!important;
}

/* Event Title */
.ect-event-url {
	color: #434242 !important;
	text-transform: uppercase;
	font-size: 19px !important;
	font-weight: 700 !important;
}
/* Event Icon */
.ect-icon-location {
	color: #ff8200;
}
/* Event Venue */
.ect-venue-details {
	color: #434242 !important;
	text-transform: uppercase;
	font-size: 15px !important;
	font-weight: 600 !important;
}
/* Event Venue Adress */
.tribe-street-address {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 400 !important;
}
.tribe-locality {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 400 !important;
}
.tribe-region {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 400 !important;
}
.tribe-postal-code {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 640000 !important;
}
.tribe-country-name {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 400 !important;
}
.tribe-events-gmap {
	color: #ff8200 !important;
	text-transform: uppercase;
	font-size: 13px !important;
	font-weight: 600 !important;
}
/* Event Content */
.ect-event-content p {
	color: #434242 !important;
	text-transform: none;
	font-size: 15px !important;
	font-weight: 400 !important;
}
/* Event Button */
.ect-events-read-more {
	color: #ff8200 !important;
	text-transform: uppercase;
	font-size: 15px !important;
	font-weight: 600 !important;
}
/* Right Side Date */
.modern-list-right-side{
box-shadow: none !important;
background: #ffffff !important;
}
.ev-day {
	color: #ff8200 !important;
	text-transform: uppercase;
	font-size: 50px !important;
	font-weight: 700 !important;
}
.ev-mo {
	color: #7c7c7c !important;
	text-transform: uppercase;
	font-size: 20px !important;
	font-weight: 700 !important;
}
.ev-yr {
	color: #7c7c7c !important;
	text-transform: uppercase;
	font-size: 20px !important;
	font-weight: 700 !important;
}
.ev-time {
	color: #7c7c7c !important;
	text-transform: uppercase;
	font-size: 13px !important;
	font-weight: 700 !important;
}
/* SINGLE EVENT PAGE */
#et-main-area {
	background: #eeeeee !important;
}
#tribe-events-pg-template {
    background-color: #eeeeee !important;
	  margin: 0 auto;
}
.tribe-events-back a{
	color: #ff8200 !important;
	text-transform: uppercase;
	font-size: 14px !important;
	font-weight: 600px !important;
}
.tribe-events-single-event-title{
	color: #434242 !important;
	text-transform: uppercase;
	font-size:38px !important;
	font-weight:700
}
.tribe-event-date-start{
	color: #434242 !important;
	text-transform: uppercase;
	font-size:15px !important;
	font-weight:600 !important;
}
.tribe-event-time {
	color: #434242 !important;
	text-transform: uppercase;
	font-size:15px !important;
	font-weight:600 !important;
}
.tribe-events-single-event-description.tribe-events-content {
	color: #434242 !important;
	text-transform: none;
	font-size:18px !important;
	font-weight:400;
}
/* Add To Calander Button */
.tribe-common-c-btn-border.tribe-events-c-subscribe-dropdown__button {
	background: #ff8200;
	color: #fff;
	text-transform: uppercase !important;
	font-size:15px !important;
	font-weight:600;
	border: #ff8200 !important;
}
.tribe-common-c-btn-border.tribe-events-c-subscribe-dropdown__button:hover {
  background: #ffffff !important;
	color: #ff8200 !important;
	text-transform: uppercase !important;
	font-size:15px !important;
	font-weight:600;
	border: #ff8200 !important;
}
/* Bottom Events Details Section */
.tribe-events-meta-group a{
	color: #ff8200;
	font-size:12px !important;
	font-weight:600;
	text-transform: uppercase;
}
/* Bottom Navigation Button */
.tribe-events-nav-pagination{
	text-transform: uppercase;
}
.tribe-events-nav-previous a{
	color: #ff8200 !important;
	font-size: 14px !important;
}
.ContactButton{color: #ff8200;
    background-color: white;
    border-width: 0px;
}
