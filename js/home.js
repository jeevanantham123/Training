
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
                 
           nam.innerHTML="Product Name: "+name+"";
           td2.innerHTML="Product Cost: Rs."+cost+"";
           td3.innerHTML="Product Dealer : "+dealer+"";
           td4.innerHTML="Dealer Location : "+"<i class='fa fa-map-marker'><a href='#'>"+deal_loc+"</a>"+"";
           td5.innerHTML="Click to Buy <button>Buy</button>"
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
 
