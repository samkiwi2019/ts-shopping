import { ButtonProps } from '@material-ui/core';
import { Modify } from '../../interfaces/page';

type IButtonProps = Modify<
    ButtonProps,
    {
        color?:
            | 'primary'
            | 'info'
            | 'success'
            | 'warning'
            | 'danger'
            | 'rose'
            | 'white'
            | 'transparent';
        size?: 'sm' | 'lg';
        simple?: boolean;
        round?: boolean;
        disabled?: boolean;
        block?: boolean;
        link?: boolean;
        justIcon?: boolean;
        className?: string;
        // use this to pass the classes props from Material-UI
        muiClasses?: any;
        children?: React.ReactNode;
    }
>;

export default IButtonProps;
