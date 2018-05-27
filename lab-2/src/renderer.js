"use strict"

const $ = require('jquery')

export let renderList = function(users=[],el=document.body){
    el.innerHTML = '';
  users.forEach(user=>{
    $('.users_list').append('<li id="' + user.id + '" class="user">' + user.name + '</li>');
    $('#' + user.id).click(function() {
       
      let el = document.getElementById('profile_id');
      
      el.innerHTML = '';

      let avatarEl = document.createElement('li');
      avatarEl.classList.add('avatar');
      let imgEl = document.createElement('img')
      imgEl.setAttribute('src', user.avatar);  
      avatarEl.appendChild(imgEl);
      el.appendChild(avatarEl);

      let nameEl = document.createElement('li');
      nameEl.innerHTML = user.name;
      el.appendChild(nameEl);

      let emailEl = document.createElement('li');
      emailEl.innerHTML = user.email;
      el.appendChild(emailEl);

      let phoneEl = document.createElement('li');
      phoneEl.innerHTML = user.phone;
      el.appendChild(phoneEl);

    });        
          
  })

}