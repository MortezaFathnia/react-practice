import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import { Directions } from '@material-ui/icons';

const useStyles = makeStyles({
    container: {
        display:'flex',
        flexDirection:'column',
        margin:'1rem 0 1rem 0',
        width:'50%'
    },
    fieldItem:{
        margin:'0 0 .5rem 0',
        border:'none'
    }
});

const DynamicForm = ({ labels }) => {
    const [fields,setFields]=useState(labels);

    const classes = useStyles();

    const handleNewField=(_fields)=>{
        setFields([..._fields,'New Task'])
    }
    return (
        <>
            <div className={classes.container}>
                {fields.map(field => 
                <TextField
                    id={field}
                    label={field}
                    key={field}
                    className={classes.fieldItem}
                    color="secondary"
                />)}
            </div>
            <Fab onClick={()=>handleNewField(fields)} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
