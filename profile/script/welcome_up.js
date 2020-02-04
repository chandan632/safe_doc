function upload_pic(){
	var input=document.getElementById("profile-pic-upload");
	var freader=new FileReader();
	freader.readAsDataURL(input.files[0]);
	freader.onloadend=function(event){
		var show=document.getElementById("upload-btn");
		var img_url=event.target.result;
		show.style.background="url("+event.target.result+")";
		show.style.backgroundRepeat="no repeat";
		show.style.backgroundSize="cover";
		var icon=document.getElementById("upload-icon");
		icon.style.display="none";
		var ficon=document.getElementById("next-icon");
		ficon.style.display="block";
		ficon.onclick=function()
		{
			localStorage.setItem(sessionStorage.getItem('user_email')+"img_url",img_url);
			var profile_bg = document.getElementById("profile-bg");
			profile_bg.style.display="none";
			window.location=location.href;
		}
	}
}

// upload username
function profile_name(){
	var pro_name=document.getElementById("welcome");
	var user_email=sessionStorage.getItem('user_email');
	var user_details=localStorage.getItem(user_email);
	var user_data=JSON.parse(user_details);
	pro_name.innerHTML=user_data.name;

}
profile_name();

//stop upload page 

function stop_upload()
{
if(localStorage.getItem(sessionStorage.getItem('user_email')+'img_url')!=null)
{
	var profile_bg = document.getElementById("profile-bg");
	profile_bg.style.display="none";
}
}
stop_upload();

//start app content

function showing_pic_name()
{
	var name=document.getElementById("profile-name");
	var user_email=sessionStorage.getItem("user_email");
	var user_details=localStorage.getItem(user_email);
	var user_data=JSON.parse(user_details);
	var fname=user_data.name;
	name.innerHTML=fname;

	var img_box=document.getElementById("profile-pic");
	var img_path=localStorage.getItem(sessionStorage.getItem('user_email')+'img_url');
	img_box.style.background="url("+img_path+")";
	img_box.style.backgroundRepeat="no-reapit";
	img_box.style.backgroundSize="cover";
}
showing_pic_name();

//logout coding

function logout()
{
	sessionStorage.clear();
	var display_notice=document.getElementById("profile-notice");
	display_notice.style.display="block";
	setTimeout(function(){
		window.location="../index.html";
	},2000);

}