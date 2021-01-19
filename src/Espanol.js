import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';


class Controlled extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	    translation: {
		value: '',
		error: ''
	    }
	};
    }

    
    submitForm(event)
    {
        // doesn't refresh the page
        event.preventDefault();

	    // create a copy of state variables so we can build the error messages
	    let state_values = this.state;
	
	    // do basic error checking
	    // if error is an empty string '', then that means there's no error
	
	    //state_values.first_name.error = validate_first_name(this.state.first_name.value);
        //state_values.last_name.error =  validate_last_name(this.state.last_name.value);
        


	    // all error statuses should be updated here
	    // so we can set it
	    this.setState(state_values);
	
	    //if(state_values.first_name.error !== '' ||
        //state_values.last_name.error !== '')
        {
	    // has at least 1 error
	    // so quit
	    
	    //return;
	    }
	
	    // all error checks have been passed and have been found valid
	    // so proceed!


        // 
        alert('translating.....');
        // send the text that the user send to the google api
    }

    update_field(which, event)
    {
	    // do a convenience error check
        if(event.target.value.length < 20)
        {
	        this.setState({
            translation: 
            {
		        value: event.target.value,
		        error: this.state[which].error
		    }
	    });
	}
	
	// implied else
	// do nothing!
    }
    
    render(){
	return <form onSubmit={(event) => {this.submitForm(event);}}>
	    <Grid
		container
		spacing={4}>
		<Grid
		    item
		    lg={6}>
		    <TextField
			multiline
			label='Translation'
			value={this.state.translation.value}
			error={this.state.translation.error != ''}
			helperText={this.state.translation.error}
			onChange={(event) => {this.update_field('translation', event);}}
			variant='outlined' />
		</Grid>
        
		<Grid
		    container
		    justify='center'>
		    <Button
			color='primary'
			variant='contained'
			type='submit'>
			Submit
		    </Button>
		</Grid>
	    </Grid>
	</form>;
    }
}

export default Controlled;