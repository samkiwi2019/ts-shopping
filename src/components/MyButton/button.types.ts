import { ButtonClassKey, ExtendButtonBaseTypeMap } from '@material-ui/core';
import { OverrideProps } from '@material-ui/core/OverridableComponent';

type ButtonTypeMap<
    P = {},
    D extends React.ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
    props: P & {
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
        muiClasses?: object;
        children?: React.ReactNode;
    };
    defaultComponent: D;
    classKey: ButtonClassKey;
}>;

type IButtonProps<
    D extends React.ElementType = ButtonTypeMap['defaultComponent'],
    P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>;

export default IButtonProps;
