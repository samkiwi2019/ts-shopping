import { FormControlProps, InputProps } from '@material-ui/core';
import { Modify } from '../../interfaces/page';

type IInputProps = Modify<
    InputProps,
    {
        labelText?: React.ReactNode;
        labelProps?: any;
        id?: string;
        inputProps?: InputProps;
        formControlProps?: FormControlProps | any;
        error?: boolean;
        success?: boolean;
    }
>;

export default IInputProps;
