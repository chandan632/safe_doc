window.onload=function(){
    var x=document.getElementById("contacts").children.length;
    if(x==0)
    {
        document.getElementById("c-list").innerHTML="No Contact Found !"
    }
}
function show_profile_pic()
{
    var pic_box=document.getElementById("pic-box");
    var pic_url=localStorage.getItem(sessionStorage.getItem('user_email')+'img_url');
    pic_box.style.background="url("+pic_url+")";
    pic_box.style.backgroundRepeat="no-reapit";
    pic_box.style.backgroundSize="cover";
}
show_profile_pic();

//add contact details

function add_contact_details()
{
var fullname=document.getElementById("fullname").value;
var pnum=document.getElementById("pnum").value;
var snum=document.getElementById("snum").value;
if(fullname!="" && pnum!="" && snum!="")
{
    if(isNaN(pnum))
    {
        alert('please enter valid primary number');
    }
    else
    {
        if(isNaN(snum))
        {
          alert('please enter valid secondary number');
        }
        else
        {
var user={fullname:fullname,pnum:pnum,snum:snum};
var user_details=JSON.stringify(user);
localStorage.setItem(fullname+"contact",user_details);
var form=document.getElementById("add-form");
form.reset();
document.getElementById("saved").style.display="block";
setTimeout(function(){document.getElementById("saved").style.display="none";},2000);
window.location=location.href;
        }
    }
}
else
{
    alert("some fields are empty");
}
}

function show_contacts(){
    var i;
    for(i=0;i<localStorage.length;i++)
    {
        var keys=localStorage.key(i);
        if(keys.match("contact"))
        {
            var json_text=localStorage.getItem(keys);
            var json_extract=JSON.parse(json_text);
            var con=document.getElementById("contacts");
            var fieldset=document.createElement("FIELDSET");
            var legend=document.createElement("LEGEND");
            var ol=document.createElement("OL");
            var li_one=document.createElement("LI");
            var li_two=document.createElement("LI");
            var trash=document.createElement("I");
            trash.setAttribute("class","fa fa-trash");
            trash.setAttribute("id","delete-icon");
            trash.setAttribute("title","Delete Contact");
            var edit=document.createElement("I");
            edit.setAttribute("class","fa fa-edit");
            edit.setAttribute("id","delete-icon");
            edit.setAttribute("title","Edit Contact");
            var save=document.createElement("I");
            var saved=document.createElement("SPAN");
            save.setAttribute("class","fa fa-save");
            save.setAttribute("id","delete-icon");
            save.setAttribute("title","Save Contact");
            con.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            ol.appendChild(trash);
            ol.appendChild(edit);
            ol.appendChild(save);
            ol.appendChild(saved);
            save.style.display="none";
            legend.appendChild(document.createTextNode(json_extract.fullname));
            li_one.appendChild(document.createTextNode(json_extract.pnum));
            li_two.appendChild(document.createTextNode(json_extract.snum));
            saved.appendChild(document.createTextNode("successfully saved"));
            saved.style.color="red";
            saved.style.fontFamily="sans-sarif";
            saved.style.fontWeight="bold";
            saved.style.clear="both";
            saved.style.display="none";
            del_contact(keys,trash);
            edit_contact(keys,edit,save,saved);
        }
    }
}
show_contacts();

//edit contact

function edit_contact(contact_name,edit_btn,save_button,saved)
{
    edit_btn.onclick=function()
    {
        save_button.style.display="block";
    }
}

//delete contact

function del_contact(contact_name,contact_btn)
{
    contact_btn.onclick=function(){
var answare=confirm("are you sure !!");
if(answare==true)
{
   var ol=this.parentElement;
   var fieldset=ol.parentElement;
   fieldset.remove();
   localStorage.removeItem(contact_name);  
   var x=document.getElementById("contacts").children.length;
    if(x==0)
    {
        document.getElementById("c-list").innerHTML="No Contact Found !"
    }
}
}
}

//search coding

function search_contact(user_input)
{
    var keyword=user_input.value.toUpperCase();
    var contact_list=document.getElementById("contacts");
    var legend=contact_list.getElementsByTagName("LEGEND");
    var i;
    for(i=0;i<legend.length;i++)
    {
        if(legend[i].innerHTML.toUpperCase().indexOf(keyword)!=-1)
        {
            legend[i].parentElement.style.display="";
        }
        else{
            legend[i].parentElement.style.display="none";
        }
    }
}