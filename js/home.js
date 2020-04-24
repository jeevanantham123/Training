
        var node;
        var name;
        var cost;
        var dealer;
        var deal_loc;
        var nam;
        var i=1;
        function add(){ 
          document.getElementById("name").value=null;
          document.getElementById("cost").value=null;
          document.getElementById("dealer").value=null;
          document.getElementById("deal-loc").value=null;
          document.getElementById("img").value=null;
          console.log(name + cost + dealer + deal_loc);
          if(name && cost  && dealer  && deal_loc){
          console.log(node);
          document.getElementById("pro-list").appendChild(node);
          }
          else{
            alert("Enter all the Details");
          }

        }
        var loadFile = function(event) {
          name=document.getElementById("name").value;
          cost=document.getElementById("cost").value;
          dealer=document.getElementById("dealer").value;
          deal_loc=document.getElementById("deal-loc").value;
          nam=document.createElement("p");
           node = document.createElement("tr");
           var td1 = document.createElement("td");
           var td2= document.createElement("td");
           var td3= document.createElement("td");
           var td4= document.createElement("td");
           var td5= document.createElement("td");
           var but=document.createElement("button");
           img = document.createElement("img"); 
                 
           nam.innerHTML="<h4>Product Name: "+name+"</h4>";
           td2.innerHTML="<h4>Product Cost: Rs."+cost+"</h4>";
           td3.innerHTML="<h4>Product Dealer : "+dealer+"</h4>";
           td4.innerHTML="<h4>Dealer Location : "+"<i class='fa fa-map-marker'><a href='#'>"+deal_loc+"</a>"+"</h4>";
           td5.innerHTML="<h4>Click to Buy <button>Buy</button></h4>"
           img.src=URL.createObjectURL(event.target.files[0]);
           var obj1=new Object();
           obj1.name=name;
           obj1.img=String(img.src);
           obj1.dealer=dealer;
           obj1.deal_loc=deal_loc;
            localStorage.setItem("product"+i,JSON.stringify(obj1));
            i=i+1;
            img.width="200";
            img.height="200";
            td1.appendChild(nam);
            td1.appendChild(img);
            node.appendChild(td1);
            node.appendChild(td2);
            node.appendChild(td3);
            node.appendChild(td4);
            node.appendChild(td5);
          
        };

        function openSlideMenu(){
          document.getElementById('side-menu').style.width = '250px';

        }

        function closeSlideMenu(){
          document.getElementById('side-menu').style.width = '0';
        }
 
