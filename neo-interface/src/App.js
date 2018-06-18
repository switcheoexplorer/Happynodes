import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './App.css';
import BestBlock from './components/BestBlock'
import LastBlock from './components/LastBlock'
import BlockTime from './components/BlockTime'
import NodesByRegion from './components/NodesByRegion'
import NodeInfo from './components/NodeInfo'
import NodeEdges from './components/NodeEdges'
import NetworkGraph from './components/NetworkGraph'
import logo from './HappyNodes_Logo.png'
import f27logo from './27-light-red.png'
import { BrowserRouter as Router } from 'react-router-dom';
import UnconfirmedTx from './components/UnconfirmedTx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Link to='./'><img src={logo} className="App-logo" alt="logo" /></Link>
          
           <BestBlock/>
            <LastBlock/>
            <BlockTime/>
        </header>

        <div className="App-intro">
          <div class="container-fluid">
          <Route exact path="/" render={({match})=><NodesByRegion/>} />
          <Route path="/:id" render={({match})=><NodesByRegion node_id={match.params.id}/>} />
          <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <Route path="/:id" render={({match})=><NodeInfo node_id={match.params.id}/>} />
            <Route path="/:id" render={({match})=><NodeEdges node_id={match.params.id}/>} />
            <Route exact path="/" render={({match})=><NetworkGraph/>} />
          </div>
          <Route path="/" render={()=><UnconfirmedTx/>} />
          </div>
        </div>
        <footer className="App-footer">
        <hr/>
        <div className="footer-credits">
          <img src="https://neo.org/images/neo_logo.svg"/>
          <p>Part of the London 2018 NEO Blockhain Challenge<br/>Challenge: NEO Network State Monitoring
          <a href='https://github.com/neo-ngd/Hackathon/blob/master/6.17%20NEO%20Blockchain%20Challenge%20-%20London.md' target="_blank"><h1 className="App-title">NEO NGD Hackathon London 2018</h1></a>
    </p>
        </div>
        <a href="https://github.com/F27Ventures" target="_blank"><img src={f27logo} className="Footer-app-logo" alt="logo" /></a>
          <div className="footer-text">
                <p>F27 Ventures Ltd 2018</p>
                <p>Developed by <a class="github-button" href="https://github.com/wy" aria-label="Follow @wy on GitHub">@wy</a>
                <a class="github-button" href="https://github.com/i25959341" aria-label="Follow @i25959341 on GitHub">@i25959341</a>
           </p>
                </div>
            </footer>
      </div>
    );
  }
}

export default App;
