console.log("welcome to new project");

// this code is repeat to solve the refresh page error
	showNotes();
	// End the repeat code

btn=document.getElementById("btn");
btn.addEventListener("click",function(e){
	addtxt=document.getElementById("addtxt");
	console.log(addtxt.values);
	note=localStorage.getItem("note");
	if(note==null)
	{
		noteobj=[];
	}
	else
	{
		noteobj=JSON.parse(note);
	}
	noteobj.push(addtxt.value);
	localStorage.setItem("note",JSON.stringify(noteobj));
	showNotes();

	// delete event is going to run
	
	
});


//note adding to card
	function showNotes()
	{
		note=localStorage.getItem("note");
		if(note==null)
		{
			noteobj=[];
		}
		else
		{
			noteobj=JSON.parse(note);
		}
		// noteobj=JSON.parse(note);
		card=document.getElementById("notes");
		// console.log(card);
		html="";
		noteobj.forEach(function(element,index){
			html+=`<div class="card my-2 mx-2" style="width: 18rem;">
				<div class="card-body">
		    	<h5 class="card-title">notes${index+1}</h5>
		    	<p id="para">${element}</p>
		    	<Button onclick="deletefunc(this.id)" class="btn btn-primary" id="${index}">Delete</Button>
  				</div>
  			</div>`});
		// console.log(html);
		card.innerHTML=html;
	}

// deleting function

	function deletefunc(index)
	{
		console.log(noteobj);
		noteobj.splice(index,1);
		localStorage.setItem("note",JSON.stringify(noteobj));
		console.log(noteobj);
		showNotes();
		if(noteobj.length==0)
		{
			empty=document.getElementById("notes");
			empty.innerHTML="<h5>you are not created any note</h5>";
			empty.style.color="red"
		}
	}

	if(noteobj.length==0)
	{
		empty=document.getElementById("notes");
		empty.innerHTML="<h5>you are not created any note</h5>";
		empty.style.color="red"
	}


// search bar maintaining
searchbtn=document.getElementById("searchbtn");
searchbtn.addEventListener("input",search);


function search(e)
{
	serchValue=searchbtn.value;
	card_body=document.getElementsByClassName("card");
	// card_body.getElementByTagName("p");
	console.log(card_body);
}