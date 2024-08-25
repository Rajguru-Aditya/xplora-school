import { contactOne as contact } from "@/data/contact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const html = `<!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->

<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px; border-radius: 10px;'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<style>
.wf_customMessageBox {
	font-family: Arial, Helvetica, sans-serif;
	color: #132C14;
	background:  #F5FAF5;
	box-shadow:0 2px 6px 0 rgba(0,0,0,0.25);
	max-width: 90%;
	width:max-content;
	word-break: break-word;
	z-index: 11000;
	border-radius: 6px;
	border: 1px solid #A9D3AB;
	min-width: 100px;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	position: fixed;
	top: 20px;
	left: 50%;
	transform: translate(-50%, 0);
	}
.wf_customCircle {
	position: relative;
	background-color: #12AA67;
	border-radius: 100%;
	width: 20px;
	height: 20px;
	flex:none;
	margin-right: 7px;
	}
.wf_customCheckMark {
	box-sizing: unset !important;
	position: absolute;
	transform: rotate(45deg) translate(-50%, -50%);
	left: 6px;
	top: 9px;
	height: 8px;
	width: 3px;
	border-bottom: 2px solid #fff;
	border-right: 2px solid #fff;
	}
.wf_customClose {
	box-sizing: border-box;
	position: relative;
	width: 18px;
	height: 18px;
	}
.wf_customClose::after,
.wf_customClose::before {
	content: "";
	display: block;
	box-sizing: border-box;
	position: absolute;
	width: 12px;
	height: 1.5px;
	background: #616E88;
	transform: rotate(45deg);
	border-radius: 5px;
	top: 8px;
	left: 1px
	}
.wf_customClose::after {
	transform: rotate(-45deg)
}</style> <div class='wf_customMessageBox' id='wf_splash' style='display:none'>
	<div class="wf_customCircle">
	<div class="wf_customCheckMark"></div>
</div>
	<span id="wf_splash_info"></span>
</p>
</div>
<form id='webform751245000000327600' name=WebToLeads751245000000327600 accept-charset='UTF-8'>
 <input type='text' style='display:none;' name='xnQsjsdp' value='e5d5e590fb46bc872c7db9a2d700bae27bbc3d0259369ab3eeb16fa6ae130cad'></input> 
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
 <input type='text' style='display:none;' name='xmIwtLD' value='6d90aabad19ec7c5e2a28eed26d01c386976b4768df0c54eed4dad14ac26176255819f7c3734b52c0d98a28e773eef71'></input> 
 <input type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
 <input type='text' style='display:none;' name='returnURL' value='null' > </input>
	 <!-- Do not remove this code. -->
