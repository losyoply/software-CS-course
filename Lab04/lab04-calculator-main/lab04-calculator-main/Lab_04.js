// Todo 3 : Write some function to handle the pass value from HTML
console.log("Fighting!");

//document.getElementsByTagName('body').onkeydown = function(){keey()};
function cli(num) {
    var screen = document.getElementById("screen");
    

    if(num=='C')
    {
        screen.value="0";
    }
    else if(num=="/"||num=="*"||num=="+"||num=="-")
    {
        
        if(num=="/")
        {
            screen.value = screen.value + "/";
        }
        else if (num == '*')
        {
            screen.value = screen.value + '*';
        }
        else
        {
            screen.value = screen.value + num;
        }  
        
    }
    else
    {
        if(screen.value=="0"&&num==".")
        {
            screen.value = screen.value + num;
        }
        else if(screen.value=="0"||screen.value=="error")
        {
            screen.value = num;
        }
        else if(screen.value>=2||screen.value[screen.value.length-2]=="+"||screen.value[screen.value.length-2]=="/"||screen.value[screen.value.length-2]=="-"||screen.value[screen.value.length-2]=="*")
        {
            if(screen.value[screen.value.length-1]=="0"&&num!="0")
            {
                screen.value=screen.value.slice(0,screen.value.length-1);
                screen.value += num;
            }
            else if(num=="0"&&screen.value[screen.value.length-1]!="0")
            {
                screen.value += num;
            }
            else if(num!="0")
            {
                screen.value += num;
            }
        }
        else 
        {
            screen.value = screen.value + num;
        }
    }
    


}
function ans() 
{
    try 
    {
        var screen = document.getElementById("screen");
        screen.value = eval(screen.value);
    } 
    catch (e) 
    {
        screen.value = "error";
    }
}


function keyEvent(event) {
    console.log(event);
    var screen = document.getElementById("screen");
    if(event.key=='Backspace')
    {
        if(screen.value!="0")screen.value = screen.value.slice(0,screen.value.length-1);
        if(screen.value.length==0) screen.value="0";
    }
    else if(event.key=='Enter')
    {
        event.preventDefault();
        ans();
    }
    else if(event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='0'||event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/')
    {
        cli(event.key);
    }
   
}
  