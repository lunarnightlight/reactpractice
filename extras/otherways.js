// Extraneous Code–Code That Didn't Make The Cut


{ /* 

<Week label={this.state.label1} overview={this.state.sum1} links={this.state.week1} />                                                                   
{ /* forIn is the method for iterating over an object 

<Week label={this.state.label2} overview={this.state.sum2} links={this.state.week2} />  

<Week label={this.state.label3} overview={this.state.sum3} links={this.state.week3} /> 

<Week label={this.state.label4} overview={this.state.sum4} links={this.state.week4} /> 

<Week label={this.state.label5} overview={this.state.sum5} links={this.state.week5} /> 

<Week label={this.state.label6} overview={this.state.sum6} links={this.state.week6} /> 


instead of hard coding each Week component like above, we need to funnel all of the weeks
into map so that when we update state with a new week, it know to add a week using 
a lifecycle method.


<input type='text' value={this.state.another} /> 


<h2>Week</h2>
<Blurb overview={this.state.sum1} />
<Resources links={this.state.week1} />

<h2>Week</h2>
<Blurb overview={this.state.sum2} />
<Resources links={this.state.week2} />

<h2>Week</h2>
<Blurb overview={this.state.sum3} />
<Resources links={this.state.week3} />

<h2>Week</h2>
<Blurb overview={this.state.sum4} />
<Resources links={this.state.week4} />

*/ }