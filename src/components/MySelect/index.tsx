import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ISelectProps, { IItems } from './myselect.types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    })
);

export default function (props: ISelectProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
        props.handleEmit(event.target.value as string);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>{props.title}</InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={value}
                onChange={handleChange}
            >
                {props.items.map((item: IItems) => (
                    <MenuItem value={item.val} key={item.key}>
                        {item.key}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