<style>
html,body{
	margin: 0px;
}
#crmWebToEntityForm.zcwf_lblLeft {
	width:100%;
	padding: 25px;
	margin: 0 auto;
	box-sizing: border-box;
}
#crmWebToEntityForm.zcwf_lblLeft * {
	box-sizing: border-box;
}
#crmWebToEntityForm{text-align: left;}
#crmWebToEntityForm * {
	direction: ltr;
}
.zcwf_lblLeft .zcwf_title {
	word-wrap: break-word;
	padding: 0px 6px 10px;
	font-weight:bold }.zcwf_lblLeft.cpT_primaryBtn:hover{
	background: linear-gradient(#02acff 0,#006be4 100%) no-repeat padding-box !important;
	box-shadow: 0 -2px 0 0 #0159b9 inset !important;
	border: 0 !important;
	color: #fff !important;
	outline: 0 !important;
}.zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea {
	border: 1px solid #c0c6cc !important;
	resize: vertical;
	border-radius: 10px;
	float: left;
}
.zcwf_lblLeft .zcwf_col_lab {
	width: 30%;
	word-break: break-word;
	padding: 0px 6px 0px;
	margin-right: 10px;
	margin-top: 5px;
	float: left;
	min-height: 1px;
}
.zcwf_lblLeft .zcwf_col_fld {
	float: left;
	width: 68%;
	padding: 0px 6px 0px;
	position: relative;
	margin-top: 5px;
}
.zcwf_lblLeft .zcwf_privacy{padding: 6px;}
.zcwf_lblLeft .wfrm_fld_dpNn{display: none;}
.dIB{display: inline-block;}
.zcwf_lblLeft .zcwf_col_fld_slt {
	width: 60%;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 12px;
	float: left;
	resize: vertical;
	padding: 2px 5px;
}
.zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after {
	content: '';
	display: table;
	clear: both;
}
.zcwf_lblLeft .zcwf_col_help {
	float: left;
	margin-left: 7px;
	font-size: 12px;
	max-width: 35%;
	word-break: break-word;
}
.zcwf_lblLeft .zcwf_help_icon {
	cursor: pointer;
	width: 16px;
	height: 16px;
	display: inline-block;
	background: #fff;
	border: 1px solid #c0c6cc;
	color: #c1c1c1;
	text-align: center;
	font-size: 11px;
	line-height: 16px;
	font-weight: bold;
	border-radius: 50%;
}
.zcwf_lblLeft .zcwf_row {margin: 15px 0px;}
.zcwf_lblLeft .formsubmit {
	margin-right: 5px;
	cursor: pointer;
	color: var(--baseColor);
	font-size: 12px;
}
.zcwf_lblLeft .zcwf_privacy_txt {
	width: 90%;
	color: rgb(0, 0, 0);
	font-size: 12px;
	font-family: Arial;
	display: inline-block;
	vertical-align: top;
	color: var(--baseColor);
	padding-top: 2px;
	margin-left: 6px;
}
.zcwf_lblLeft .zcwf_button {
	font-size: 14px;
	color: var(--baseColor);
	border: 1px solid #c0c6cc;
	padding: 10px 20px;
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
  width: 100%;
}
.zcwf_lblLeft .zcwf_tooltip_over{
	position: relative;
}
.zcwf_lblLeft .zcwf_tooltip_ctn{
	position: absolute;
	background: #dedede;
	padding: 3px 6px;
	top: 3px;
	border-radius: 4px;word-break: break-word;
	min-width: 100px;
	max-width: 150px;
	color: var(--baseColor);
	z-index: 100;
}
.zcwf_lblLeft .zcwf_ckbox{
	float: left;
}
.zcwf_lblLeft .zcwf_file{
	width: 55%;
	box-sizing: border-box;
	float: left;
}
.clearB:after{
	content:'';
	display: block;
	clear: both;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s;
}

.form-btn{
  background: #ddd;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s;  
  width: 100%;
}

@media all and (max-width: 600px) {
	.zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld {
		width: auto;
		float: none !important;
	}
	.zcwf_lblLeft .zcwf_col_help {width: 40%;}
}
</style>
  <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
    <label for='First_Name'>First Name<span style='color:red;'></span></label>
  </div>
  <div class='zcwf_col_fld'><input class="form-input" type='text' id='First_Name' name='First Name' maxlength='40'></input><div class='zcwf_col_help'></div></div></div>
  <div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Last_Name'>Last Name<span style='color:red;'></span></label></div><div class='zcwf_col_fld'><input class="form-input" type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Email'>Email<span style='color:red;'></span></label></div><div class='zcwf_col_fld'><input class="form-input" type='text' ftype='email' autocomplete='false' id='Email' name='Email' crmlabel='' maxlength='100'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Mobile'>Mobile<span style='color:red;'></span></label></div><div class='zcwf_col_fld'><input class="form-input" type='text' id='Mobile' name='Mobile' maxlength='30'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='City'>City</label></div><div class='zcwf_col_fld'><input class="form-input" type='text' id='City' name='City' maxlength='100'></input><div class='zcwf_col_help'></div></div></div><div class='zcwf_row'><div class='zcwf_col_lab'></div><div class='zcwf_col_fld'><input type='submit' id='formsubmit' class='formsubmit zcwf_button form-btn' value='Submit' title='Submit'></div></div>
	<script>
	function validateEmail751245000000327600()
	{
		var form = document.forms['WebToLeads751245000000327600'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

	function checkMandatory751245000000327600() {
		var mndFileds = new Array('First Name','Last Name','Email','Mobile');
		var fldLangVal = new Array('First\x20Name','Last\x20Name','Email','Mobile');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads751245000000327600'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		if(!validateEmail751245000000327600()){return false;}
		
	var urlparams = new URLSearchParams( window.location.search);
	if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
		var webform = document.getElementById('webform751245000000327600');
		 var service =  urlparams.get('service'); 
		var smarturlfield = document.createElement('input');
		smarturlfield.setAttribute('type','hidden');
		smarturlfield.setAttribute('value',service);
		smarturlfield.setAttribute('name','service');
		webform.appendChild(smarturlfield); 
	}

		document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	return true;
	}

$(document).ready(function () {
	$('#webform751245000000327600').submit(function (e) {
		var ismandatory = checkMandatory751245000000327600();
		e.preventDefault();
		if(ismandatory){
			 if(typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit){ _wfa_track.wfa_submit(e); }
			var formData = new FormData(this);
			$.ajax({
				url :'https://crm.zoho.in/crm/WebToLeadForm',
				type : 'POST',
				data : formData,
				cache: false,
				contentType: false,
				processData: false,
				success: function(data) {
					var splashinfodom = document.getElementById("wf_splash_info");
					splashinfodom.innerText=data.actionvalue;
					var splashdom = document.getElementById("wf_splash");
					document.getElementById("webform751245000000327600").reset.click();
					splashdom.style.display = '';
					setTimeout(function(){
						splashdom.style.display = 'none';
					},5000);
				document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
				},
				error: function(data){
					alert("an error occurred");
				}	
			});
		}
	});
});
function tooltipShow751245000000327600(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
</script>
	<!-- Do not remove this --- Analytics Tracking code starts --><script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=a8f26a327fbc19cd29564531b11673874072c15cba4999ba19d4a788d17a777138bdf16b0ea74438401f9a33b8327495gid595f9ca740eb6469eb481bd844babcdb054f6b90967517e545e2ea37c83a8f06gide80d61369df58d772024790029af625fa63dca583951db83b2824571ffe5dd65gidc145225403d78022727a23d8774cf2e967609db0d272336140003263f39e5817&tw=81f688ea774dc46cbf7e1a5c9fdc74a37af33aa93df6de18bd69015d5c7a2f05'></script><!-- Do not remove this --- Analytics Tracking code ends. --></form>
</div>`;

const hubspotHtml = `
<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",
    portalId: "145296826",
    formId: "4ef0db01-72b7-4986-a0dd-f01522ee471a"
  });
</script>`;

export default function ContactFormOne() {
  const formDetails = {
    region: "eu1",
    portalId: "145296826",
    formId: "4ef0db01-72b7-4986-a0dd-f01522ee471a",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: formDetails.region,
          portalId: formDetails.portalId,
          formId: formDetails.formId,
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <section className="contact__area pt-130 pb-130">
      <div className="container">
        <div className="contact__form-wrap">
          {/* <!-- Form  --> */}

          {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfLYfn_jcWeKQYl0bUyRcjDADFjBvyyBO9JGiaql37hlAPUbA/viewform?embedded=true"
            width="640"
            height="853"
          >
            Loading…
          </iframe> */}
          <div id="hubspotForm"></div>
        </div>
        {/* <div className="contact__socail-wrap">
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.phoneIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Call Us</p>
              <Link
                className="contact__social-subtitle"
                to={`tel:${contact.form.phoneNumber}`}
              >
                {contact.form.phoneNumber}
              </Link>
            </div>
          </div>
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.mailIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Email</p>
              <Link
                className="contact__social-subtitle"
                to={`mailto:${contact.form.email}`}
              >
                {contact.form.email}
              </Link>
            </div>
          </div>
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.locationIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              {contact.form.locationTitle && (
                <p className="contact__social-title">
                  {contact.form.locationTitle}
                </p>
              )}
              {contact.form.address && (
                <p className="contact__social-subtitle">
                  {contact.form.address}
                </p>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
