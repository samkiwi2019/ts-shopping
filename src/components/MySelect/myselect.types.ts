export interface ISelect {
    title: string;
    items: IItems[];
    handleEmit: Function;
}

export interface IItems {
    key: string;
    val: string | number;
}

type ISelectProps = ISelect;

export default ISelectProps;
