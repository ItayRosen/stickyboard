				var colors = ["#fffeca","#c8ffca","#f6c5c8"];
				var board = document.getElementById("stickyBoard");
				board.classList.add("board");
				var notesContainer = document.createElement("div");
				notesContainer.className = "row align-items-center justify-content-center";
				board.appendChild(notesContainer);  

				function styleNote(note) {
					note.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
					note.style.transform = "rotate(" + random(-3,3) + "deg)";
					note.style.margin = random(5,35) + "px";
				}

				function random(min,max)
				{
					return Math.floor(Math.random()*(max-min+1)+min);
				}
				
				function addNote(titleText,contentText) {
					var note = document.createElement("div");
					var pin = document.createElement("img");
					var title = document.createElement("p");
					var content = document.createElement("p");
					note.className = "col-md-3 col-md-offset-1 col-xs-10 col-xs-offset-2 note";
					pin.src = "pin.png";
					pin.className = "pin";
					title.appendChild(document.createTextNode(titleText));   
					title.className = "title";
					content.appendChild(document.createTextNode(contentText));   
					content.className = "content";
					note.appendChild(pin);
					note.appendChild(title);
					note.appendChild(content);
					notesContainer.appendChild(note);
					styleNote(note);
				}