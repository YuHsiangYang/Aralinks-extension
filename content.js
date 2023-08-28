console.log('Aralinks extension running');
// let check_box = document.getElementById("rememberusername");
// check_box.click();
let login = document.getElementById("loginbtn");
var expanded = false;
if (login != null){
  let thi = document.getElementById("username");
  thi.value = "csa.yyang";
  let pas = document.getElementById("password");
  pas.value = "o>w@Qrx3";
  login.click();
}
else{
  let url ="";
    
  chrome.runtime.sendMessage({
      type: "get"
  }, function(message){
      url = message.result;
      console.log("index= " + url.indexOf('#'));
      let tm = url.substring(50, url.toString().length);
      
      console.log(tm);
      console.log("content " + url);
  }) 
  window.addEventListener('hashchange', function() {
    console.log('The hash has changed!')
  }, false);
    window.addEventListener('load', function () {
      let section_expand = document.getElementById(url.substring(url.toString().indexOf("#"), url.toString().length).replace('#section', 'toggle'));
      if (section_expand != null){
        section_expand.click();
        console.log('section expanded = ' + section_expand);
      }
      let expanded = document.getElementsByClassName("btn nav-link float-sm-left mr-1 btn-secondary")[0].getAttribute('aria-expanded');
      let btn = document.getElementsByClassName("btn nav-link float-sm-left mr-1 btn-secondary")[0];
      
      if (expanded.toString() == "true"){
        console.log('expanded = true');
        btn.click();
      }
      if(url.indexOf('view.php') != -1 || url.indexOf('aralinks.net') != -1){
        document.onmousemove = function(mouse){
          let x_loc = mouse.pageX;
          let y_loc = mouse.pageY;
          
          
          
          if (x_loc < 50 && expanded == false){
            
            console.log("true");
            expanded = true;
            btn.click();
          }
          
          else if (x_loc > 245 && expanded == true){
            console.log('false');
            expanded = false;
            btn.click()
          }
        }
      }
    })
}
    
    






