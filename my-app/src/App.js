  import React, { Component } from 'react';
  import './App.css';



  class App extends Component {

    render() {
      return (
        <div className="App">
        <h1 class="title">BeezApp</h1>

      <div class="container">
       <div class="list-1">
          <p class="title2">User name
             <ol id="usernames">     
             </ol>
          </p>
       </div>

       <div class="list-2">
          <p class="title2"> Account ID
            <ol id="accountIds">     
            </ol>
          </p>
       </div>

       <div class="list-3">
           <p class="title2">App Title
              <ol id="appTitles">     
              </ol>
            </p>
       </div>


      </div>

      </div>
      );
    }
  }

  export default App;
