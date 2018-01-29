'use strict';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter , BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { BarChart } from 'react-d3-components';

import css from './../../assets/styles/main.scss';

function getTemplate() {
    return (
        <MuiThemeProvider>
            <div>
                <HashRouter>
                    <div>
                        {this.createMenuItemsLinks()}
                        <Switch>
                            {this.createMenuItemsRoutes()}
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default getTemplate;


// var tooltip = function(x, y0, y, total) {
//     return y.toString();
// };

// var data = [{
//     label: 'somethingA',
//     values: [
//         { x: 'A', y: 10 },
//         { x: 'B', y: 4 },
//         { x: 'C', y: 3 },
//         { x: 'D', y: -3 }
//     ]
// }];


// <MuiThemeProvider>
//             <div>
//                 <div>
//                     <Todo />
//                 </div>
//                 <br/>
//                 <BarChart
//                     data={data}
//                     width={800}
// 					height={400}
// 					barPadding={0.8}
//                     margin={{top: 10, bottom: 50, left: 50, right: 10}}
//                     tooltipHtml={tooltip}
// 					colorByLabel={false}
// 					xAxis={{innerTickSize: 5, label: "x-label"}}
//                     yAxis={{label: "y-label"}}
//                 />,
//                 <br/>
//                 <RaisedButton label="Default" />
//                 <p>Hello React Project</p>
//                 <br/>
//                 <LikesCounterContainer />
//                 <br/>
//                 <div>{this.createMenuItems()}</div>
//                 <HashRouter>
//                     <div>
//                         <Link to='/likes-counter'>Likes Counter</Link>
//                         <Switch>
//                             <Route path='/likes-counter' component={LikesCounterContainer} />
//                         </Switch>
//                     </div>
//                 </HashRouter>
//             </div>
//         </MuiThemeProvider>