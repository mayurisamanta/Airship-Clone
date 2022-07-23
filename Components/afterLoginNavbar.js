let navbar1 = ()=>{
    return ` <div>
    <a href="projectProfilePage.html">
        <img src="https://go.airship.com/assets/75ac4e3598fc7916f372c3b5cb3599c7b5fa2ec0/images/airship-logo-horizontal.svg" alt="Error">
    </a>
  
    
</div>
</div>

    <div>
        <a href="projectProfilePage.html"><h4>All Projects</h4></a>
    </div>
    <div class="dropdown">
    <img  class="icon dropbtn" id="quemark" src="https://cdn-icons-png.flaticon.com/128/3916/3916709.png" />
    <div id="myDropdown1" class="dropdown-content">
      <h4>RESOURCES</h4>
      <p>Docs</p>
      <p>What's New</p>
      <p>Blog</p>
      <h4>HELP & FEEDBACK</h4>
      <p>Support</p>
      <p>Guides</p>
      <p>FAQ</p>
      <button class="btn">Submit Feedback</button>
    </div>
    <div class="dropdown">
  <img  class="icon dropbtn" id="profile" src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" />
  <div id="myDropdown" class="dropdown-content" >
    <h4 id="emailId"></h4>
    <p>Account Info</p>
    <p>Team Management</p>
    <p>IP Allowlist </p>
    <a href="index.html"><button class="btn">Log Out</button></a>
  </div>
</div>
   

</div>`
}

let navbar2 = ()=>{
    return `
    <div id="search">
      <img class="icon" id="searchImg" src="https://www.flaticon.com/svg/vstatic/svg/3917/3917132.svg?token=exp=1658326068~hmac=494921a43064ad8c57a92930ad60d05b" alt="error">
      <input type="search" id="searchBar" placeholder="SEARCH PROJECTS">
    </div>
    <div>
      <div class="sortCenter">
        <label  class="label">SORT:</label>
        <button id="sortByDate" class="btn-group">Date Created <span></span></button>
        <button id="sortByName" class="btn-group">Name<span></span></button>
        
      </div>
      <div class="sortCenter">
        <label class="label">FILTER:</label>
        <button id="filterWithTeam" class="btn-group1">Team</button>
        <button id="filterWithOwner" class="btn-group1">Owner</button>
        
        <button id="filterByTest" class="btn-group2" value="test">Test</button>
        <button id="filterByLive" class="btn-group2" value="live">Live</button>
      </div>
      <div id="appendbtn">
      </div>
    </div>
    

    <div> 
    <a href="createProjectForm.html"><button id="createProjectButton">Create Project</button></a>
</div>`
}
export {navbar1 , navbar2}

  // <div class="dropdown">
    // <button class="dropbtn">Dropdown</button>
    // <img class="icon dropbtn" src="https://cdn-icons-png.flaticon.com/128/3916/3916709.png"  alt="Error">
    //onclick="myFunction1()"   onclick="myFunction()"